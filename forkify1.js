//ee85146c-00c6-4198-8072-5e35edaada45

var prevpage=document.querySelector(".backward");
var nextpage=document.querySelector(".forward");
var view=document.getElementById("sathya");
const mainimg=document.querySelector(".items");
var find=document.querySelector(".search");
find.addEventListener("click",searching);
var ind=document.querySelector(".ul-div");
var displayimage=document.querySelector(".itempic");

var datas;
var pmaterials;
var ingredientes;
var foods;
var a,idn;
var intake,ingreds;
var listlength;
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
                    <div class="dis${i} dis" onclick="printmaterials(${i})"><p class="listhead">${foods.data.recipes[i].title}</p>
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
	// pmaterials=document.getElementsByClassName(`.dis${i}`);
	// pmaterials.addEventListener("click",printmaterials);
	
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

async function printmaterials(i){
		// console.log("hello");
		// console.log("ijmno");
		ind.innerHTML="";
		//console.log(i);
		idn=foods.data.recipes[i].id;
		//console.log(idn);
		ingredientes=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${idn}?key=3e46c822-cacf-4dac-8a9b-c2d8a05516e3`);
		ingreds= await ingredientes.json();
		//console.log(ingreds);
		listlength=ingreds.data.recipe.ingredients.length;
		//console.log(listlength);
		
		for(let j=0;j<listlength;j++){
			//console.log(ingreds.data.recipe.ingredients[j]);
			let mat=await JSON.stringify(ingreds.data.recipe.ingredients[j].quantity);
			let qquantity=await JSON.stringify(ingreds.data.recipe.ingredients[j].unit);
			let qdiscription=await JSON.stringify(ingreds.data.recipe.ingredients[j].description);
			ind.innerHTML+=`<li class="li-div">${mat,qquantity,qdiscription}</li>`
		}
		displayimage.innerHTML=await `<img class="items" src="${ingreds.data.recipe.image_url}"></div>`;

}

