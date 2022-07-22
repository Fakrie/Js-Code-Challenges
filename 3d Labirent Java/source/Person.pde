

class Person {
  PVector pos;
  int posx,posy;
  int side;
  int[][] lilmap;
  
  Person(int tempX, int tempY, int tempSide) {
    pos = new PVector( tempX, tempY );
    posx = tempX;
    posy = tempY;
    side = tempSide;
    lilmap = new int[][]{
      new int[] {0,0,0,0,0},
      new int[] {0,0,0,0,0},
      new int[] {0,0,0,0,0},
      new int[] {0,0,0,0,0},
      new int[] {0,0,0,0,0},
      new int[] {0,0,0,0,0},
      new int[] {0,0,0,0,0}
    };
  }
  
  void turn(int val) {
    switch (val) {
      case 1:
        if ( side > 0 ) {
          side -= 1;
        } else if ( side == 0 ) {
          side = 3;
        }
        break;
      case -1:
        if ( side < 3 ) {
          side += 1;
        } else if ( side == 3 ) {
          side = 0;
        }
    }
  }
  
  void mov(int val) {
    switch ( side ) {
      case 0:
        if(mawp[posy][posx-val]!=1){
          posx -= val;
        }
        break;
      case 1:
        if ( mawp[posy+val][posx]!=1 ) {
          posy += val;
        }
        break;
      case 2:
        if ( mawp[posy][posx+val]!=1 ) {
          posx += val;
        }
        break;
      case 3:
        if ( mawp[posy-val][posx]!=1 ) {
          posy -= val;
        }
     }
   }

  void see() {
    for ( int i=0; i<=4; i++ )
      for ( int j=-3; j<=3; j++ ){
        switch ( side ) {
          case 0: // left
            //view(mawp[posy-j][posx-i],i,j);
            
            if ( posy-j >= 0 && posx-i >= 0 && posy-j < mawp.length && posx-i < mawp[0].length ) {
              lilmap[j+3][i] = mawp[posy-j][posx-i];
            }
            
            break;
          case 1: // up
            //view(mawp[posy+i][posx-j],i,j);
            
            if (  posy+i >= 0 && posx-j >=0 && posy+i < mawp.length && posx-j < mawp[0].length ) {
              lilmap[j+3][i] = mawp[posy+i][posx-j];
            }
            
            break;
          case 2: // right
            //view(mawp[posy+j][posx+i],i,j);
            
            if ( posy+j >= 0 && posx+i >=0 && posy+j < mawp.length && posx+i < mawp[0].length) {
              lilmap[j+3][i] = mawp[posy+j][posx+i];
            }
            
            break;
          case 3: // down
            //view(mawp[posy-i][posx+j],i,j);
            
            if ( posy-i >= 0 && posx+j >=0 && posy-i < mawp.length && posx+j < mawp[0].length ) {
              lilmap[j+3][i] = mawp[posy-i][posx+j];
            }
            
        }
        drawArray(mawp,mawpname,80,10);
        drawArray(lilmap,lilmapname,80+19*uz,10);
        text("mouseX :"+mouseX,80+19*uz,10+8*uz);
      }
      
      for(int i=0; i<=4; i++ )
        for(int j=-3; j<=3; j++ ){
            //printArray(lilmap[j+3][4-i]);
            switch (lilmap[j+3][4-i]) {
              case 1:
                noStroke();
                pushMatrix();
                translate((j*(width/6))+(width/2.4), (width/60)+(width/1.5)-(width/4), (i*(width/6))+(width/12) );
                beginShape();
                texture(wallImg);
                vertex(0,0,0,0,0);
                vertex(0,width/6,0,0,1024);
                vertex(width/6,width/6,0,1024,1024);
                vertex(width/6,0,0,1024,0);
                endShape();
                popMatrix();
                
                pushMatrix();
                rotateY(HALF_PI);
                translate( -1*(i*(width/6))+(width/12)-(width/6), (width/60)+(width/1.5)-(width/4), (j*(width/6))+(width/2.4));
                
                beginShape();
                texture(wallImg);
                vertex(0,0,0,0,0);
                vertex(0,width/6,0,0,1024);
                vertex(width/6,width/6,0,1024,1024);
                vertex(width/6,0,0,1024,0);
                endShape();
                popMatrix();
                
                pushMatrix();
                rotateY(HALF_PI);
                translate( -1*(i*(width/6))+(width/12)-(width/6), (width/60)+(width/1.5)-(width/4), (j*(width/6))+(width/2.4)+(width/6));
  
                
                beginShape();
                texture(wallImg);
                vertex(0,0,0,0,0);
                vertex(0,width/6,0,0,1024);
                vertex(width/6,width/6,0,1024,1024);
                vertex(width/6,0,0,1024,0);
                endShape();
                popMatrix();
                
                break;
                
              default:
                noStroke();
                pushMatrix();
                rotateX(-HALF_PI);
                translate((j*(width/6))+(width/2.4), -1*(i*(width/6))+(width/12)-(width/6) , (width/60)+(width/1.5)-(width/4)+(width/6));
                //translate((j*(width/6))+(width/2) , -1*(i*(width/6)) , ((width/60)+(width/1.5))-(width/12));

                beginShape();
                texture(floorImg);
                vertex(0,0,0,0,0);
                vertex(0,width/6,0,0,1024);
                vertex(width/6,width/6,0,1024,1024);
                vertex(width/6,0,0,1024,0);
                endShape();

                //fill(100 + i*25); //(i+j+0.75)*25
                //stroke(0);
                //translate((j*(width/6))+(width/2) , ((width/60)+(width/1.5)), (i*(width/6)));
                //box(width/6,width/6,width/6);
                popMatrix();
            }
        }

  }
   
}