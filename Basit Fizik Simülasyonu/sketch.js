var balls = [], fR = 120, Grav =0.01; //6.67408
var za = 0;
var attractor;
function setup() {
    createCanvas(673,638); //673,638
    frameRate(fR);
    //background(0);
    //stroke(255,5);
    //fill(255,10);
    attractor = createVector(width/2,height/2)
    //balls[0] = new Ball(width/2,height/2,0,0,100);
    for (var i = 0; i < 20; i++) {
      balls[i] = new Ball(random(width),random(height),random(-2,2),random(-2,2),random(2,50)); //random(-3,3),random(-3,3)
    }

}

function draw() {
   background(0);
   //fill(255);
   fill(255);
   stroke(255);
   //point(attractor.x,attractor.y);
   for (var i = balls.length-1; i >= 0; i--) {

     balls[i].bounce();
     //balls[i].grav();

     for (var j = i-1; j >= 0; j--) {
       if ( balls[i].crashesto( balls[j] )  ){ // && ( i == 0 || j == 0 )
         crashing( balls[i] , balls[j] );
         //balls[0].pos.x = width/2 ;
         //balls[0].pos.y = height/2 ;
       }
       //balls[i].attracted(balls[j]);
     }


     balls[i].move();
     //if ( i != 0 ) {
       balls[i].drew();
     //}
   }
   //fill(255);
   //ellipse( balls[0].pos.x , balls[0].pos.y , balls[0].r*2 , balls[0].r*2 );
}


/*
function crashing( object1 , object2 ) {
  Crashline = new createVector( ( balls[i].pos.x - balls[j].pos.x) , (balls[i].pos.y - balls[j].pos.y) );
  dis = dist( balls[i].pos.x, balls[i].pos.y, balls[j].pos.x, balls[j].pos.y );
  much = Crashline.copy();
  much.setMag( ((balls[i].r + balls[j].r) - dis) / 2.0 );
  balls[i].pos.add( much );
  balls[j].pos.sub( much );

  g1 = p5.Vector.angleBetween( Crashline , balls[i].vel);
  g2 = p5.Vector.angleBetween( Crashline , balls[j].vel);

  tempvectorx1 = Crashline.copy() ;
  tempvectorx1.setMag( cos( g1 ) * balls[i].vel.mag() );

  tempvectorx2 = Crashline.copy() ;
  //tempvectorx2.mult(-1) ; ????
  tempvectorx2.setMag( cos( g2 ) * balls[j].vel.mag() );
  tempvectorx22 = tempvectorx2.copy();

  balls[i].vel.sub( tempvectorx1 );
  balls[i].vel.add( tempvectorx2 );

  balls[j].vel.sub( tempvectorx2 );
  balls[j].vel.add( tempvectorx1 );
}
*/
