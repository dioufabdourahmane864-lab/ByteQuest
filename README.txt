BYTEQUEST - Application interactive JavaScript et DOM

Principe :
ByteQuest est une application interactive qui permet de réviser les bases de l'informatique :
- Un quiz sur les concepts fondamentaux avec score final
- Un outil de conversion et de calcul en bases binaire, octale, décimale et hexadécimale
- Des flashcards de révision avec catégories et suivi de compréhension
- Des statistiques et un classement conservés sur l'appareil

Utilisation :
Ouvrir le fichier index.html dans un navigateur, puis choisir un module dans le menu.
Dans le quiz, renseigner son identité, sélectionner une réponse et la valider. Dans le
convertisseur, saisir un nombre valide pour la base choisie. Dans Conversion et calcul,
choisir une base et une opération. Dans les flashcards, cliquer sur « Voir la réponse »,
puis indiquer si la notion est comprise ou à revoir.

Conformité au cahier des charges :
Les données sont statiques et stockées dans des tableaux d'objets JavaScript. Les
interactions utilisent des événements, des conditions, des boucles, des fonctions et
des modifications du DOM, sans rechargement de la page ni bibliothèque externe.

Explication du code pour la présentation :
- DOMContentLoaded attend que la page HTML soit chargée avant d'exécuter le script.
- quizQuestions et flashcardsData sont les tableaux d'objets contenant les données statiques.
- displayQuestion crée la question et ses boutons avec JavaScript dans le DOM.
- checkAnswer compare la réponse choisie avec la bonne réponse, change les couleurs,
  met à jour le score et affiche une explication en cas d'erreur.
- displayFlashcard affiche une carte et les boutons permettent de voir la réponse et de naviguer.
- Le formulaire Conversion et calcul intercepte submit et affiche les conversions et calculs sans recharger.

Auteur : Abdourahmane Diouf
Date : Septembre 2026