const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  switch (e.keyCode) {
    case 119:
      if (limitsBall.top > limitsStage.top) y--;
      break;
    case 100:
      if (limitsBall.right < limitsStage.right) x++;
      break;
    case 115:
      if (limitsBall.bottom < limitsStage.bottom) y++;
      break;
    case 97:
      if (limitsBall.left > limitsStage.left) x--;
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 5}px,${y * 5}px)`;
}
export function shortcuts(e) {}
