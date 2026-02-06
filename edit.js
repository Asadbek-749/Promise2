
await fetch(`http://localhost:5000/products/${id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title,
    price,
    description,
  }),
});
