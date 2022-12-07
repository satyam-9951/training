var prevpage=document.querySelector(".backward");
var nextpage=document.querySelector(".forward");
var view=document.getElementById("sathya");
var find=document.querySelector(".search");
const mainimg=document.querySelector(".items");

var a=info.recipes.length;
console.log(a);
var pages=1;
var limit=9;
displaying();
function displaying(){
for(var i=(pages*limit)-limit;i<pages*limit;i++){

    view.innerHTML+=`<li>
        <div  class="list">
                    <div class="pic"><img class="item" src="${info.recipes[i].image_url}"></div>
                    <div class="dis"><p class="listhead">${info.recipes[i].title}</p>
					<p class="dec">${info.recipes[i].publisher}</p></div>
        </div>
    </li>`

}

if((pages*limit)==limit){
		 prevpage.style.display="none";
		 nextpage.style.display="block";
	 }
	 else if((pages*limit)==a-1){
		 prevpage.style.display="block";
		nextpage.style.display="none";
		 //nextpage.disabled=true;
	 }
	 else if((pages*limit)>limit ){
		 prevpage.style.display="block";
		 nextpage.style.display="block";
	 }

}

nextpage.addEventListener("click",forwardpage);
 function forwardpage(i){
	 view.innerHTML="";
	pages++;
	displaying();
}

prevpage.addEventListener("click",backwardpage);
 function backwardpage(i){
	 view.innerHTML="";
	 pages--;
	 displaying();
}
