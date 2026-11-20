// Visibilité de la fenêtre et planification sans requestAnimationFrame.
//
// Une iframe dont un ancêtre est en display: none est invisible de deux
// façons : chargée ainsi, sa fenêtre a une largeur ou une hauteur nulle ;
// masquée après son chargement, elle garde sa taille (Chrome) et seul un
// IntersectionObserver voit qu'elle n'est plus affichée. Le navigateur peut y
// suspendre requestAnimationFrame : ce qui attend une image y reste alors en
// suspens jusqu'à son retour.

let intersecting = true;
const visibilityListeners = new Set();

if (typeof IntersectionObserver === "function" && typeof document !== "undefined") {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[entries.length - 1];
    if (!entry || entry.isIntersecting === intersecting) return;
    intersecting = entry.isIntersecting;
    for (const listener of visibilityListeners) listener();
  });
  observer.observe(document.documentElement);
}

export const isWindowHidden = () =>
  document.visibilityState === "hidden" ||
  window.innerWidth === 0 ||
  window.innerHeight === 0 ||
  !intersecting;

// Garde des dessins du canevas (__doccellsSetDrawGate, mode intégré) :
// FortuneSheet ne dessine pas fenêtre masquée, et le dessin manqué est fait
// au retour par le planificateur ci-dessous.
let drawSkippedWhileHidden = false;
export const drawGate = () => {
  if (!isWindowHidden()) return true;
  drawSkippedWhileHidden = true;
  return false;
};

// Prochaine tâche (MessageChannel), qui s'exécute aussi fenêtre masquée.
export const nextTask = (callback) => {
  const channel = new MessageChannel();
  channel.port1.onmessage = () => {
    channel.port1.close();
    callback();
  };
  channel.port2.postMessage(null);
};

// Prochaine image si la fenêtre est visible, sinon prochaine tâche.
export const afterFrameOrTask = (callback) => {
  if (isWindowHidden()) nextTask(callback);
  else requestAnimationFrame(() => callback());
};

/**
 * Dessin du canevas regroupé : au plus un par image, aucun tant que la
 * fenêtre est masquée, un seul à son retour.
 *
 * Au retour par redimensionnement (iframe chargée masquée puis affichée),
 * FortuneSheet ajuste son canevas et le redessine lui-même : le dessin en
 * attente est alors abandonné. Sinon, il est fait à l'image suivante.
 */
export const createRedrawScheduler = (redraw) => {
  let pending = false;
  let frame = 0;

  const drawAtNextFrame = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (isWindowHidden()) return;
      pending = false;
      redraw();
    });
  };

  const request = () => {
    pending = true;
    if (!isWindowHidden()) drawAtNextFrame();
  };

  let wasHidden = isWindowHidden();
  const onResize = () => {
    const hidden = isWindowHidden();
    if (wasHidden && !hidden) {
      // Image demandée avant le masquage : elle ne s'exécuterait qu'au retour.
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      pending = false;
      drawSkippedWhileHidden = false;
    }
    wasHidden = hidden;
  };
  // Retour sans redimensionnement (onglet du navigateur, iframe réaffichée
  // sans changer de taille, iframe revenue dans la zone visible) : FortuneSheet
  // ne redessine pas, le dessin en attente est fait à l'image suivante.
  const onVisibilityChange = () => {
    wasHidden = isWindowHidden();
    if (wasHidden) return;
    if (drawSkippedWhileHidden) {
      drawSkippedWhileHidden = false;
      pending = true;
    }
    if (pending) drawAtNextFrame();
  };
  window.addEventListener("resize", onResize);
  document.addEventListener("visibilitychange", onVisibilityChange);
  visibilityListeners.add(onVisibilityChange);

  return {
    request,
    dispose() {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      visibilityListeners.delete(onVisibilityChange);
    },
  };
};
