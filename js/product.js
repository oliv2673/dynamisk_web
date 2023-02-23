const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://madopskrifter-41a3.restdb.io/rest/opskrifter/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63f32ac7478852088da68490",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

/* //backup
fetch("https://backup-de80.restdb.io/rest/opskrifter/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63f4c727478852088da68527",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));*/

function showProduct(product) {
  console.log(product);

  document.querySelector("h1").textContent = product.titel;
  document.querySelector(".prepTime").textContent = product.prepTime + " min.";
  document.querySelector(".cookTime").textContent = product.cookTime + " min.";
  document.querySelector(".portion").textContent = product.portions + " pers.";
  document.querySelector(".beskrivelse").textContent = product.description;
  document.querySelector(".opskrift_pic").src = `img/${product.img}`;
  document.querySelector("ol").innerHTML = product.walkthrough;

  product.ingredients.forEach(showIngredients);

  function showIngredients(ingrediens) {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("li span").textContent = ingrediens;
    document.querySelector(".ingrediens_list").appendChild(copy);
  }

  //Vegetarisk
  if (product.vegetarian == true) {
    document.querySelector(".vegetarisk").classList.remove("dont_show");

    console.log("added vegetarisk");
  }
  //vegansk
  if (product.vegan == true) {
    document.querySelector(".vegan").classList.remove("dont_show");

    console.log("added vegansk");
  }
  //pescetar
  if (product.pescetarian == true) {
    document.querySelector(".pescetar").classList.remove("dont_show");

    console.log("added pescetar");
  }
}
