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

// Attribute
function add(element, attribute, value) {
  return element.setAttribute(attribute, value);
}

// Gallery DOM element
const gallery = document.querySelector(`#gallery`);

// Get random users
fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(function(data) {
    const employees = data.results;
    employees.map(employee => {
      const card = create(`div`);
      const container = create(`div`);
      const image = create(`img`);
      card.setAttribute(`class`, `card`);
      container.setAttribute(`class`, `card-img-container`);
      image.setAttribute(`class`, `card-img`);
      image.setAttribute(`src`, `${employee.picture.medium}`);
      append(container, image);
      append(card, container);
      append(gallery, card);
    });
  })
  .catch(function(error) {});
