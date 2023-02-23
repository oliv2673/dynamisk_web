//vi hiver fat i url for at fange en specifik parameter
const urlParams = new URLSearchParams(window.location.search);
const subcategory = urlParams.get("subcategory");
//const subcategory = urlParams.get("category");
let products = [];

let myUrl;

//vi sørger for at der er content på siden der passer til hvilken indgang man har valgt
if (subcategory == null) {
  myUrl = "https://madopskrifter-41a3.restdb.io/rest/opskrifter";
} else {
  myUrl = `https://madopskrifter-41a3.restdb.io/rest/opskrifter?q={"subcategory": "${subcategory}"}`;
}
/* if (category == null) {
  myUrl = "https://madopskrifter-41a3.restdb.io/rest/opskrifter";
} else {
  myUrl = `https://madopskrifter-41a3.restdb.io/rest/opskrifter?q={"category": "${category}"}`;
} */

//backup database
if (subcategory == null) {
  myUrl = "https://backup-de80.restdb.io/rest/opskrifter";
} else {
  myUrl = `https://backup-de80.restdb.io/rest/opskrifter?q={"subcategory": "${subcategory}"}`;
}

/* fetch(myUrl, {
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
  }); */

//backup database
fetch(myUrl, {
  method: "get",
  headers: {
    "x-apikey": "63f4c727478852088da68527",
  },
})
  .then((response) => response.json())
  .then((data) => {
    //laver et global variabel (alle kan til gå den)
    products = data;
    showProducts();
  });

function showProducts() {
  //    document.querySelector("grid_1-1").innerHTML = "";

  //looper og kalder showProduct
  products.forEach(showProduct);
}

//tilføj eventlistener på checkboxene
document.querySelector(".vege_check input").addEventListener("click", selected);
document.querySelector(".vegan_check input").addEventListener("click", selected);
document.querySelector(".pesc_check input").addEventListener("click", selected);

function selected() {
  //check value off checkbox
  if (document.querySelector(".vege_check input").checked == true) {
    //document.querySelector(".vegetarisk").classList.add("test");
    //kør loop
    const allVegetarian = document.querySelectorAll(".dish_card");
    allVegetarian.forEach(showSelected_vege);
  } /* else {
    document.querySelector(".vegetarisk").classList.remove("test");
  } */

  if (document.querySelector(".vegan_check input").checked == true) {
    //kør loop
    const allVegan = document.querySelectorAll(".dish_card");
    allVegan.forEach(showSelected_vega);
  }

  if (document.querySelector(".pesc_check input").checked == true) {
    //kør loop
    const allPesc = document.querySelectorAll(".dish_card");
    allPesc.forEach(showSelected_pesc);
  }
}

function showSelected_vege(product) {
  if (product.dataset.vegetarian) {
    product.classList.remove("dont_show");
  } else {
    product.classList.add("dont_show");
  }
  /* if (product.vegetarian == false) {
    document.querySelector("article").classList.add("dont_show");

    console.log("only vegatarien");
  } else {
    document.querySelector("article").classList.remove("dont_show");
  }
  console.log("show selected"); */
}
function showSelected_vega(product) {
  if (product.dataset.vegan) {
    product.classList.remove("dont_show");
  } else {
    product.classList.add("dont_show");
  }
}
function showSelected_pesc(product) {
  if (product.dataset.pescetarian) {
    product.classList.remove("dont_show");
  } else {
    product.classList.add("dont_show");
  }
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#product_template").content;
  //lav kopi    true = du vil have alt indhold ("børnene")
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h1").textContent = product.titel;
  copy.querySelector(".preptime").textContent = product.prepTime + " min";
  copy.querySelector(".cooktime").textContent = product.cookTime + " min";
  copy.querySelector(".antal").textContent = product.portions + " pers";
  copy.querySelector(".beskrivelse").textContent = product.description;
  copy.querySelector("img").src = `img/${product.img}`;
  copy.querySelector(".go_to").setAttribute("href", `product.html?_id=${product._id}`);

  //vegetarisk
  if (product.vegetarian == true) {
    copy.querySelector(".vegetarisk").classList.remove("dont_show");
    //tilføj data til et html uden at give den en class
    copy.querySelector("article").dataset.vegetarian = true;

    console.log("added vegetarisk");
  }
  //vegansk
  if (product.vegan == true) {
    copy.querySelector(".vegan").classList.remove("dont_show");
    //tilføj data til et html uden at give den en class
    copy.querySelector("article").dataset.vegan = true;

    console.log("added vegansk");
  }
  //pescetar
  if (product.pescetarian == true) {
    copy.querySelector(".pescetar").classList.remove("dont_show");
    //tilføj data til et html uden at give den en class
    copy.querySelector("article").dataset.pescetarian = true;

    console.log("added pescetar");
  }

  //append (sæt ind)
  document.querySelector(".grid_1-1").appendChild(copy);
}
