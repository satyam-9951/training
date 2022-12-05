var prevpage=document.querySelector(".backward");
var nextpage=document.querySelector(".forward");
var view=document.getElementById("sathya");
var find=document.querySelector(".search");
//find.addEventListener("click",searching);


for(var i=0;i<9;i++){

    view.innerHTML+=`<li>
        <div  class="list">
                    <div class="pic"><img class="item" src="${info.recipes[i].image_url}"></div>
                    <div class="dis"><p class="listhead">${info.recipes[i].title}</p><p class="dec">${info.recipes[i].publisher}</p></div>
        </div>
    </li>`	
}

nextpage.addEventListener("click",pagenotation);
 function pagenotation(i){
    console.log(i);
    i+=9;
    console.log(i);

}

prevpage.addEventListener("click",pagenotation);
 function pagenotation(i){
    console.log(i);
    i+=9;
    console.log(i);
}