const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url =
  " https://royals-shop.com/rainydays/wp-json/wc/store/products/" + id;

const contentContainer = document.querySelector(".contentContainer");
const productTitle = document.querySelector(".product");
const price = document.querySelector(".price");
const imageContainer = document.querySelector(".imageContainer");
const description = document.querySelector(".productInfo");
const cartButton = document.querySelector(".shoppingButton");
let cartQuantity = document.querySelector(".cartQuantity");
let favouriteQuantity = doucment.querySelector(".favouriteQuantity");

async function getProductId() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);
    productTitle.innerHTML = `<p>${product.name}</p>`;
    price.innerHTML = `<p>£${product.prices.price}</p>`;
    description.innerHTML = `<p>${product.description}</p>`;
    imageContainer.innerHTML = `<img src="${product.images[0].src}">`;
  } catch (error) {
    contentContainer.innerHTML = "something went wrong";
  }
}

getProductId();

function addProduct() {
  cartQuantity.innerHTML++;
}

function addFavourite() {
  favourite.innerHTML++;
}
