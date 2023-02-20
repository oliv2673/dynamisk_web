const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://madopskrifter-41a3.restdb.io/rest/opskrifter", {
  method: "get",
  headers: {
    "x-apikey": "63f32ac7478852088da68490",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  /* document.querySelector(".product_show h1").textContent = product.productdisplayname;
  document.querySelector("span.brandname").textContent = product.brandname;
  document.querySelector("span.category").textContent = product.category;
  document.querySelector("span.articletype").textContent = product.articletype;
  document.querySelector(
    ".product_show img"
  ).src = `img/ + https://madopskrifter-41a3.restdb.io/rest/opskrifter?q={"img": ${product.id}.webp`;*/
}
