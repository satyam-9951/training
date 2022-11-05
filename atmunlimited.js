
var account=["21909046","9951409912","9849720878"];
var pin=["0852","1432","9951"];
var balance=[10000,12000,50000];
var transaction=[];
var w,x;


function verify(){
w=document.getElementById("accountnumber").value;
x=document.getElementById("pin").value;

	var i=0;
	while(i<account.length){
if (w==account[i] && x==pin[i]){
	
	alert("welcome to your account");
	selection(w,x,i);
	
}

	else {
		alert("please enter correct details");
		
		break;
		
	}
	
	if (w==account[i] && x==pin[i]) break;}clear(w,x,i);

}

function selection(w,x,i){

	
	
		do{
		var option=prompt("welcome to your account \n select an option \n 1.balance enquiry \n 2.deposit \n 3.withdraw \n 4.transactions\n5.exit");
		switch(option){
		
		case "1":accountbalance(w,x,i);break;
		case "2":deposit(w,x,i);break;
		case "3":withdraw(w,x,i);break;
		case "4":transaction_history(w,x,i);break;
		case "5":exit(w,x,i);break;
		}
		}while(option!=5);
		
}


function accountbalance(w,x,i){
	
	alert("your account balance is:" +balance[i]);
	
}

function deposit(w,x,i){
		
		var deposit = prompt("enter amount to deposit:");
						balance[i]+=parseInt(deposit);
						alert("your account balance is"+balance[i]);
						transaction.push(Date()+"deposit="+deposit+":total amount="+balance[i]+"\n");
		
}

function withdraw(w,x,i){
		
		var withdraw = prompt("enter the amount to withdraw:");
						if(withdraw>balance[i]){
							alert("insufficient funds");
						
						}
						else{
							balance[i]-=Number(withdraw);
						alert("your account balance is"+balance[i]);
						transaction.push(Date()+"withdrawl="+withdraw+":total amount="+balance[i]+"\n");
						}
		
}

function exit(w,x,i){

		alert("thank you visit again ");
		
		window.location.replace("atm_interface.html");	
		//window.location();
		//location.reload();
}

function transaction_history(w,x,i){					
						alert(transaction);

}
function clear(w,x,i)
{
	location.reload();
}

