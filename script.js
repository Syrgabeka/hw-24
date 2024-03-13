const modelGreen = document.querySelector(".model-green").innerHTML;
const priceGreen = document.querySelector(".price-green").innerHTML;

const modelStar = document.querySelector(".model-star").innerHTML.trim();
const priceStar = document.querySelector(".price-star").innerHTML;

const modelRed = document.querySelector(".model-red").innerHTML;
const priceRed = document.querySelector(".price-red").innerHTML;

let shoping = [];

function addShop(param) {
  if (param === 1) {
    let objShop = {
      model: modelGreen,
      quantity: 1,
      price: priceGreen,
      remove: "delete",
    };
    shoping.push(objShop);
  } else if (param === 2) {
    let objShop = {
      model: modelStar,
      quantity: 1,
      price: priceStar,
      remove: "delete",
    };
    shoping.push(objShop);
  } else {
    let objShop = {
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
  let x = shoping.length - 1;

  shoping.forEach(function (item, x) {
    displayShop += `<tr id="${x}">
    <td >${item.model}</td> 
    <td>${item.quantity}</td> 
    <td>${item.price}</td> 
    <td><button id="delete" onclick="shoping.splice(${x}, 1) displayShop()" >${item.remove}</button></td>
    </tr>`;
    dataOutput.innerHTML = displayShop;
  });
}

function sumAll() {
  let sums = 0;
  for (let i = 0; i < shoping.length; i++) {
    let numPrice = shoping[i].price;
    let numPriceTwo = parseInt(numPrice);
    sums += numPriceTwo;
  }
  allPrice.innerHTML = sums;
}
