const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

/* fetch("https://madopskrifter-41a3.restdb.io/rest/opskrifter/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63f32ac7478852088da68490",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data)); */

//backup
fetch("https://backup-de80.restdb.io/rest/opskrifter/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63f32ac7478852088da68490",
  },
})
  .then((response) => response.json())
  .then((data) => showProduct(data));

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
}

/*
_id: "63f28a6caa86075000065d95"
category: "Vest Europa"
cookTime: 60
description: "Gazpacho er er kold grøntsagssuppe, som stammer fra Andalusien. Den er meget nem at lave, og passer perfekt til en varm sommerdag."
img: "spanien_forret1.webp"
ingredients: Array(18) [ "Gazpacho:", "2-3 skiver afskorpet, hvidt landbrød", "½ kg modne tomater", … ]
pescetarian: false
portions: 4
prepTime: 0
subcategory: "Spanien"
titel: "Gazpacho"
type: "Forret"
vegan: true
vegetarian: true
walkthrough: "Gazpacho:\n<li>Skær brødet i mindre stykker og blød det op i vand i ca. 30 min. Flå tomaterne og fjern kernerne. Skræl agurken, flæk den, fjern kernerne og skær den i mindre stykker.</li> \n\n<li>Fjern kerner og stilk på pebrene. </li>\n\n<li>Hvis man ønsker en suppe med lidt sødere smag, kan man undlade den grønne peber.</li>\n\n<li>Pil hvidløgene. Kom hele molevitten i blenderen. </li>\n\n<li>Tilsæt lidt vand mens der blendes, men suppen må ikke blive alt for tynd. </li>\n<li>Blend olivenolien ind i suppen og smag til med salt, peber og sherryvinaigre. Sæt suppen i køleskabet til den skal spises. </li>\n\nGarniture:\n<li>Til garnituren flås og udkernes tomaterne, hvorpå de skæres i fine tern. Det samme med pebrene og løget.</li>\n<li>Brødet skæres ligeledes i små tern som ristes i olivenolie på panden til de er gyldne og sprøde.</li>\n\n<li>Server suppen med tilbehøret i små skåle.</li>"*/
