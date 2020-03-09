// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  
}

function draw() {
  background(0);
  fill(255);
  text('Player 1 Score: ' + scoreL, 20, 30)
  text('Player 2 Score: ' + scoreR,width-140,30)
  noFill();
  // draw left player
  fill(255);
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
  noStroke();
  ellipse(ballX, ballY, ballSize)
  
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < ballSize/2) {
    ballY = ballSize/2;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height - ballSize/2) {
    ballY = height - ballSize/2;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // bounce off right player
  if (ballX > width - playerWidth - ballSize/2 && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth - ballSize/2
    ballXSpeed = -ballXSpeed
  }
  
  // bounce off left player
    if (ballX < playerWidth + ballSize/2 && ballY >= playerL && ballY <= playerL + playerHeight) {
    ballX = playerWidth + ballSize/2
    ballXSpeed = -ballXSpeed
  }
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
  }
  // playerR scores!
  if (ballX < 0) {
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed 
  }
  
}
