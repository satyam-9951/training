
// debugger;
var getfeed = "feedback";
var feed;
var feedbackcontent = document.querySelector(".slides");

export async function gettingfeed() {
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
                    <img src="${feed[a].rating}" alt="" srcset="">
                </div>
                <div class="col-12">
                    <h6 class="feedback-content">
                    ${feed[a].comment}
                    </h6>
                </div>
                <div class="col-12 d-flex">
                    <div class="col-3">
                        <img src="${feed[a].image}" alt="">
                    </div>
                    <div class="col-6"> 
                        <h6 class="feedback-name mt-3">${feed[a].feedback_name}</h6>
                        <h7 class="feedback-position">${feed[a].position}</h7>
                    </div>
                    <div class="col-2">
                        <img src="${feed[a].quotes}" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div> `

    }
}