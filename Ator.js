//códigos do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor,xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown (UP_ARROW)){
       yAtor -=2;
  }
  
   if(keyIsDown (DOWN_ARROW)){
     if(podeSeMover()){
      yAtor +=2;
     }
  }
  
  if(keyIsDown (RIGHT_ARROW)){
    xAtor +=2;
  }
  
  if(keyIsDown (LEFT_ARROW)){
    xAtor -=2;
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao(){
  for(let i = 0; i<imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos-=1;
      }
      
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize (30);
  fill(color(0,139,139));
  text(meusPontos, width/5, 29);
}

function marcaPonto(){
  if(yAtor<15){
    meusPontos+=1;
    somPonto.play();
     voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos>0
}


