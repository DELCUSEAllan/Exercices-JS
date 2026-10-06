function creerCompteur() {

  let valeur = 0;
  return () => ++valeur;
}

const prochain = creerCompteur();
const prochain2 = creerCompteur();

console.log(prochain(), prochain(), prochain2());
