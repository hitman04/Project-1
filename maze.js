const MAZE_WIDTH = 10;
const MAZE_HEIGHT = 10;

function generateMaze() {
    const maze = [];
    for (let i = 0; i < MAZE_HEIGHT; i++) {
        maze.push(Array(MAZE_WIDTH).fill(1));
    }
    return maze;
}
