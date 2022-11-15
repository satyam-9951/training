
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
		document.querySelector(".main").style.display="none";
}

//1st page script over

var accountnumber=21909046;
var pass=9951;
var balance=10000;
var accname="rocky";
var transaction=[];
var credit,debit;
var ubalance=document.querySelector("#userbalance");
var uname=document.querySelector("#username");
var draw=document.querySelector("#optwithdraw");
var dip=document.querySelector("#optdeposit");
//var trans=document.querySelector("#transaction");


//withdraw button function
var wdb=document.querySelector("#withdrawbutton");
wdb.addEventListener("click",function(){
			debit=document.getElementById("withdrawvalue").value;
			balance-=Number(debit);
			ubalance.innerHTML=balance;
			uname.innerHTML=accname;
			transaction.push("withdrawl="+debit+":total amount="+balance+"\n");
			//alert(transaction);
			document.querySelector(".main").style.display="block";
			draw.style.display="none";
});
//deposit button function
var dpb=document.querySelector("#depositbutton");
dpb.addEventListener("click",function(){
			credit=document.getElementById("depositvalue").value;
			balance+=Number(credit);
			ubalance.innerHTML=balance;
			uname.innerHTML=accname;
			transaction.push("deposit="+credit+":total amount="+balance+"\n");
			//console.log(transaction);
			document.querySelector(".main").style.display="block";
			dip.style.display="none";
});


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
	
}
else{
	alert("please enter correct details");
}
}

//withdraw

function withdraw(){
			document.querySelector(".main").style.display="none";
			draw.style.display="block";
			
}

//deposit

function deposit(){
			document.querySelector(".main").style.display="none";
			dip.style.display="block";		
}

function transactions(){
			
			alert(transaction);
}

