
function set_dicce ()
{
     player1= Math.floor(Math.random() * 7);
     player2= Math.floor(Math.random() * 7);
    if(player1 == 1){
        document.getElementById("img1").src="image/dice1.png";
    }else if(player1  == 2){
        document.getElementById("img1").src="image/dice2.png";
    }else if(player1  == 3){
        document.getElementById("img1").src="image/dice3.png";
    }else if(player1  == 4){
        document.getElementById("img1").src="image/dice4.png";
    }else if(player1 == 5){
        document.getElementById("img1").src="image/dice5.png";
    }else{
        document.getElementById("img1").src="image/dice6.png";
    }
    if(player2== 1){
        document.getElementById("img2").src="image/dice1.png";
    }else if(player2 == 2){
        document.getElementById("img2").src="image/dice2.png";
    }else if(player2 == 3){
        document.getElementById("img2").src="image/dice3.png";
    }else if(player2 == 4){
        document.getElementById("img2").src="image/dice4.png";
    }else if(player2 == 5){
        document.getElementById("img2").src="image/dice5.png";
    }else{
        document.getElementById("img2").src="image/dice6.png";
    }
}
function winner (){
    if(player1 > player2){
        document.getElementById('hh').innerHTML = "player 1 is win <3";

       
    }else if(player1 < player2){
        document.getElementById('hh').innerHTML = "player 2 is win <3";
    
    }else{
        document.getElementById('hh').innerHTML = "player1 == player2";
    }
}
