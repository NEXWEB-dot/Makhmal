document.addEventListener('DOMContentLoaded', () => {
  const regionModal = document.getElementById('region-modal');
  const closeModalBtn = document.getElementById('close-modal');
  
  if (regionModal && closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      regionModal.style.display = 'none';
    });

    // Also close on clicking buttons
    const buttons = regionModal.querySelectorAll('button:not(#close-modal)');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        regionModal.style.display = 'none';
      });
    });
  }
});
