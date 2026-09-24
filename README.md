# ByteQuest

## Principe

ByteQuest est une application web interactive de revision des bases de l'informatique. Elle propose un quiz, un convertisseur de bases numeriques, des calculs, des flashcards et des statistiques locales.

L'application utilise uniquement HTML, CSS et JavaScript natif. Les donnees pedagogiques sont statiques et les resultats sont conserves localement dans le navigateur avec `localStorage`. Aucune API, base de donnees, framework ou librairie externe n'est utilise.

## Utilisation

1. Ouvrir `index.html` dans un navigateur recent.
2. Cliquer sur **Commencer l'aventure**.
3. Choisir un module dans le menu.
4. Dans le quiz, renseigner les informations demandees, choisir une reponse et la valider.
5. Utiliser les formulaires de conversion et de calcul pour obtenir un resultat sans recharger la page.
6. Dans les flashcards, choisir une categorie, reveler la reponse et indiquer si la notion est comprise.

L'interface s'adapte aux ordinateurs, tablettes et telephones. Sur petit ecran, le menu devient un bouton accessible au clavier et les tableaux peuvent defiler horizontalement.

## Conformite au cahier des charges

- Interaction utilisateur par clic, saisie, changement de selection et soumission de formulaire.
- Mise a jour visible du DOM sans rechargement de page.
- Conditions `if` pour valider les donnees et traiter les resultats.
- Boucles `forEach`, `filter`, `map` et `reduce` pour traiter les questions, choix et resultats.
- Fonctions separees pour le quiz, la conversion, le calcul, les flashcards et les statistiques.
- Tableaux statiques d'objets `quizQuestions` et `flashcardsData`.
- Projet organise en fichiers `index.html`, `style.css` et `script.js`.

## Fichiers

- `index.html` : structure et contenus de l'interface.
- `style.css` : mise en page, theme sombre et adaptation aux ecrans.
- `script.js` : donnees statiques, evenements et logique DOM.
- `README.txt` : description detaillee et notes pour la presentation.

Auteur : Abdourahmane Diouf  
Date : Septembre 2026
