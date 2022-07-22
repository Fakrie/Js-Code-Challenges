Ball.prototype.applyForce = function ( forc ) {
  this.acc.add( forc );
}

Ball.prototype.behavs = function( somtin ) {
  if ( this.Ihavdesire ){
  var arrive = this.arrive( this.tgt );
  var flei = this.flee( somtin,50 );
  this.applyForce( arrive );
    if(mouseIsPressed){
      this.applyForce( flei );
    }
  }
}

Ball.prototype.arrive = function ( za ) {
  var dis = p5.Vector.sub( za, this.pos );
  var d = dis.mag();
  var speed = this.maxspeed;
  if ( d < 100 ) {
    speed = map( d , 0 , 100 , 0 , 3 );
  }
  dis.setMag( speed );
  steer = p5.Vector.sub( dis, this.vel ); // steering
  steer.limit(this.maxfarce);
  return steer;
}

Ball.prototype.seek = function ( za ) {
  var dis = za.copy();
  dis.sub( this.pos );
  var d = dis.mag();
  speed = this.maxspeed;
  if ( d < 100 ) {
    speed = map( d , 0 , 100 , 0 , 3 );
  }
  dis.setMag( speed );
  dis.sub( this.vel ); // steering
  return dis;
}

Ball.prototype.flee = function ( somtin,das ) {
  var dis = p5.Vector.sub( somtin, this.pos );
  var d = dis.mag();
  var speed = 0;
  if ( d < das ){
    speed = map (d, 0, das, 0, this.maxspeed);
    dis.setMag( speed );
    dis.mult(-4);
    steer = p5.Vector.sub( dis, this.vel );
    return steer;
  } else {
    return createVector(0,0);
  }
}



Ball.prototype.grty = function () {
  this.acc.add(groundgrav);
}
