//ee85146c-00c6-4198-8072-5e35edaada45

var prevpage=document.querySelector(".backward");
var nextpage=document.querySelector(".forward");
var view=document.getElementById("sathya");
const mainimg=document.querySelector(".items");
var find=document.querySelector(".search");
find.addEventListener("click",searching);
var ind=document.querySelector(".ul-div");
var displayimage=document.querySelector(".itempic");
var learning=document.querySelector(".direction");

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
var source;

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
		ind.innerHTML="";

		idn=foods.data.recipes[i].id;

		ingredientes=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${idn}?key=3e46c822-cacf-4dac-8a9b-c2d8a05516e3`);
		ingreds= await ingredientes.json();

		listlength=ingreds.data.recipe.ingredients.length;
		
		for(let j=0;j<listlength;j++){
			let mat=await JSON.stringify(ingreds.data.recipe.ingredients[j].quantity);
			let qquantity=await JSON.stringify(ingreds.data.recipe.ingredients[j].unit);
			let qdiscription=await JSON.stringify(ingreds.data.recipe.ingredients[j].description);
			ind.innerHTML+=`<li class="li-div">${mat,qquantity,qdiscription}</li>`
		}
		source=ingreds.data.recipe.source_url;
		console.log(source)
		displayimage.innerHTML=await `<img class="items" src="${ingreds.data.recipe.image_url}"></div>`;
		// learning.href=`"${source}"`;
		// learning.setAttribute("href",`"${source}"`);
		// learning.setAttribute()
		learning.href = "http://www.cnn.com/"; 

}



