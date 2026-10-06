const produits = [{ nom: 'PC', stock: 2 }, { nom: 'Clavier', stock: 0 }, { nom: 'PC', stock: 4 }];
// Complétez ici.


let produitTrouve = produits.filter(p => p.nom == 'PC')
console.log(produitTrouve)
