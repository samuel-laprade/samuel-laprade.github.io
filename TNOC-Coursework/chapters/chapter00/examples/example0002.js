/**
 * Example 0.2
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let randomCounts = [];
let total = 100;

function setup() {

  createCanvas(640, 360);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
  background(255);

}

function draw() {

  // get random counts
  const index = floor(random(total));
  randomCounts[index]++;

  // graph random counts as rectangles
  stroke(0);
  strokeWeight(2);
  fill(127);
  const w = width / randomCounts.length;
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }

}