// Pin Generate Function
function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
// Display Generated Pin
function generatePin() {
  const displayOne = document.getElementById("display-one");
  displayOne.value = getPin();
}

const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener("click", function (event) {
  console.log(event.target.innerText);
  const digit = event.target.innerText;

  if (isNaN(digit)) {
    // If its not a number

    if (digit === "C") {
      const typedInput = document.getElementById("typed-pin");
      typedInput.value = "";
    }
  } else {
    const typedInput = document.getElementById("typed-pin");
    typedInput.value = typedInput.value + digit;
  }
});
// VerifyPin
const submitBtn = document
  .getElementById("submit-btn")
  .addEventListener("click", function () {
    const generatedPin = document.getElementById("display-one").value;
    const typedPin = document.getElementById("typed-pin").value;
    const tryCount = document.getElementById("try-count");
    if (tryCount.innerText > 0) {
      tryCount.innerText = tryCount.innerText - 1;
    }
    if (generatedPin === typedPin) {
      pinMatchStatus("block", "none");
    } else {
      pinMatchStatus("none", "block");
    }
  });

function pinMatchStatus(success, unsuccess) {
  document.getElementById("correct").style.display = success;
  document.getElementById("incorrect").style.display = unsuccess;
}
