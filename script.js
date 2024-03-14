const modelGreen = document.querySelector(".model-green").innerHTML;
const priceGreen = document.querySelector(".price-green").innerHTML;

const modelStar = document.querySelector(".model-star").innerHTML;
const priceStar = document.querySelector(".price-star").innerHTML;

const modelRed = document.querySelector(".model-red").innerHTML;
const priceRed = document.querySelector(".price-red").innerHTML;

let shoping = [];

function addShop(param) {
  let idNum = Math.random();

  if (param === 1) {
    let objShop = {
      id: idNum,
      model: modelGreen,
      quantity: 1,
      price: priceGreen,
      remove: "delete",
    };
    shoping.push(objShop);
  } else if (param === 2) {
    let objShop = {
      id: idNum,
      model: modelStar,
      quantity: 1,
      price: priceStar,
      remove: "delete",
    };
    shoping.push(objShop);
  } else {
    let objShop = {
      id: idNum,
      model: modelRed,
      quantity: 1,
      price: priceRed,
      remove: "delete",
    };
    shoping.push(objShop);
  }
  displayShop();
  sumAll();
  console.log(shoping);
}

let allPrice = document.querySelector(".all-price");
let dataOutput = document.querySelector(".table-out");

function displayShop() {
  let displayShop = "";
  dataOutput.innerHTML = "";

  shoping.forEach(function (item) {
    displayShop += `<tr>
    <td >${item.model}</td> 
    <td>${item.quantity}</td> 
    <td>${item.price}</td> 
    <td><button id="delete" onclick="remov(${item.id})" >delete</button></td>
    </tr>`;
    dataOutput.innerHTML = displayShop;
  });
}

const remov = (param) => {
  const filteredTasks = shoping.filter(({ id }) => id !== param);

  shoping = filteredTasks;
  displayShop();
};

function sumAll() {
  let sums = 0;
  for (let i = 0; i < shoping.length; i++) {
    let numPrice = shoping[i].price;
    let numPriceTwo = parseInt(numPrice);
    sums += numPriceTwo;
  }
  allPrice.innerHTML = sums;
}

