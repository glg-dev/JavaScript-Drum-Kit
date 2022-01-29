function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Non concerné si "transform" n'apparaît pas
  e.target.classList.remove("playing");
}

function letsPlay(touch, music) {
  touch.classList.add("playing") // Ajoute .playing à la div correspondant à la touche jouée
  music.currentTime = 0; // Redémarre l'audio au début
  music.play()
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`div[data-key="${e.key}"]`);
  if (!audio) return; // Si aucun fichier audio ne correspond, arrête la fonction

  letsPlay(key, audio)
}

const keys = Array.from(document.querySelectorAll(".key"));
const sounds = Array.from(document.querySelectorAll("audio"))
keys.forEach(item => {
  item.addEventListener("click", () => {
    sounds.forEach(sound => {
      if (sound.dataset.key === item.dataset.key) {
        letsPlay(item, sound)
      }
    });
  })
  item.addEventListener("transitionend", removeTransition)
});

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
