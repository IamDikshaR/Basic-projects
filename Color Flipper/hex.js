const hex = [ 0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const btn= document.getElementById("btn");
const color = document.querySelector(".color");

function randomNo(){
    let string="#";
    for(let i=0; i<6; i++){
        string += hex[Math.floor(Math.random()*hex.length)];
    }
    // console.log(string);
    return string;
}

btn.addEventListener("click", ()  => {
    const randomColor = randomNo();
    document.body.style.backgroundColor = randomColor;
    color.textContent =randomColor;
}) 