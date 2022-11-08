var diceroll,totalscore,roundscore,highscore=100,display,current,initial=0,winning=0;

var diceroll2,totalscore2,roundscore2,highscore2=100,display2,current2,initial2=0,winning2=0;

var option=0,opt;

function rolldice(diceroll,current){
		
		if(diceroll==1){
				current=0;
				initial=0;
				
				document.querySelector("#current--0").innerHTML=current;

				initial=0;
		
		}else{
		 current=diceroll;
		 current+=initial;
		document.querySelector("#current--0").innerHTML=current;
		
		initial=current;
		}
		
}
		
		
		
function rolling(){
diceroll=Math.trunc(Math.random()*6+1);
console.log(diceroll);
if(diceroll<=6){
display=document.querySelector(".dice");
display.setAttribute("src",`dice-${diceroll}.png`);
if(option%2==0){
	
	rolldice(diceroll,current);	
}else{
rolldice2(diceroll,current);
}

}
}

function shift(){
		
		if(option%2==0){
		
		opt=option;
		totalscore=initial;
		totalscore+=winning;
		document.querySelector("#score--0").innerHTML=totalscore;
		winning=totalscore;
		
		initial=0;
		document.querySelector("#current--0").innerHTML=initial;
		if(totalscore>=100){
			document.querySelector(".player player--0 player--active").style.backgroundColor=yellow;
		}
		changing();
		}else{
			
			opt=option;
		totalscore=initial;
		totalscore+=winning2;
		document.querySelector("#score--1").innerHTML=totalscore;
		winning2=totalscore;
		
		initial=0;
		document.querySelector("#current--1").innerHTML=initial;
		if(totalscore>=100){
				
				document.querySelector(".player player--1").style.backgroundColor=green;
					
		}
		changing();	
		}
		
			
}

function again(){
			location.reload();
}

function changing(){
			
			opt=3;
			option+=opt;
			if(option%2==0){
					//alert("player1");
					opt+=1;
					initial=0;
					current=0;
					
			
			}else{
				//alert("player2");
				opt+=1;
				initial=0;
					current=0;
					
				
				}
				
				
}

function rolldice2(diceroll,current){
		
		if(diceroll==1){
				current=0;
				initial=0;
				
				document.querySelector("#current--0").innerHTML=current;
				initial=0;
		
		}else{
		 current=diceroll;
		 current+=initial;
		document.querySelector("#current--1").innerHTML=current;
		
		initial=current;
		}
		
}



