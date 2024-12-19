# Moon Robots Simulation

This is a JavaScript implementation of the **Moon Robots Case Study**, where robots navigate a grid-based plateau on the Moon based on given commands.

## Problem Statement
A rectangular plateau on the Moon must be explored by robots to capture images of the terrain. Robots are controlled using input commands that dictate their movement and rotation.

### Input Format
1. The first line specifies the upper-right coordinates of the plateau (e.g., `5 5`).
2. Each robot has:
   - A line for its initial position and orientation (e.g., `1 2 N`).
   - A line of movement instructions (e.g., `LMLMLMLMM`).

### Output Format
The program outputs the final position and orientation of each robot after executing all instructions sequentially.

## Example
### Input
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

### Output
```
1 3 N
5 1 E
```

## How to Run
### Prerequisites
- Node.js installed on your system.

### Steps
1. Clone or download this repository.
2. Navigate to the project directory.
3. Ensure you have an `input.txt` file in the root directory with the input data formatted as described above.
4. Run the program using:
   ```
   node main.js
   ```

### Expected Output
The program reads `input.txt` and outputs the final positions of the robots to the console.

## Files
- `main.js`: The JavaScript program implementing the solution.
- `input.txt`: The input file containing plateau dimensions and robot commands.
- `README.md`: This documentation file.

## Assumptions
1. The lower-left corner of the plateau is always `(0, 0)`.
2. Robots execute instructions sequentially; one robot finishes before the next starts.
3. Movement beyond plateau boundaries results in an error.

## Design Highlights
- Cardinal directions (`N`, `E`, `S`, `W`) are managed using an array for efficient rotation.
- A map of movements (`MOVEMENTS`) is used for grid updates.
- The program is modular, with distinct functions for rotation, movement, and instruction processing.

## Testing
Test the program with different inputs to ensure correctness:
- Normal inputs as provided in the example.
- Edge cases like:
  - Robots attempting to move out of bounds.
  - Complex instruction sets.

## Notes
1. Do not use external libraries for this implementation.
2. Ensure your input file is correctly formatted.

## License
This project is open-source and free to use under the MIT license.
