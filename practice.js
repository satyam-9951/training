// var variable=[1,2,3,4,5,6,7,8,9];
// for(let i=0;i<variable.length;i++){
//     // console.log(i)
//     console.log(variable[i] + " index "+i)

// }

// var names=["sathya","mahesh","pavan","satish"]
// for(const p in names){
//     console.log(names[p]+ " index "+p)
//     // console.log(names[p].split(''))
//     let temp=names[p].split('')
//     // console.log(temp)
//     for(const j of temp){
//         console.log(j)
//     }
// }

// var temp=[];
// var numbers=[11,22,33,44,55,66,77,88,99];
// numbers.forEach((element,index,array) => {
//     console.log(element+1)
//     temp.push(element+1)
//     console.log(temp)
//     console.log(index)
//     console.log(array)
// });

// var temper=[9,8,7,6,5,4,3,2,1]
// var values=temper.filter(kick)
// function kick(element){
//     return element%2==0;
// }
// console.log(values)

// var temp=[11,22,33,44,55,66,77,88,99]
// var temper=temp.map(kick);
// function kick(element){
//     return element+2;
// }
// console.log(temper)

// var date = new Date();
// var day;
// console.log(date.getDay())
// switch (date.getDay()) {
//     case 0:
//         day = "sunday";
//         break;
//     case 1:
//         day = "monday";
//         break;
//     case 2:
//         day = "tuesday";
//         break;
//     case 3:
//         day = "wednesday";
//         break;
//     case 4:
//         day = "thursday";
//         break;
//     case 5:
//         day = "friday";
//         break;
//     case 6:
//         day = "saturday";
//         break;
//     default:
//         day="noday";
//         break;
// }
// console.log(day)

// var dates=new Date(year)
// console.log(dates)

var numbers=[9,89,76,12,34,56,22]

var timein=setTimeout(start,2000);
function start(){
    console.log("hello")
}

var timex=setInterval(starts,3000)

function starts(){
    console.log("time interval")
    clearInterval(timex)
}


