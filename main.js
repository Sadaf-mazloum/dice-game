
function set_dicce ()
{
     player1= Math.floor(Math.random() * 6)+1;
     player2= Math.floor(Math.random() * 6)+1;
    if(player1 == 1){
        document.getElementById("img1").src="images/dice1.png";
    }else if(player1  == 2){
        document.getElementById("img1").src="images/dice2.png";
    }else if(player1  == 3){
        document.getElementById("img1").src="images/dice3.png";
    }else if(player1  == 4){
        document.getElementById("img1").src="images/dice4.png";
    }else if(player1 == 5){
        document.getElementById("img1").src="images/dice5.png";
    }else{
        document.getElementById("img1").src="images/dice6.png";
    }
    if(player2== 1){
        document.getElementById("img2").src="images/dice1.png";
    }else if(player2 == 2){
        document.getElementById("img2").src="images/dice2.png";
    }else if(player2 == 3){
        document.getElementById("img2").src="images/dice3.png";
    }else if(player2 == 4){
        document.getElementById("img2").src="images/dice4.png";
    }else if(player2 == 5){
        document.getElementById("img2").src="images/dice5.png";
    }else{
        document.getElementById("img2").src="images/dice6.png";
    }
    winner();
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

