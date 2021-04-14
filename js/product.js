const url = "http://localhost/wordpress/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");
const infoContainer = document.querySelector(".infoContainer");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `<a href="../Shop/product-page.html">
        <div class="product">
        <h2 class="productTitle">${product.name}</h2>
        <img src="${product.images[0].src}" alt="${product.name}"/>
        <p class="productPrice">£${product.prices.price}</p>
        ${product.description}
        </div>
        </a>`;
  });
}
