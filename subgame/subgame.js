
var width =854;
var height = 250;
var floor = 200;
var player_xy = 32;
var context, controller, rectangle, loop;

context = document.getElementById("game").getContext("2d");

context.canvas.width = width;
context.canvas.height = height;
context.strokeStyle = "#45b80b";


function randIntRange(min, max){
  return Math.floor(Math.random() * (max - min) + Math.floor(min))
}
rectangle = {
  jumping:true,
  width:player_xy,
  height:player_xy,
  x:144,
  y:0,
  x_velocity:0, 
  y_velocity:0

};

controller = {
  up:false,
  keyListener:function(event) {

    var key_state = (event.type == "keydown")?true:false;

    if(event.keyCode === 32){
      controller.up = key_state;
    }

  }

};
score = 0;
spikes_template = {
  height: player_xy,
  width: player_xy,
  x: width,
  y: floor,
  speed: 6
}
spikes = [];
spike_gen = 30;
spike_frame_count =0;
frame = function() {
  if (controller.up && rectangle.jumping == false) {

    rectangle.y_velocity -= 20;
    rectangle.jumping = true;

  }
  
 
  score += 1;
  rectangle.y_velocity += 1.5;// gravity
  rectangle.y += rectangle.y_velocity;

  // if rectangle is falling below floor line
  if (rectangle.y > height - player_xy - 50) {
    rectangle.jumping = false;
    rectangle.y = height - player_xy - 50;
    rectangle.y_velocity = 0;

  }
  //background begin
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);// x, y, width, height
  //background end

  //score start
  context.fillStyle = "#45b80b"
  context.font = "30px VT323"
  context.fillText("Score: " +score,10,30)
  //score end

  //player begin
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  context.stroke();
  //player end



  //floor begin
  context.beginPath();
  context.moveTo(0, floor);
  context.lineTo(width, floor);
  context.stroke();
  //floor end

   //spike begin
   spike_frame_count +=1;
   if(spike_frame_count === spike_gen){
     let spike = Object.assign({}, spikes_template);
     spikes.push(spike);
     spike_frame_count = 0;
    spike_gen = (spike_gen > 30) ? randIntRange(18, 40): randIntRange(30, 50);

     
   }
   for(let spike of spikes){
     spike.x -= spike.speed;
     context.beginPath();
     context.moveTo(spike.x, spike.y);
     context.lineTo(spike.x + 25, spike.y - 40);
     context.lineTo(spike.x + 50, spike.y);
     context.stroke();
     let diff = rectangle.x - spike.x;
     let x_check = (diff < 0) ? (-diff) : diff;
     diff = rectangle.y - spike.y;
     let y_check = (diff < 0) ? (-diff) : diff;
     if(x_check < 38 && y_check < 50){
       clearInterval(loop);
     }
   }
   //spike end

};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
var loop = setInterval(function(){ window.requestAnimationFrame(frame); }, (1000/45));