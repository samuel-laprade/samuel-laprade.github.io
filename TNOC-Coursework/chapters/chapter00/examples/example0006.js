/**
 * Example 0.6
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
    // initialize perlin noise starting points
    this.tx = 0;
    this.ty = 10000;
  }

  show() {
    // draw walker's location as a point
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    // map noise return to next location on screen
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);

    // increment the time
    this.tx += 0.005;
    this.ty += 0.005;
  }

}