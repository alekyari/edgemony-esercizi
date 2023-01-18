const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newEl = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    category: {
      id: inputCategory.value,
      name: "",
      image: "",
      creationAt: "",
      updatedAt: "",
    },
    images: [inputImage.value],
  };
  funzionePost(newEl);
  console.log(newEl);
  alert(`l'articolo ${newEl.title} è stato aggiunto con successo al database!`);
});

const funzionePost = (objBody) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => console.log("RISPOSTA POST: ", data))
    .catch((e) => console.log("ERRORE: ", e));
};

/* sono riuscito a stampare in console il nuvo oggetto maho avuto problemi con il metodo post
in quanto ricevo sempre lo stesso errore: categoryId should not be empty', 'categoryId must be a number conforming to the specified constraints,
ho provato a modificare la sintassi di category fcendolo diventare un array di oggetti, poi l'ho eliminata, ma continua adarmi lo stesso errore.*/
