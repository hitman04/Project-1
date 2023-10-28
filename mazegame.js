const MAZE_WIDTH = 10;
const MAZE_HEIGHT = 10;

// Function to generate an empty maze
function generateEmptyMaze() {
    const maze = [];
    for (let i = 0; i < MAZE_HEIGHT; i++) {
        maze.push(Array(MAZE_WIDTH).fill(0));
    }
    return maze;
}

// Function to print the maze
function printMaze(maze) {
    for (let i = 0; i < MAZE_HEIGHT; i++) {
        console.log(maze[i].join(' '));
    }
}

// Function to generate a random maze
function generateRandomMaze() {
    const maze = generateEmptyMaze();
    
    for (let i = 0; i < MAZE_HEIGHT; i++) {
        for (let j = 0; j < MAZE_WIDTH; j++) {
            maze[i][j] = Math.random() < 0.3 ? 1 : 0; // Adjust the probability as needed
        }
    }
    
    return maze;
}

// Function to check if a cell is within the maze boundaries
function isInsideMaze(x, y) {
    return x >= 0 && x < MAZE_WIDTH && y >= 0 && y < MAZE_HEIGHT;
}

// Function to check if a cell is a valid path
function isValidPath(maze, x, y) {
    return isInsideMaze(x, y) && maze[y][x] === 0;
}

// Function to update the player's position
function movePlayer(maze, x, y) {
    if (isValidPath(maze, x, y)) {
        maze[y][x] = 'P';
        return true; // Player moved successfully
    }
    return false; // Player cannot move to this cell
}

// Function to set the player's starting position
function setPlayerStartPosition(maze, x, y) {
    if (isInsideMaze(x, y)) {
        maze[y][x] = 'S'; // 'S' represents the starting position
    }
}

// Example usage:
const maze = generateRandomMaze();
setPlayerStartPosition(maze, 0, 0); // Set the player's starting position
printMaze(maze);
