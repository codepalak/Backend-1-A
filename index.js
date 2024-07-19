// index.js

// Import the crypto module
const crypto = require('crypto');

// Get command line arguments
const args = process.argv.slice(2);
const operation = args[0];
const numbers = args.slice(1).map(Number);




// Complete the function
function calculate(operation, numbers) {
    switch (operation) {
      case 'add':
        return numbers.reduce((acc, num) => acc + num, 0);
      case 'sub':
        return numbers.reduce((acc, num) => acc - num);
      case 'mult':
        return numbers.reduce((acc, num) => acc * num, 1);
      case 'divide':
        return numbers.reduce((acc, num) => acc / num);
      case 'sin':
        return Math.sin(numbers[0]);
      case 'cos':
        return Math.cos(numbers[0]);
      case 'tan':
        return Math.tan(numbers[0]);
      case 'random':
        const length = numbers[0];
        if (!length) {
          return "Provide length for random number generation.";
        }
        return crypto.randomBytes(length).toString('binary');
      default:
        return "Invalid operation";
    }
  }
  
  // Get the result
  const result = calculate(operation, numbers);
  
  // Output the result
  console.log(result);
  