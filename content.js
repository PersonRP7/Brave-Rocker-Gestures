let rightDown = false;
let leftDown = false;

document.addEventListener("mousedown", (e) => {
  if (e.button === 2) { // right button
    rightDown = true;
    setTimeout(() => (rightDown = false), 250); // expire quickly
  }
  if (e.button === 0) { // left button
    leftDown = true;
    setTimeout(() => (leftDown = false), 250);
  }

  // Rocker gesture: Right then Left = Back
  if (rightDown && e.button === 0) {
    history.back();
    e.preventDefault();
  }

  // Rocker gesture: Left then Right = Forward
  if (leftDown && e.button === 2) {
    history.forward();
    e.preventDefault();
  }
});

document.addEventListener("mouseup", (e) => {
  if (e.button === 2) rightDown = false;
  if (e.button === 0) leftDown = false;
});
