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

  setup(e){
    var left =  $(e.target).css("left");
    var top = $(e.target).css("top");
    console.log(top)
    $(e.target).attr("style","");
    $(e.target).css("top",top);
    $(e.target).css("left",left);
    var array = $(e.target).val().split("\n");
    array.forEach(function(obj){
      var child_array = obj.split(":");
      if(child_array.length == 2){
        child_array[0] = child_array[0].trim();
        child_array[1] = child_array[1].replace(/ ?(.+);/,"$1");
        $(".obj").css(child_array[0] + "", child_array[1] + "");
        console.log("do")
      }
    })
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
      $(e.target).css('position', "absolute")
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