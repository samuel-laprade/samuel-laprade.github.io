/**
 * Exercise 0.7
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
    // walker starting location
    this.x = width / 2;
    this.y = height / 2;

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
    // speed variable
    let speed = 2;

    // change step size via perlin noise
    let stepx = map(noise(this.tx), 0, 1, -speed, speed);
    let stepy = map(noise(this.ty), 0, 1, -speed, speed);

    // map noise return to next location on screen
    this.x += stepx;
    this.y += stepy;

    // increment the time
    this.tx += 0.01;
    this.ty += 0.01;
  }

}