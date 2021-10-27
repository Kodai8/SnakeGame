

  ctx.fillStyle = "lime";
  ctx.fillRect(canv.width/2, canv.height/2, SIZE-2, SIZE-2);

setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width,canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px, y:py});
  for(let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE , snake[i].y*SIZE , SIZE-2 , SIZE-2);
    if(snake[i].x==px && snake[i].y==py){
      tail = MIN;

    }
  }

  while(snake.length > tail){
    snake.shift();
  }
  if (appleX == px && appleY == py){
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE , appleY*SIZE , SIZE-2 , SIZE-2);
  if (appleA == px && appleB == py){
    tail--;
    appleA = Math.floor(Math.random()*canv.width/SIZE);
    appleB = Math.floor(Math.random()*canv.height/SIZE);
    if(tail == 0){
      document.location.reload();
    }
  }
  ctx.fillStyle = "purple";
  ctx.fillRect(appleA*SIZE , appleB*SIZE , SIZE-2 , SIZE-2);
}, 1000/FPS);
