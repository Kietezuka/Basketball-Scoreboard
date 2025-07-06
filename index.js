let scoreHomeEl = document.getElementById("score1");
let scoreGuestEl = document.getElementById("score2");

let score1 = 0;
let score2 = 0;

function homeAdd1() {
  score1 += 1;
  scoreHomeEl.textContent = score1;
}

function homeAdd2() {
  score1 += 2;
  scoreHomeEl.textContent = score1;
}

function homeAdd3() {
  score1 += 3;
  scoreHomeEl.textContent = score1;
}

function guestAdd1() {
  score2 += 1;
  scoreGuestEl.textContent = score2;
}

function guestAdd2() {
  score2 += 2;
  scoreGuestEl.textContent = score2;
}

function guestAdd3() {
  score2 += 3;
  scoreGuestEl.textContent = score2;
}
