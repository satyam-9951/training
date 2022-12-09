
var prevpage=document.querySelector(".backward");
var nextpage=document.querySelector(".forward");
var view=document.getElementById("sathya");
const mainimg=document.querySelector(".items");

var find=document.querySelector(".search");
find.addEventListener("click",searching);

var datas;
var foods;
var a;
var intake=1;
var pages=1;
var limit=9;
var npages;

//search();
async function searching(){
		
			intake=document.querySelector(".user-input").value;
			console.log(intake);
			 datas=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${intake}&key=3e46c822-cacf-4dac-8a9b-c2d8a05516e3`);
			console.log(datas);
			 view.innerHTML="";
			foods=await datas.json();
			console.log(foods);
			npages=Math.ceil(foods.results/9);
			console.log(npages);
			a=foods.data.recipes.length-1;
		
printing();
}
			function printing (){
				
					for(var i=(pages*limit)-limit;i<pages*limit;i++){
						
    view.innerHTML+=`<li>
        <div  class="list">
                    <div class="pic"><img class="item" src="${foods.data.recipes[i].image_url}"></div>
                    <div class="dis"><p class="listhead">${foods.data.recipes[i].title}</p>
					<p class="dec">${foods.data.recipes[i].publisher}</p></div>
        </div>
    </li>`

}
console.log(pages);
console.log(npages);
	if(pages==pages){
		 prevpage.style.display="none";
		 nextpage.style.display="block";
	}
	else if(pages==npages){
		prevpage.style.display="block";
		 nextpage.style.display="none";
	}
	 
}

nextpage.addEventListener("click",forwardpage);
 function forwardpage(i){
	 view.innerHTML="";
	pages++;
	console.log(pages);
	printing();
}

prevpage.addEventListener("click",backwardpage);
 function backwardpage(i){
	 view.innerHTML="";
	 pages--;
	 console.log(pages);
	 printing();
}





