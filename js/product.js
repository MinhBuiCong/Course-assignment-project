const url = " http://royals-shop.com/rainydays/wp-json/wc/store/products/";

const productContainer = document.querySelector(".products");
const infoContainer = document.querySelector(".infoContainer");

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
    productContainer.innerHTML += `<a href="../Shop/product-page.html?id=${product.id}">
        <div class="product">
        <h2 class="productTitle">${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}"/>
        <p class="productPrice">£${product.prices.price}</p>
        <button class="productButton">Add to cart</button>
        </div>
        </a>`;
  });
}
