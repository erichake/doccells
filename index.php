<?php
/**
 * Point d'entrée PHP de DocCells (source canonique).
 *
 * Ce fichier est copié tel quel dans doctools_MAIN/public/apps/doccells/
 * lors de `npm run build:doctools` (voir vite.config.js) — ne pas éditer
 * la copie là-bas directement, elle est écrasée à chaque build.
 *
 * - Sans paramètre `gsheet_export` : sert le shell SPA, comme index.html.
 * - Avec `gsheet_export=<id>` : relaie côté serveur l'export .xlsx d'un
 *   Google Sheet public. Le fetch() du navigateur (App.jsx) échouerait en
 *   direct sur docs.google.com (pas d'en-tête CORS, page HTML et non xlsx).
 *
 * Sécurité : l'identifiant du classeur est le seul élément fourni par le
 * client. Il est validé par liste blanche de caractères avant d'être inséré
 * dans une URL entièrement construite côté serveur, et la requête sortante
 * est restreinte à HTTPS sur *.google.com / *.googleusercontent.com pour
 * écarter tout usage du relais comme porte SSRF vers le réseau interne ou
 * d'autres domaines.
 */

if (isset($_GET['gsheet_export'])) {
    $sheetId = (string) $_GET['gsheet_export'];

    if (!preg_match('/^[a-zA-Z0-9_-]{10,100}$/', $sheetId)) {
        http_response_code(400);
        header('Content-Type: text/plain; charset=utf-8');
        echo 'Identifiant de classeur invalide.';
        exit;
    }

    $exportUrl = 'https://docs.google.com/spreadsheets/d/' . $sheetId . '/export?format=xlsx';

    $maxBytes = 25 * 1024 * 1024; // 25 Mo
    $body = '';

    $ch = curl_init($exportUrl);
    curl_setopt_array($ch, [
        CURLOPT_FOLLOWLOCATION  => true,
        CURLOPT_MAXREDIRS       => 5,
        CURLOPT_CONNECTTIMEOUT  => 10,
        CURLOPT_TIMEOUT         => 20,
        // N'autorise HTTPS ni pour la requête initiale ni après redirection
        // (empêche un renvoi vers file://, http:// en clair, etc.).
        CURLOPT_PROTOCOLS       => CURLPROTO_HTTPS,
        CURLOPT_REDIR_PROTOCOLS => CURLPROTO_HTTPS,
        CURLOPT_USERAGENT       => 'DocCells-GoogleSheetsProxy/1.0',
        CURLOPT_WRITEFUNCTION   => function ($curlHandle, $chunk) use (&$body, $maxBytes) {
            $body .= $chunk;
            if (strlen($body) > $maxBytes) {
                return 0; // abandonne : dépassement de la taille maximale autorisée
            }
            return strlen($chunk);
        },
    ]);

    $success = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $effectiveHost = parse_url((string) curl_getinfo($ch, CURLINFO_EFFECTIVE_URL), PHP_URL_HOST);
    $curlError = curl_error($ch);
    curl_close($ch);

    // L'export peut être servi directement par docs.google.com, ou via une
    // redirection vers un domaine de contenu googleusercontent.com.
    $isGoogleHost = $effectiveHost !== null
        && preg_match('/(^|\.)google(usercontent)?\.com$/i', $effectiveHost) === 1;

    // Un .xlsx est une archive ZIP : elle commence toujours par "PK".
    $looksLikeXlsx = substr($body, 0, 2) === 'PK';

    if (!$success || $curlError || $httpCode !== 200 || !$isGoogleHost || !$looksLikeXlsx) {
        http_response_code(502);
        header('Content-Type: text/plain; charset=utf-8');
        echo "Impossible de récupérer ce classeur Google Sheets.\n"
            . "Vérifiez qu'il est partagé avec l'option "
            . "« Tous les utilisateurs disposant du lien peuvent consulter ».";
        exit;
    }

    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Length: ' . strlen($body));
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    echo $body;
    exit;
}

header('Content-Type: text/html; charset=utf-8');
readfile(__DIR__ . '/index.html');
