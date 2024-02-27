const date=prompt("Enter date (eg. 12)");
const month=prompt("Enter Month (eg. jan)");
const year=prompt("Enter year (eg. 2012");
const time=prompt("Enter time (eg. 01:05 AM)");
// const endDate="28 February 2025 01:05 AM"; 
const endDate=`${date} ${month} ${year} ${time}`;

document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input");

const clock=()=>{
    const end=new Date(endDate);
    const now=new Date();
    const diff=Math.round((end-now)/1000);
    console.log(diff);
    if(diff<0){
        return;
    }
     inputs[0].value=Math.floor(diff/3600/24);
     inputs[1].value= Math.floor((diff/3600)%24);
     inputs[2].value=Math.floor((diff/60)%60);
     inputs[3].value=Math.floor((diff)%60);

}
clock();

setInterval(()=>{
    clock()
},1000);