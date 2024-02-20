const reset = document.querySelector(".reset");
const dec= document.querySelector(".decrease");
const inc= document.querySelector(".increase");
const value= document.getElementById("value");


reset.addEventListener("click", ()=>{
    value.textContent="0";
})
dec.addEventListener("click", ()=>{
    value.textContent= value.textContent-1;
})

inc.addEventListener("click", ()=>{
    let number = parseInt(value.textContent);
    // number+=1;
    value.textContent= number+1;
})


