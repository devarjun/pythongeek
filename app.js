let share = document.querySelector('.share');
let social = document.querySelector('.social');

share.addEventListener('click', () => {
  if (social.style.display === 'block') {
    social.style.display = 'none';
  } else {
    social.style.display = 'block';
  }
});
