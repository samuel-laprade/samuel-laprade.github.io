/**
 * Example 1.5
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

function setup() {

  createCanvas(640, 360);

}

function draw() {

  background(255);

  // create and grab vector from center to point
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);

  // get vector magnitude
  let m = mouse.mag();

  // draw vector
  fill(0);
  rect(0, 0, m, 10);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);

}