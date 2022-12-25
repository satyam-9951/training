var data,sum,tax=4,discount,orders=[];
var foods = "posts";
var demo="comments";
var displaydata;
var indiprice=1;
var itemname;
var itemprice;
var itemid,idno;
var individualquantity=1;
const items = document.querySelector(".items-list");


document.querySelector(".show-list").addEventListener("click", orderstable)
var showing = document.querySelector(".history-table");
showing.style.display = "none";
var showing1 = document.querySelector(".brief");
showing1.style.display = "none";

const displaytable = document.querySelector(".table-datas")
document.querySelector(".current").addEventListener("click", gettingdata)
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
                items.innerHTML += `<div class="item item${i}" id="hai${i}" onclick="additems(${i})">
                                    <h4>${data[i].name}</h4>
                                    <p class="rate">Price:1*${data[i].price}</p>
                                </div>`
            }
            catch (mistake) {
                console.log(mistake)
            }
    
        }
    }

        //pushing items

    function additems(i) {
            console.log(i)
            document.querySelector(`.item${i}`).removeAttribute("onclick");
        
            console.log("helo")
            console.log(data)
            console.log(data[i])
           
            console.log(i)
            idno = i;

            orders.push({
                        item: `${data[i].name}`, 
                        quantity: `${individualquantity}`,
                        total: `${data[i].price}`,
                        id:`${data[i].id}`
                    })
                    console.log(orders)
                    billprinting();
                    // console.log(i)

        }

        function billprinting(){

            displaytable.innerHTML="";
                for(let s in orders){
                displaytable.innerHTML += `<tr>
                <td class="itemid itemid${s}">${orders[s].id}</td>
                <td class="itemname itemname${s}">${orders[s].item}</td>
                <td><input type="number" onfocusout="reciveingorder(${s})" value="${indiprice}" class="indiprices${s} indiprices"></td>
                <td class="itemprice${s} itemprice">${orders[s].total}</td>
                </tr>`;
                }
                
        }

        //reciveing order

        function reciveingorder(s,i){

            // alert("helo")
            itemid = document.querySelector(`.itemid${s}`).innerHTML;
            indiprice = document.querySelector(`.indiprices${s}`).value;
            itemname = document.querySelector(`.itemname${s}`).innerHTML;
            itemprice = document.querySelector(`.itemprice${s}`).innerHTML;
            console.log(indiprice);
            console.log(itemprice)
            console.log(data)
            console.log(orders[s])
            
            console.log(orders)

            calculation(s);
        }

        //calculation

        function calculation(s){

            // console.log(s)
            var x=data[idno].price*indiprice;
            // console.log(x)
            document.querySelector(`.itemprice${s}`).innerHTML=x;
            // console.log(itemprice)
            orders[s]=({
                item: `${orders[s].item}`, 
                quantity: `${indiprice}`,
                total: `${x}`,
                id:`${orders[s].id}`
            })

            console.log(orders)
            sum=0;
            discount=0;
            for(rs in orders){

                sum+=Number(orders[rs].total);
                console.log(sum)

            }

           

            document.querySelector(".total").innerHTML = `${sum}`
            // givingdiscount();
        }

        //discount
        
        document.querySelector(".discountbar").addEventListener("focusout",givingdiscount);
        function givingdiscount(){

            console.log(sum)
            discount = document.querySelector(".discountbar").value;
            discount = Math.trunc((discount * sum) / 100);
            console.log(discount)
            sum-=discount;
            tax += (sum * 4) / 100;
            tax = Math.trunc(tax);
            sum+=tax;
            document.querySelector(".total").innerHTML = `${sum}`;
            document.querySelector(".totaldiscount").innerHTML = `${discount}`;
            document.querySelector(".taxes").innerHTML = `${tax}`;

        }


        // add to database

        document.querySelector(".order").addEventListener("click", senddata);
        
        async function senddata() {
                customer = document.querySelector(".details").value;
                orderhistory = {
                    customer: `${customer}`,
                    discount: `${discount}`,
                    tax: `${tax}`,
                    total: `${sum}`,
                    orders: orders
                }
            
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
            }


            document.querySelector(".clear").addEventListener("click", clearing)

                // clearing data

function clearing() {

    // alert("clear all");
    document.querySelector(".details").value = "";
    document.querySelector(".discountbar").value = "";
    displaytable.innerHTML = "";

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

    //displaying breif information

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

document.querySelector(".clear").addEventListener("click", clearing)

function clearing() {

    // alert("clear all");
    document.querySelector(".details").value = "";
    document.querySelector(".discountbar").value = "";
    displaytable.innerHTML = "";

}
