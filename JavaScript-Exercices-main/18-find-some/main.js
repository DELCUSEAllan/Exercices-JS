const produits = [{ id: 1, prix: 20 }, { id: 2, prix: 80 }];
// Complétez ici.

let produitId2 = produits.find(function(produit) {
    return produit.id == 2;
});

console.log("Produit à l'id 2 :", produitId2);

let auDessusDe50 = produits.some(function(produit) {
    return produit.prix > 50;
});

console.log("Le catalogue contient au moins un prix supérieur à 50 ?", auDessusDe50);
