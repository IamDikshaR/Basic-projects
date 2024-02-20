const reset = document.querySelector(".reset");
const dec= document.querySelector(".decrease");
const inc= document.querySelector(".increase");
const value= document.getElementById("value");


reset.addEventListener("click", ()=>{
    value.textContent="0";
    color()
})
dec.addEventListener("click", ()=>{
    value.textContent= value.textContent-1;
    color()
})

inc.addEventListener("click", ()=>{
    let number = parseInt(value.textContent);
    // number+=1;
    value.textContent= number+1;
    color();
})


function color() {
    let number = parseInt(value.textContent);
    if(number>0){
        value.style.color= "green"
    }
    
    if(number<0){
        value.style.color= "red"
    }
    
    if(number===0){
        value.style.color= "#222"
    }
}



