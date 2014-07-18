# Our Game's first class!
define (require) ->
    # imports
    require "createjs"

    class GameWrapper extends createjs.Stage

        constructor: (canvas) ->
            @initialize(canvas)

            # Set the ticker, without this, easel won't do anything!
            createjs.Ticker.setFPS(60)
            createjs.Ticker.addEventListener("tick", this)

            # Call a function
            @addSomeDemoGraphics()

        addSomeDemoGraphics: ->
            # Add a background
            bg = new createjs.Shape
            bg.graphics.beginFill("#222").drawRect(0, 0, 640, 360)
            @addChild(bg)

            # Add some text onto screen
            demoText = new createjs.Text("Howdy World!", "25px Bold Arial", "#fff")
            @addChild(demoText)