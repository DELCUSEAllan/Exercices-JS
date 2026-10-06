const prix = 60;
const reduction = 20;

let prixReduit = prix * (1-(reduction/100));

let boole = prixReduit < 50;

if(boole) {
    console.log("Le nouveau prix est de " + prixReduit + "€.")
}
