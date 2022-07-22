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
void setup(){
  size(600,600, P3D );
  translate(100,100,100);
  persan = new Person( 4, 4, 0 );
  textSize(uz);
  wallImg = loadImage("wall.jpg");
  floorImg = loadImage("floor.jpg");

}

void draw() {
  background(0);
  lights();
  persan.see();

  
}

void keyPressed() {
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

void drawArray(int[][] dizi, String name,int pox,int poy) {
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