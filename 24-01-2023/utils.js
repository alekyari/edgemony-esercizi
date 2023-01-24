export { cE, qS, userGenerator };

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);

const userGenerator = (data) => {
  const {
    id,
    firstName,
    lastName,
    maidenName,
    age,
    gender,
    email,
    phone,
    birthDate,
    image,
    height,
    weight,
    hair,
    address,
  } = data;

  const userEl = cE("div");
  const imageEl = cE("img");
  const firstNameEl = cE("h3");
  const lastNameEl = cE("h3");
  const maidenNameEl = cE("h3");
  const ageEl = cE("span");
  const genderEl = cE("span");
  const emailEl = cE("span");
  const phoneEl = cE("span");
  const birthdateEl = cE("span");
  const heightEl = cE("span");
  const wheightEl = cE("span");
  const hairColorEl = cE("span");
  const addressCityEl = cE("span");
  const addressStreetEl = cE("span");

  userEl.className = "user";
  userEl.setAttribute("id", id);

  imageEl.className = "image__Element";
  imageEl.setAttribute("src", image);
  imageEl.setAttribute("alt", "user image");

  firstNameEl.textContent = `First Name: ${firstName}`;
  lastNameEl.textContent = `Last Name: ${lastName}`;
  maidenNameEl.textContent = `Maiden Name: ${maidenName}`;
  ageEl.textContent = `Age: ${age}`;
  genderEl.textContent = `Gender: ${gender}`;
  emailEl.textContent = `Email: ${email}`;
  phoneEl.textContent = `Phone: ${phone}`;
  birthdateEl.textContent = `Birthdate: ${birthDate}`;
  heightEl.textContent = `Height: ${parseInt(height)}`;
  wheightEl.textContent = `Wheigt: ${parseInt(weight)}`;
  hairColorEl.textContent = `Hair Color: ${hair.color}`;
  addressCityEl.textContent = `City: ${address.city}`;
  addressStreetEl.textContent = `Address: ${address.address}`;

  userEl.append(
    imageEl,
    firstNameEl,
    lastNameEl,
    maidenNameEl,
    ageEl,
    genderEl,
    emailEl,
    phoneEl,
    birthdateEl,
    heightEl,
    wheightEl,
    hairColorEl,
    addressStreetEl,
    addressCityEl
  );
  return userEl;
};
