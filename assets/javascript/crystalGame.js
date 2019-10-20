////////////////////////////////////////////////////////////////////////
// Beginning code   
  
  $( document ).ready(function(){
  // Starting the game with a random score
  var randomStart=Math.floor(Math.random()*102+19)
  
  // Print randome start number to HTML id=randomScore
  $('#randomScore').text(randomStart);
  
  // Start and random score for each crystal
  var purple, green, blue, red;
  purple = Math.floor(Math.random()*12+1)
  green = Math.floor(Math.random()*12+1)
  blue = Math.floor(Math.random()*12+1)
  red = Math.floor(Math.random()*12+1)
  
  // Game score varialbes
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  

$('#wins').text(wins);
$('#losses').text(losses);

// Restart new game
function resetGame(){
      randomStart=Math.floor(Math.random()*102+19);
      console.log(randomStart)
      $('#randomScore').text(randomStart);
      purple = Math.floor(Math.random()*12+1);
      green = Math.floor(Math.random()*12+1);
      blue = Math.floor(Math.random()*12+1);
      red = Math.floor(Math.random()*12+1);
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
      } 
// Display winnnig Game
function winningGame() {
  alert("Well done! You won!");
  wins++; 
  $('#wins').text(wins);
  resetGame();
}
// Display losses
function lossingGame(){
alert ("Game Over!");
  losses++;
  $('#losses').text(losses);
  resetGame()
}
// Clicking crystals
  $('.purple').on ('click', function(){
    playerTotal = playerTotal + purple;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
          //Win & lose conditions
        if (playerTotal == randomStart){
          winningGame();
        }
        else if ( playerTotal > randomStart){
          lossingGame();
        }   
  })  
  $('.green').on ('click', function(){
    playerTotal = playerTotal + green;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
        if (playerTotal == randomStart){
          winningGame();
        }
        else if ( playerTotal > randomStart){
          lossingGame();
        } 
  })  
  $('.blue').on ('click', function(){
    playerTotal = playerTotal + blue;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);

          if (playerTotal == randomStart){
          winningGame();
        }
        else if ( playerTotal > randomStart){
          lossingGame();
        } 
  })  
  $('.red').on ('click', function(){
    playerTotal = playerTotal + red;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
      
          if (playerTotal == randomStart){
          winningGame();
        }
        else if ( playerTotal > randomStart){
          lossingGame();
        }
  });   
}); 