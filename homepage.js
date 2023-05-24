var getservices = "posts";
var data;
var specialized = document.querySelector(".services-container");
gettingdata()
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

// debugger;
var getfeed = "feedback";
var feed;
var feedbackcontent = document.querySelector(".slides");

async function gettingfeed() {
    await fetch(`http://localhost:3000/feedback`, {

        method: "GET",
    })
        .then(p => { return p.json() })
        .then(q => {
            console.log(q)
            feed = q;
        })
    feedbackprinting();
}


function feedbackprinting() {
    console.log(feed)
    feedbackcontent.innerHTML = "";
    for (let a in feed) {
        feedbackcontent.innerHTML += `<div class="card mx-3 col-4">
        <div class="card-body">
            <div class="col-12 specific-feedback">

                <div class="col-12">
                    <img src=${feed[a].rating} alt="" srcset="">
                </div>
                <div class="col-12">
                    <h6 class="feedback-content">
                    ${feed[a].comment}
                    </h6>
                </div>
                <div class="col-12 d-flex">
                    <div class="col-3">
                        <img src=${feed[a].image} alt="">
                    </div>
                    <div class="col-6"> 
                        <h6 class="feedback-name mt-3">${feed[a].feedback_name}</h6>
                        <h7 class="feedback-position">${feed[a].position}</h7>
                    </div>
                    <div class="col-2">
                        <img src=${feed[a].quotes} alt="">
                    </div>
                </div>

            </div>
        </div>
    </div> `

    }
}

