// Fonction pour générer un nombre aléatoire déterministe basé sur une graine (seed)
const seededRandom = function(seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
};

// Fonction pour générer des horaires aléatoires entre 17:00 et 23:30
const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate()); // Utilise le jour du mois comme graine

  for (let i = 17; i <= 23; i++) {
      if (random() < 0.5 && !result.includes(i + ':00')) {
          result.push(i + ':00');
      }
      if (random() < 0.5 && !result.includes(i + ':30')) {
          result.push(i + ':30');
      }
  }
  return Promise.resolve(result); // ✅ On retourne une promesse pour rester cohérent avec async
};

// Fonction pour soumettre les données du formulaire (version simulée)
const submitAPI = async function(formData) {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Simulation d'envoi:", formData);
          resolve(true); // ✅ Réponse simulée comme si c'était OK
      }, 1000);
  });
};

export { fetchAPI, submitAPI };
