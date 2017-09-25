        /*
        GAME RULES:

        - The game has 2 players, playing in rounds
        - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
        - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
        - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
        - The first player to reach 100 points on GLOBAL score wins the game

        */

        var scores , roundStore , activePlayer ;

        scores = [0,0];
        roundStore = 0;
        activePlayer = 0;


        document.querySelector('.dice').style.display = 'none';

        document.querySelector('.btn-roll').addEventListener('click',function(){

        var dice =  Math.floor(Math.random() * 6) + 1;
        var domDice = document.querySelector('.dice') ;
            domDice.style.display = 'block' ;
            domDice.src = 'dice-' + dice + '.png';
             roundStore = roundStore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundStore ; 
            //check if dice value is 1
            if(dice==1){
                roundStore = 0;
                document.querySelector('#current-' + activePlayer).textContent = 0 ;  
              if(activePlayer == 0){
                  activePlayer =1;

                  // add active class to player 1
            var active =  document.querySelector('.player-0-panel');
            active.classList.remove('active');
            var active1 = document.querySelector('.player-1-panel');
            active1.classList.add('active');
              }
                else if(activePlayer==1){
                  activePlayer = 0;
                    //add active class to player 0
                   var active2 =  document.querySelector('.player-1-panel');
                    active2.classList.remove('active');
                    var active3 = document.querySelector('.player-0-panel');
                    active3.classList.add('active'); 
                }
                }


        });

        document.querySelector('.btn-hold').addEventListener('click',function(){

        if(activePlayer == 0){

                //adding score per round
                 scores[0] = scores[0] + roundStore;
                 document.querySelector('#score-' + activePlayer).textContent =  scores[0] ; 
            //check if score is  greater or equal than 100 , declare winner
              if(scores[0] >= 100){
                document.querySelector('#name-0').textContent = "WINNER!" ;
                document.querySelector('.btn-hold').style.display = 'none';
                document.querySelector('.btn-roll').style.display = 'none';

            }
            document.querySelector('#current-' + activePlayer).textContent = 0 ;
            roundStore = 0;
            activePlayer = 1;

             // add active class to player 1

            var active =  document.querySelector('.player-0-panel');
            active.classList.remove('active');
            var active1 = document.querySelector('.player-1-panel');
            active1.classList.add('active');
        }
                else if(activePlayer==1){

                      scores[1] = scores[1] + roundStore;
            document.querySelector('#score-' + activePlayer).textContent =  scores[1] ; 
                         if(scores[1] >= 100){
                document.querySelector('#name-1').textContent = "WINNER!" ;
                document.querySelector('.btn-hold').style.display = 'none';
                document.querySelector('.btn-roll').style.display = 'none';

            }
                        document.querySelector('#current-' + activePlayer).textContent = 0 ;
                        roundStore = 0;
                        activePlayer = 0;

                             // add active class to player 0

                    var active2 =  document.querySelector('.player-1-panel');
                    active2.classList.remove('active');
                    var active3 = document.querySelector('.player-0-panel');
                    active3.classList.add('active');   
                }
        });

    // Reset Everthing
        document.querySelector('.btn-new').addEventListener('click',function(){

        if(confirm('Are you sure?')==true)    {

        scores[0] = 0 ;
        scores[1] = 0 ;    
        roundStore = 0;
        activePlayer = 0;
         var active2 =  document.querySelector('.player-1-panel');
       active2.classList.remove('active');
       var active3 = document.querySelector('.player-0-panel');
       active3.classList.add('active'); 
       document.querySelector('#name-0').textContent = "PLAYER 1" ;
       document.querySelector('#name-1').textContent = "PLAYER 2" ;

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'block';
        document.querySelector('.btn-roll').style.display = 'block';
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('#score-0').textContent =  ""; 
        document.querySelector('#score-1').textContent = "" ; 
        }
            else{
                console.log("Keep continue");
            }
        });