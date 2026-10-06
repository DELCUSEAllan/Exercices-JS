const prix = 12.345;
// Complétez ici.

const FormaterEuros = new Intl.NumberFormat('fr-FR');

console.log(FormaterEuros.format(prix));
console.log(prix.toFixed(2));
