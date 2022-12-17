var individual;
var detailsdata, info, access;
var adding = document.querySelector(".add");
adding.addEventListener("click", contact);
var Name = document.querySelector(".c-name").value;
var num = document.querySelector(".ph-number").value;
var mail = document.querySelector(".date").value;
var dob = document.querySelector(".mail").value;

async function contact() {
    await fetch('http://localhost:3000/comments/', {
        method: 'POST',
        body: JSON.stringify({
            "name": `${Name}`,
            "number": `${num}`,
            "dob": `${dob}`,
            "mail": `${mail}`
        }),
        headers: { 'content-type': "application/json" }
    })
        .then(x => { return x.json() })
        .then(x => { console.log(x) })
        .catch(y => { console.log('kicked an error') })
    console.log("hello");
}
const recive = document.querySelector(".get").addEventListener("click", printingdata);
const tabledata = document.querySelector(".data");
async function printingdata() {
    tabledata.innerHTML = "";
    tabledata.innerHTML = `<table class="data">
            <tr class="details-head">
                <th>CONTACT NAME</th>
                <th>PHONE NUMBER</th>
                <th>DOB</th>
                <th>MAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </table>`;
    await fetch('http://localhost:3000/comments/', {
        method: 'GET',
    })
        .then(a => { return a.json() })
        .then(a => { detailsdata = a })
    console.log(detailsdata)
    for (let i = 0; i <= detailsdata.length; i++) {
        try {
            tabledata.innerHTML += `<tr class="details">
                <td>${detailsdata[i].name}</td>
                <td>${detailsdata[i].number}</td>
                <td>${detailsdata[i].mail}</td>
                <td>${detailsdata[i].dob}</td>
                <td><button class="edit${i} editing" onclick="editing('${detailsdata[i].id}')">EDIT</button></td>
                <td><button class="delete${i} deleting" onclick="deleting('${detailsdata[i].id}')">DELETE</button></td>
            </tr>`
        }
        catch (error) {
            console.log(error)
        }
    }
}
async function deleting(id) {
    await fetch(`http://localhost:3000/comments/${id}`, {
        method: 'DELETE',
    })
    console.log("jai NTR")
}
var formprint = document.querySelector(".form-add");
async function editing(id, Name, num, mail, dob) {
    console.log(id);
    access = id;

    await fetch(`http://localhost:3000/comments/${id}`, {
        method: "GET",
        headers: { 'content-type': "application/json" }

    })
        .then(individual => { return individual.json() })
        .then(individual => { info = individual })
    console.log(info)

    console.log("jai powerstar");
    formprint.innerHTML = "";
    formprint.innerHTML = `<h2>CONTACTS</h2>
            NAME: <input type="text" class="c-name" value="${info.name}" placeholder="contact-name"><br>
            NUMBER: <input type="text" class="ph-number" value="${info.number}" placeholder="contact-number"><br>
            DOB: <input type="date" class="date" value="${info.mail}" placeholder="DOB"><br>
            E-MAIL: <input type="text" class="mail" value="${info.dob}" placeholder="MAIL"><br>`
    console.log(access);
}
async function modification() {
    var Name = document.querySelector(".c-name").value;
    var num = document.querySelector(".ph-number").value;
    var mail = document.querySelector(".date").value;
    var dob = document.querySelector(".mail").value;
    console.log(access);
    await fetch(`http://localhost:3000/comments/${access}`, {
        method: "PUT",
        body: JSON.stringify({
            "name": `${Name}`,
            "number": `${num}`,
            "dob": `${dob}`,
            "mail": `${mail}`
        }),
        headers: { 'content-type': "application/json" }
    })
    console.log(Name)
}
