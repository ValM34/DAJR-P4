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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// verify if form is valid
function validateForm() {
  // select inputs
  const firstname = document.querySelector("#firstname");
  const lastname = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");
  const checkbox1 = document.querySelector("#checkbox1");
  const checkbox2 = document.querySelector("#checkbox2");
  let locationInputsArray = document.querySelectorAll("input[type=radio]");
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

  handleErrorMsg(document.querySelector('#firstname_container'), form.isValid().errors.firstname);
  handleErrorMsg(document.querySelector('#lastname_container'), form.isValid().errors.lastname);
  handleErrorMsg(document.querySelector('#email_container'), form.isValid().errors.email);
  handleErrorMsg(document.querySelector('#birthdate_container'), form.isValid().errors.birthdate);
  handleErrorMsg(document.querySelector('#quantity_container'), form.isValid().errors.quantity);
  handleErrorMsg(document.querySelector('#location_container'), form.isValid().errors.location);
  handleErrorMsg(document.querySelector('#checkbox_container'), form.isValid().errors.checkbox1);
  
  // Si le formulaire est valide, retourner true
  if(form.isValid().success === true) {
    return true;
  }
  return false;
}

const modalForm = document.querySelector("#modal_form");
modalForm.addEventListener("submit", (e) => {
  if(!validateForm()){
    e.preventDefault();
  }
})

