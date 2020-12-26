const validate = (formValues) => {
  const errors = {};
  if (!formValues.model) {
    errors.model = "Il manque le nom du modèle";
  }
  if (!formValues.description) {
    errors.description = "Il manque la description du bateau";
  }
  if (!formValues.reference) {
    errors.reference = "Il manque la référence du modèle";
  }
  if (!formValues.longueur) {
    errors.longueur = "Il manque la longueur du modèle";
  }
  if (!formValues.largeur) {
    errors.largeur = "Il manque la largeur du modèle";
  }
  if (!formValues.pavillon) {
    errors.pavillon = "Il manque le pavillon";
  }
  if (!formValues.annee) {
    errors.annee = "Il manque l'année du modèle";
  }
  if (!formValues.moteurs) {
    errors.moteurs = "Il manque les moteurs";
  }
  if (!formValues.hmoteurs) {
    errors.hmoteurs = "Il manque les moteurs";
  }
  if (!formValues.cabines) {
    errors.cabines = "Il manque le nombre de cabines";
  }
  if (!formValues.equipage) {
    errors.equipage = "Il manque le nombre de cabines d'équipage";
  }
  if (!formValues.eau) {
    errors.eau = "Il manque le tirant d'eau";
  }
  if (!formValues.carburant) {
    errors.carburant = "Il manque la capacité en carburant";
  }
  if (!formValues.prix) {
    errors.prix = "Il manque le prix";
  }
  if (!formValues.photos || !formValues.photos.length) {
    errors.photos = { _error: "Il faut au moins une photo" };
  } else {
    const photosArrayErrors = [];
    formValues.photos.forEach((photo, photoIndex) => {
      const photoErrors = {};
      if (!photo || !photo.url) {
        photoErrors.url = "Il faut l'url de la photo";
        photosArrayErrors[photoIndex] = photoErrors;
      }
    });
    if (photosArrayErrors.length) {
      errors.photos = photosArrayErrors;
    }
  }
  return errors;
};

export default validate;
