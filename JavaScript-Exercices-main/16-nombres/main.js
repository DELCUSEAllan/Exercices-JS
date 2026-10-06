const prix = 12.345;
// Complétez ici.

const FormaterEuro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
});

console.log(FormaterEuro.format(prix));
