import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class sketch_3dishlookin extends PApplet {

int[][] mawp = new int[][] {
  new int[] {1,1,1,1,1,1,1,1,1},
  new int[] {1,0,0,0,0,1,1,1,1},
  new int[] {1,1,1,1,0,1,1,1,1},
  new int[] {1,1,1,1,0,1,1,1,1},
  new int[] {1,0,0,0,0,0,1,1,1},
  new int[] {1,0,0,0,0,1,1,1,1},
  new int[] {1,0,0,0,0,1,1,1,1},
  new int[] {1,0,0,0,0,0,1,1,1},
  new int[] {1,0,1,1,0,1,1,1,1},
  new int[] {1,0,0,0,0,1,1,1,1},
  new int[] {1,1,1,1,0,1,1,1,1},
  new int[] {1,1,1,1,0,1,1,1,1},
  new int[] {1,0,0,0,0,0,1,1,1},
  new int[] {1,1,1,1,0,1,1,1,1},
  new int[] {1,1,1,1,0,1,1,1,1},
  new int[] {1,1,1,1,0,0,1,1,1},
  new int[] {1,1,1,1,1,1,1,1,1}
};
int uz = 12;
String lilmapname = "lilmap", mawpname = "mawp";
Person persan;
PImage wallImg, floorImg;
public void setup(){
  
  translate(100,100,100);
  persan = new Person( 4, 4, 0 );
  textSize(uz);
  wallImg = loadImage("wall.jpg");
  floorImg = loadImage("floor.jpg");

}

public void draw() {
  background(0);
  lights();
  persan.see();

  
}

public void keyPressed() {
  switch (keyCode) {
    case LEFT:
    persan.turn(-1);
      break;
    case RIGHT:
    persan.turn(1);
      break;
    case UP:
    persan.mov(1);
      break;
    case DOWN:
    persan.mov(-1);
      break;
    default:

  }
}

public void drawArray(int[][] dizi, String name,int pox,int poy) {
  fill(255);
  stroke(200);
  int varx = pox, vary = poy;
  text(name+" :",varx,vary);
  vary += uz;
  for(int i=0; i < dizi.length; i++) {
    text("{",varx,vary);
    varx += uz;
    for(int j=0; j < dizi[0].length; j++) {
      if (j!=0){ text(",",varx,vary); varx += uz; }
      text(dizi[i][j],varx,vary);
      varx += uz;
    }
    text("}",varx,vary);
    vary += uz;
    varx = pox;
  }
}


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
  
  public void turn(int val) {
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
  
  public void mov(int val) {
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

  public void see() {
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
                translate((j*(width/6))+(width/2.4f), (width/60)+(width/1.5f)-(width/4), (i*(width/6))+(width/12) );
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
                translate( -1*(i*(width/6))+(width/12)-(width/6), (width/60)+(width/1.5f)-(width/4), (j*(width/6))+(width/2.4f));
                
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
                translate( -1*(i*(width/6))+(width/12)-(width/6), (width/60)+(width/1.5f)-(width/4), (j*(width/6))+(width/2.4f)+(width/6));
  
                
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
                translate((j*(width/6))+(width/2.4f), -1*(i*(width/6))+(width/12)-(width/6) , (width/60)+(width/1.5f)-(width/4)+(width/6));
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
  public void settings() {  size(600,600, P3D ); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch_3dishlookin" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
