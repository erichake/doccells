#!/bin/bash

cd "$(dirname "$0")/.."

if lsof -nP -iTCP:8010 -sTCP:LISTEN | grep -q php; then
  echo "Serveur PHP déjà en cours sur le port 8010."
else
  echo "Lancement du serveur PHP sur le port 8010..."
  php -S localhost:8010 &
  PHP_PID=$!
fi

cleanup() {
  if [[ $PHP_PID ]]; then
    kill "$PHP_PID"
  fi
}

trap cleanup EXIT INT TERM

npm run dev:vite
