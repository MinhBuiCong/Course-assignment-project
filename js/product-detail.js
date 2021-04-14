const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "http://localhost/wordpress/wp-json/wc/store/products/" + id;

const contentContainer = document.querySelector(".contentContainer");
const productTitle = document.querySelector(".product");
const price = document.querySelector(".price");
const imageContainer = document.querySelector(".imageContainer");
const description = document.querySelector(".productInfo");

async function getProductId() {
  try {
    const response = await fetch(url);
    const product = await response.json();
    console.log(product);
    productTitle.innerHTML = `<p>${product.name}</p>`;
    price.innerHTML = `<p>£${product.prices.price}</p>`;
    description.innerHTML = `<p>${product.description}</p>`;

    // imageContainer.innerHTML = `
    //                             <img src="${product.images[1].src}">
    //                             <img src="${product.images[2].src}">
    //                             <img src="${product.images[3].src}">

    //                             `;
  } catch (error) {
    ContentContainer.innerHTML = "something went wrong";
  }
}

getProductId();
