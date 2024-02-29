let stocks={
    fruits: ["strawberry", "mango", "custard", "orange", "pineapple", "kiwi", "coconut"],
    liquid: ["water", "milk","ice"],
    holder: ["cone", "cup", "waffle"],
    toppings: ["chocochip", "sprinkles", "jelly", "fruit", "peanuts", "nuts"]
}

let is_shop_open = true;
//choose store div and set h1 to show (use next sibling function)
const open= document.querySelector(".open");
const close= document.querySelector(".close");

let order = (time, work) =>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            // open.classList.toggle("hide");
            // close.classList.toggle("hide");
            setTimeout(()=>{
                resolve(work())
            }, time);
        }
        else{
            // close.classList.toggle("hide");
            // open.classList.toggle("hide");
            reject(new Error("Shop is closed"));
        }
    })
}

order(2000, ()=>console.log(`Order is being placed and ${stocks.fruits[0]} has been Selected`))

.then(()=>{
    return order(0o0, ()=>console.log("Production has started"))
})

.then(()=>{
    return order(2000, ()=>console.log("The fruit has been chopped"))
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]}, ${stocks.liquid[1]} and ${stocks.liquid[2]} were added`))
})

.then(()=>{
    return order(1000, ()=>console.log("Start the machine"))
})

.then(()=>{
    return order(2000, ()=>console.log(`Ice-cream placed on ${stocks.holder[0]}`))
})

.then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} was selected`))
})

.then(()=>{
    return order(1000, ()=>console.log("Ice cream is ready and served"))
})

.catch(()=>{
    console.log("customer left");
})

.finally(()=>{
    console.log("Thank you for visiting");
})