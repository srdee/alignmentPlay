// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function(require) {
    var GameWrapper;
    require("createjs");
    return GameWrapper = (function(_super) {
      __extends(GameWrapper, _super);

      function GameWrapper(canvas) {
        this.initialize(canvas);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", this);
        this.addSomeDemoGraphics();
      }

      GameWrapper.prototype.addSomeDemoGraphics = function() {
        var bg, demoText;
        bg = new createjs.Shape;
        bg.graphics.beginFill("#222").drawRect(0, 0, 640, 360);
        this.addChild(bg);
        demoText = new createjs.Text("Howdy World!", "25px Bold Arial", "#fff");
        return this.addChild(demoText);
      };

      return GameWrapper;

    })(createjs.Stage);
  });

}).call(this);

//# sourceMappingURL=GameWrapper.map
