draw = () => {
  let context = document.getElementById("canvas").getContext("2d");

  var grd = context.createLinearGradient(50,0,300,0);
  grd.addColorStop(0, "blue");
  grd.addColorStop(0.5, "orange");
  grd.addColorStop(1, "yellow");
  context.fillStyle = grd;
  context.fillRect(0,0,400,300);

  context.fillStyle = "red";
// x,y,width,height
  context.fillRect(55,100,300,200);
  context.fillStyle = "yellow";
  context.fillRect(70,125,50,50);
  context.fillRect(275,125,50,50);
  context.fillRect(70,200,50,50);
  context.fillRect(275,200,50,50);
  context.fillStyle = "brown";
  context.fillRect(170,200,50,100);
  context.fillStyle = "black";
  context.fillRect(210,245,10,10)
  context.strokeRect(70,125,25,25);
  context.strokeRect(70,150,25,25);
  context.strokeRect(95,125,25,25);
  context.strokeRect(95,150,25,25);
  context.strokeRect(275,125,25,25);
  context.strokeRect(275,150,25,25);
  context.strokeRect(300,125,25,25);
  context.strokeRect(300,150,25,25);
  context.strokeRect(70,200,25,25);
  context.strokeRect(70,225,25,25);
  context.strokeRect(95,200,25,25);
  context.strokeRect(95,225,25,25);
  context.strokeRect(275,200,25,25);
  context.strokeRect(275,225,25,25);
  context.strokeRect(300,200,25,25);
  context.strokeRect(300,225,25,25);
}

window.onload = draw;

context.clearRect(200,200,25,25);
context.strokeRect(20,20,100,100);
context.strokeRect(200,200,50,50);
context.clearRect(40,40,100,100);
