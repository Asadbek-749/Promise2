async function getProduct() {
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    const products = data.data;
    console.log(data);
    return products;
  } catch (err) {
    console.log(err);
  }
}

async function renderProducts() {
  const products = await getProduct();
  const container = document.getElementById("product-list");

  products.forEach((product) => {
    // Card  div
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.cursor = "pointer";

    // Image
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    // Title
    const title = document.createElement("h2");
    title.textContent = product.title;

    // Discription
    const desc = document.createElement("p");
    desc.textContent = product.description.slice(0, 60) + "...";

    // Price
    const price = document.createElement("div");
    price.className = "price";
    price.textContent = "$" + product.price;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(price);

    container.appendChild(card);

    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
      console.log("id", product.id);
    });

    return card
  });
}

renderProducts();
