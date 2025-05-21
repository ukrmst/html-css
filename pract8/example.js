// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
  if (isNaN(number)) {
    return "not a valid number";
  }
  return number % 2 === 0 ? "Even" : "Odd";
}

function triggerCheck() {
  const number = prompt("Enter a number to check if it's Even or Odd:");
  if (number !== null) {
    const result = checkEvenOrOdd(Number(number));
    alert(`You entered: ${number}. The number is ${result}.`);

    // Display the result on the webpage
    const outputElement = document.getElementById('result');
    if (outputElement) {
      outputElement.textContent = `You entered: ${number}. The number is ${result}.`;
    }
  }
}