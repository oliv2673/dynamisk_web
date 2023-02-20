fetch("https://madopskrifter-41a3.restdb.io/rest/opskrifter", {
  method: "get",
  headers: {
    "x-apikey": "63f32ac7478852088da68490",
  },
})
  .then((response) => response.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  /*   //fang template
  const template = document.querySelector("template").content;
  //lav kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("a").href = "productlist.html?subcategory=" + cat.subcategory;
  copy.querySelector("a").textContent = cat.subcategory;
  //append
  document.querySelector("#nordisk").appendChild(copy); */
}
