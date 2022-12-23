var foods = "posts";
var demo = "comments", discount;
var data, idno, indiprice, sum = 0, tax = 0;
var customer;
var orderhistory = [];
var orders = [];
var totalhistory;
var displaydata;
var present;
temp=-1;


var showing = document.querySelector(".history-table");
showing.style.display = "none";
var showing1 = document.querySelector(".brief");
showing1.style.display = "none";
document.querySelector(".show-list").addEventListener("click", orderstable)
// document.querySelector(".show-list").addEventListener("click", displayorders)
document.querySelector(".current").addEventListener("click", gettingdata)
const items = document.querySelector(".items-list")
async function gettingdata() {
    sum = 0;
    tax = 0;
    discount = 0;
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
    //console.log(data)
    items.innerHTML = "";
    for (var i = 1; i <= data.length; i++) {
        try {
            items.innerHTML += `<div class="item item${data[i]}" id="hai${i}" onclick="additems(${i})">
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
    console.log(i)
    // document.querySelector(`.items${i}`).disabled=true;
    // document.getElementById(`hai${i}`).disabled = "true";

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
    <td><input type="number" onfocusout="takingorder(${i})" value="1" class="indiprices${i} indiprices"></td>
    <td class="itemprice${i} itemprice">${data[i].price}</td>
    </tr>`;
    indiprice = document.querySelector(`.indiprices${i}`).value;
    // orders.push({
    //                 item:``,
    //             })
    console.log(i)
    idno = i;
    // document.querySelector(`.indiprices${idno}`).addEventListener("focusout", takingorder)
    // document.querySelector(`.items${i}`).removeEventListener("onclick",`additems(${i}`)
}

function takingorder(i) {
    console.log(i)
    console.log(idno)
    console.log(data)
    console.log(indiprice)
    indiprice = document.querySelector(`.indiprices${i}`).value;
    indiprice = 1 * indiprice;
    // if(`${data[idno].name}`==)
    let person = `${data[i].name}`;
    console.log(person)
    let orderresult = orders.includes(person);
    console.log(orderresult);
    console.log(orders.length);
    console.log(orders.includes([0].id))
       if(orderresult==false){
        orders.push({
            item: `${data[i].name}`, 
            quantity: `${indiprice}`,
            total: `${data[i].price}`,
            id:`${data[i].id}`
            // key:`${temp++}`
        })}
        else{
            console.log("already replaced")
        }
    console.log(orders)
    document.querySelector(`.itemprice${i}`).innerHTML = `${data[i].price * indiprice}`
    sum += Number(`${(data[i].price) * (indiprice)}`);
    console.log(sum);
    tax += (sum * 4) / 100;
    tax = Math.trunc(tax);
    sum += tax;
    sum = Math.trunc(sum)
    discount = document.querySelector(".discountbar").value;

    discount = Math.trunc((discount * sum) / 100);
    sum -= discount;
    console.log(discount);
    document.querySelector(".totaldiscount").innerHTML = `${discount}`
    document.querySelector(".total").innerHTML = `${sum}`
    document.querySelector(".taxes").innerHTML = `${tax}`
}

document.querySelector(".order").addEventListener("click", senddata)

async function senddata() {
    customer = document.querySelector(".details").value;
    orderhistory = {
        customer: `${customer}`,
        discount: `${discount}`,
        tax: `${tax}`,
        total: `${sum}`,
        orders: orders
    }
    // orderhistory.push(
    //                     orders=`${orders}`
    //                  )
    console.log(orderhistory)
    console.log(JSON.stringify(orderhistory))

    await fetch(`http://localhost:3000/${demo}`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },

        body: JSON.stringify({
            user: orderhistory
        })

    })
        .then(h => { return h.json() })
        .then(b => { console.log(b) })
    console.log(customer);
    console.log(discount);
    console.log(tax);
    console.log(sum);
    document.querySelector(".details").value = "";
    document.querySelector(".discountbar").value = "";
    displaytable.innerHTML = `<tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>`;
}

// function displayorders() {
//     alert("no orders till now")
// }
document.querySelector(".clear").addEventListener("click", clearing)

function clearing() {

    // alert("clear all");
    document.querySelector(".details").value = "";
    document.querySelector(".discountbar").value = "";
    displaytable.innerHTML = `<tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>`;

}
// orderstable();
var showhistory = document.querySelector(".tabledata")
async function orderstable() {
    showing.style.display = "block";
    await fetch(`http://localhost:3000/${demo}`, {
        method: "GET",
    })
        .then(samp => { return samp.json() })
        .then(sample => { displaydata = sample })

    console.log(displaydata)
    // console.log(displaydata[0].user.customer)
    showhistory.innerHTML = "";
    for (let p in displaydata) {
        console.log(p)
        console.log(displaydata[p].user.customer)
        showhistory.innerHTML += `<tr>
                    <td class="displaydata">${p}</td>
                    <td class="displaydata">${displaydata[p].user.customer}</td>
                    <td class="displaydata">${displaydata[p].user.total}</td>
                    <td class="displaydata"><button class="viewdetails viewdetails${p}" onclick="breifdetail(${p})">details</button></td>
                </tr>`
    }
}

// breifdetail();
var foodlist = document.querySelector(".food-list");
function breifdetail(p) {
    showing1.style.display = "block";
    console.log(`welcome${p}`)
    console.log(p)
    present = displaydata[p].user.orders;
    console.log(present);
    // console.log(displaydata[p].user.customer)
    foodlist.innerHTML = "";
    for (k in present) {
        foodlist.innerHTML += `<tr class="historytable-borders">
                            <td class="displaydatas">${present[k].item}</td>
                            <td class="displaydatas">${present[k].quantity}</td>
                            <td class="displaydatas">${present[k].total}</td>
                        </tr> `

        document.querySelector(".print").innerHTML = `${displaydata[p].user.discount}`;
        document.querySelector(".total-tax").innerHTML = `${displaydata[p].user.tax}`;
        document.querySelector(".total-price").innerHTML = `${displaydata[p].user.total}`;


    }
}

document.querySelector(".close").addEventListener("click", hide)
document.querySelector(".close1").addEventListener("click", hide)
function hide() {

    showing.style.display = "none";
    showing1.style.display = "none";
}

