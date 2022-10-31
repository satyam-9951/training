
var a='21909046';
var b='0852';
var c='9951409912';
var d='1432';
let e=10000;
let f=12000;
//let option;

//var w,x,y,k;
//var runagain=true;
//while(runagain){

function validate(){
	verify();
	//accountbalance();
}

function verify(){
var w=document.getElementById("accountnumber").value;
var x=document.getElementById("pin").value;

if (w==a && x==b || w==c && x==d){
	
	alert("welcome to your account");
	selection(w,x);
	
}

	else {
		alert("please correct details");
	}

}


function selection(w,x){

	if (w==a && x==b || w==c && x==d){
	
	
		do{
		var option=prompt("welcome to your account \n select an option \n 1.balance enquiry \n 2.deposit \n 3.withdraw \n 4.exit");
		switch(option){
		
		case "1":accountbalance(w,x);break;
		case "2":deposit(w,x);break;
		case "3":withdraw(w,x);break;
		case "4":exit(w,x);break;
		}
		}while(option!=4);
		
}
}


function accountbalance(w,x){
	
	if (w==a && x==b ) {
							alert("your account balance is:" +e);
							
							
						} else if (w==c && x==d) {
							alert("your account balance is:" +f);
							
							
						}
}

function deposit(w,x){
		
		if (w==a && x==b ) {
						var deposit = prompt("enter amount to deposit:");
						e+=Number(deposit);
						alert("your account balance is"+e);
						
						
						}
						else if (w==c && x==d) {
							var deposit = prompt("enter amount to deposit:");
						f+=Number(deposit);
						alert("your account balance is"+f);
						
						
						}
}

function withdraw(w,x){
		
		if (w==a && x==b ) {
						var withdraw = prompt("enter the amount to withdraw:");
						if(withdraw>e){
							alert("insufficient funds");
						
						}
						else{
							e-=Number(withdraw);
						alert("your account balance is"+e);
						}
						
						
						
						}
						
						else if (w==c && x==d) {
							var withdraw = prompt("enter amount to withdraw:");
						
						if(withdraw>f){
							alert("insufficient funds");
						
						} else {
							f-=Number(withdraw);
						alert("your account balance is"+f);
						
						}
						
						
						}
}

function exit(w,x){

		alert("thank you visit again ");
		//window.location.replace("");	
		//window.location();
		window.location="atm.html"
}

