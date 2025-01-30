document.querySelectorAll('.progress-circle').forEach((circle) => {
  const progress = circle.getAttribute('data-progress');
  circle.style.setProperty('--progress', progress);
});

document.querySelectorAll('.progress-bar').forEach((bar) => {
  const progress = bar.getAttribute('data-progress');
  bar.style.setProperty('--progress', progress);
});
