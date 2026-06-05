/**
 * Example 1.2
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let position;
let velocity;

function setup() {

  createCanvas(640, 360);
  position = createVector(width / 2, height / 2);
  velocity = createVector(1, 1);

}

function draw() {

  background(255);

  // change position by the velocity
  position.add(velocity);

  // if we reach an edge, change direction
  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  // draw circle
  stroke(0);
  fill(127);
  circle(position.x, position.y, 48);

}