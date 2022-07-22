function Person(x, y, side) {
  this.pos = createVector(x ,y );
  this.side = side;
}

Person.prototype.turn = function(val) {
  switch (val) {
    case 1:
      if ( persan.side > 0){
        persan.side -= 1;
      } else if (persan.side == 0) {
        persan.side = 3;
      }
      break;
    case -1:
      if ( persan.side < 3){
        persan.side += 1;
      } else if (persan.side == 3) {
        persan.side = 0;
      }
      break;
    default:
  }
}

Person.prototype.mov = function(val) {
  switch ( this.side ) {
    case 0:
      if(mawp[this.pos.y][this.pos.x-val]!=1){
        this.pos.x -= val;
      }
      break;
    case 1:
      if ( mawp[this.pos.y+val][this.pos.x]!=1 ) {
        this.pos.y += val;
      }
      break;
    case 2:
      if ( mawp[this.pos.y][this.pos.x+val]!=1 ) {
        this.pos.x += val;
      }
      break;
    case 3:
      if ( mawp[this.pos.y-val][this.pos.x]!=1 ) {
        this.pos.y -= val;
      }
      break;
    default:
    console.log("whoat?");
  }
}

Person.prototype.see = function() {
  var lilmap = [
    [NaN,NaN,NaN,NaN,NaN],
    [NaN,NaN,NaN,NaN,NaN],
    [NaN,NaN,NaN,NaN,NaN],
    [NaN,NaN,NaN,NaN,NaN],
    [NaN,NaN,NaN,NaN,NaN],
    [NaN,NaN,NaN,NaN,NaN],
    [NaN,NaN,NaN,NaN,NaN]
  ];

  for ( i=0; i<=4; i++){
    for( j=-3; j<=3; j++ ){
      switch (this.side) {
        case 0: // left
          if ( this.pos.y-j >= 0 && this.pos.x-i >=0 && this.pos.y-j < mawp.length && this.pos.x-i < mawp[0].length){
            lilmap[j+3][i] = mawp[this.pos.y-j][this.pos.x-i];
          }
          break;
        case 1: // up
          if ( this.pos.y+i >= 0 && this.pos.y+i >=0 && this.pos.y+i < mawp.length && this.pos.y+i < mawp[0].length) {
            lilmap[j+3][i] = mawp[this.pos.y+i][this.pos.x-j];
          }
          break;
        case 2: // right
          if ( this.pos.y+j >= 0 && this.pos.x+i >=0 && this.pos.y+j < mawp.length && this.pos.x+i < mawp[0].length) {
            lilmap[j+3][i] = mawp[this.pos.y+j][this.pos.x+i];
          }
          break;
        case 3: // down
          if ( this.pos.y-i >= 0 && this.pos.x+j >=0 && this.pos.y-i < mawp.length && this.pos.x+j < mawp[0].length ) {
            lilmap[j+3][i] = mawp[this.pos.y-i][this.pos.x+j];
          }
          break;
        default:
          consol.log("wat");
      }
    }
  }
  view(lilmap);
}
