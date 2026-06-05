/**
 * Example 1.4
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

function setup() {

  createCanvas(640, 360);

}

function draw() {

  background(255);
  
  // create two vectors from the origin
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);

  // take the difference
  mouse.sub(center);
  
  // calculate the difference from the middle with mult
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(200);
  line(0, 0, mouse.x, mouse.y);
  mouse.mult(0.5);
  
  // draw the new mouse vector with center as origin
  stroke(0);
  strokeWeight(4);
  line(0, 0, mouse.x, mouse.y);

}