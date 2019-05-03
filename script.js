// Get HTML elements
const searchContainer = document.querySelector(`.search-container`);

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
searchContainer.appendChild(form);

// Create
function create(element) {
  return document.createElement(element);
}

// Append
function append(parent, element) {
  return parent.appendChild(element);
}

// Gallery DOM element
const gallery = document.querySelector(`#gallery`);

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
    const cards = document.querySelectorAll(`.card`);
    cards.forEach(card => {
      card.addEventListener(`click`, function() {
        console.log(`You clicked a card!`);
      });
    });
  })
  .catch(function(error) {});
