var details=["21909046","0852",10000,"9951409912","1432",12000];
var transaction=[];
var w,x;
//let option;

//var w,x,y,k;
//var runagain=true;
//while(runagain){

//function validate(){
	//verify();
	//accountbalance();
//}

function verify(){
w=document.getElementById("accountnumber").value;
x=document.getElementById("pin").value;

if (w==details[0] && x==details[1] || w==details[3] && x==details[4]){
	
	alert("welcome to your account");
	selection(w,x);
	
}

	else {
		alert("please correct details");
	}

}


function selection(w,x){

	if (w==details[0] && x==details[1] || w==details[3] && x==details[4]){
	
	
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
	
	if (w==details[0] && x==details[1] ) {
							alert("your account balance is:" +details[2]);
							
							
						} else if (w==details[3] && x==details[4]) {
							alert("your account balance is:" +details[5]);
							
							
						}
}

function deposit(w,x){
		
		if (w==details[0] && x==details[1] ) {
						var deposit = prompt("enter amount to deposit:");
						details[2]+=parseInt(deposit);
						alert("your account balance is"+details[2]);
						
						
						}
						else if (w==details[3] && x==details[4]) {
							var deposit = prompt("enter amount to deposit:");
						details[5]+=Number(deposit);
						alert("your account balance is"+details[2]);
						
						
						}
}

function withdraw(w,x){
		
		if (w==details[0] && x==details[1] ) {
						var withdraw = prompt("enter the amount to withdraw:");
						if(withdraw>details[2]){
							alert("insufficient funds");
						
						}
						else{
							details[2]-=Number(withdraw);
						alert("your account balance is"+details[2]);
						}
						
						
						
						}
						
						else if (w==details[3] && x==details[4]) {
							var withdraw = prompt("enter amount to withdraw:");
						
						if(withdraw>details[5]){
							alert("insufficient funds");
						
						} else {
							details[5]-=Number(withdraw);
						alert("your account balance is"+details[5]);
						
						}
						
						
						}
}

function exit(w,x){

		alert("thank you visit again ");
		//window.location.replace("");	
		//window.location();
		window.location="atm_interface.html"
}

