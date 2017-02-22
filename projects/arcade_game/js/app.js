// Initializing global variables
var gameOver = true;
var allEnemies = [];
var nextPage = false;


// Enemies our player must avoid
var Enemy = function(y_position, velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // Setting initial position off canvas;
    this.x = -120;
    // Y posistion  and velocity will be randomly determined according to level of bug (easy/medium/hard)
    // see typeEnemies
    this.y = y_position;
    this.velocity = velocity;
    this.width = 101;
    this.height = 65;

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
        //Checks if there is a colliton between player and bug
        //Takes player parameters to check if there is a collision
        if (this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y) {
            // If there is a collision put player to beginning and
            // subtract one life
            player.restart();
            player.numLifes -=1;
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(selectedChar) {
    this.numLifes = 3
    // This changes according to user selection. See function charChooser.
    this.sprite = selectedChar;
    // Initial position
    this.x = 200;
    this.y = 400;
    this.width = 101;
    this.height = 65;
    //Gems that player will have to pick up
    this.gems = ['images/Gem Blue.png','images/Gem Green.png','images/Gem Orange.png'];
    this.drawGem = true;
    // Picks randomly position of the gem
    this.randomBlock = function (){return Math.floor((Math.random() * 5))*100 + 20;}
    // Paints gem on canvas according to random position Chosen Left = x paramenter
    // ChosenUp = y parameter
    this.gemblockChosenLeft = this.randomBlock();
    this.gemblockChosenUp = 30;
    this.gem = 0;
    // Initialize to 0 the number of gems so far caught.
    this.gemsCaught = [];

}

Player.prototype.render = function() {
    // Draws selected player on the canvas
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    // Calls method that draws remaining number of lives on canvas.
    this.lifes();

    //Draws gem on a random x spot on top of canvas
    if (this.gem < this.gems.length){
        this.drawJewels(this.gem, this.gemblockChosenLeft, this.gemblockChosenUp);
    } else {
        // When there are no more gems to draw -> user won game
        this.x = 700;
        //Draws game won image
        playAgain('images/game_won.png')
    }


    if (player.numLifes === 0) {
        // When player has no lifes more -> Lost. Draws lost canvas
        this.x = 700;
        playAgain('images/game_over.png');
            }

    // Draws gems player has caught on right canvas
    this.gemsCaught.forEach(function(gem, index){
                ctx_2.drawImage(Resources.get(gem), 30, 80*index + 230, 60, 90)
            })
};


Player.prototype.restart = function() {
    // Positions player in beginning square.
    this.x = 200;
    this.y = 400;
};

Player.prototype.lifes = function() {
    //Helper function to draw remaining lifes on right canvas.
    for (i = 0; i < this.numLifes; i++) {
        ctx_2.drawImage(Resources.get(this.sprite), i*33, 80, 45, 85);
    }
};

Player.prototype.drawJewels = function(gem, placeLeft, placeRight) {
    //Helper function to draw jewels on canvas according to random position.
    ctx.drawImage(Resources.get(this.gems[gem]), placeLeft, placeRight, 60, 90);
    }


Player.prototype.catchJewels = function() {
    //Function that checks if jewel was picked up by player.
    //If so puts player in initial position.
    if (this.gemblockChosenLeft  < this.x + this.width &&
        this.gemblockChosenLeft + 60> this.x &&
        this.gemblockChosenUp < this.y + this.height &&
        30 + this.gemblockChosenUp > this.y) {
            this.gemblockChosenLeft = this.randomBlock();
            this.gemsCaught.push(this.gems[this.gem])
            this.gem += 1;
            this.restart();
    }



}


Player.prototype.handleInput = function(keyPress) {
    //Handles "steps" given by player
    // When at top row player is not allowed to move left/right
    var stepUpDown = 82;
    var stepLeftRight = 101;
    if (keyPress === 'left' && this.x > 0 && this.y > 0) {
        this.x -= stepLeftRight;
    } else if (keyPress === 'right' && this.x < 400 && this.y > 0) {
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


//We create three type of enemies easy/medium/hard.
//easy always in the low panel with lower velocity.
//medium and hard also change appropriately.
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


// Function that controls enemies and inserts them randomly according
// to level
var insertEnemy = function(levels, randomInc){
    //Inserts enemy randomly. 25% possibility easy/35% medium/40%hard
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
    return new Enemy(levels[chosenLevel]["y_position"], levels[chosenLevel]["velocity"]);
};

//This is a timer function that will be called once game starts
//it inserts enemies at certain time intervals.
setInterval(function () {
    if (!gameOver) {
    allEnemies.push(insertEnemy(typeEnemies))
    }
    }, 650);



var Game = function(player_inst, enemiesArray) {
    // Handles new games
    //listens to player moves
    document.addEventListener('keyup', function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        player_inst.handleInput(allowedKeys[e.keyCode]);
    });
}

var playAgain = function(drawingWinLose){
    //Function call each time player looses or wins

    //Draws appropriate image (win or loose)
    ctx.drawImage(Resources.get(drawingWinLose), 2, 200);

    //Listens to click event. If click -> Play again
    var elem = document.getElementById('first-canvas'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop;


    var clickPlayAgain = function(event) {

        var x = event.pageX - elemLeft ,
            y = event.pageY - elemTop ;
        if ((x > 0 && x < 500) &&
            (y > 200 && y < 450)) {
            allEnemies = [];
            gameOver = true;
            nextPage = false;
            elem.removeEventListener('click', clickPlayAgain);
    }
    }
    elem.addEventListener('click', clickPlayAgain);
}


var instructions = function() {
    //Loads play instructions
    ctx.drawImage(Resources.get('images/startbox.png'), 10, 50);
}

//Here we put all the characters with their image.
//We also add parameter gray. This helps for selection.
//Only characters scroll over will be colored,
//rest will be shown black/white.
var characters = {
        "players": [{"name": "boy",
                    "image":'images/char-boy.png',
                    "gray": "no"},
                    {"name": "cat-girl",
                     "image": 'images/char-cat-girl.png',
                    "gray": "no"},
                    {"name":"girl-horn",
                    "image": 'images/char-horn-girl.png',
                    "gray": "no"},
                    {"name":"pink-girl",
                    "image": 'images/char-pink-girl.png',
                    "gray": "no"},
                    {"name":"char-princess",
                    "image": 'images/char-princess-girl.png',
                    "gray": "no"}
                    ]
                };


var charChooser = function() {
    //Function that handles character choosing part (comes after instructions)

    //Show image for character choosing
    ctx.drawImage(Resources.get('images/sel_char.png'), 10, 50);

    //Display each character on top of the image
    characters.players.forEach(function(character, index) {
        if (index < 3) {
            character.x = 120*index + 90;
            character.y = 90;
        } else {
            character.x = (120*index) - 210;
            character.y = 210;
        }

        //If mouse not on top of character -> "paint" gray.
        ctx.drawImage(Resources.get(character.image), character.x, character.y);
        if (character.gray == "yes") {
            grayScale(ctx, character.x, character.y + 50, 90, 100);
        }
    });

    var elem = document.getElementById('first-canvas'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop;

    //When click select player and initialize the game.
    var clicker = function(event) {
        var x = event.pageX - elemLeft - 15,
            y = event.pageY - elemTop - 60;
        characters.players.forEach(function(character) {
            if (charChooseChecker(x, y, character)) {
                player = new Player(character.image)
                Game(player, allEnemies);
                gameOver = false;
                elem.removeEventListener('click', clicker);
                }
    });
    };

    elem.addEventListener('click', clicker);


    elem.addEventListener('mousemove', function(event){
        var x = event.pageX - elemLeft - 15,
            y = event.pageY - elemTop - 60;

     characters.players.forEach(function(character) {
        if (charChooseChecker(x, y, character)) {
            character.gray = "no"
        } else {
            // Draw black and white
            character.gray = "yes"
        }

      });
    });

}

var charChooseChecker = function(x, y, character) {
    //Check if click/mouse over character.
    if (x < character.x + 70 &&
        x > character.x &&
        y < character.y + 90 &&
        y > character.y) {
            return true;
        }
}

//Switches from instructions to character picking page.
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 39) {
        nextPage = true;
    } else if(e.keyCode == 37) {
        nextPage = false;

    }
});


var grayScale = function(context, posX, posY, imageWidth, imageHeight) {
    //Turns image into black & white. Adapted from
    //http://www.htmlgoodies.com/html5/javascript/display-images-in-black-and-white-using-the-html5-canvas.html#fbid=h7UVnlnpWef

    var imgData = context.getImageData(posX, posY, imageWidth, imageHeight);
    var pixels = imgData.data;
    for (var i = 0, n = pixels.length; i < n; i += 4) {
        var grayscale = pixels[i]*0.3 + pixels[i+1]*0.59 + pixels[i+2]*0.11;
        pixels[i] = grayscale;
        pixels[i+1] = grayscale;
        pixels[i+2] = grayscale;
    }

    return context.putImageData(imgData, posX, posY);
}









