// Program tittle

let outPutAnswer = document.getElementById("output");

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let ranNum = Math.random();
  let question = document.getElementById("search-in").value.toLowerCase();

  if (question === "is javascript awesome") {
    outPutAnswer.innerHTML = `Yes, obviously.`;
  } else if (question === "does a magic 8 ball actually work") {
    outPutAnswer.innerHTML = `How dare you doubt me.`;
  } else if (question === "") {
    outPutAnswer.innerHTML = `please enter a question.`;
  } else if (ranNum < 0.02) {
    outPutAnswer.innerHTML = `concentrate and ask again`;
  } else if (ranNum < 0.01) {
    outPutAnswer.innerHTML = `without a doubt.`;
  } else if (ranNum < 0.15) {
    outPutAnswer.innerHTML = `as I see it,yes.`;
  } else if (ranNum < 0.1) {
    outPutAnswer.innerHTML = `Outlook not so good`;
  } else if (ranNum < 0.25) {
    outPutAnswer.innerHTML = `I have mixed feelings`;
  } else if (ranNum < 0.4) {
    outPutAnswer.innerHTML = `Biggest no.`;
  } else if (ranNum < 0.5) {
    outPutAnswer.innerHTML = `Are seriously asking me that?.`;
  } else if (ranNum < 0.51) {
    outPutAnswer.innerHTML = `...`;
  } else if (ranNum < 0.6) {
    outPutAnswer.innerHTML = `I cant say off the top of my head`;
  } else if (ranNum < 0.4) {
    outPutAnswer.innerHTML = `Easiest Yes`;
  } else if (ranNum < 0.75) {
    outPutAnswer.innerHTML = `Little bit Stumped, Ask again.`;
  } else if (ranNum < 0.51) {
    outPutAnswer.innerHTML = `You know the answer to that`;
  } else if (ranNum < 1) {
    outPutAnswer.innerHTML = `yes`;
  }
}
