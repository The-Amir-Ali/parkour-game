const ballElement = document.querySelector('.ball');
const parts = document.querySelectorAll('.part');
let parts_DB = [];
const ballState = {
  x: ballElement.getBoundingClientRect().left,
  y: ballElement.getBoundingClientRect().top,
  vy: 0,
  isMovingForward: false,
  isMovingBackward: false,
  isJumping: false,
  isOnGround: true,
  width: ballElement.offsetWidth,
  height: ballElement.offsetHeight,
};

parts.forEach((part) => {
  let partRect = part.getBoundingClientRect();
  let left = partRect.left;
  let right = partRect.right;
  let top = partRect.top;
  let bottom = partRect.bottom;
  let width = partRect.width;
  let height = partRect.height;
  parts_DB.push({
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    width: width,
    height: height,
  });
});

document.addEventListener('keydown', (e) => {
  if (
    (e.key === ' ' || e.key === 'ArrowUp') &&
    ballState.isOnGround &&
    !ballState.isJumping
  ) {
    if (e.repeat) return;
    ballState.isJumping = true;
    ballState.isOnGround = false;
    ballState.vy = -25;
  } else if (e.key === 'd' || e.key === 'ArrowRight') {
    ballState.isMovingForward = true;
  } else if (e.key === 'a' || e.key === 'ArrowLeft') {
    ballState.isMovingBackward = true;
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'd' || e.key === 'ArrowRight') {
    ballState.isMovingForward = false;
  } else if (e.key === 'a' || e.key === 'ArrowLeft') {
    ballState.isMovingBackward = false;
  }
});

function moveLoop() {
  ballState.isOnGround = false;
  let oldY = ballState.y;
  let oldX = ballState.x;
  if (!ballState.isOnGround) {
    ballState.vy += 0.8;
    ballState.y += ballState.vy;
    if (ballState.y >= document.body.offsetHeight - ballState.height) {
      ballState.y = document.body.offsetHeight - ballState.height;
      ballState.vy = 0;
      ballState.isOnGround = true;
      ballState.isJumping = false;
    }
  }
  if (ballState.isMovingForward) {
    ballState.x += 3;
  }
  if (ballState.isMovingBackward) {
    ballState.x -= 3;
  }
  parts_DB.forEach((part) => {
    if (
      ballState.x + ballState.width > part.left &&
      ballState.x < part.left + part.width &&
      ballState.y + ballState.height > part.top &&
      ballState.y < part.top + part.height
    ) {
      if (
        oldX + ballState.width <= part.left &&
        ballState.x + ballState.width > part.left
      ) {
        ballState.x = part.left - ballState.width;
      } else if (
        ballState.x < part.left + part.width &&
        oldX >= part.left + part.width
      ) {
        ballState.x = part.right;
      }

      if (
        ballState.vy > 0 &&
        oldY + ballState.height <= part.top &&
        ballState.y + ballState.height > part.top &&
        ballState.x + ballState.width > part.left &&
        ballState.x < part.right
      ) {
        ballState.y = part.top - ballState.height;
        ballState.vy = 0;
        ballState.isOnGround = true;
        ballState.isJumping = false;
      } else if (
        ballState.vy < 0 &&
        oldY >= part.bottom &&
        ballState.y < part.bottom &&
        ballState.x + ballState.width > part.left &&
        ballState.x < part.right
      ) {
        ballState.y = part.bottom;
      }
    }
  });
  ballState.x = Math.max(
    0,
    Math.min(ballState.x, document.body.offsetWidth - ballState.width),
  );
  ballElement.style.left = ballState.x + 'px';
  ballElement.style.top = ballState.y + 'px';

  requestAnimationFrame(() => {
    moveLoop();
  });
}
moveLoop();
