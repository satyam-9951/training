var getinfo = "posts";
var data;
var specialized = document.querySelector(".service-content");

async function gettingdata() {
    await fetch(`http://localhost:3000/${getinfo}`, {

        method: "GET",
    })
        .then(x => {return x.json() })
        .then(y=>{console.log(y)
                    data=y;
        })
    console.log(data)
    console.log(specialized)
    
    sathya();
}
gettingdata();

function sathya(){
    console.log(data)
    specialized.innerHTML = "";

    for(let i in data) {
        // alert("hello")
        specialized.innerHTML += `
        <div class="specific">
        <img class="picture" src="${data[i].image}">
        <div class="num">
        ${data[i].number}
        </div>
        <h4>${data[i].name}</h4>
        <h7>${data[i].compatibility}</h7>

        <h6>${data[i].content}</h6>
    </div>

        `
    }
}
