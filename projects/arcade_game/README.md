
# Arcade Game

Implements a frogger type game, where player needs to collect gems to win. Game implemented using JavaScript and HTML canvas functionality.

## Install and Running

1. Clone repository in your local machine.
2. Go to file where repository is cloned.
3. Run a local server. To run it with python, use `python -m SimpleHTTPServer <number>`.
4. Go to browser and type in address: localhost:<number>.

## Files
- resources.js: Helps loads images to the canvas, caches images so rendering is faster.
- engine.js: Constantly calls the canvas and redraws it.
- app.js: Implements main logic of the game. Draws player and includes bugs. Counts number of gems recover. Ends game and draws appropriate image according if player won / lose.

## New (features added to original implementation)

Game includes an instruction page and also a character selection. Users can choose its own character. Also it includes the task of getting the gems which are randomly drawn at the top of the canvas. As an extra it includes a score board to keep track of number of lifes and gems already gathered.

