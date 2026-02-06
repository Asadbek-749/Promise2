const formCard = document.getElementById("cardForm");

formCard.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titleCard = document.getElementById("title").value;
  const priceCard = document.getElementById("price").value;
  const imageCard = document.getElementById("image").value;
  const descriptionCard = document.getElementById("description").value;

  console.log("sumbit buldi", e);

  try {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
        image,
      }),
    });

    alert("Mahsulot qo‘shildi ✅");
    window.location.href = "index.html";
  } catch (err) {
    alert("Xatolik yuz berdi ❌");
  }
});
