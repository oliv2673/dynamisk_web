const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".product_show h1").textContent = product.productdisplayname;
  document.querySelector("span.brandname").textContent = product.brandname;
  document.querySelector("span.category").textContent = product.category;
  document.querySelector("span.articletype").textContent = product.articletype;
  document.querySelector(".product_show img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
