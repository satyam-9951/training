
import { gettingfeed } from "./ourtestimonial.js";

var getservices = "posts";
var data;
var specialized = document.querySelector(".services-container");
gettingdata();
gettingfeed();
async function gettingdata() {
    await fetch(`http://localhost:3000/${getservices}`, {

        method: "GET",
    })
        .then(x => { return x.json() })
        .then(y => {
            console.log(y)
            data = y;
        })

    printingdata();
}
;

function printingdata() {
    console.log(data)
    specialized.innerHTML = "";
    for (let i in data) {
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
            <h4 class="stream">${data[i].name}</h4>
            <h7 class="compatibility">${data[i].compatibility}</h7>

            <h6 class="service-content">${data[i].content}</h6>
          </div>

        </div>

      </div>`
    }

}