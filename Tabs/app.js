const history = document.getElementById('history');
const vision = document.getElementById('vision');
const goals = document.getElementById('goals');

const btns = document.querySelectorAll(".tab-btn");

// window.addEventListener("DOMContentLoaded", ()=>{
//     history.classList.add("active");
// })

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const category = e.currentTarget.dataset.id;
        // if(category==="history"){
        //     btn.classList.add("active");
        //     history.classList.add("active");
        // }
        switch(category){
            case "history":
                btn.classList.add("active");
                history.classList.add("active");
                btns.forEach((tab)=>{
                    if(tab!=btn){
                        tab.classList.remove("active");
                    }
                })
                vision.classList.remove("active");
                goals.classList.remove("active");
                break;
            case "vision":
                btn.classList.add("active");
                vision.classList.add("active");
                btns.forEach((tab)=>{
                    if(tab!=btn){
                        tab.classList.remove("active");
                    }
                })
                history.classList.remove("active");
                goals.classList.remove("active");
                break;
            case "goals":
                btn.classList.add("active");
                goals.classList.add("active");
                btns.forEach((tab)=>{
                    if(tab!=btn){
                        tab.classList.remove("active");
                    }
                })
                vision.classList.remove("active");
                history.classList.remove("active");
                break;
        }
    })
})
