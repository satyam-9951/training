var a=[];
var sum=0;
var size;
var b;
var c;


function discount(){
		
		do{
		b=prompt("enter the items");
		
		
		console.log(b);
		
		
		if(b!="end"){
		a.push(b);
		sum+=Number(b);
		console.log(sum);
		
		}
		
		
		
		}while(b!="end");
		
		alert("hai");
		console.log(a);
		console.log(sum);
		c=a.length;
		console.log(c);
		
		if(sum>=5000 && c>=5 ){
				
				console.log("you have got a discount of 20%="+((sum/100)*20));
			console.log("final price="+(sum-(sum/100)*20));
		
		}
		
		else if(sum>=2000 && c>=5 ){
				
				console.log("you have got a discount of 10%="+((sum/100)*10));
			console.log("final price="+(sum-(sum/100)*10));
				
		
		}else{
			console.log("you have no discount");
		}
		
        
        
		
	}
	
	//var sum = a.reduce(function(e, f){
           // return   Number(e + f);
       // }, 0);   console.log(sum);
