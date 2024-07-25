const crypto = require('node:crypto');

// Get the operation and numbers from command-line arguments
let operation = process.argv[2];
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

if (operation === 'add') {
  Add(a, b);
} else if (operation === 'sub') {
  Sub(a, b);
} else if (operation === 'mult') {
  Mult(a, b);
} else if (operation === 'div') {
  Div(a, b);
} else if (operation === 'sine') {
  Sine(a);
} else if (operation === 'cosine') {
  Cosine(a);
} else if (operation === 'tangent') {
  Tangent(a);
} else if (operation === 'random') {
  Random(a);
} else {
  console.log("Invalid Operation");
}

function Add(a, b) {
  console.log(`Result: ${a + b}`);
}

function Sub(a, b) {
  console.log(`Result: ${a - b}`);
}

function Mult(a, b) {
  console.log(`Result: ${a * b}`);
}

function Div(a, b) {
  console.log(`Result: ${a / b}`);
}

function Sine(a) {
  console.log(`Result: ${Math.sin(a)}`);
}

function Cosine(a) {
  console.log(`Result: ${Math.cos(a)}`);
}

function Tangent(a) {
  console.log(`Result: ${Math.tan(a)}`);
}

function Random(length) {
  if (!Number.isInteger(length) || length <= 0) {
    console.log("Provide a valid length for random number generation.");
  } else {
    crypto.randomBytes(length, (err, buf) => {
      if (err) throw err;
      console.log(`Random Number: ${buf.toString('hex')}`);
    });
  }
}
