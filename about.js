const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

console.log(productId);


async function getSingleProduct() {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();
  showProduct(product);
}

getSingleProduct();

function showProduct(product) {
  document.querySelector("#title").textContent = product.title;
  document.querySelector("#price").textContent = `$${product.price}`;
  document.querySelector("#desc").textContent = product.description;
  document.querySelector("#img").src = product.images[0];
}

showProduct()
