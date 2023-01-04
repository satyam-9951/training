var getinfo = "feedback";
var data;
var specialized = document.querySelector(".slides");

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
        <div class="card mx-3 col-4">
                    <div class="card-body">
                        <div class="col-12 specific-feedback">

                            <div class="col-12">
                                <img src=${data[i].rating} alt="" srcset="">
                            </div>
                            <div class="col-12">
                                <h6 class="feedback-content">
                                ${data[i].comment}
                                </h6>
                            </div>
                            <div class="col-12 d-flex">
                                <div class="col-3">
                                    <img src=${data[i].image} alt="">
                                </div>
                                <div class="col-6">
                                    <h6 class="feedback-name mt-3">${data[i].feedback_name}</h6>
                                    <h7 class="feedback-position">${data[i].position}</h7>
                                </div>
                                <div class="col-3">
                                    <img src=${data[i].quotes} alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>`
    }
}
