/**
 * Exercise 0.10
 * Author: Samuel LaPrade
 * The Nature of Code
 * Lesson Plans by Daniel Shiffman
 */

let grid;
let chgSpdZ = 0.0;

function setup() {

  createCanvas(640, 360, WEBGL);
  grid = new Grid3D(20, 25, 25, 100);

}

function draw() {

  // do all height updates
  grid.calculate();
  
  // redraw the background
  background(255);
  push();
 
  // change visuals and render the grid
  translate(0, 0, -500); // zoom out
  rotateX(PI / 3); // pivot camera up around grid
  rotateZ(chgSpdZ); // rotate camera ccw
  grid.render(); // render all squares
  pop();

  chgSpdZ += 0.001; // update rotation

}


function generateGrid(cols, rows) {

  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;

}

class Grid3D {

  constructor(scl, w, h, r) {
    // user inputted
    this.scl = scl;  // pixel size of cell
    this.cols = w; // number of cells wide
    this.rows = h; // number of cells long
    this.r = r; // min/max pixel height (-r and r)
    // class calculated
    this.w = w * scl; // pixel width of grid
    this.h = h * scl; // pixel length of grid
    this.z = generateGrid(this.cols,this.rows); 
    this.zoff = 0.0;
  }

 calculate() {
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) { 
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        this.z[i][j] = map(noise(xoff, yoff,this.zoff), 0, 1, -this.r, this.r);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
    this.zoff+=0.001;
  }

  render() {
    for (let x = 0; x < this.z.length-1; x++) {
      beginShape(QUAD_STRIP); // begin drawing sqaure
      for (let y = 0; y < this.z[x].length; y++) {
        stroke(0);
        // set shade of square proportional to elevation
        let currentElevation = this.z[x][y];
        let currentShade = map(currentElevation, -this.r, this.r, 0, 255);
        fill(currentShade, 255);
        // assign the vertices of the square
        let xCoordinate = x*this.scl-this.w/2;
        let yCoordinate = y*this.scl-this.h/2;
        vertex(xCoordinate, yCoordinate, this.z[x][y]);
        vertex(xCoordinate + this.scl, yCoordinate, this.z[x+1][y]);
      }
      endShape(); // end the square and move next
    }
  }
}