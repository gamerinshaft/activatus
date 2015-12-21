export class Activatus{
  xDiff = 0;
  yDiff = 0;
  timer = false;
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
    if (this.timer !== false) {
        clearTimeout(this.timer);
    }
    this.timer = setTimeout(function() {
      // イベント中の処理
      this.currentX = e.clientX
      this.currentY = e.clientY
      this.xDiff = this.xDiff + (this.currentX - this.previousX)
      this.yDiff = this.yDiff + (this.currentY - this.previousY)
      if(this.xDiff < 0){ this.xDiff = 0}
      if(this.yDiff < 0){ this.yDiff = 0}
      $(e.target).css('left', this.xDiff)
      $(e.target).css('top', this.yDiff)
      this.previousX = this.currentX
      this.previousY = this.currentY
    }.bind(this), 12);
  }
}