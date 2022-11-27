const dice = document.querySelector(".card__dice");
const adviceText = document.querySelector(".card__para");
const adviceNumber = document.querySelector(".card__number");
const diceImg = document.querySelector(".card__dice--svg");

const rollAdvice = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceText.textContent = data.slip.advice;
      adviceNumber.textContent = "#" + data.slip.id;
    });
};

rollAdvice();

dice.addEventListener("click", rollAdvice);

dice.addEventListener("click", function () {
  diceImg.classList.add("animate");
  setTimeout(() => {
    diceImg.classList.remove("animate");
  }, 1000);
});
