
var a=document.querySelector(".into");
a.addEventListener("click",open1);

var b=document.querySelector(".cancel");
b.addEventListener("click",close);

function open1(){
		document.querySelector(".login-page").style.display="block";
}

function close(){
		document.querySelector(".login-page").style.display="none";
		document.querySelector("#optwithdraw").style.display="none";
		document.querySelector("#optdeposit").style.display="none";
		document.querySelector("#.main").style.display="none";
}

//1st page script over

var accountnumber=21909046;
var pass=9951;
var balance=10000;
var accname="rocky";
var transaction=[];
var ubalance=document.querySelector("#userbalance")
var uname=document.querySelector("#username");
var draw=document.querySelector("#optwithdraw");
var dip=document.querySelector("#optdeposit");


function sathya(){
var accnum=document.getElementById("accountnumber").value;
var pinn=document.getElementById("pin").value;

console.log(accnum,pinn);

if(accnum==accountnumber && pinn==pass){
	
	alert("hello"); 
	document.querySelector(".login-page").style.display="none";
	document.querySelector(".main").style.display="block";
	ubalance.innerHTML=balance;
	uname.innerHTML=accname;
	
	//draw.addEventListener("click",withdraw);
	//dip.addEventListener("click",deposit);
	
}
else{
	alert("please enter correct details");
}
}

//withdraw

function withdraw(){
			document.querySelector(".main").style.display="none";
			draw.style.display="block";
			var credit=document.getElementById("withdrawvalue").value;
			//balance+=credit;
		
}

//deposit

function deposit(){
			document.querySelector(".main").style.display="none";
			dip.style.display="block";
			var credit=document.getElementById("depositvalue").value;
			//balance-=debit;
			
}
