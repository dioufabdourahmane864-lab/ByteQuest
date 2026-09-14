BYTEQUEST - Application interactive JavaScript et DOM

Principe :
ByteQuest est une application interactive qui permet de réviser les bases de l'informatique :
- Un quiz sur les concepts fondamentaux
- Un convertisseur décimal/binaire/hexadécimal
- Des flashcards de révision
- Une visualisation animée de l'algorithme de tri à bulles

Utilisation :
Ouvrir le fichier index.html dans un navigateur, puis choisir un module dans le menu.
Dans le quiz, sélectionner une réponse. Dans le convertisseur, saisir un entier positif
ou nul. Cliquer sur une flashcard pour la retourner et utiliser les boutons du module Tri.

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
- displayCard affiche une carte et son événement click permet de voir le verso.
- Le formulaire du convertisseur intercepte submit et affiche les conversions sans recharger.
- generateArray crée les barres du tri avec une boucle, puis bubbleSort les compare et les échange.

Auteur : Abdourahmane Diouf
Date : Septembre 2026