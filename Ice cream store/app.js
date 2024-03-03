let stocks = {
  fruits: [
    "strawberry",
    "mango",
    "custard",
    "orange",
    "pineapple",
    "kiwi",
    "coconut",
  ],
  liquid: ["water", "milk", "ice"],
  holder: ["cone", "cup", "waffle"],
  toppings: ["chocochip", "sprinkles", "jelly", "fruit", "peanuts", "nuts"],
};

let is_shop_open = true;

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const display = document.querySelector(".main");
const load = document.querySelector(".load");
const btn = document.querySelector(".submit");
const selection = document.querySelector(".selection");

// var fruit = document.getElementById("myFruit");
// var selectedOption = fruit.options[fruit.selectedIndex];
// var selectedFruit = selectedOption.value;
// var holder = document.getElementById("myHolder");
// var selectedOption = holder.options[holder.selectedIndex];
// var selectedHolder = selectedOption.value;
let selectedFruit = "";
let selectedHolder = "";

function saveSelections() {
  // Get the selected values from both dropdown menus
  selectedFruit = document.getElementById("myFruit").value;
  selectedHolder = document.getElementById("myHolder").value;

  console.log("Selected Fruit: " + selectedFruit);
  console.log("Selected Holder: " + selectedHolder);
}

function getSelectedValues() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  var selectedValues = [];
  checkboxes.forEach(function (checkbox) {
    selectedValues.push(checkbox.value);
  });
  // console.log("Selected Values: " + selectedValues.join(', '));
  return selectedValues.join(", ");
}

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      display.classList.add("hide");
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(new Error("Shop is closed"));
    }
  });
};

(function () {
  if (!is_shop_open) {
    open.classList.add("hide");
    close.classList.remove("hide");
    selection.classList.add("hide");
  }
})();

btn.addEventListener("click", () => {
  order(2000, () =>
    console.log(`Order is being placed and ${selectedFruit} has been Selected`)
  )
    .then(() => {
      load.textContent = "Production has started";
      return order(1000, () => console.log("Production has started"));
    })

    .then(() => {
      load.textContent = `${selectedFruit} has been chopped`;
      return order(2000, () => console.log("The fruit has been chopped"));
    })

    .then(() => {
      load.textContent = "Water, ice and milk were added";
      return order(1000, () => console.log("Water,ice and milk were added"));
    })

    .then(() => {
      load.textContent = "Starting the machine";
      return order(1000, () => console.log("Starting the machine"));
    })

    .then(() => {
      load.textContent = `Ice-cream placed on ${selectedHolder}`;
      return order(2000, () =>
        console.log(`Ice-cream placed on ${stocks.holder[0]}`)
      );
    })

    .then(() => {
      getSelectedValues();
      load.textContent = `${getSelectedValues()} was selected`;
      return order(3000, () =>
        console.log(`${stocks.toppings[0]} was selected`)
      );
    })

    .then(() => {
      load.textContent = "Ice cream is ready and served!";
      return order(1000, () => console.log("Ice cream is ready and served"));
    })

    .catch(() => {
      // load.textContent = "Customer left";
      console.log("customer left");
    })

    .finally(() => {
      load.textContent = "Thank you for visiting 🤗!!!";
      // setTimeout(()=> window.addEventListener("DOMContentLoaded", ()=>{
      //         display.classList.remove("hide");
      // }), 2000)
      console.log("Done");
    });
});
