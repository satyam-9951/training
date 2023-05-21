var btnid=document.getElementsByClassName("specific-button");
var specificid;

for(var a=0;a<btnid.length;a++){
    console.log(btnid[a].id)
    specificid=document.getElementById(btnid[a].id).addEventListener("click",execution)
    
}
var calling,req;
function execution() {
    console.log(btnid)
    var key = document.getElementById(btnid[a].id);
    req = key.innerText;
    var links = {
        Series: "https://api.cricapi.com/v1/series?apikey=0fa75ae2-01d8-4235-b0c0-2766fc000477&offset=0",
        Matches: "https://api.cricapi.com/v1/matches?apikey=0fa75ae2-01d8-4235-b0c0-2766fc000477&offset=0"
    }
    console.log(req)
    console.log(Object.keys(links))
    calling=links[req];
    // series();
}

function date() {
    const d = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let m = months[d.getMonth()]
    var today = (d.getDate() + "th " + " " + m + " " + d.getFullYear());
    console.log(today)
}
date();

// document.querySelector(".series").addEventListener("click", execution);
var seriesdata;
// async function series() {
//     await fetch(calling, {
//         method: "GET",
//     })
//         .then(x => { return x.json() })
//         .then(x => (seriesdata = x.data))
//     console.log(seriesdata)
//     document.querySelector(".series-content").innerHTML = "";
//     valueof(req)();
// }

function Series() {
    document.querySelector(".series-content").innerHTML = "";
    for (const key in seriesdata) {
        document.querySelector(".series-content").innerHTML +=
            `<div class="card mx-1 my-2 px-2 py-2 individual-blocks float-start">
        <div class="card-body">
        <h2 class="series-heading">
            ${seriesdata[key].name}
        </h2>
        <h3 class="series-dates">
        ${seriesdata[key].startDate} to ${seriesdata[key].endDate}
        </h3>
        <h3 class="series-type">
        ${seriesdata[key].odi + " odi"}
        </h3>
        </div>
        <div class="card-footer">
        <hr>
        <div class="col-12 d-flex justify-content-center">
            <div class="col-3 text-center">
                <img class="flag-logo" src="./download.jpg" alt="" srcset="">
            </div>
            <div class="col-3 text-center">
                <img class="flag-logo" src="./download.jpg" alt="" srcset="">
            </div>
        </div>
        <hr>
        <button class="Series-datails-btn">Series details</button>
        </div>
    </div>`
    }
}

// this for printing the matches details

function matches() {
    document.querySelector(".series-content").innerHTML = "";
    for (const i in seriesdata) {
        document.querySelector(".series-content").innerHTML += `
        <div class="card px-0 mx-1 my-1 individual-blocks ">
                <div class="card-body text-center match-card">
                    <h3 class="card-title">${seriesdata[i].name}</h3>
                    <h5 class="match-time">3pm saturday</h5>
                    <hr class="my-2">
                    <p >India</p>
                    <p >v</p>
                    <p >Pakistan</p>
                    <hr class="my-2">
                    <p>Match Not Started Yet</p>
                </div>

                <div class="card-footer match-card-image">
                    <button class="match-btn">Match Details</button>
                </div>

            </div>`
    }
}