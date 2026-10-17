// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

const doubler = (n) => { return n * 2; };
// la fonction ne retournait rien, j'ai mis l'opération en retour pour palier le bug
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { return (prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!
// la fonction ne renvoi aucune valeur mais affiche une valeur, ce qui fais que l'opération effectué dans la variable totale échoue. J'ai changé l'affichage par un retour

const saluer = (prenom) => {
  return `Mbote ${prenom}`;
}; 
// le retour n'était pas définit car la chaine était sur une autre lige. J'ai donc mis la chaine sur la même ligne que return.
console.log(saluer('Ney'));        // undefined ?!
