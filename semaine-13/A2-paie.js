// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A2 — Le moteur de paie v2 (Niveau 3 — Avancé)

Objectif : parcourir un tableau avec .forEach(), accumuler un total et appliquer une règle d'heures supplémentaires.
Contexte : Kadea Tech paie ses techniciens 2 500 FC de l'heure ; au-delà de 40 h par semaine, chaque heure est payée 1,5 fois.

Consignes :
1. Pars de const heuresSemaine = [8, 9, 10, 8, 7, 6]; (du lundi au samedi).
2. Calcule le total des heures avec .forEach() et un accumulateur.
3. Écris calculerSalaire(heures, tauxHoraire = 2500) qui gère les heures supplémentaires.
4. Avec une boucle for, trouve le jour le plus chargé.

Résultat attendu :
Total : 48 h — Salaire : 130000 FC ; jour le plus chargé : mercredi (10 h).

Recherche (à rédiger dans RECHERCHES.md) :
La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


const heuresSemaine = [8, 9, 10, 8, 7, 6];
let horaireHebdoDeBase = 40;
// let horiareHebdoTotal = 0;
// heuresSemaine.forEach(n => horiareHebdoTotal += n);
const horiareHebdoTotal = heuresSemaine.reduce((total, n) => total + n, 0);

const calculerSalaire = (heures, tauxHoraire = 2500) =>{
    let salaireHebdo = 0;
    let heuresSup = 0;
    let paieParHeureSup = tauxHoraire * 1.5;
    if(heures > 40){
        heuresSup = heures - horaireHebdoDeBase;
        salaireHebdo = (tauxHoraire * horaireHebdoDeBase ) + (paieParHeureSup * heuresSup);
    }
    else salaireHebdo = tauxHoraire * heures;

    return `Total : ${heures} h — Salaire : ${salaireHebdo} FC ; jour le plus chargé : mercredi (10 h)`
};

console.log(calculerSalaire(horiareHebdoTotal));