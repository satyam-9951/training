var foods = "posts";
var demo="comments",discount;
var data, idno, indiprice, sum = 0, tax = 0;
var customer;
gettingdata();
const items = document.querySelector(".items-list")
async function gettingdata() {
    await fetch(`http://localhost:3000/${foods}`, {
        method: "GET",
        headers: { 'content-type': 'application/json' }

    })
        .then(x => {
            return x.json()
            console.log(x)
        })
        .then(a => { data = a })
        .catch(error => { console.log(error) })
    console.log(data)
    items.innerHTML = "";
    for (var i = 1; i <= data.length; i++) {
        try {
            items.innerHTML += `<div class="item item${data[i]}" onclick="additems(${i})">
                                <h4>${data[i].name}</h4>
                                <p class="rate">Price:1*${data[i].price}</p>
                            </div>`
        }
        catch (mistake) {
            console.log(mistake)
        }

    }
}
const rates = document.querySelector("td");
const displaytable = document.querySelector(".table-data")
function additems(i) {
    console.log("helo")
    console.log(data)
    console.log(data[i])
    // displaytable.innerHTML="";
    // displaytable.innerHTML=` <tr>
    // <th>Item</th>
    // <th>Quantity</th>
    // <th>Price</th>
    // </tr>
    // <tr>`;
    displaytable.innerHTML += `<tr>
    <td class="itemname">${data[i].name}</td>
    <td><input type="number" class="indiprices${i} indiprices"></td>
    <td class="itemprice${i} itemprice">${data[i].price}</td>
    </tr>`;
    indiprice = document.querySelector(`.indiprices${i}`).value;
    document.querySelector(`.indiprices${i}`).addEventListener("input", allert)
    idno = i;
}

function allert() {
    // alert("hello")
    console.log(idno)
    console.log(data)
    console.log(indiprice)
    indiprice = document.querySelector(`.indiprices${idno}`).value;
    document.querySelector(`.itemprice${idno}`).innerHTML = `${data[idno].price * indiprice}`
    document.querySelector(`.itemprice${idno}`).innerHTML = `${data[idno].price * indiprice}`
    sum += Number(`${(data[idno].price) * (indiprice)}`);
    //console.log(sum)
    tax += (4 / sum) * 100;
    tax=Math.trunc(tax);
    sum += tax;
    sum = Math.trunc(sum)
    discount=document.querySelector(".discountbar").value;
    
    discount=Math.trunc((discount/sum)*100);
    sum-=discount;
    console.log(discount);
    document.querySelector(".totaldiscount").innerHTML=`${discount}`
    document.querySelector(".total").innerHTML = `${sum}`
    document.querySelector(".taxes").innerHTML = `${tax}`
    
}
document.querySelector(".order").addEventListener("click",senddata)

async function senddata() {
    customer = document.querySelector(".details").value;

    await fetch(`http://localhost:3000/${demo}`, {
        // method: "POST",
        // headers: { 'content-type': 'application/json' },
        // body:JSON.stringify({
        //     name:`${customer}`,
        //     quantity:``,
        //     discount:`${discount}`,
        //     tax:`${tax}`,
        //     totalprice:`${sum}`  
        // })

    })
    .then(h=>{return h.json()})
    .then(b=>{console.log(b)})
    console.log(customer);
    console.log(discount);
    console.log(tax);
    console.log(sum);
}