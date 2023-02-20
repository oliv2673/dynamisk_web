//vi hiver fat i url for at fange en specifik parameter
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
let products = [];

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=20`)
  .then((response) => response.json())
  .then((data) => {
    //laver et global variabel (alle kan til gå den)
    products = data;
    showProducts();
  });

function showProducts() {
  document.querySelector(".list_grid").innerHTML = "";
  //looper og kalder showProduct
  products.forEach(showProduct);
}

document.querySelector("#filter_organize").addEventListener("change", sorting);

function sorting() {
  console.log(this.value);
  // sort by productdisplayname
  if (this.value == "A-Z") {
    products.sort((a, b) => {
      const nameA = a.productdisplayname.toUpperCase(); // ignore upper and lowercase
      const nameB = b.productdisplayname.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
  if (this.value == "Z-A") {
    products.sort((a, b) => {
      const nameA = a.productdisplayname.toUpperCase(); // ignore upper and lowercase
      const nameB = b.productdisplayname.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      // names must be equal
      return 0;
    });
  }
  console.log(products);
  showProducts();
}

function showProduct(product) {
  //fang template
  const template = document.querySelector("#firstView_product_template").content;
  //lav kopi    true = du vil have alt indhold ("børnene")
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".price").textContent = `DKK ${product.price},-`;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);

  //vegetarisk
  if (product.discount) {
    copy.querySelector(".discount_tag").classList.add("vegetarisk");
    copy.querySelector("p.type").textContent = `Vegetarisk ${(src = "img/")}`;

    console.log("added vegetarisk");
  }

  //   if (product.soldout) {
  //     copy.querySelector("#status").classList.add(".soldout");
  //   }
  //append (sæt ind)
  document.querySelector(".list_grid").appendChild(copy);
}
