# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-17 20:57 UTC · commit `02a3757` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **11 / 15**

Exercices : **80 / 95** · Parfaits : 11 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **3** | 🟠 Résultat incorrect | 4/5 | 2 | ✅ | Ta fiche ne correspond pas au résultat attendu : vérifie la phrase et les 6 typeof (n'oublie pas que typeof null renvoie « object »).<br>• Les typeof attendus (string, number, string, boolean, undefined, object) ne sont pas affichés dans cet ordre.<br>• `let` jamais réassigné : `age`, `commune`, `estInscrit` → utilise `const`.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F2** — Le convertisseur de saisie | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Le piège de la concaténation est identifié, corrigé avec Number() et tes prédictions sont vérifiées.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F4** — Le contrôleur du bus | **2** | 🟠 Résultat incorrect | 0/5 | 2 | ✅ | Le tarif ou le statut est faux pour au moins un âge testé (3, 5, 16, 18, 30) : vérifie les bornes « moins de 5 » et « moins de 18 ».<br>• On attend « Statut : mineur — Tarif : 500 FC ».<br>• Avec age = 3, le statut ou le tarif est faux.<br>• Avec age = 5, le statut ou le tarif est faux.<br>• Avec age = 18, le statut ou le tarif est faux.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 2 | ✅ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **F6** — Le compte à rebours | **5** | ✅ Parfait | 2/2 | 2 | ✅ | Parfait ! Les 3 parties de la boucle `for` sont maîtrisées et `continue` est bien placé.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M1** — FizzBuzz kinois | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Conditions ordonnées du cas le plus restrictif au plus général, résultat exact de 1 à 30.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M2** — Le distributeur automatique (DAB) | **5** | ✅ Parfait | 9/9 | 2 | ✅ | Parfait ! Règles vérifiées dans le bon ordre, cas limites gérés, la fonction renvoie son message.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **5** | ✅ Parfait | 11/11 | 2 | ✅ | Parfait ! Les valeurs truthy / falsy sont maîtrisées, ternaire sans comparaison.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M4** — Le score par défaut : \|\| contre ?? | **5** | ✅ Parfait | 5/5 | 2 | ✅ | Parfait ! Le piège de `0 \|\| 'aucun'` est expliqué et corrigé à bon escient avec `??`.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M5** — La vitre teintée (portée de bloc) | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Portée de bloc respectée, plus aucune ReferenceError et l'arrêt du programme est expliqué.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M6** — Le détective du return | **5** | ✅ Parfait | 5/5 | 2 | ✅ | Parfait ! return et console.log sont bien distingués, le piège de l'ASI est corrigé et expliqué.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M7** — La tirelire numérique | **3** | 🟠 Résultat incorrect | 2/3 | 2 | ✅ | Le total ou une ligne est faux : initialise l'accumulateur AVANT la boucle, fais 12 tours (1 à 12) et ajoute le bonus quand semaine % 4 === 0.<br>• Ligne absente ou fausse pour la semaine 1, 2, 3 (bonus uniquement toutes les 4 semaines).<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **M8** — La batterie qui se décharge | **3** | 🟠 Résultat incorrect | 2/3 | 2 | ✅ | Le résultat final est faux : la boucle doit continuer tant que batterie > 20, retirer 15 et compter les heures (6 h, 10 %).<br>• En partant de 15 %, la boucle ne doit faire aucun tour (Après 0 h, batterie à 15 %).<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A1** — Kadea Express v2 : le calculateur de livraison | **5** | ✅ Parfait | 9/9 | 2 | ✅ | Parfait ! Règles métier, paramètre par défaut, TVA et arrondi corrects, y compris aux bornes.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A2** — Le moteur de paie v2 | **4** | 🟡 Règles non respectées | 7/7 | 2 | ✅ | Les résultats sont justes, mais utilise .forEach(), une boucle for, une fonction fléchée avec `tauxHoraire = 2500` et des gabarits littéraux.<br>• `let` jamais réassigné : `horaireHebdoDeBase`, `paieParHeureSup` → utilise `const`.<br>• Calcule le total des heures avec `.forEach()`.<br>• Trouve le jour le plus chargé avec une boucle `for`.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A3** — L'inventaire en console | **3** | 🟠 Résultat incorrect | 4/7 | 2 | ✅ | Un résultat est faux ou introuvable : stocke chaque résultat (filter, map) dans une variable ou affiche-le, et gère le cas undefined de .find() avec « Produit introuvable ».<br>• Les prix USD attendus (5, 15, 10, 8, 25, 3) sont introuvables : ajoute `prixUSD` avec .map() et Math.round().<br>• chercherProduit(104) renvoie 'Gourde isotherme' au lieu de l'objet de la gourde.<br>• Affiche le nombre de produits en rupture de stock (2).<br>• `let` jamais réassigné : `prixUSD` → utilise `const`.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A4** — Le classement de la promo | **4** | 🟡 Règles non respectées | 9/9 | 2 | ✅ | Les résultats sont justes, mais respecte les consignes : boucle dans calculerMoyenne, .map(), .filter(), .find() avec return, if / else if / else.<br>• Compte les admis avec `.filter()`.<br>• Trouve le premier Excellent avec `.find()`.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A5** — Le nombre mystère | **3** | 🟠 Résultat incorrect | 3/4 | 2 | ✅ | Le jeu ne se comporte pas comme attendu : indices plus grand / plus petit, compteur qui ignore les saisies invalides, arrêt après 7 essais et révélation du nombre.<br>• Après 7 mauvais essais, le jeu doit s'arrêter (8 prompt() appelés) et révéler le nombre (43).<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Compétent : Satisfaisant (83 %) | **2** | Déclarations correctes avec const / let, aucun var. Les 5 types primitifs sont reconnus. Le piège '5' + 3 est identifié et corrigé avec Number().<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | Compétent : Satisfaisant (84 %) | **2** | if / else if / else corrects, égalité stricte === systématique, modulo maîtrisé (pair / impair, multiples). Ternaire simple fonctionnel.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | Avancé (93 %) | **3** | Fonctions fléchées concises (retour implicite quand c'est pertinent), paramètres par défaut, une fonction pour une responsabilité. Bug de l'ASI et bannissement de var expliqués.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Compétent : Satisfaisant (80 %) | **2** | Boucle for correcte (départ, condition, pas), accumulateur initialisé avant la boucle, while avec une condition d'arrêt sûre. Résultats attendus exacts (27000 FC pour M7, 6 h pour M8).<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | Compétent : Satisfaisant (78 %) | **2** | Recherches reformulées et sourcées pour la majorité des exercices. Règles de code respectées (const, ===, fléchées, backticks).<br>_Recherches 67 % · commits par exercice 100 % · règles de code 79 %_ |
| **Total** | | **11 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
