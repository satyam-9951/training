
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
var i=1;
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
var tbl=document.querySelector(".result");

//withdraw button function
var wdb=document.querySelector("#withdrawbutton");
wdb.addEventListener("click",function(){
			debit=document.getElementById("withdrawvalue").value;
			balance-=Number(debit);
			ubalance.innerHTML=balance;
			uname.innerHTML=accname;
			transaction.push({Sno:i++,type:"withdraw",amount:debit,ACbalance:balance});
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
			transaction.push({Sno:i++,type:"deposit",amount:credit,ACbalance:balance});
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
			
			console.log(transaction);
			
			for(var x=0;x<transaction.length;x++){
				
				//var data=document.getElementsByTagName("tr");
				tbl.innerHTML+=`<tr>
				<td>${transaction[x].Sno}</td>
				<td>${transaction[x].type}</td>
				<td>${transaction[x].amount}</td>
				<td>${transaction[x].ACbalance}</td>
				</tr>`
				
				if(transaction.type==="withdraw"){
					document.getElementByTagName("td").style.color="red";
				}else if(transaction.type==="deposit"){
					document.getElementByTagName("td").style.color="green";
				}
			}	
}

