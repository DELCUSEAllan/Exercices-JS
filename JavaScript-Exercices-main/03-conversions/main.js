const saisie = '7';
// Essayez aussi 'abc' et '0'.

try {
    let nombre = Number(saisie);
    if (isNaN(nombre)) throw "Ce n'est pas un nombre";
    console.log("Le nombre actuel est" + nombre);

    while(nombre % 2 != 0) {
        nombre *= 2
        console.log("Actuel: " + nombre);
    }

} catch (error) {
    console.log("Erreur :" + error);
}

