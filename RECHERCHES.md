# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Ce resultat est une erreur qui a finis par devenir une particularité. Le langage a été créé encodé pour des valeurs en 32 bit,une valeur stockait donc deux informations :
1. sa nature/ son type (les 3 premier bits)
2. sa donnée/valeur réele (le reste des 29 bits)
Le type objet équivaut à 000 (3 bits) suivit de sa donnée alors que le type null lui est n'a pas de donnée et est nulle, l'erreure a été de donner les 32 bit valant 0 (000000...) ce qui fait que l'execution prène les 3 premier zero du type null pour ceux du type objet.
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
    // voici le code que j'ai exécuté
        const carteApprenant = (prenom, age, commune, estInscrit = false, surnom, ancienneFormation = null) =>{
            console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`);
            return `${typeof prenom}, ${typeof age}, ${typeof commune}, ${typeof estInscrit}, ${typeof surnom}, ${typeof ancienneFormation}`
        };

        console.log (carteApprenant ("Grâce", 22, "Lemba"));
    // voici le resultat obtenu
        Je m'appelle Grâce, j'ai 22 ans et j'habite à Lemba.
        string, number, string, boolean, undefined, object
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
NaN est une valeur qui n'est pas un "Number" (Not a Number).
NaN est du type Number contrairement à ce que reflette son nom, caractérisé comme une valeur falsy dans les conditions logiques pourtant NaN === NaN renvoi étonament false. Ce resultat est du au fait que NaN est une valeur qui n'est pas égal à elle même.
Le seul moyen de ne pas avoir un faux vrais est d'utiliser la fonction Number.isNaN(NaN). La valeur envoyé en argument est alor éxaminé et renvoi true si est seulement si le type de cette dernière est Number et que la valeur est un NaN (ce qui est le cas sur l'Ex : Number.isNaN(NaN))
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
    // voici le code que j'ai exécuté
        const saisie = '2500';
        console.log (saisie + 500);

        console.log (Number(saisie) + 500);

        console.log (`les prédictions vérifiées : ${Number('')}, ${Number('abc')}, ${Number(' 42 ')}, ${Number(true)}`);
    // voici le resultat obtenu
        2500500
        3000
        les prédictions vérifiées : 0, NaN, 42, 1
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Le résultatt de -7 % 2 est -1 c'est pourqoi il est mieux d'utiliser une formul qui donne un résultat valable à notre besoin.
La condition % 2 === 1 ne valide pas l'équation sur des nombres négatifs car on obtient soit -1 soit 0 comme valeur différente. C'est pourquoi il est mieux de fair le test avec un résultat qui ne change pas tant du coté négatif que du coté positif, ce qui rend % 2 === 0 pour les nombre pair et % 2 !== 0 pour les nombre impair comme le meilleur test car le résulta est bon de tout les cotés (+ et -)
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
    // test pour virrifier 17
        if (numeroTicket % 2 === 0) console.log (`Ticket ${numeroTicket} : Pair, tu gagnes un tote bag`);
        else console.log (`Ticket ${numeroTicket} : impair, tu gagnes un stylo`);

        console.log("-----------------------------------------")
    // test pour verrifier 17, 24 et 0
        const verrifierParite = (numeroTicket) =>{
            if (numeroTicket % 2 === 0) return (`Ticket ${numeroTicket} : Pair, tu gagnes un tote bag`);
            else return (`Ticket ${numeroTicket} : impair, tu gagnes un stylo`);
        }

        console.log (`${verrifierParite(17)}\n${verrifierParite(24)}\n${verrifierParite(0)}`);
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Oui, il est bien possible d'enchainer plusieurs ternaires en cascade.
Cepandant il est déconseillé d'utilliser un ternair pour une condition complexe.
On les reserve pour des structures simples et courtes.
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
    // le test que j'ai exécuté avec le ternair:
        const age = 16;

        const testMajorite = age >= 18 ? "Majoeur" : "Mineur";
        // résultat avec consol.log
            Mineur
    // celui exécuté avec la structure if, else if, else
        if (age < 5) console.log("Statu : mineur — Tarif : gratuit");
        else if (age > 5 && age < 18) console.log("Statu : mineur — Tarif : 500 FC");
        else console.log("Statu : majeur — Tarif : 1000 FC")
        // résultat
            Statu : mineur — Tarif : gratuit
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
