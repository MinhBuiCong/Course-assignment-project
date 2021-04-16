const url = " https://royals-shop.com/rainydays/wp-json/wc/store/products/";

const productContainer = document.querySelector(".products");
const infoContainer = document.querySelector(".infoContainer");
const cartQuantity = document.querySelector(".cartQuantity");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log("getResults :>> ", getResults);
    createHTML(getResults);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `
        <div class="product">
        <a class="item" href="../Shop/product-page.html?id=${product.id}">
        <h2 class="productTitle">${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}"/>
        <p class="productPrice">£${product.prices.price}</p>
        </a>
        <button class="productButton" onclick="addItemCart()">Add to cart</button>
        </div>
        `;
  });
}

function addItemCart() {
  cartQuantity.innerHTML++;
  console.log(addItemCart);
}
