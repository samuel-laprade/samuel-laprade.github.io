/**
 * Exercise 0.9
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let noiseOffSlider;     // offset of noise
let noiseOctSlider;     // octaves for noise
let noiseFallSlider;    // falloff of noise

let colorRSlider;       // red color adjustment
let colorGSlider;       // green color adjustment
let colorBSlider;       // blue color adjustment

let zoff = 20000.0;

function setup() {

  createCanvas(640, 360);
  background(255);
  createControls(630);
  pixelDensity(1);

}

function draw() {
  loadPixels();

  noiseDetail(noiseOctSlider.value(), noiseFallSlider.value());

  let xoff = 0.0;

  for (let x = 0; x < width; x++) {
    
    let yoff = 10000.0;

    for (let y = 0; y < height; y++) {
      
      let bright = map(noise(xoff, yoff, zoff), 0, 1, 0, 255);
      let index = (x + (y * width)) * 4;

      pixels[index] = colorRSlider.value();
      pixels[index + 1] = colorGSlider.value();
      pixels[index + 2] = colorBSlider.value();
      pixels[index + 3] = bright;

      yoff += noiseOffSlider.value(); // increment time in y

    }

    xoff += noiseOffSlider.value(); // increment time in x

  }

  zoff += noiseOffSlider.value() * 2; // increment time in z

  updatePixels();
}

function createControls(ypos) {
  let xpos = 0;

  psTitle = createP("Cloud Simulator");
  psTitle.position(xpos, ypos - 50);
  psTitle.style("font-size", "14pt");
  psTitle.style("font-weight", "bold");

  xpos = 0;
  noiseOffTitle = createP("Offset");
  noiseOffTitle.position(xpos, ypos);
  xpos += 50;

  noiseOffSlider = createSlider(0.01, 0.10, 0.01, 0.01);
  noiseOffSlider.position(xpos, ypos);
  noiseOffSlider.size(80);
  xpos += 100;

  noiseOctTitle = createP("Octave");
  noiseOctTitle.position(xpos, ypos);
  xpos += 50;

  noiseOctSlider = createSlider(1, 10, 4, 1);
  noiseOctSlider.position(xpos, ypos);
  noiseOctSlider.size(80);
  xpos += 100;

  noiseFallTitle = createP("Falloff");
  noiseFallTitle.position(xpos, ypos);
  xpos += 50;

  noiseFallSlider = createSlider(0.01, 1, 0.5, 0.01);
  noiseFallSlider.position(xpos, ypos);
  noiseFallSlider.size(80);
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