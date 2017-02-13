// Enemies our player must avoid
var Enemy = function(y_position, velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -120;
    this.y = y_position;
    this.velocity = velocity;
    this.width = 101;
    this.height = 70;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.velocity*dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Enemy.prototype.checkCollision = function() {
        if (this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y) {

            player.restart();
            player.lives -=1;
            console.log(player.lives)
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.lives = 5
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.width = 101;
    this.height = 70;

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.drawImage(Resources.get('images/score.png'), 350, 50);
    ctx.font = "bold 22px lucida grande";
    ctx.fillStyle = "#47dbd7";
    ctx.fillText(this.lives, 440, 100);

};

Player.prototype.update = function() {

};

Player.prototype.restart = function() {
    this.x = 200;
    this.y = 400;
};

Player.prototype.handleInput = function(keyPress) {
    var stepUpDown = 82;
    var stepLeftRight = 101;
    if (keyPress === 'left' && this.x > 0) {
        this.x -= stepLeftRight;
    } else if (keyPress === 'right' && this.x < 400) {
        this.x += stepLeftRight;
    } else if (keyPress === 'up' && this.y > 0) {
        this.y -= stepUpDown;
    } else if (keyPress ==='down' && this.y <= 390) {
        this.y += stepUpDown;
    }

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

typeEnemies = {
    "easy": {
        "y_position": 225,
        "velocity": 150
    },
    "medium": {
        "y_position": 142,
        "velocity": 350
    },
    "hard": {
        "y_position": 59,
        "velocity": 600
    }
}

var endGame = false;

var allEnemies = []

var insertEnemy = function(levels, player){
    var randomState = Math.random();
    var level = Object.keys(levels);
    var chosenLevel;
    if (randomState < 0.25) {
        chosenLevel = level[0];
    } else if (randomState >= 0.25 && randomState < 0.60) {
        chosenLevel = level[1];
    } else {
        chosenLevel = level[2];
    }
    return new Enemy(levels[chosenLevel]["y_position"], levels[chosenLevel]["velocity"], player);
};


var player = new Player()


setInterval(function () {
    allEnemies.push(insertEnemy(typeEnemies, player));
    }, 650);








// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
