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
  // name
  const firstname = document.querySelector("#firstname");
  const lastname = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");


  const checkbox1 = document.querySelector("#checkbox1");
  const checkbox2 = document.querySelector("#checkbox2");
  // Manquera location


  // LOCAtion
  let radio = document.querySelectorAll("input[type=radio]");
  let location = {value: ""};

  radio.forEach(element => {
    if(element.checked) {
      location.value = element.value;
    }
  });
  // LOCATION
  
  const form = new Form(
    firstname.value,
    lastname.value,
    email.value,
    birthdate.value,
    quantity.value,
    location.value,
    checkbox1.checked,
    checkbox2.checked,
  );
  
  if(form.isValid().success === true) {
    return true;
  }

  // Afficher les messages d'erreur ici
  if(form.isValid().errors.firstname) {
    /*let firstnameErrorMsg = document.createElement("div");
    firstnameErrorMsg.innerText = form.isValid().errors.firstname;

    document.querySelector(".formData").appendChild(firstnameErrorMsg);

*/
    console.log(form.isValid().errors.firstname);
  }

  if(form.isValid().errors.lastname) {
    console.log(form.isValid().errors.lastname);
  }
  if(form.isValid().errors.email) {
    console.log(form.isValid().errors.email);
  }
  if(form.isValid().errors.location) {
    console.log(form.isValid().errors.location);
  }
  if(form.isValid().errors.quantity) {
    console.log(form.isValid().errors.quantity);
  }


  return false;
}

let i = 0;

const modalForm = document.querySelector("#modal_form");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault()
  if(!validateForm()){
    e.preventDefault();
    console.log('formulaire erroné')
  }
})



