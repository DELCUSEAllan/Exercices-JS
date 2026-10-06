const age = 18;
let prix;

if (age < 12) {
    prix = 5;
    console.log("Le prix est de" + prix + "€.");
} else if(age >= 18) {
    prix = 12;
    console.log("Le prix est de" + prix + "€.");
} else {
    prix = 8;
    console.log("Le prix est de" + prix + "€.");
}
