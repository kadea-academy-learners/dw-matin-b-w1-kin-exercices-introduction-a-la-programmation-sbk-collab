// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F2 — Le convertisseur de saisie (Niveau 1 — Facile)

Objectif : comprendre qu'une saisie est du texte et la convertir avec Number().
Contexte : un formulaire de recharge mobile money renvoie toujours le montant sous forme de texte.

Consignes :
1. Déclare const saisie = '2500'; et affiche saisie + 500.
2. Explique en commentaire pourquoi le résultat est faux.
3. Corrige avec Number() et affiche le bon total.
4. Avant de les tester, écris tes prédictions pour Number(''), Number('abc'), Number(' 42 ') et Number(true), puis vérifie.

Résultat attendu :
2500500, puis 3000 ; les prédictions vérifiées : 0, NaN, 42, 1.

Recherche (à rédiger dans RECHERCHES.md) :
Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


const saisie = '2500';
console.log (saisie + 500);

// le resultat obtenu avec le code ci haut est faux ou plutôt indésiré car l'addition entre un string est un number est en réalité une concaténation

console.log (Number(saisie) + 500);

/*
Mes prédictions pour les cas Number(''), Number('abc'), Number(' 42 ') et Number(true)
Étant donné la fonction number qui est sensé passer un type ver number les résultats que je prévois sont les suivants :
Number('') retournera peut être 0 parce qu'il n'y aucun caractère entre les guillemet donc la chaine vaut zéro
Number('abc') retournera probablement 3 si je suis la même logique que pour le premier cas
Number(' 42 ') retournera peut être 4 confus de trouver plusieur caractère de nature différente soit une erreur
Number(true) retournera probablement 1 car true veut 1
*/

// moment test 😅 moment de verité

console.log (`les prédictions vérifiées : ${Number('')}, ${Number('abc')}, ${Number(' 42 ')}, ${Number(true)}`); 