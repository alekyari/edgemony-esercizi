const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newObj = {
    name: catName.value,
    image: catImage.value,
  };
  console.log(newObj);
  funzionePost(newObj, "categories");
});

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newEl = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  funzionePost(newEl, "products");
  console.log(newEl);
  alert(`l'articolo ${newEl.title} è stato aggiunto con successo al database!`);
});

const funzionePost = (objBody, parameter) => {
  fetch(`https://api.escuelajs.co/api/v1/` + parameter, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(
          `${param} NON CARICATO PER LE SEGUENTI RAGIONI: ` + data.message[0]
        );
      } else {
        alert(`${parameter} CARICATO CORRETTAMENTE!`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
