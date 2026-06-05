/**
 * Example 0.4
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

function setup() {

  createCanvas(640, 360);
  background(255);

}

function draw() {

  // decide position with gaussian distribution
  let x = randomGaussian(320, 80);

  // plot circles on line
  noStroke();
  fill(0, 5);
  circle(x, (height / 2), 16);

}