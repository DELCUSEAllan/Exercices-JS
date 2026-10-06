const profil = { nom: 'Maya', role: 'membre' };

const { nom, ville = 'Inconnue' } = profil;

const nouvelleFiche = {
    ...profil,
    role: 'admin'
};

console.log(nom, ville, nouvelleFiche,);
