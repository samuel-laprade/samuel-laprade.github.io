/**
 * Example 1.8
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {

  background(255);
  mover.update();
  mover.checkEdges();
  mover.show();

}

class Mover {
  constructor() {
    // create vectors
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(-0.001, 0.01);
    this.topSpeed = 10;
  }

  update() {
    // using acceleration
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    // when we reach an edge, wrap around
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}