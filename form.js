class Form {
  constructor(firstname, lastname, email, birthdate, quantity, location, checkbox1) {
    this.form = [
      {
        name : 'firstname',
        pattern : /^.{2,}$/,
        errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
        value: firstname,
      },
      {
        name : 'lastname',
        pattern : /^.{2,}$/,
        errorMessage: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
        value: lastname,
      },
      {
        name : 'email',
        pattern : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        errorMessage: 'Veuillez renseigner un email valide.',
        value: email,
      },
      {
        name : 'birthdate',
        pattern : /^\d{4}-\d{2}-\d{2}$/,
        errorMessage: 'Vous devez entrer votre date de naissance.',
        value: birthdate,
      },
      {
        name : 'quantity',
        pattern : /^(?:0|[1-9]\d?|99)$/,
        errorMessage: 'La quantité indiquée doit être un nombre.',
        value: quantity,
      },
      {
        name : 'location',
        pattern : /^.{1,}$/,
        errorMessage: 'Vous devez choisir une option.',
        value: location,
      },
      {
        name : 'checkbox1',
        pattern : /^true$/,
        errorMessage: 'Vous devez vérifier que vous acceptez les termes et conditions.',
        value: checkbox1,
      },
    ]
  }

  isValid() {
    let allEntriesAreValid = true;
    for (const[key, value] of Object.entries(this.form)){
      const regex = new RegExp(value.pattern);
      this.form[key].isValid = value.pattern.test(this.form[key].value);
      if(this.form[key].isValid === false) {
        allEntriesAreValid = false;
      }
    }
    return allEntriesAreValid;
  }
}
