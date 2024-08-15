let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  Tie:0
};

  updateScoreElement();
/*if(!score){
  score = {
    wins:0,
    losses:0,
    tie:0
  };

}*/

  function playgame(playermove){
   const computermove = pickcomputermove();

   let result ='';

  if(playermove === 'scissors'){
      if(computermove === 'Rock'){
        result ='You lose';
      }else if (computermove === 'Paper'){
        result = 'You win';
      }else if(computermove === 'Scissors'){
        result = 'Tie';
      }
   }else if (playermove === 'paper'){
     if(computermove === 'Rock'){
        result = 'You win';
      }else if (computermove === 'Paper'){
        result = 'Tie';
      }else if (computermove === 'Scissors'){
        result = 'You lose';
      }
    }else if(playermove === 'rock'){
      if(computermove === 'Rock'){
        result = 'Tie';
      }else if(computermove === 'Paper'){
        result = 'You lose';
      }else if (computermove === 'Scissors'){
        result ='You win';
      }
    }   

    if (result ==='You win'){
       score.wins +=1;
    }else if(result ==='You lose'){
      score.losses +=1;
    }else if(result ==='Tie'){
      score.Tie +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = 
    `You
    <img src="images/${playermove}.jpg" class="move-icon">
    <img src="images/${computermove}.jpg"class="move-icon">
    Computer`;
}  

function updateScoreElement(){
  document.querySelector('.js-score')
   .innerHTML = `wins:${score.wins},losses:${score.losses},tie:${score.Tie}`;
}
  function pickcomputermove(){
    const randomnumber = Math.random();

    let computermove ='';
  
  if(randomnumber >= 0 && randomnumber < 1/3){
    computermove = 'Rock'
  }else if (randomnumber >= 1/3 && randomnumber < 2/3){
    computermove = 'Paper'
  }else if(randomnumber >= 2/3 && randomnumber <1){
    computermove = 'Scissors'
  }
  return computermove;
}