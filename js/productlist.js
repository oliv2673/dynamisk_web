//vi hiver fat i url for at fange en specifik parameter
const urlParams = new URLSearchParams(window.location.search);
const subcategory = urlParams.get("subcategory");
let products = [];

let myUrl;

if (subcategory == null) {
  myUrl = "https://madopskrifter-41a3.restdb.io/rest/opskrifter";
} else {
  myUrl = `https://madopskrifter-41a3.restdb.io/rest/opskrifter?q={"subcategory": "${subcategory}"}`;
}

fetch(myUrl, {
  method: "get",
  headers: {
    "x-apikey": "63f32ac7478852088da68490",
  },
})
  .then((response) => response.json())
  .then((data) => {
    //laver et global variabel (alle kan til gå den)
    products = data;
    showProducts();
  });

function showProducts() {
  //document.querySelector(".list").innerHTML = "";
  //looper og kalder showProduct
  products.forEach(showProduct);
}
/* 
document.querySelector("#filter_organize").addEventListener("change", sorting); */
/* 
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
 */
function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#product_template").content;
  //lav kopi    true = du vil have alt indhold ("børnene")
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h1").textContent = product.titel;
  copy.querySelector(".preptime").textContent = product.prepTime;
  copy.querySelector(".cooktime").textContent = product.cookTime;
  copy.querySelector(".antal").textContent = product.portion;
  copy.querySelector(".beskrivelse").textContent = product.description;
  //copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("article").setAttribute("href", `product.html?id=${product.id}`);

  //vegetarisk
  if (vegetarian == true) {
    copy.querySelector(".vegetarisk").classList.add("show_vegetarisk");
    copy.querySelector(".vegetarisk p").textContent = "Vegetarisk";

    console.log("added vegetarisk");
  } else {
    copy.querySelector(".vegetarisk").classList.add("display_none");
  }
  //vegansk
  if (vegan == true) {
    copy.querySelector(".vegansk").classList.add("show_vegansk");
    copy.querySelector(".vegansk p").textContent = "Vegansk";

    console.log("added vegansk");
  } else {
    copy.querySelector(".vegansk").classList.add("display_none");
  }
  //pescetar
  /* if (pescetar == true) {
    copy.querySelector(".pescetar").classList.add("show_pescetar");
    copy.querySelector(".pescetar p").textContent = "pescetar";

    console.log("added pescetar");
  } else {
    copy.querySelector(".pescetar").classList.add("display_none");
  } */

  //append (sæt ind)
  document.querySelector(".grid_1-1").appendChild(copy);
}
