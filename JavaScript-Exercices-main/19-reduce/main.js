const panier = [{ prix: 10, quantite: 2 }, { prix: 7, quantite: 3 }];
// Complétez ici.

const FormaterEuro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
});

let totalPanier = panier.reduce(function(accumulateur, produit) {

    let prixLigne = produit.prix * produit.quantite;


    return accumulateur + prixLigne; }, 0);

console.log("Le total du panier est de :", FormaterEuro.format(totalPanier));


