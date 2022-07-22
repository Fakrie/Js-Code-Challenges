var g1, g2, vx1, vx2, m1, m2, much, tvx1, tvx2;

function crashing( object1 , object2 ) {
  Crashline = new createVector( ( object1.pos.x - object2.pos.x) , (object1.pos.y - object2.pos.y) );
  dis = dist( object1.pos.x, object1.pos.y, object2.pos.x, object2.pos.y );
  much = Crashline.copy();
  much.setMag( ((object1.r + object2.r) - dis) / 2.0 );
  object1.pos.add( much );
  object2.pos.sub( much );

  m1 = (PI * sq(object1.r));
  m2 = (PI * sq(object2.r));

  g1 = p5.Vector.angleBetween( Crashline , object1.vel);
  g2 = p5.Vector.angleBetween( Crashline , object2.vel);

  vx1 = Crashline.copy() ;
  vx1.setMag( cos( g1 ) * object1.vel.mag() );
  tvx1 = vx1.copy();
  vx2 = Crashline.copy() ;
  //tempvectorx2.mult(-1) ; ????
  vx2.setMag( cos( g2 ) * object2.vel.mag() );
  tvx2 = vx2.copy();
  object1.vel.sub( vx1 );
  //object1.vel.add( tempvectorx2 );
  object2.vel.sub( vx2 );
  //object2.vel.add( tempvectorx1 );

  //tvx1.setMag( (vx1.mag() * (m1 - m2) + 2 * m2 * vx2.mag() ) / (m1 + m2) );
  //tvx2.setMag( (vx2.mag() * (m2 - m1) + 2 * m1 * vx1.mag() ) / (m1 + m2) );

  tvx1.mult( m1 - m2 ) ;
  tvx2.mult( 2 * m2 );
  tvx1.add( tvx2 );
  tvx1.div( m1 + m2 );
  object1.vel.add( tvx1 );

  tvx1 = vx1.copy();
  tvx2 = vx2.copy();
  tvx2.mult( m2 - m1 );
  tvx1.mult( 2 * m1 );
  tvx2.add( tvx1 );
  tvx2.div( m1 + m2 );
  object2.vel.add( tvx2 );

}
