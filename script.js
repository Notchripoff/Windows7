// Get the window elements
const windows = document.querySelectorAll('.window');

// Add event listeners for window management
windows.forEach((window) => {
  window.addEventListener('click', () => {
    // Bring the window to the front
    window.style.zIndex = 1;
  });

  window.addEventListener('dblclick', () => {
    // Maximize the window
    window.style.width = '100%';
    window.style.height = '100%';
  });
});
