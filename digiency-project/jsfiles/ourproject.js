

var getimage;
var projectimage = document.getElementById('project');
project();
export async function project() {
    await fetch(`http://localhost:3000/projects`, {

        method: "GET",
    })
        .then(g => { return g.json() })
        .then(h => {
            console.log(h)
            getimage = h;
        })
    projectprinting();
}

function projectprinting() {
    console.log(projectimage)
    projectimage.innerHTML="";
    for (let img in getimage) {
        projectimage.innerHTML += `
                    <div class="col-4 float-start">
                    <img class="w-100" src="${getimage[img].image}" alt="">
                    </div>`;
    }
}
