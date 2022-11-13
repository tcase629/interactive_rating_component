const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const ratings = document.querySelectorAll('.rating');
const btn = document.getElementById('btn');
const rateAmount = document.querySelector('.rateAmount');
let selectedRating;

ratings.forEach((rating) => {
  rating.addEventListener('click', function handleClick() {
    ratings.forEach((rate) => {
      rate.classList.remove('chosenRating');
    });
    rating.classList.add('chosenRating');
    selectedRating = rating
    
    btn.addEventListener('click', function handleClick() {
      card1.style.opacity = 0;
      card2.style.opacity = 1;
      rateAmount.innerText = rating.innerText
    });
  });
});
