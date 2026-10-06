const produits = [{ nom: 'A', prix: 30 }, { nom: 'B', prix: 10 }];
// Complétez ici.

const trierParPrix = produits.toSorted((a, b) => a.prix - b.prix);

console.log("Tableau normal :", produits);
console.log("Tableau trié  :", trierParPrix);
