export class Activatus{
  xDiff = 0;
  yDiff = 0;
  timer = false;
  canActivate(params, routeConfig, navigationInstruction){

  }

  attached(){
    $(this.obj).css('background-color', 'blue');
    $(this.obj).css('background-color', 'blue');
    this.changeTime()
  }

  draggable(evt){
    this.previousX = evt.clientX
    this.previousY = evt.clientY
    $(evt.target).on("mousemove", function(e){
      this.move(e)
    }.bind(this))
  }

  clear(evt){
    $(evt.target).off("mousemove")
  }

  move(e){
    if (this.timer !== false) {
        clearTimeout(this.timer);
    }
    this.timer = setTimeout(function() {
      // イベント中の処理
      var _ = this
      _.currentX = e.clientX
      _.currentY = e.clientY
      _.xDiff = _.xDiff + (_.currentX - _.previousX)
      _.yDiff = _.yDiff + (_.currentY - _.previousY)
      if(_.xDiff < 0){ _.xDiff = 0}
      if(_.yDiff < 0){ _.yDiff = 0}
      $(e.target).css('left', _.xDiff)
      $(e.target).css('top', _.yDiff)
      _.previousX = _.currentX
      _.previousY = _.currentY
    }.bind(this), 8);
  }

  changeTime(){
    var time = $("#time").val() + "s"
    $(".animator").css({
      '-moz-animation-duration': time,
      '-webkit-animation-duration': time,
      '-o-animation-duration': time,
      '-ms-animation-duration': time,
    });
  }
}