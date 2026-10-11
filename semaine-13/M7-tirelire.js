// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M7 — La tirelire numérique (Niveau 2 — Moyen)

Objectif : utiliser une boucle for avec un accumulateur et une condition à l'intérieur.
Contexte : Patience épargne 2 000 FC par semaine ; toutes les 4 semaines, sa tante ajoute un bonus de 1 000 FC.

Consignes :
1. Simule 12 semaines avec une boucle.
2. À chaque tour, affiche : Semaine 4 : 9000 FC (bonus !).
3. Affiche le total final.

Résultat attendu :
Total après 12 semaines : 27000 FC

Recherche (à rédiger dans RECHERCHES.md) :
Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


let epargneHebdo = 2000;
let bonus = 1000;
let total = 0;
let gainHebdo = 0;

for(let semaine = 1; semaine <= 12; semaine++){
    total = (semaine * epargneHebdo);

    if(semaine % 4 === 0){
        gainHebdo += bonus;
        total += gainHebdo; 
        console.log(`Semaine ${semaine} : ${total} FC (bonus !)`)
    }

    if(semaine === 12) console.log(`Total après ${semaine} semaines : ${total} FC`); 
}