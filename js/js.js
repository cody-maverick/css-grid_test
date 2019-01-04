
document.querySelector('.menu-toggler').addEventListener('click', () => {
  document.querySelector('.nav').classList.add('active');
})

document.querySelector('.nav-close').addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('active');
})