import $ from 'jquery';

export class Activatus{
  evt = ""
  canActivate(params, routeConfig, navigationInstruction){

  }

  attached(){
    console.log(this.obj)
    $(this.obj).css('background-color', 'blue');
  }

  draggable(evt){
    $(window).on("mousemove", this.move.bind(this, evt))
  }

  clear(){
    $(window).off("mousemove")
  }

  move(evt){
    console.log("evt")
  }
}