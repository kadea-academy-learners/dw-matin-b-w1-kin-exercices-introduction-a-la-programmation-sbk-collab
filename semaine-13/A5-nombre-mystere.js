// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


const nombreATrouver = Math.floor(Math.random() * 100) + 1;
let reponse;
let tours = 0;
const toursMax = 7;

while(reponse !== nombreATrouver){
    reponse = prompt("Entrez un nombre", "");

    if(reponse === null){
        console.log("partie abandonée");
        break;
    }
    
    reponse = Number(reponse);
    
    if(Number.isNaN(reponse)){
        console.log("vous n'avez pas entré un nombre");
        continue
    }
    else tours++

    if(tours > toursMax){
        console.log(`Vous avez perdu, c'était ${nombreATrouver}`)
        break
    }

    if(reponse < nombreATrouver) console.log("plus grand")
    else if(reponse === nombreATrouver) console.log(`trouvé en ${tours} essais !`)
    else console.log("plus petit");
}