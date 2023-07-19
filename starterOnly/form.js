class Form {
  constructor(firstname, lastname, email, birthdate, quantity, location, checkbox1, checkbox2) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.email = email,
    this.birthdate = birthdate,
    this.quantity = quantity,
    this.location = location,
    this.checkbox1 = checkbox1,
    this.checkbox2 = checkbox2
  }

  isValid() {
    let result = {
      success: false,
      errors: {},
    };
    if(
      this.firstnameIsValid() &&
      this.lastnameIsValid() &&
      this.emailIsValid() &&
      this.quantityIsValid() &&
      this.locationIsValid() &&
      this.checkbox1IsValid()
    ) {
      result.success = true;
      return result;
    }

    if(this.firstnameIsValid() === false) {
      result.errors.firstname = "2 caractères au minimum";
    }
    if(this.lastnameIsValid() === false) {
      result.errors.lastname = "2 caractères au minimum";
    }
    if(this.emailIsValid() === false) {
      result.errors.email = "Veuillez mentionner un email valide";
    }
    if(this.quantityIsValid() === false) {
      result.errors.quantity = "La quantité indiqué doit être un nombre";
    }
    if(this.locationIsValid() === false) {
      result.errors.quantity = "Veuillez sélectionner une ville";
    }
    if(this.checkbox1IsValid() === false) {
      result.errors.checkbox1 = "Veuillez accepter les conditions générales";
    }

    result.success = false;
    return result;
  }

  firstnameIsValid() {
    if(this.firstname.length >= 2) {
      return true;
    }
    return false;
  }

  lastnameIsValid() {
    if(this.lastname.length >= 2) {
      return true;
    }
    return false;
  }

  emailIsValid() {
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(EMAIL_REGEX.test(this.email)) {
      return true;
    }
    return false;
  }

  quantityIsValid() {
    if(this.quantity >= 0 && this.quantity !== "") {
      return true;
    }
    return false;
  }

  locationIsValid() {
    if(this.location.length > 0) {
      return true;
    }
    return false;
  }

  checkbox1IsValid() {
    if(this.checkbox1 === true) {
      return true;
    }
    return false;
  }
}