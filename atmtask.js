
var a=document.querySelector(".into");
a.addEventListener("click",open1);

var b=document.querySelector(".cancel");
b.addEventListener("click",close);
document.querySelector(".cancel1").addEventListener("click",closem);
document.querySelector(".cancel2").addEventListener("click",closem1);
document.querySelector(".cancel3").addEventListener("click",closem2);
document.querySelector(".cancel4").addEventListener("click",closem3);
function open1(){
		document.querySelector(".login-page").style.display="block";
}

function close(){
		document.querySelector(".login-page").style.display="none";
}
function closem(){
		document.querySelector(".main").style.display="none";
}
function closem1(){
		document.querySelector("#optwithdraw").style.display="none";
}
function closem2(){
		document.querySelector("#optdeposit").style.display="none";
}
function closem3(){
		document.querySelector(".tables").style.display="none";
}

//1st page script over
var i=1,ind;
const acc=["1111","2222","3333"];
const pin=["11","22","33"];
var balance=[10000,8000,20000];
const accname=["sathya","rocky","rohit"];
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
			balance[ind]-=Number(debit);
			ubalance.innerHTML=balance[ind];
			uname.innerHTML=accname[ind];
			transaction.push({Sno:i++,type:"withdraw",amount:debit,ACbalance:balance[ind]});
			document.querySelector(".main").style.display="block";
			draw.style.display="none";
			document.querySelector("#withdrawvalue").value="";
});
//deposit button function
var dpb=document.querySelector("#depositbutton");
dpb.addEventListener("click",function(){
			credit=document.getElementById("depositvalue").value;
			balance[ind]+=Number(credit);
			console.log(balance[ind]);
			ubalance.innerHTML=balance[ind];
			uname.innerHTML=accname[ind];
			transaction.push({Sno:i++,type:"deposit",amount:credit,ACbalance:balance[ind]});
			document.querySelector(".main").style.display="block";
			dip.style.display="none";
			document.querySelector("#depositvalue").value="";
});


	function sathya(){
	var accnum=document.getElementById("accountnumber").value;
	
		let s=acc.includes(accnum);
		if(s==true){
			ind=acc.indexOf(accnum);
			var pinn=document.getElementById("pin").value;
			if(ind==pin.indexOf(pinn)){
				alert("hello"); 
				document.querySelector(".login-page").style.display="none";
				document.querySelector(".main").style.display="block";
				ubalance.innerHTML=balance[ind];
				uname.innerHTML=accname[ind];
			}else{
				alert("enter correct pin");
			}
		}else{
			alert("enter correct details");
		}
		console.log(s);
		console.log(ind);
		document.querySelector("#accountnumber").value="";
		document.querySelector("#pin").value="";
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
			document.querySelector(".main").style.display="none";
			document.querySelector(".tables").style.display="block";
			for(let x=0;x<transaction.length;x++){
				
				var data=document.getElementsByTagName("tr");
				tbl.innerHTML+=`<tr>
				<td>${transaction[x].Sno}</td>
				<td>${transaction[x].type}</td>
				<td>${transaction[x].amount}</td>
				<td>${transaction[x].ACbalance}</td>
				</tr>`
				
				if(transaction[x].type==="withdraw"){
					
					data[x+1].style.color="red";
				}else if(transaction[x].type==="deposit"){
					
					data[x+1].style.color="green";
				}
			}	
}

