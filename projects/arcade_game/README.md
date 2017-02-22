
# Arcade Game

Implements a frogger type game, where player needs to collect gems to win. Game implemented using JavaScript and HTML canvas functionality.

Note that in order to prevent tainting the canvas, files need to be run using a local server. You can use python server by calling python -m SimpleHTTPServer 8000.

## Files
- resources.js: Helps loads images to the canvas, caches images so rendering is faster.
- engine.js: Constantly calls the canvas and redraws it.
- app.js: Implements main logic of the game. Draws player and includes bugs. Counts number of gems recover. Ends game and draws appropriate image according if player won / lose.

## New (features added to implementation)

Game includes an instruction page and also a character selection. Users can choose its own character. Also it includes the task of getting the gems which are randomly drawn at the top of the canvas. As an extra it includes a score board to keep track of number of lifes and gems already gathered.

