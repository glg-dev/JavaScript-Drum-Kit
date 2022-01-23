function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Non concerné si "transform" n'apparaît pas
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`div[data-key="${e.key}"]`);
  if (!audio) return; // Si aucun fichier audio ne correspond, arrête la fonction

  key.classList.add("playing"); // Ajoute .playing à la div correspondant à la touche jouée
  audio.currentTime = 0; // Redémarre l'audio au début
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
