const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const share = document.getElementsByClassName('share-button');

share.addEventListener('click', () => {
  modal.classList.toggle('show');

  if (modal.classList.contains('show')) {
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.toggle('show');

    if (!modal.classList.contains('show')) {
      body.style.overflow = 'auto';
    }
  }
});