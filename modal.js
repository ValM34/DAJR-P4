function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalForm = document.querySelector("#modal_form");
const formData = document.querySelectorAll(".formData");
const closeModalBtns = document.querySelectorAll(".close-event");
const body = document.querySelector("body");
// DOM Elements (inputs)
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const checkbox1 = document.querySelector("#checkbox1");
let locationInputsArray = document.querySelectorAll("input[type=radio]");
// DOM Elements (modal content)
const step1 = document.querySelector('#step_1');
const step2 = document.querySelector('#step_2');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", (e) => {
  modalbg.style.display = "flex";
  body.style.overflowY = "hidden";
}));

// Submit step 1 and activate step 2 of modal
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValidate = validateForm();
  // If all values are correct go to step 2
  if(isValidate) {
    step1.style.display = "none";
    step2.style.display = "flex";
  }
})

// Close modal event
closeModalBtns.forEach(closeModalBtn => {
  closeModalBtn.addEventListener("click", () => {
    modalbg.style.display = "none";
    step1.style.display = "flex";
    step2.style.display = "none";
    body.style.overflowY = "auto";
  });
})

// verify if form entries are valid
function validateForm() {
  // Find the value of the location element selected
  let location = "";
  locationInputsArray.forEach(element => {
    if(element.checked) {
      location = element.value;
    }
  });
  
  // Instanciate Form
  const form = new Form(
    firstname.value,
    lastname.value,
    email.value,
    birthdate.value,
    quantity.value,
    location,
    checkbox1.checked,
  );

  form.isValid();

  // Handle error messages
  for (const[key, value] of Object.entries(form.form)){
    // Containers id must named like this : '#[variable]_container'
    container = document.querySelector(`#${form.form[key].name}_container`);
    if(form.form[key].isValid === false) {
      container.setAttribute("data-error", form.form[key].errorMessage);
      container.setAttribute("data-error-visible", "true");
    } else {
      container.setAttribute("data-error-visible", "false");
    }
  }
  
  // If form is valid return true
  return form.isValid();
}
