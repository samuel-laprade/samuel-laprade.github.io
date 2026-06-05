/**
 * Example 0.5
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

  // get counts of accept/reject
  let index = int(acceptreject() * total);
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

function acceptreject() {

  while (true) {

    // set r's
    let r1 = random();
    let p = r1;
    let r2 = random();

    // y = x
    if (r2 < p) {
      return r1;
    }

  }

}