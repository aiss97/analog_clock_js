// Dom Elements
const body= document.querySelector("body");
const hourHand=document.querySelector(".hour");
const minuteHand=document.querySelector(".minute");
const secondHand=document.querySelector(".second");
const modeSwitch=document.querySelector(".mode-switch");
//check if the local storage 
if (localStorage.getItem("mode")==="Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent="Light Mode";
}
//add click event listeners
modeSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
    //Check 
    const isDarkMode= body.classList.contains("dark");
    console.log(isDarkMode);
    //Set
    modeSwitch.textContent=isDarkMode?"Light Mode":"Dark Mode";
    //Set local storage
    localStorage.setItem("mode",isDarkMode?"Dark Mode":"Light Mode");
});


const updateTime =()=>{
    //get time  and calculate degrees
    let date= new Date();
    secToDeg=(date.getSeconds()/60)*360,
    minToDeg=(date.getMinutes()/60)*360,
    hrToDeg=(date.getHours()/12)*360;

    //Rotate 
    secondHand.style.transform=`rotate(${secToDeg}deg)`;
    minuteHand.style.transform=`rotate(${minToDeg}deg)`;
    hourHand.style.transform=`rotate(${hrToDeg}deg)`;
}
setInterval(updateTime,1000);

updateTime();