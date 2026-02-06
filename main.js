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
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = "http://localhost:5000/" + product.image;
    img.alt = product.title;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const desc = document.createElement("p");
    desc.textContent = product.description.slice(0, 60) + "...";

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = "$" + product.price;

    const buttunsDiv = document.createElement("div");
    buttunsDiv.style.marginTop = "25px";
    buttunsDiv.style.display = "flex";
    buttunsDiv.style.gap = "20px";
    buttunsDiv.style.justifyContent = "center";

    const removEl = document.createElement("button");
    removEl.textContent = "O'chirish";
    removEl.classList.add("remove-btn");

    const editEl = document.createElement("button");
    editEl.textContent = "Tahrirlash";
    editEl.classList.add("edit-btn");

    removEl.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("O‘chirish:", product.id);
    });

    editEl.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Tahrirlash:", product.id);
    });

    buttunsDiv.appendChild(removEl);
    buttunsDiv.appendChild(editEl);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(price);
    card.appendChild(buttunsDiv);

    // O'chirish
    removEl.addEventListener("click", async (e) => {
      e.stopPropagation();
      try {
        const res = await fetch(
          `http://localhost:5000/products/${product.id}`,
          {
            method: "DELETE",
          },
        );

        if (res.status === 200) {
          alert("Maffaqiyatli o'chirildi");
        } else {
          alert("Xatolik");
        }

        card.remove();
      } catch (err) {
        console.log("O‘chirishda xatolik!");
      }
    });

    card.addEventListener("click", () => {
      window.location.href = `about.html?id=${product.id}`;
    });

    container.appendChild(card);
  });
}

renderProducts();
