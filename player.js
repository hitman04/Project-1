class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    moveUp() {
        if (this.y > 0) {
            this.y--;
        }
    }

    moveDown() {
        if (this.y < MAZE_HEIGHT - 1) {
            this.y++;
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x--;
        }
    }

    moveRight() {
        if (this.x < MAZE_WIDTH - 1) {
            this.x++;
        }
    }
}
