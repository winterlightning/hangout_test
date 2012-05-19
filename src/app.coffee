class Square extends Spine.Model
  @configure "Position", "content"
  
class SquareItem extends Spine.Controller
  tag: "td"
  
  constructor: ->
    super
    @item.bind("update",  @render)
     
  render: ->
    @replace( "#{ @item.content }" )

class DaApp extends Spine.Controller
  el: "#thetable"

  constructor: ->
    super
    Square.bind("update",  @evaluate)
    Square.fetch()  

  evaluate: () ->
    window.log("evaluate called")

  addall: ()->
    window.log("add all")
    
exports = this
exports.DaApp = DaApp
exports.SquareItem = SquareItem
exports.Square = Square
