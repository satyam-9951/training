var input;
var display,score=20,highscore=0;
var answer=Math.trunc(Math.random()*20);

function validate(){
		
		if(input==answer){
				correct();
			
		}
		else if(input <0 || input>20){
			alert("enter a number between 1-20");
			clear();
		}
		else if(input<answer){
				low();
		
		}
		else if(input>answer){
					high();
		}else{
			alert("enter a number between 1-20");
			clear();
		}
		

}

function check(){
	
	console.log(answer);
	input=document.querySelector(".input").value;
	input=Math.trunc(input);
	console.log(input);
	validate();
	
}

function correct(){
		
      		if(highscore==score){
		highscore=score;
		document.querySelector("#high").textContent="🎖️  Highscore:"+highscore;
		}
		else if(highscore<score){
		highscore=score;
			document.querySelector("#high").textContent="🎖️  Highscore:"+highscore;
		}
		
		document.querySelector("#range").innerHTML=("you won");
		document.querySelector(".body").style.backgroundColor="green";
		document.querySelector("#output").textContent=+input;
		document.querySelector("#score").textContent="💯️  score:"+score;
			
		clear();
		
		
		
}

function low(){
		score--;
		document.querySelector("#range").innerHTML=("you are too low");
		document.querySelector(".body").style.backgroundColor="black";
		document.querySelector("#score").textContent="💯️  score:"+score;
		clear();
		
}
function high(){
		score--;
		document.querySelector("#range").innerHTML=("you are too high");
		document.querySelector(".body").style.backgroundColor="black";
		document.querySelector("#score").textContent="💯️  score:"+score;
		clear();
		
		
}

function again(){
		
		score=20;
		document.querySelector("#range").innerHTML=("Start Guessing...");
		document.querySelector(".body").style.backgroundColor="black";
		document.querySelector("#score").textContent="💯️  score:"+score;
		answer=Math.trunc(Math.random()*20);
		console.log(answer);
		
}

function clear(){
		document.querySelector(".input").value="";
}




