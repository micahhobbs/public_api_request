// Create helper function
function create(element) {
  return document.createElement(element);
}

// Append helper function
function append(parent, element) {
  return parent.appendChild(element);
}

// Dynamically create HTML elements
// Form
const form = document.createElement(`form`);
form.setAttribute(`action`, `#`);
form.setAttribute(`method`, `get`);
// Form input
const search = document.createElement(`input`);
search.setAttribute(`type`, `search`);
search.setAttribute(`id`, `search-input`);
search.setAttribute(`class`, `search-input`);
search.setAttribute(`placeholder`, `Seach...`);
// Form button
const submit = document.createElement(`input`);
submit.setAttribute(`type`, `submit`);
submit.setAttribute(`value`, `Find`);
submit.setAttribute(`id`, `search-submit`);
submit.setAttribute(`class`, `search-submit`);
// Add input elements to form
form.appendChild(search);
form.appendChild(submit);
// Add form to DOM
append(searchContainer, form);

// Get HTML elements
const body = document.getElementsByTagName(`body`);

// Create constant modals elements
const modalContainer = document.createElement(`div`);
modalContainer.setAttribute(`class`, `modal-container`);
const modal = document.createElement(`div`);
modal.setAttribute(`class`, `modal`);
const button = document.createElement(`button`);
button.setAttribute(`type`, `button`);
button.setAttribute(`id`, `modal-close-btn`);
button.setAttribute(`class`, `modal-close-btn`);
button.insertAdjacentHTML(`afterbegin`, `<strong>X</strong>`);

append(modal, button);
append(modalContainer, modal);

// Gallery DOM element
const gallery = document.querySelector(`#gallery`);

function closeModal() {
  // If I change this to .className or setAttribute it breaks when I close a modal open another
  // not sure why??
  modalContainer.classList.add(`close`);
  modal.removeChild(modal.lastChild);
}

button.addEventListener(`click`, closeModal);

let employees = [];

// CreateCard()
function createCard() {}

// CreateModal()

// Get random users
fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(function(data) {
    employees = data.results;
    employees.map(employee => {
      const card = create(`div`);
      const imageContainer = create(`div`);
      const image = create(`img`);
      const infoContainer = create(`div`);
      const name = create(`h3`);
      const email = create(`p`);
      const location = create(`p`);
      card.setAttribute(`class`, `card`);
      imageContainer.setAttribute(`class`, `card-img-container`);
      image.setAttribute(`class`, `card-img`);
      image.setAttribute(`src`, `${employee.picture.medium}`);
      infoContainer.setAttribute(`class`, `card-info-container`);
      name.setAttribute(`id`, `name`);
      name.setAttribute(`class`, `card-name`);
      name.setAttribute(`class`, `cap`);
      name.textContent = `${employee.name.first} ${employee.name.last}`;
      email.setAttribute(`class`, `card-text`);
      email.textContent = `${employee.email}`;
      location.setAttribute(`class`, `card-text`);
      location.setAttribute(`class`, `card-text`);
      location.textContent = `${employee.location.city}, ${
        employee.location.state
      }`;
      append(imageContainer, image);
      append(infoContainer, name);
      append(infoContainer, email);
      append(infoContainer, location);
      append(card, imageContainer);
      append(card, infoContainer);
      append(gallery, card);
    });
  })
  .then(function() {
    // This seems like a lot
    // Could split out into out function like createCard() above
    const cards = document.querySelectorAll(`.card`);
    cards.forEach(function(card, index) {
      card.addEventListener(`click`, function() {
        const modalInfoContainer = create(`div`);
        modalInfoContainer.setAttribute(`class`, `modal-info-container`);
        const modalImage = create(`img`);
        modalImage.setAttribute(`class`, `modal-img`);
        modalImage.setAttribute(`alt`, `profile picture`);
        modalImage.setAttribute(`src`, `${employees[index].picture.medium}`);
        const modalName = create(`h3`);
        modalName.setAttribute(`id`, `name`);
        modalName.setAttribute(`class`, `modal-name`);
        modalName.setAttribute(`class`, `cap`);
        modalName.textContent = `${employees[index].name.first} 
                                 ${employees[index].name.last}`;
        const modalEmail = create(`p`);
        modalEmail.setAttribute(`class`, `modal-text`);
        modalEmail.textContent = employees[index].email;
        const modalCity = create(`p`);
        modalCity.setAttribute(`class`, `modal-text`);
        modalCity.setAttribute(`class`, `cap`);
        modalCity.textContent = employees[index].location.city;
        const hr = create(`hr`);
        const modalNumber = create(`p`);
        modalNumber.setAttribute(`class`, `modal-text`);
        modalNumber.textContent = `${employees[index].cell}`;
        const modalAddress = create(`p`);
        modalAddress.setAttribute(`class`, `modal-text`);
        modalAddress.setAttribute(`class`, `cap`);
        modalAddress.textContent = `${employees[index].location.street}, 
                                    ${employees[index].location.city}, 
                                    ${employees[index].location.state}, 
                                    ${employees[index].location.postcode}`;
        const modalBirthday = create(`p`);
        modalBirthday.setAttribute(`class`, `modal-text`);
        modalBirthday.textContent = `Birthday: ${employees[
          index
        ].dob.date.slice(0, 10)}`;
        append(modalInfoContainer, modalImage);
        append(modalInfoContainer, modalName);
        append(modalInfoContainer, modalEmail);
        append(modalInfoContainer, modalCity);
        append(modalInfoContainer, hr);
        append(modalInfoContainer, modalNumber);
        append(modalInfoContainer, modalAddress);
        append(modalInfoContainer, modalBirthday);
        append(modal, modalInfoContainer);
        gallery.insertAdjacentElement(`afterend`, modalContainer);
        modalContainer.classList.remove(`close`);
      });
    });
  })
  .catch(function(error) {});
