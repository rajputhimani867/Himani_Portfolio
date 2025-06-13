// JavaScript for tab functionality in the About section
function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-links');

    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    tabLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    document.getElementById(tabName).style.display = 'block';
    document.querySelector(`.tab-links[data-tab="${tabName}"]`).classList.add('active-link');
}

document.addEventListener('DOMContentLoaded', () => {
    openTab('skills');
});
// // ----------------------------------about active tag---------------
// ---------------------modal js---------------------
    function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
  }

  window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });


  // ---------------------modal js end---------------------
    function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  window.onclick = function(e) {
    document.querySelectorAll(".projectModal").forEach(projectModal => {
      if (e.target === projectModal) projectModal.style.display = "none";
    });
  };

