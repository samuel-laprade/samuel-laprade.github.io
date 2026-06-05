/**
 * Example 1.6
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

function setup() {

  createCanvas(640, 360);

}

function draw() {

  background(255);

  // create vector from center to point
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);

  // draw line from center to mouse
  translate(width / 2, height / 2);
  stroke(200);
  line(0, 0, mouse.x, mouse.y);

  // normalize and mult the vector
  mouse.normalize();
  mouse.mult(50);

  // draw new vector
  stroke(0);
  strokeWeight(8);
  line(0, 0, mouse.x, mouse.y);
  
}