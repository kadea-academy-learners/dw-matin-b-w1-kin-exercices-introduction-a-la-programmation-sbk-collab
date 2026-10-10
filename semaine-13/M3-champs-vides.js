// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M3 — Le détecteur de champs vides (Truthy / Falsy) (Niveau 2 — Moyen)

Objectif : prédire si une valeur est truthy ou falsy.
Contexte : le formulaire d'inscription Kadea doit refuser les champs vides.

Consignes :
1. Écris estRempli, une fonction fléchée qui renvoie 'rempli' ou 'vide' avec un ternaire, sans comparaison (if (valeur) suffit).
2. Avant de tester, note tes prédictions pour : '', 'Esther', 0, 42, null, undefined, NaN, ' ', '0', false.
3. Teste et compare.

Résultat attendu :
vide, rempli, vide, rempli, vide, vide, vide, rempli, rempli, vide

Recherche (à rédiger dans RECHERCHES.md) :
Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


const estRempli = (valeur) => valeur ? 'rempli' : 'vide';

/* 
selon moi '', 'Esther', 0, 42, null, undefined, NaN, ' ', '0' et false passé au test logique donnerons :
'' : false car il n'y a aucun caractère
'Esther' : true car les caractères sont là
0 : false car 0 vaut false
42 : true car Number > 0 est que Number vaut true
null, undefined et NaN : false, je suppose que ce sont des falsy
' ' et '0' : true car l'espace et 0 sont des caractères
false : false car falsy
*/

console.log(estRempli(''));
console.log(estRempli('Esther'));
console.log(estRempli(0));
console.log(estRempli(42));
console.log(estRempli(null));
console.log(estRempli(undefined));
console.log(estRempli(NaN));
console.log(estRempli(' '));
console.log(estRempli('0'));
console.log(estRempli(false));