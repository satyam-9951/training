document.querySelector(".submit").addEventListener("click", posting);
var getinfo = "posts";
async function posting() {
    console.log("hello");
    var image = document.querySelector(".get-image").value;
    var name = document.querySelector(".get-name").value;
    var compatibility = document.querySelector(".get-compatibility").value;
    var number = document.querySelector(".get-number").value;
    var content = document.querySelector(".get-content").value;
    var status = document.querySelector(".get-status").value;


    console.log(status)
    // var image=document.querySelector(".get-image").value;
    await fetch(`http://localhost:3000/${getinfo}`, {

        method: "POST",
        headers: { 'content-type': 'application/json' },

        body: JSON.stringify({
            "image": `${image}`,
            "name": `${name}`,
            "compatibility": `${compatibility}`,
            "number": `${number}`,
            "content": `${content}`,
            "status": `${status}`
        })
    })

}