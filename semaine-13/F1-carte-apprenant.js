// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F1 — Ma carte d'apprenant (Niveau 1 — Facile)

Objectif : choisir le bon mot-clé (const ou let) et reconnaître les 5 types primitifs.
Contexte : Kadea prépare les badges de la promo et a besoin de ta fiche.

Consignes :
1. Déclare prenom, age, commune, estInscrit, surnom (sans valeur) et ancienneFormation (valeur null).
2. Choisis const ou let pour chacune et justifie ton choix en commentaire.
3. Affiche ta fiche avec un seul gabarit littéral (une seule chaîne construite par interpolation).
4. Affiche le typeof de chaque variable.

Résultat attendu :
Je m'appelle Grâce, j'ai 22 ans et j'habite à Lemba.
puis : string, number, string, boolean, undefined, object

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


const prenom = "Grâce";
// pour ce programe la variable prenom comme les autres const n'est pas appelé à changer de valeur dans une carte apprenant
let age = 22;
// techniquement l'age est une constante car on soustrait toujours la date actuel par la date de naissance. Je ne le fais pas ici c'est pourquoi je met let
let commune = "Lemba";
// l'apprenant peiut être emenné à changer d'adresse pour une raison quelconque
let estInscrit = false;
// valeur par défaut qui peut être emené à changer si le candidat est inscrit
let surnom;
// nom non officiel pouvant changer
const ancienneFormation = null;
// la carte d'inscription étant faite à une date où le dit apprenant n'a pas eu d'anciènne formation cette vairiable est une constante

const monTypeOf = (valeur) =>{
    if(valeur === null) return "null";
    return typeof(valeur);
}

console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);
console.log(`${typeof prenom}, ${typeof age}, ${typeof commune}, ${typeof estInscrit}, ${typeof surnom}, ${monTypeOf(ancienneFormation)}`);