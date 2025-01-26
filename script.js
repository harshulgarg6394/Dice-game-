const arr = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

// Function to generate a random dice image
function res() {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to determine the winner
function winner(a, b) {
  if (arr.indexOf(a) > arr.indexOf(b)) {
    return ["Player 1", "wins"];
  } else if (arr.indexOf(a) < arr.indexOf(b)) {
    return ["Player 2", "wins"];
  } else {
    return ["Draw"];
  }
}

// Function to roll the dice and display the winner automatically when the page loads
window.onload = function() {
  const a = res();  // Player 1's dice
  const b = res();  // Player 2's dice

  const diceImage = document.querySelector('.img1');
  const diceImage1 = document.querySelector('.img2');

  // Display the dice images
  diceImage.src = a;
  diceImage1.src = b;

  // Get the result of the winner function and display it
  const result = winner(a, b).join(" ");
  document.getElementById('result').innerText = result;  // Display the winner
};
