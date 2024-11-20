// genertae a random color
const random = function(){
const hex = "0123456789ABCDEF"
let color = '#'
for(let i=0;i<6;i++){
color +=hex[Math.floor(Math.random()*16)]
}
return color
};
let intervalId ;
const startchangingColor = function(){
    if(!intervalId){
        intervalId =  setInterval(changeBagColor,1000);
    }
    function changeBagColor() {
        document.body.style.backgroundColor = random();
    }
};
const stopchangingColor = function(){
    clearInterval(intervalId)
    intervalId =null;
};
document.querySelector('#start').addEventListener('click', startchangingColor)
document.querySelector('#stop').addEventListener('click', stopchangingColor)
