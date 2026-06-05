/**
 * Example 1.3
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
  
  // draw the two vectors
  stroke(200);
  strokeWeight(4);
  line(0, 0, mouse.x, mouse.y);
  line(0, 0, center.x, center.y);
  
  // subract the center vector from the mouse vector
  mouse.sub(center);
  
  // draw the new mouse vector with center as origin
  stroke(0);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);

}