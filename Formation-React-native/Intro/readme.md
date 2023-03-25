# Introduction React Native

# 1. Contexte

## Presentation de React Native

---

- [React Native](https://reactnative.dev/) est un framework open source créé par Meta. Il permet de développer des applications mobiles pour Android et iOS en utilisant [React](https://fr.reactjs.org/), un framework [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript).
- Sorti en 2015
- Sa grande force est de pouvoir utiliser un seul code pour développer des applications mobiles pour Android et iOS.
- Vos app sont dev en react-native : [exemple](https://reactnative.dev/showcase)
- Grâce à [Expo](https://expo.io/), on peut avoir un environnement de developpement super pratique pour tester nos app en local directement sur notre téléphone.

## Intro au web-development

---

###  1. Front-end vs back-end

Le developpement en HTML+CSS+JS est appelé developpement front-end. C'est le developpement de l'interface utilisateur. C'est ce que l'on voit sur le navigateur.
Le back-end est le developpement du serveur. C'est ce qui permet de stocker les données, de les récupérer, de les traiter, etc.

### 2. HTML, CSS, JS

Le developpement web est originallement réalisé en utilisant les "langages" [HTML](https://developer.mozilla.org/fr/docs/Web/HTML) et [CSS](https://developer.mozilla.org/fr/docs/Web/CSS). Cela permet de créer des sites purement visuel.
pour permettre l'intéractivté on utilise : [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript). C'est un langage de programmation qui permet de créer des sites web interactifs. Il est utilisé pour créer des sites web, des applications web, des serveurs, des jeux, des robots, etc.

### 3. un Framework : React

Pour coder des applications Web un peu ambitieuse on utilise des frameworks. C'est un ensemble de librairies qui permettent de faciliter le developpement. On peut citer par exemple [React](https://fr.reactjs.org/), [Vue](https://vuejs.org/), [Angular](https://angular.io/), etc.
Celle qui nous intéresse est React. Car React Native est basé sur React. (a permis au developpeur de facebook de pas avoir à tout recoder ni à apprendre un nouveau langage)


## React Native en théorie

---

En codant une application en React-native nous serons donc **obligé** d'utiliser du React et du Javascript

React-native possède des composants. C'est à dire des éléments prédéfinis qui permettent de créer des interfaces. On peut citer par exemple : Button, Text, View, Image, etc. (Ce sont les briques élementaites de l'app)

Comme en Python, React-native possède des modules. C'est à dire des librairies qui permettent d'ajouter des fonctionnalités à notre application. On peut citer par exemple : [React Navigation](https://reactnavigation.org/), [React Native Elements](https://reactnativeelements.com/), [Expo-notifications](https://docs.expo.dev/versions/latest/sdk/notifications/), etc.

Pour les installer, on utilise [npm](https://www.npmjs.com/). C'est un gestionnaire de paquets. Il permet d'installer des modules et des dépendances. Il est installé avec Node.js.

# 2. Préparation de l'environnement de developpement


- Pour info: depuis le navigateur on peut tester du code react-native: [Snack](https://snack.expo.dev/)

React-native demande d'avoir un environnement de developpement spécifique. Il faut donc installer [Node.js](https://nodejs.org/en/download/) et [Expo](https://expo.io/) pour pouvoir coder en React-native.


##  1. Installer Node.js

---


[Lien vers download](https://nodejs.org/en/download)

une fois que nodeJS est installé, on peut vérifier que tout est ok en ouvrant un terminal et en tapant la commande suivante:

```
npx create-expo-app AwesomeProject 

cd AwesomeProject
npx expo start
```

## 2. Installer Expo-go (sur smartphone)

---

 [Lien vers download](https://expo.dev/client)


**Attention: il faut être sur le même réseau wifi que l'ordinateur ( Osiris ne fonctionne pas)**

si tout est ok, on peut ouvrir l'application Expo-go sur son smartphone et scanner le QR code qui s'affiche dans le terminal.

Voilà vous avez votre premier app en React-native qui s'affiche sur votre smartphone !

# 3. React-native en pratique !

aller dans le dossier demo-app et lancer l'app avec les commandes suivantes:

```
npm install
npx start
```

**trop cool!**

## Architecture des fichiers en react-native:
```
demo-app
├── assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   ├── snack-icon.png
│   └── splash.png
├── components
│   └── AssetExample.js
├── App.js
├── app.json
├── babel.config.js
├── package.json
└── README.md
```

## Obligatoire 

- App.js
---
App.js est le fichier principal. C'est le fichier qui est appelé au démarrage de l'app. Il contient les composants principaux de l'app.
- app.json
---

app.json est le fichier de configuration de l'app. Il contient les informations sur l'app (nom, icone, etc)

- package.json
---

package.json est le fichier qui contient les dépendances de l'app. C'est le fichier qui permet d'installer les modules et les dépendances.
(mis à jour avec la commande npm install)

- babel.config.js
---

babel.config.js est le fichier qui contient les configurations de babel. C'est le fichier qui permet de compiler le code react-native en code natif. (pas besoin de le toucher pour l'instant)

## Habituel

- assets

---

assets est le dossier qui contient les images, les polices, etc. C'est le dossier qui contient les ressources de l'app.

- components
  
---

components est le dossier qui contient les composants de l'app. C'est le dossier qui contient les briques de l'app.

- readme.md

---

C'est le fichier qui contient les informations sur l'app (écris en markdown.)


# Sites utiles:

- [React Native](https://reactnative.dev/)
- [Snack](https://snack.expo.dev/)
- [Expo doc](https://docs.expo.dev/)
- [npm](https://www.npmjs.com/)