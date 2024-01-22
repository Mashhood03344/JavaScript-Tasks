class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    // why chosen this initial speed for x and y-axis Math.random() * 4-2
    // Moderate Speed: A range of -2 to 2 allows for moderate initial speeds. If the range was too large, the balls might move too fast initially, and if it was too small,
    // the animation might appear slow.

    // Versatility: A range centered around 0 (-2 to 2) provides versatility in terms of direction. Balls can start moving in any direction, and the animation will have a
    // more dynamic and unpredictable appearance.

    // Common Practice: In physics-based simulations or games, its common to use a range that is symmetric around zero to introduce randomness while avoiding biases
    // in any particular direction.

    this.velocityX = Math.random() * 4 - 2;
    this.velocityY = Math.random() * 4 - 2;
  }

  // code for creating the ball
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  update(canvas) {
    // Updating the ball's position
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Bouncing off the balls upon collision
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.velocityX = -this.velocityX;
      this.changeColor();
    }

    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.velocityY = -this.velocityY;
      this.changeColor();
    }
  }

  changeColor() {
    // Changing the ball's color randomly
    this.color = getRandomColor();
  }
}

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];

canvas.addEventListener("click", handleCanvasClick);

function handleCanvasClick(event) {
  const newBall = new Ball(event.clientX, event.clientY, 20, getRandomColor());
  balls.push(newBall);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function animate() {
  // Clearing the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Updating the canvas and drawing all balls
  for (const ball of balls) {
    ball.update(canvas);
    ball.draw(context);
  }

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Animate function called to start the animation loop
animate();
