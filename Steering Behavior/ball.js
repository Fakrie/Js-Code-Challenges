function Ball(x,y,sx,sy,r,tx,ty,bool, nuk){

  this.pos = createVector(x,y);
  this.prew = createVector(x,y);
  this.vel = createVector(sx,sy);
  this.acc = createVector(0,0);
  this.tgt = createVector(tx,ty);
  this.maxspeed = 3 ;
  this.maxfarce = 0.25;
  this.r = r;
  this.Ihavdesire = bool;
  this.shaw = 255;
  this.Isexploding = 0;
  this.notanuke = nuk;

  //_Çizim_____________________________________________________________
  this.drew = function(){
    // Dairenin hızına göre rengi
    var col = map( this.vel.mag() ,20,0,0,255);
    fill(255,col,col, this.shaw );
    //fill(255,3);
    //stroke(255,4);
    noStroke();
    // Daire Kenarlari geçti ise
    if ( this.pos.x + this.r > width){
      this.pos.x = width - this.r ;
    } else if ( this.pos.x - this.r < 0 ) {
      this.pos.x = this.r ;
    }
    if ( this.pos.y + this.r > height){
      this.pos.y = height - this.r ;
    } else if ( this.pos.y - this.r < 0 ) {
      this.pos.y = this.r ;
    }
    // cimsin gideceği nokta yoksa
    if ( this.Ihavdesire && this.shaw < 255 ){
      this.shaw += 3;
    } else if (!this.Ihavdesire && this.shaw > 0 ) {
      this.shaw -= 3;
    }
    // patlamışsa

    ellipse( this.pos.x, this.pos.y, this.r*2, this.r*2 );
    if( !this.notanuke ){
      fill(0);
      stroke(0);
      textFont(font);
      textSize(25);
      text( "NUKE", this.pos.x - 30, this.pos.y + 10 )
    }
    //point( this.pos.x, this.pos.y);
  }

  //_Hareket___________________________________________________________
  this.move = function(){
    this.vel.add( this.acc );
    this.pos.add( this.vel );
    this.acc.mult(0);
  }

  //_Yer_çekimi________________________________________________________
  this.grav = function () {

  }

  //_Sekme_____________________________________________________________
  this.bounce = function() {
    if ( this.pos.x - this.r == 0 ){
      this.vel.x = -1 * this.vel.x ;
    } else if ( this.pos.x + this.r == width ) {
      this.vel.x = -1 * this.vel.x ;
    }
    if ( this.pos.y - this.r == 0 ){
      this.vel.y = -1 * this.vel.y ;
    } else if ( this.pos.y + this.r == height ) {
      this.vel.y = -1 * this.vel.y ;
    }
  }

  //_Eğer_Çarpıyorsa___________________________________________________
  this.crashesto = function(other) {
    dis = dist( this.pos.x, this.pos.y, other.pos.x, other.pos.y );
    if ( dis < this.r + other.r ) {
      return true;
    } else {
      return false;
    }
  }

  //_Çekim_Etkisindeyse________________________________________________
  this.attracted = function (target) {
    var force = p5.Vector.sub(target.pos, this.pos);
    var d = force.magSq();
    var strenght = ( Grav * ((PI * sq(this.r)) * (PI * sq(target.r)))) / d; // * ((PI * sq(this.r)) * (PI * sq(target.r))))
    force.setMag(strenght);
    //if ( d < this.r+target.r+20 ) {
    //  force.mult(-1);
    //}
    this.acc.add(force);
  }

  this.drewline = function(){

    stroke(255,20);
    // Daire Kenarlari geçti ise
    if ( this.pos.x + this.r > width){
      this.pos.x = width - this.r ;
    } else if ( this.pos.x - this.r < 0 ) {
      this.pos.x = this.r ;
    }
    if ( this.pos.y + this.r > height){
      this.pos.y = height - this.r ;
    } else if ( this.pos.y - this.r < 0 ) {
      this.pos.y = this.r ;
    }

      line( this.prew.x , this.prew.y , this.pos.x , this.pos.y );

    //line( this.prew.x, this.prew.y, this.pos.x, this.pos.y );
    this.prew = this.pos.copy();
  }
}
