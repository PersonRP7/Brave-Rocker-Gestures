let rightDown = false;
let leftDown = false;
let suppressContextMenu = false;

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
    suppressContextMenu = true;
    e.preventDefault();
  }

  // Rocker gesture: Left then Right = Forward
  if (leftDown && e.button === 2) {
    history.forward();
    suppressContextMenu = true;
    e.preventDefault();
  }
});

document.addEventListener("mouseup", (e) => {
  if (e.button === 2) rightDown = false;
  if (e.button === 0) leftDown = false;
});

// Suppress context menu if triggered by rocker gesture
document.addEventListener("contextmenu", (e) => {
  if (suppressContextMenu) {
    e.preventDefault();
    suppressContextMenu = false; // reset
  }
});