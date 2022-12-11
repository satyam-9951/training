
var prevpage=document.querySelector(".backward");
var nextpage=document.querySelector(".forward");
var view=document.getElementById("sathya");
const mainimg=document.querySelector(".items");
var find=document.querySelector(".search");
find.addEventListener("click",searching);

var datas;
var pmaterials;
var foods;
var a,idn;
var intake,ingreds;
var pages=1;
const initialpage=1;
var limit=9;
var npages;

async function searching(){
		
			intake=document.querySelector(".user-input").value;
			console.log(intake);
			 datas= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${intake}&key=3e46c822-cacf-4dac-8a9b-c2d8a05516e3`);
			console.log(datas);
			 view.innerHTML="";
			foods=await datas.json();
			console.log(foods);
			npages=Math.ceil(foods.results/9);
			console.log(npages);
			a=foods.data.recipes.length;
		
printing();
}
			async function printing (){
				
				for(var i=(pages*limit)-limit;i<pages*limit;i++){
			try{			
	 view.innerHTML+=`<li>
        <div  class="list">
                    <div class="pic"><img class="item" src="${foods.data.recipes[i].image_url}"></div>
                    <div class="dis" onclick="${foods.data.recipes[i]}"><p class="listhead">${foods.data.recipes[i].title}</p>
					<p class="dec">${foods.data.recipes[i].publisher}</p></div>
        </div>
			</li>`
			//alert(view.innerHTML);
			}
			catch(err){
				console.log(err);
			}
					}
					 
	if(initialpage==pages){
		 prevpage.style.display="none";
		 nextpage.style.display="block";
	}
	else if(pages==npages){
		prevpage.style.display="block";
		 nextpage.style.display="none";
	}
	else if(pages<npages || pages>npages){
		prevpage.style.display="block";
		 nextpage.style.display="block";
	}
	pmaterials=document.getElementsByClassName(".dis");
	pmaterials.addEventListener("click",printmaterials);
	
}

nextpage.addEventListener("click",forwardpage);
 function forwardpage(i){
	 view.innerHTML="";
	pages++;
	printing();
}

prevpage.addEventListener("click",backwardpage);
 function backwardpage(i){
	 view.innerHTML="";
	 pages--;
	 printing();
}

function printmaterials(){
		console.log("hello");
		console.log("ijmno");
		idn=0;
		ingreds=0;
		console.log(ingreds);
 }

