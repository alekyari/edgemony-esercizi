import { funzionePost, deleteThisProduct } from "./fetch.js";

const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

const deleteProductForm = document.querySelector("#deleteProductForm");
const inputIdProduct = document.querySelector("#productId");

const deleteCategoryForm = document.querySelector("#deleteCategoriesForm");
const inputIdCategory = document.querySelector("#categoryId");

//----------------------CATEGORY FORM EVENT LISTENER----------------
categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newObj = {
    name: catName.value,
    image: catImage.value,
  };
  console.log(newObj);
  funzionePost(newObj, "categories");
});

//----------------------POST FORM EVENT LISTENER----------------
postForm.addEventListener("submit", (event) => {
  const method = event.target[0].value;
  const idProduct = "/" + event.target[1].value;
  event.preventDefault();
  if (parseInt(inputCategory.value) < 1) {
    alert("la categoria deve essere maggiore di 0");
    return;
  }
  const newEl = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  console.log(newEl);
  if (method === "POST") {
    funzionePost(newEl, "products", method);
    alert(
      `l'articolo" ${newEl.title} è stato aggiunto con successo al database!`
    );
  } else {
    funzionePost(newEl, "products", method, idProduct);
    alert(`l'articolo ${newEl.title} è stato modificato con successo!`);
  }
});

deleteProductForm.addEventListener("submit", (event) => {
  event.preventDefault();
  deleteThisProduct("products", event.target[0].value);
});

deleteCategoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  deleteThisProduct("categories", event.target[0].value);
});
