/**
 * Exercise 0.3
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
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    // draw walker's location as a point
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    // choose between moving in one of four directions
    // with a chance walker will move toward the mouse
    let r = random(1)
    if (r < 0.2) {
      if (mouseX - this.x > 0) {
        this.x++;
      } else {
        this.x--;
      }
      if (mouseY - this.y > 0) {
        this.y++;
      } else {
        this.y--;
      }
    } else if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }

}
