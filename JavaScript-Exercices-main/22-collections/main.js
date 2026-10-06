const categories = ['jeu', 'musique', 'jeu'];
// Complétez ici.

const monSet = new Set(categories);

const categoriesUniques = [...monSet];

const maMap = new Map();

for (let i = 0; i < categories.length; i++) {
    let nomCategorie = categories[i];

    if (maMap.has(nomCategorie) === true) {
        let compteurActuel = maMap.get(nomCategorie);
        maMap.set(nomCategorie, compteurActuel + 1);
    } else {
        maMap.set(nomCategorie, 1);
    }
}

console.log(categoriesUniques, maMap.size);
