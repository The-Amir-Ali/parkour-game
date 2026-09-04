// ──────────── ball color randomization logics ────────────
const ball = document.querySelector('.ball');
const hexColorPattern = '0123456789ABCDEF';
let ballColor = '#';

function randomColorGenerator() {
  ballColor = '#';

  for (let i = 0; i < 6; i++) {
    let random = Math.max(
      Math.floor(Math.random() * hexColorPattern.length - 1),
      0,
    );

    ballColor += hexColorPattern[random];
  }

  ball.style.backgroundColor = ballColor;
}

ball.addEventListener('click', () => {
  randomColorGenerator();
});

randomColorGenerator();

// ──────────── moving pupil logics ────────────
const eyes = document.querySelectorAll('.eye');

document.addEventListener('mousemove', (e) => {
  eyes.forEach((eye) => {
    let pupil = eye.children[0];
    let eyeRect = eye.getBoundingClientRect();
    let pupilRect = pupil.getBoundingClientRect();
    let maxMove = eyeRect.width / 2 - pupilRect.width / 2;
    let dx = e.clientX - (eyeRect.left + eyeRect.width / 2);
    let dy = e.clientY - (eyeRect.top + eyeRect.height / 2);
    let mouseDist = Math.sqrt(dx * dx + dy * dy);

    if (mouseDist > maxMove) {
      dx = (dx / mouseDist) * maxMove;
      dy = (dy / mouseDist) * maxMove;
    }

    setTimeout(() => {
      pupil.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    }, 100);
  });
});
