var prevpage=document.querySelector(".backward");
var nextpage=document.querySelector(".forward");
var view=document.getElementById("sathya");
var find=document.querySelector(".search");
const mainimg=document.querySelector(".items");

var pages=1;
displaying();
function displaying(){
for(var i=(pages*9)-9;i<pages*9;i++){

    view.innerHTML+=`<li>
        <div  class="list">
                    <div class="pic"><img class="item" src="${info.recipes[i].image_url}"></div>
                    <div class="dis"><p class="listhead">${info.recipes[i].title}</p>
					<p class="dec">${info.recipes[i].publisher}</p></div>
        </div>
    </li>`
	
}

if((pages*9)==9){
		 prevpage.style.display="none";
		 nextpage.style.display="block";
	 }
	 else if((pages*9)>=27 ){
		 prevpage.style.display="block";
		 nextpage.style.display="none";
	 }
	 else if( (pages*9)>9 ){
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
