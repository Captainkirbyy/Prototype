var myVideo = document.getElementById("vid"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
const overlay = document.getElementById('overlay');

function openModalById(modalId) {
  const modal = document.getElementById(modalId);
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

document.querySelectorAll('[data-close-btn]').forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
