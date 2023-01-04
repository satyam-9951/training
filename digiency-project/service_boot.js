var getinfo = "posts";
var data;
var specialized = document.querySelector(".content-container");

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
        specialized.innerHTML += `
        <div class="col-3  float-start  px-2 py-2 services">

        <div class="card specific">
          <div class="col-12 p-3">
            <div class="col-3  float-start">
              <img class="card-img-top" src="${data[i].image}" alt="">
            </div>
            <div class="col-4 num float-end">
            ${data[i].number}
            </div>

          </div>
          <div class="card-body">
            <h4>${data[i].name}</h4>
            <h7>${data[i].compatibility}</h7>

            <h6>${data[i].content}</h6>
          </div>

        </div>

      </div>`
    }
}
