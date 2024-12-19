const fs = require('fs');

// Read input from a text file
const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

// Parse the plateau dimensions
const [plateauX, plateauY] = input.shift().split(' ').map(Number);

// Define cardinal directions and their movements
const DIRECTIONS = ['N', 'E', 'S', 'W'];
const MOVEMENTS = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0]
};

// Function to rotate the robot
// We are using modulus for more dynamic and failproof functionality.
const rotate = (direction, turn) => {
  const index = DIRECTIONS.indexOf(direction);
  return turn === 'L'
    ? DIRECTIONS[(index + 3) % 4]
    : DIRECTIONS[(index + 1) % 4];
};

// Function to move the robot
const move = (x, y, direction) => {
  const [dx, dy] = MOVEMENTS[direction];
  return [x + dx, y + dy];
};

// Process each robot's instructions
const processRobot = (initialPosition, instructions) => {
  let [x, y, direction] = initialPosition.split(' ');
  x = parseInt(x);
  y = parseInt(y);

  for (const command of instructions) {
    if (command === 'L' || command === 'R') {
      direction = rotate(direction, command);
    } else if (command === 'M') {
      [x, y] = move(x, y, direction);
      if (x < 0 || x > plateauX || y < 0 || y > plateauY) {
        throw new Error('Robot moved out of plateau bounds!');
      }
    }
  }

  return `${x} ${y} ${direction}`;
};

// Process the input data
const results = [];
for (let i = 0; i < input.length; i += 2) {
  const initialPosition = input[i];
  const instructions = input[i + 1];
  results.push(processRobot(initialPosition, instructions));
}

// Output the results
console.log(results.join('\n'));
