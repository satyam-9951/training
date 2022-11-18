
var a=document.querySelector(".into");
a.addEventListener("click",open1);

var b=document.querySelector(".cancel");
b.addEventListener("click",close);
document.querySelector(".cancel1").addEventListener("click",closem);
document.querySelector(".cancel2").addEventListener("click",closem1);
document.querySelector(".cancel3").addEventListener("click",closem2);
document.querySelector(".cancel4").addEventListener("click",closem3);
document.querySelector(".cancel5").addEventListener("click",closem4);
document.querySelector(".cancel6").addEventListener("click",closem5);
function open1(){
		document.querySelector(".login-page").style.display="block";
}
function close(){
		document.querySelector(".login-page").style.display="none";
}
function closem(){
		document.querySelector(".main").style.display="none";
		document.querySelector(".login-page").style.display="block";
}
function closem1(){
		document.querySelector("#optwithdraw").style.display="none";
		document.querySelector(".main").style.display="block";
}
function closem2(){
		document.querySelector("#optdeposit").style.display="none";
		document.querySelector(".main").style.display="block";
}
function closem3(){
		document.querySelector(".tables").style.display="none";
		tbl.innerHTML=`<tr>
   				<th>S.no</th>
   				<th>TRANSACTION TYPE</th>
   				<th>AMOUNT</th>
   				<th>A/C BALANCE</th>
   				</tr>`;
}
function closem4(){
		document.querySelector("#invalid").close();
		document.querySelector(".login-page").style.display="block";
}
function closem5(){
		document.querySelector("#insufficient").close();
}

//1st page script over
var ind,index;
const acc=["1111","2222","3333"];
const pin=["11","22","33"];
var balance=[10000,8000,20000];
const accname=["sathya","rocky","rohit"];
var transaction=[[],[],[]];
var credit,debit;
var ubalance=document.querySelector("#userbalance");
var uname=document.querySelector("#username");
var draw=document.querySelector("#optwithdraw");
var dip=document.querySelector("#optdeposit");
var tbl=document.querySelector(".result");
var i=1;
//withdraw button function
var wdb=document.querySelector("#withdrawbutton");
wdb.addEventListener("click",function(){
			debit=document.getElementById("withdrawvalue").value;
			if(debit<=balance[ind]){
			balance[ind]-=Number(debit);
			ubalance.innerHTML=balance[ind];
			uname.innerHTML=accname[ind];
			transaction[ind].push({Sno:i++,type:"withdraw",amount:debit,ACbalance:balance[ind]});
			document.querySelector(".main").style.display="block";
			draw.style.display="none";
			document.querySelector("#withdrawvalue").value="";
			}else{
				document.querySelector("#insufficient").showModal();
				document.querySelector("#withdrawvalue").value="";
			}
});
//deposit button function
var dpb=document.querySelector("#depositbutton");
dpb.addEventListener("click",function(){
			credit=document.getElementById("depositvalue").value;
			balance[ind]+=Number(credit);
			console.log(balance[ind]);
			ubalance.innerHTML=balance[ind];
			uname.innerHTML=accname[ind];
			transaction[ind].push({Sno:i++,type:"deposit",amount:credit,ACbalance:balance[ind]});
			document.querySelector(".main").style.display="block";
			dip.style.display="none";
			document.querySelector("#depositvalue").value="";
});

	function sathya(){
	var accnum=document.getElementById("accountnumber").value;
		
		let s=acc.includes(accnum);
		if(s==true){
			ind=acc.indexOf(accnum);
			index=ind;
			var pinn=document.getElementById("pin").value;
			if(ind==pin.indexOf(pinn)){
				alert("hello"); 
				document.querySelector(".login-page").style.display="none";
				document.querySelector(".main").style.display="block";
				ubalance.innerHTML=balance[ind];
				uname.innerHTML=accname[ind];
			}else{
				document.querySelector("#invalid").showModal();
			}
		}else{
			document.querySelector("#invalid").showModal();
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
			console.log(transaction[index]);
			document.querySelector(".main").style.display="none";
			document.querySelector(".tables").style.display="block";
			for(let x=0;x<transaction[index].length;x++){
				
				var data=document.getElementsByTagName("tr");
				
				tbl.innerHTML+=`<tr>
				<td>${transaction[index][x].Sno}</td>
				<td>${transaction[index][x].type}</td>
				<td>${transaction[index][x].amount}</td>
				<td>${transaction[index][x].ACbalance}</td>
				</tr>`
				 
				if(transaction[index][x].type==="withdraw"){
					
					data[x+1].style.color="red";
				}else if(transaction[index][x].type==="deposit"){
					
					data[x+1].style.color="green";
				}
			}	
}
