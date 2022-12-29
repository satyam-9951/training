var getinfo = "posts";
var data;
var specialized = document.querySelector(".table-body");

// document.querySelector(".view-services").addEventListener("click",gettingdata)
gettingdata();
async function gettingdata() {
    await fetch(`http://localhost:3000/${getinfo}`, {

        method: "GET",
    })
        .then(x => { return x.json() })
        .then(y => {
            console.log(y)
            data = y;
        })
    console.log(data)
    console.log(specialized)

    sathya();
}
// gettingdata();

function sathya() {
    console.log(data)
    specialized.innerHTML = "";

    for (let i in data) {
        if(data[i].status=="ACTIVE"){
        specialized.innerHTML += `
        <tr>
        <th>${i}</th>
        <th><img src="${data[i].image}"></th>
        <th>${data[i].name}</th>
        <th>${data[i].compatibility}</th>
        <th>${data[i].number}</th>
        <th>${data[i].content}</th>
        <th><button>EDIT</button></th>
    </tr> `
    }
    else{
        console.log("status in active")
    }
}
}
