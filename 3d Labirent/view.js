function view(lmap){
  fill(255);
  stroke(0);

  for( i=0; i<=4; i++ ){
    for( j=-3; j<=3; j++ ){
        switch (lmap[j+3][4-i]) {
          case 1:
            push();
            fill((i+j+1)*25);
            stroke(0);
            translate((j*(width/6)), (width/60), (width/12) +(i*(width/6)));
            box(width/6,width/6,width/6);
            pop();
            break;
          default:
            push();
            fill((i+j+0.75)*25);
            stroke(0);
            translate((j*(width/6)), ((width/60)+(width/6)), (width/12) +(i*(width/6)));
            box(width/6,width/6,width/6);
            pop();
        }

      }

  }
}
