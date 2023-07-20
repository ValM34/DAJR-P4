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
      result.errors.firstname = null;
      result.errors.lastname = null;
      result.errors.email = null;
      result.errors.birthdate = null;
      result.errors.quantity = null;
      result.errors.location = null; 
      result.errors.checkbox1 = null;

      return result;
    }

    result.errors.firstname = this.firstnameIsValid() === false ? "Veuillez entrer 2 caractères ou plus pour le champ du prénom." : null;
    result.errors.lastname = this.lastnameIsValid() === false ? "Veuillez entrer 2 caractères ou plus pour le champ du nom." : null;
    result.errors.email = this.emailIsValid() === false ? "Veuillez renseigner un email valide." : null;
    result.errors.birthdate = this.birthdateIsValid() === false ? "Vous devez entrer votre date de naissance." : null;
    result.errors.quantity = this.quantityIsValid() === false ? "La quantité indiquée doit être un nombre." : null;
    result.errors.location = this.locationIsValid() === false ? "Vous devez choisir une option." : null;
    result.errors.checkbox1 = this.checkbox1IsValid() === false ? "Vous devez vérifier que vous acceptez les termes et conditions." : null;

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

  birthdateIsValid() {
    const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
    if(DATE_REGEX.test(this.birthdate)) {
      return true;
    }
    return false;
  }

  quantityIsValid() {
    if(this.quantity >= 1 && this.quantity !== "") {
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