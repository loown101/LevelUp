const element = document.getElementById('phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const mask = IMask(element, maskOptions);

const buttons = document.querySelectorAll('.btn_scroll');
const form = document.querySelector('.order__button');

buttons.forEach((btn) => {
  btn.addEventListener('click', e => {
    form.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  });
}) 