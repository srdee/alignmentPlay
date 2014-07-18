# Tell everything what createjs is. Point this to 
# where-ever the createjs library is, minus the .js extension
# local files are relative to main.js, so for example "libs/createjs.min"
requirejs.config
    paths:
        "createjs" : "http://code.createjs.com/createjs-2013.12.12.min"

define (require) ->
    # Start up our stage class, passing on the canvas
    GameWrapper = require "GameWrapper"
    canvas = document.getElementById("gameCanvas")
    gameObject = new GameWrapper(canvas)