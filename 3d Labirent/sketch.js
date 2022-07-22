var map2 = [], map3 = [];

var mawp = [
    [1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,1,1,1,1],
    [1,1,1,1,0,0,1,1,1],
    [1,1,1,1,0,1,1,1,1],
    [1,0,0,0,2,0,1,1,1],
    [1,1,1,1,0,1,1,1,1],
    [1,1,1,1,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1]
  ];

var persan, uz;

function setup() {
  createCanvas( 600 , 600, WEBGL );
  uz = height / 48;

  persan = new Person( 4, 4, 0 );
}

function draw() {
  background(0);
  //view(lilmap);


  persan.see();
  fill(255);
  console.log(persan.pos.x+":"+persan.pos.y);
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
    persan.turn(-1);
      break;
    case RIGHT_ARROW:
    persan.turn(1);
      break;
    case UP_ARROW:
    persan.mov(1);
      break;
    case DOWN_ARROW:
    persan.mov(-1);
      break;
    default:

  }
}
