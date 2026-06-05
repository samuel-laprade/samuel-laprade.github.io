/**
 * Example 1.1
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let x;
let y;
let xspeed = -1;
let yspeed = 1;

function setup() {

  createCanvas(640, 360);
  x = width / 2;
  y = height / 2;

}

function draw() {

  background(255);

  // change location by the speed
  x = x + xspeed;
  y = y + yspeed;

  // if we reach an edge, change direction
  if (x > width || x < 0) {
    xspeed *= -1;
  }
  if (y > height || y < 0) {
    yspeed *= -1;
  }

  // draw circle
  stroke(0);
  fill(127);
  circle(x, y, 48);

}