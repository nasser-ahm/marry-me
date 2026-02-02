let btnlove = document.querySelector('.btn');
let main = document.querySelector('.main');
let proposal = document.querySelector('.proposal');

if (btnlove) {
  btnlove.addEventListener('click', () => {
    // hide button
    btnlove.style.display = 'none';

    // fade out main content
    main.classList.add('hide');

    // show proposal after fade
    setTimeout(() => {
      proposal.classList.add('show');
    }, 600);
  });
}


