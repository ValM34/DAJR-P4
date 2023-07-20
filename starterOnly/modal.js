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
const formData = document.querySelectorAll(".formData");
const closeModalBtns = document.querySelectorAll(".close");
// DOM Elements (inputs)
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
let locationInputsArray = document.querySelectorAll("input[type=radio]");
// DOM Elements (form input containers)
const firstnameContainer = document.querySelector('#firstname_container');
const lastnameContainer = document.querySelector('#lastname_container');
const emailContainer = document.querySelector('#email_container');
const birthdateContainer = document.querySelector('#birthdate_container');
const quantityContainer = document.querySelector('#quantity_container');
const locationContainer = document.querySelector('#location_container');
const checkboxContainer = document.querySelector('#checkbox_container');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeModalBtns.forEach(closeModalBtn => {
  closeModalBtn.addEventListener("click", () => modalbg.style.display = "none");
})

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// verify if form is valid
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
    checkbox2.checked,
  );

  console.log(birthdate.value)

  // Handle error message
  function handleErrorMsg(containerSelector, errorMsg) {
    if(errorMsg !== null) {
      containerSelector.setAttribute("data-error", errorMsg);
      containerSelector.setAttribute("data-error-visible", "true");
    } else {
      containerSelector.setAttribute("data-error-visible", "false");
    }
  }

  handleErrorMsg(firstnameContainer, form.isValid().errors.firstname);
  handleErrorMsg(lastnameContainer, form.isValid().errors.lastname);
  handleErrorMsg(emailContainer, form.isValid().errors.email);
  handleErrorMsg(birthdateContainer, form.isValid().errors.birthdate);
  handleErrorMsg(quantityContainer, form.isValid().errors.quantity);
  handleErrorMsg(locationContainer, form.isValid().errors.location);
  handleErrorMsg(checkboxContainer, form.isValid().errors.checkbox1);
  
  // Si le formulaire est valide, retourner true
  if(form.isValid().success === true) {
    return true;
  }
  return false;
}

const modalForm = document.querySelector("#modal_form");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValidate = validateForm();
  if(isValidate) {
    // Close modal
    modalbg.style.display = "none";
  }
})

