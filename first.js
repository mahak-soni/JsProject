const endDate="4 september 2024 4:33 PM"
document.getElementById("end-date").innerText= endDate;

const inputs=document.querySelectorAll("input");

const clock=()=>{
    const end= new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000; // milisec into sec= _ /1000
    console.log(diff);
    if(diff<0) return;
    // for days
    inputs[0].value= (Math.floor(diff/3600/24));
    // for hours
    inputs[1].value= (Math.floor(diff/3600)%24);
    // for minutes
    inputs[2].value= (Math.floor(diff/60)%60);
    // for seconds
    inputs[3].value= (Math.floor(diff)%60);
    // convert into days
    // 1 day=24hour
    // 1hr=60 min
    // 1min=60sec
    // 60min=3600sec
}
clock();
setInterval(() => {
    clock()
}, 1000);