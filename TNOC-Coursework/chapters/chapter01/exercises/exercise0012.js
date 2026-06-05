/**
 * Exercise 1.2
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

// controls
let positionSlider;
let colorSlider;
let colorRSlider;
let colorGSlider;
let colorBSlider;
let position;

function setup() {

  createCanvas(640, 360);
  background(255);
  createControls(630);

  position = createVector();

}

function draw() {

  // decide positions with gaussian distribution
  position.x = randomGaussian(width / 2, positionSlider.value());
  position.y = randomGaussian(height / 2, positionSlider.value());

  // decide color palette
  let adjustR = randomGaussian(colorRSlider.value(), colorSlider.value());
  let adjustG = randomGaussian(colorGSlider.value(), colorSlider.value());
  let adjustB = randomGaussian(colorBSlider.value(), colorSlider.value());

  // plot circles on plane
  noStroke();
  fill(adjustR, adjustG, adjustB, 16);
  circle(position.x, position.y, 16);

}

function createControls(ypos) {
  let xpos = 0;

  psTitle = createP("Paint Splatter Simulation");
  psTitle.position(xpos, ypos - 50);
  psTitle.style("font-size", "14pt");
  psTitle.style("font-weight", "bold");
  xpos += 220;

  clearButton = createButton("Clear");
  clearButton.position(xpos - 10, ypos - 50);
  clearButton.mousePressed(clearButtonClicked);

  xpos = 0;
  positionTitle = createP("Position");
  positionTitle.position(xpos, ypos);
  xpos += 60;

  positionSlider = createSlider(0, 100, 50, 0);
  positionSlider.position(xpos, ypos);
  positionSlider.size(80);
  xpos += 100;

  colorTitle = createP("Color");
  colorTitle.position(xpos, ypos);
  xpos += 40;

  colorSlider = createSlider(0, 100, 10, 0);
  colorSlider.position(xpos, ypos);
  colorSlider.size(80);
  xpos += 100;

  xpos = 0;
  colorRTitle = createP("Red Value");
  colorRTitle.position(xpos, ypos + 30);
  xpos += 70;

  colorRSlider = createSlider(0, 255, 33, 0);
  colorRSlider.position(xpos, ypos + 30);
  colorRSlider.size(80);
  xpos += 100;

  colorGTitle = createP("Green Value");
  colorGTitle.position(xpos, ypos + 30);
  xpos += 85;

  colorGSlider = createSlider(0, 255, 49, 0);
  colorGSlider.position(xpos, ypos + 30);
  colorGSlider.size(80);
  xpos += 100;

  colorBTitle = createP("Blue Value");
  colorBTitle.position(xpos, ypos + 30);
  xpos += 80;

  colorBSlider = createSlider(0, 255, 77, 0);
  colorBSlider.position(xpos, ypos + 30);
  colorBSlider.size(80);
  xpos += 100;
}

function clearButtonClicked() {
  background(255);
}