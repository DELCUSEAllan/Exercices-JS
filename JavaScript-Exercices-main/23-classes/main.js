class Carte {
  constructor(nom, puissance) {
    this.nom = nom;
    this.puissance = puissance;
  }


  presenter() {
    return `Classe ${this.nom} (Puissance : ${this.puissance})`;
  }
}

// On appelle bien la classe "Carte"
const guerrier = new Carte('Archer', 40);
console.log(guerrier.presenter());
