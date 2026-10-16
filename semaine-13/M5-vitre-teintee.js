// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M5 — La vitre teintée (portée de bloc) (Niveau 2 — Moyen)

Objectif : prédire où une variable existe et corriger une ReferenceError.

Consignes :
1. Le code ci-dessous est déjà recopié dans la zone de travail : écris tes prédictions en commentaire avant de l'exécuter.
2. Exécute-le : pourquoi la fonction afficher ne s'exécute-t-elle jamais ?
3. Corrige le code pour que tout s'affiche sans erreur, sans déplacer les déclarations dans les blocs.

Code fourni :
const ville = 'Kinshasa';
if (true) {
  const commune = 'Gombe';
  console.log(ville);
}
console.log(commune);

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());
console.log(secret);

Résultat attendu :
avant correction : Kinshasa puis ReferenceError: commune is not defined.
après correction : tout s'affiche (Kinshasa, Gombe, pondu…) sans aucune erreur.

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

// Mes prédictions (avant d'exécuter) :
// La condition est valide car true est vrai, donc on affiche ville.
// L'affichage de commune ne peut pas être effectué car cette variable a une porté limité dans les scops d'une condition car elle y est déclaré.
// L'affichage de la fonction affiche secret/'pondu' mais celui de secret renvoi une erreur car secret est une variable déclaré dans une fonction.
//


if (true) {
  const ville = 'Kinshasa';
  const commune = 'Gombe';
  console.log(ville);
  console.log(commune);
}

const afficher = () => {
  const secret = 'pondu';
  return secret;
};
console.log(afficher());