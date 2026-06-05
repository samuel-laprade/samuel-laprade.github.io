/**
 * Exercise 1.1
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let walker;

function setup() {

  createCanvas(640, 360);
  walker = new Walker();
  background(255);

}

function draw() {

  walker.step();
  walker.show();

}

class Walker {

  constructor() {
    // start walker in the center of the screen
    this.position = createVector(width / 2, height / 2);
  }

  show() {
    // draw walker's location as a point
    stroke(0);
    point(this.position.x, this.position.y);
  }

  step() {
    // choose between moving in one of four directions
    const choice = floor(random(4));
    if (choice == 0) {
      this.position.add(1, 0)
    } else if (choice == 1) {
      this.position.add(-1, 0);
    } else if (choice == 2) {
      this.position.add(0, 1);
    } else {
      this.position.add(0, -1);
    }
  }

}
