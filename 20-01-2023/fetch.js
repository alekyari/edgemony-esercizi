export const funzionePost = (objBody, parameter, method, idProduct = "") => {
  fetch(`https://api.escuelajs.co/api/v1/` + parameter + idProduct, {
    method: method,
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
          `${parameter} NON CARICATO PER LE SEGUENTI RAGIONI: ` +
            data.message[0]
        );
      } else {
        //alert(`${parameter} CARICATO CORRETTAMENTE!`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};

export const deleteThisProduct = (callType, id) => {
  fetch(`https://api.escuelajs.co/api/v1/` + callType + `/` + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data !== true) {
        alert(
          `${callType}  ${id} NON ELIMINATO PER LE SEGUENTI RAGIONI: ` +
            data.name
        );
      } else {
        alert(`${callType} ${id} ELIMINATO CORRETTAMENTE!`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};
