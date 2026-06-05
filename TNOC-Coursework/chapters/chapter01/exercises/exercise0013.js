/**
 * Exercise 1.3
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let mapSize;
let ball;

function setup() {

  createCanvas(640, 360, WEBGL);
  mapSize = width / 2;
  ball = new Ball(mapSize);

}

function draw() {

  background(255);
  orbitControl(); // allows for easy camera control
  noFill();
  rotateY(PI / 3);
  rotateX(PI / 1.5);
  box(mapSize);
  ball.update();
  ball.checkEdges();
  ball.show();

}

class Ball {

  constructor(mapSize) {
    this.mapSize = mapSize;
    this.position = createVector(0, 0, 0);
    this.velocity = createVector(1.1, 1, 0.9);
    this.radius = int(mapSize / 20);
  }

  update() {
    this.position.add(this.velocity);
  }
  
  checkEdges() {
    // check to make sure edge of sphere is kept inside box
    if ( // x
      this.position.x > this.mapSize / 2 - this.radius ||
      this.position.x < -this.mapSize / 2 + this.radius
    ) {
      this.velocity.x *= -1;
    }
    if ( // y
      this.position.y > this.mapSize / 2 - this.radius ||
      this.position.y < -this.mapSize / 2 + this.radius
    ) {
      this.velocity.y *= -1;
    }
    if ( // z
      this.position.z > this.mapSize / 2 - this.radius ||
      this.position.z < -this.mapSize / 2 + this.radius
    ) {
      this.velocity.z *= -1;
    }
  }

  show() {
    push();
    translate(this.position.x, this.position.y, this.position.z);
    sphere(this.radius);
    pop();
  }
}