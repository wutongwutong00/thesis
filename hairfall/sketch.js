let fallingLetters = [];
let accumulatedLetters = [];
let letterSize = 12; // Set the letter size
let accumulationY = 800; // Adjust this value to control the accumulation position

function setup() {
  createCanvas(200, 800);
  textSize(letterSize);
}

function draw() {
  background(0);
  fill(255);
  
  for (let i = 0; i < fallingLetters.length; i++) {
    let letter = fallingLetters[i].letter;
    let x = fallingLetters[i].x;
    let y = fallingLetters[i].y;
    
    text(letter, x, y);
    
    // Update the falling letter's position
    fallingLetters[i].y += random(1, 3);
    
    // If the falling letter is at or below the accumulation position, move it to accumulatedLetters
    if (y >= accumulationY) {
      accumulatedLetters.push(fallingLetters.splice(i, 1)[0]);
    }
  }
  
  // Display accumulated letters at the accumulation position
  for (let i = 0; i < accumulatedLetters.length; i++) {
    let letter = accumulatedLetters[i].letter;
    let x = accumulatedLetters[i].x;
    
    text(letter, x, accumulationY);
  }
}

function mousePressed() {
  // When the mouse is pressed, add a new falling letter to the array
  let x = mouseX;
  let letter = "hair";
  fallingLetters.push({ x, y: 0, letter });
}

function randomLetter() {
  // Implement your logic to generate a random letter here
  let letters = "hair";
  return random(letters);
}
