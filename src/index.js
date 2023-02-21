import './template.html';
import './assets/styles/index.scss';

const btns = document.querySelectorAll('.filter__btn');
const filterProducts = document.querySelectorAll('.filter__product');

const onClick = (e) => {
  let targetData = e.currentTarget.dataset.filter;

  filterProducts.forEach((el) => {
    if (targetData === el.dataset.filter) {
      el.classList.add('show');
      el.classList.remove('hide');
    } else if (targetData === 'all') {
      el.classList.add('show');
      el.classList.remove('hide');
    } else {
      el.classList.add('hide');
      el.classList.remove('show');
    }
  });
};

btns.forEach((btn) => {
  btn.addEventListener('click', onClick);
});
