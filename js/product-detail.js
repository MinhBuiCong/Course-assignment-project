const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  " https://royals-shop.com/rainydays/wp-json/wc/store/products/" + id;

const contentContainer = document.querySelector(".contentContainer");
const productTitle = document.querySelector(".product");
const price = document.querySelector(".price");
const mainImage = document.querySelector(".mainImage");
const sideImage = document.querySelector(".sideImageContainer");
const description = document.querySelector(".productInfo");
const cartButton = document.querySelector(".shoppingButton");
let cartQuantity = document.querySelector(".cartQuantity");
let favouriteQuantity = document.querySelector(".favouriteQuantity");
const textQuantity = document.querySelector("#cartText");
const textFavourite = document.querySelector("#favouriteText");

async function getProductId() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);
    productTitle.innerHTML = `<p>${product.name}</p>`;
    price.innerHTML = `<p>£${product.prices.price}</p>`;
    description.innerHTML = `<p>${product.description}</p>`;
    mainImage.innerHTML = `<img class="main" src="${product.images[0].src}" alt="${product.name}">`;
    for (var i = 1; i < product.images.length; i++) {
      var smallImage = product.images[i].src;
      sideImage.innerHTML += `<img class="side" src="${smallImage}" alt="${product.name}">`;
    }
  } catch (error) {
    contentContainer.innerHTML = "something went wrong";
  }
}

getProductId();

function addProduct() {
  cartQuantity.innerHTML++;
  document.getElementById("cartText").style.color = "#ff8600";
}

function addFavourite() {
  favouriteQuantity.innerHTML = 1;
  document.getElementById("favouriteText").style.color = "red";
}
