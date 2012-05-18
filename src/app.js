(function() {
  var DaApp, Square, SquareItem;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Square = (function() {
    __extends(Square, Spine.Model);
    function Square() {
      Square.__super__.constructor.apply(this, arguments);
    }
    Square.configure("Position", "content");
    return Square;
  })();
  SquareItem = (function() {
    __extends(SquareItem, Spine.Controller);
    SquareItem.prototype.tag = "td";
    function SquareItem() {
      SquareItem.__super__.constructor.apply(this, arguments);
      this.item.bind("update", this.render);
    }
    SquareItem.prototype.render = function() {
      return this.replace("" + this.item.content);
    };
    return SquareItem;
  })();
  DaApp = (function() {
    __extends(DaApp, Spine.Controller);
    DaApp.prototype.el = "#thetable";
    function DaApp() {
      DaApp.__super__.constructor.apply(this, arguments);
      Square.bind("create", this.evaluate);
      Square.fetch();
    }
    DaApp.prototype.evaluate = function() {
      return window.log("evaluate called");
    };
    DaApp.prototype.addall = function() {
      return window.log("add all");
    };
    return DaApp;
  })();
}).call(this);
