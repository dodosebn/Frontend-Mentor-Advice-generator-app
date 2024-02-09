
const btn = document.querySelector(".dice-hold");
const theNum = document.getElementById("adNum");
const blockQuote = document.getElementById("quote");

const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json();
    theNum.innerHTML = `Advice #${data.slip.id}`
    blockQuote.innerHTML = `"${data.slip.advice}"`
  }
  btn.addEventListener("click", (event) => {
event.preventDefault();
fetchAdvice();
  });

  fetchAdvice();
