/**
 * Exercise 0.6
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
    // decide step size with accept/reject
    let step = 8;
    let xstep = acceptreject() * step;
    let ystep = acceptreject() * step;

    // randomize direction (negative coverage)
    if (random([true, false])) {
      xstep *= -1;
    }
    if (random([true, false])) {
      ystep *= -1;
    }

    // move walker
    this.x += xstep;
    this.y += ystep;
  }

}

function acceptreject() {

  while (true) {

    // set r's
    let r1 = random();
    let p = r1;
    let r2 = random();

    // y = x^2
    if (r2 < p * p) {
      return r1;
    }

  }

}
