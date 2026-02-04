const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log("Product ID:", productId);

async function getProduct() {
  try {
    // To'g'ri URL - productId ni URL ga qo'shish kerak
    const res = await fetch(`http://localhost:5000/products/${productId}`);
    const data = await res.json();
    console.log("API response:", data);
    return data.data; 
  } catch(err) {
    console.log("Error:", err);
  }
}

async function showProduct() {
  const product = await getProduct();
  
  if (!product) {
    console.log("Product topilmadi");
    return;
  }


  document.getElementById("product-title").textContent = product.title;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-price").textContent = "$" + product.price;
}

showProduct();