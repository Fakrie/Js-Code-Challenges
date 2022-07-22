var balls = [], pois, words, fR = 60, mousevec, Grav = 0.001, groundgrav, harf = 0;
var font;
var dropdanuke = false;
var explosion = false;
var writethetext, things = " Press to dropdanuke ";

function preload() {
  font = loadFont('Asimov.otf');
}

function setup() {

    createCanvas(1100,630); //673,638
    frameRate(fR);
    //background(0);
    groundgrav = createVector(0,0.1);
    fill(255);
    words = [ "HelloWorld"]; 
    //balls[0] = new Ball( random(width/2), 50, random(-3,3), random(-3,3), 50 , width/2, height/2, true );
      pois =  font.textToPoints(words[0],20,height/2,150, {sampleFactor: 0.1}); //("ZAxDe",20,height/2,200, {sampleFactor: 0.1});
    for (var i = 0; i < pois.length; i++) {
      balls[i] = new Ball( random(width), random(height), random(-3,3), random(-3,3), 1.5 , pois[i].x, pois[i].y, true, true ); // random(-3,3), random(-3,3)
    }

}

function draw() {
   mousevec = createVector( mouseX, mouseY);


   background(0);
   //fill(255);
   fill(255);
   stroke(255);
   writethetext = false;
   for (var i = balls.length-1; i >= 0; i--) {

     balls[i].bounce();
     for (var j = i-1; j >= 0; j--) {
        if ( balls[i].crashesto( balls[j] ) && balls[i].Ihavdesire && balls[j].Ihavdesire ){ // && ( i == 0 || j == 0 )
          crashing( balls[i] , balls[j] );
        }

        if ( explosion ){
          balls[i].applyForce( balls[i].flee( balls[j].pos, 10) );
        }

     }

     balls[i].behavs(mousevec);

     balls[i].move();

     balls[i].drew();

   }

}


