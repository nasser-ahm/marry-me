let btnyes = document.querySelector('.yes');



btnyes.addEventListener('click', () => {
  window.location.href = "love.html";
});

let btnNo = document.querySelector('.no');


btnNo.addEventListener('click', () => {
  btnNo.style.display = 'none';
})