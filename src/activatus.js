export class Activatus{
  xDiff = 0;
  yDiff = 0;
  canActivate(params, routeConfig, navigationInstruction){
  }

  attached(){
    $(this.obj).css('background-color', 'blue');
  }

  draggable(evt){
    this.previousX = evt.clientX
    this.previousY = evt.clientY
    $(window).on("mousemove", function(e){
      this.move(e)
    }.bind(this))
  }

  clear(){
    $(window).off("mousemove")
  }

  move(e){
    this.currentX = e.clientX
    this.currentY = e.clientY
    this.xDiff = this.xDiff + (this.currentX - this.previousX)
    this.yDiff = this.yDiff + (this.currentY - this.previousY)
    $(e.target).css('left', this.xDiff)
    $(e.target).css('top', this.yDiff)
    this.previousX = this.currentX
    this.previousY = this.currentY
  }
}