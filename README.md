# Sudoku Backtracking Visualization

This project is a web-based application that visualizes the backtracking algorithm used to solve Sudoku puzzles. It's built using React and styled-components, providing an interactive and visually appealing way to understand how backtracking works in solving Sudoku.

## Features

- **Sudoku Puzzle Generation**: Utilizes the [sudoku](file:///Users/abdomostafa/Sudoku-Solver/package.json#2%2C12-2%2C12) npm package to generate a new puzzle each time the application is loaded.
- **Interactive Sudoku Board**: Users can click on cells to select them and input numbers. The board highlights selected cells and provides visual feedback for editable cells.
- **Solving Visualization**: The application visualizes the backtracking algorithm's process in real-time, allowing users to see how the algorithm tries different numbers in each cell until the puzzle is solved.
- **Speed Control**: Users can control the speed of the solving visualization, making it faster or slower according to their preference.
- **Solution Validation**: Offers a feature to check if the current state of the puzzle is correct or not.
- **Responsive Design**: The application is responsive, adjusting the size of the Sudoku board based on the screen size for better usability on various devices.

## Technologies Used

- **React**: For building the user interface.
- **Styled-components**: For styling the application components.
- **React Icons**: To add icons for the speed control buttons.
- **React Toastify**: For displaying success or error messages when checking the puzzle.
- **Sudoku**: An npm package used for generating Sudoku puzzles.

## How It Works

1. **Puzzle Generation**: On application load, a new Sudoku puzzle is generated and displayed.
2. **User Interaction**: Users can select cells and input numbers. The application highlights the selected cell and restricts input to valid numbers (1-9).
3. **Solving Visualization**: By clicking the "Start Solve" button, the application begins to solve the puzzle using the backtracking algorithm, visually showing each step.
4. **Speed Control**: Users can adjust the visualization speed using the "Speed Up" and "Slow Down" buttons.
5. **Solution Validation**: At any point, users can click the "Check" button to validate the current state of the puzzle.

## Code Structure

- **Components**:
  - `App.js`: The main component that renders the Sudoku board, controls, and results popup.
  - `board.js`: Renders the Sudoku board and handles cell selection.
  - `cell.js`: Represents each cell in the Sudoku board, handling user input and highlighting.
  - `controls.js`: Contains the control buttons for solving, checking, and adjusting speed.
  - `resultsPopup.js`: Displays a popup message indicating whether a solution was found or not.
- **Utilities**:
  - `util.js`: Contains the [solveGrid](file:///Users/abdomostafa/Sudoku-Solver/src/App.js#6%2C21-6%2C21) function implementing the backtracking algorithm and the [checkGrid](file:///Users/abdomostafa/Sudoku-Solver/src/App.js#6%2C10-6%2C10) function for validating the puzzle.

## Setup and Running

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser to view the application.

## Deployment

The application includes a deployment script to GitHub Pages:

```json:package.json
"scripts": {
  "deploy": "gh-pages -d build"
}
```

To deploy, run:

```bash
npm run deploy
```

## Conclusion

This project offers an engaging way to understand the backtracking algorithm through the lens of solving Sudoku puzzles. It combines educational value with interactive and responsive design, making it accessible and enjoyable for users of all levels.