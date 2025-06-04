import React, { useState } from 'react';
import './Faq.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure Bootstrap Icons are installed

// FAQ Section Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active FAQ item

  const toggleFAQ = (index) => {
    // Toggle the active FAQ item
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Qu'est-ce que React ? ",
      answer:
        "React est une bibliothèque JavaScript open-source, créée en 2013 par Facebook (désormais Meta). Elle est utilisée pour développer des interfaces utilisateur (UI) interactives et dynamiques pour des applications web. React se concentre sur la vue (le 'V' dans le modèle MVC) et permet aux développeurs de créer des composants réutilisables qui gèrent leur propre état. ",
    },
    {
      question: " Pourquoi React? ",
      answer:
        `React est rapidement devenu l'une des bibliothèques JavaScript les plus utilisées grâce à ses nombreux avantages :
             Performance élevée : 
             Grâce au DOM virtuel, React minimise le temps de rendu en ne mettant à jour que les parties modifiées. Modularité : 
             La division en composants permet de créer des applications organisées, où chaque composant peut être développé et testé indépendamment. Grande communauté : 
             Avec des millions de développeurs à travers le monde, React dispose d'une énorme communauté. Cela signifie des ressources, des bibliothèques complémentaires (Material-UI, Redux, etc.) et un support constant. Facilité d'apprentissage : 
             React est basé sur JavaScript, ce qui en fait une excellente option pour les développeurs ayant déjà des connaissances en JavaScript. Support des grandes entreprises : 
             Facebook utilise React dans ses propres applications, y compris Instagram et WhatsApp. D'autres grandes entreprises, comme Netflix, Airbnb, et Uber, l'utilisent également.
        `,
    },
    {
      question: "Qui utilise React ?",
      answer:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.",
    },
    {
      question: "Qu'est-ce que le DOM virtuel ?",
      answer:
        "Le Virtual DOM (DOM virtuel) est un concept clé de React qui permet de rendre les interfaces utilisateur (UI) de manière performante et efficace. Il s'agit d'une abstraction du DOM réel qui réduit le coût des mises à jour du DOM en évitant les opérations inutiles.",
    },
    {
      question: " Le Concept du Virtual DOM ",
      answer:
        "Le Virtual DOM est une copie légère et abstraite du DOM réel. React utilise cette copie pour déterminer exactement quelles parties du DOM doivent être modifiées, minimisant ainsi les opérations coûteuses sur le DOM réel.",
    },
    {
      question: "Les composants(compenents) ",
      answer:
        "Un composant dans React est une unité autonome qui représente une partie d'interface utilisateur (UI). Il s'agit d'un bloc réutilisable de code qui gère son propre état et sa logique, et qui peut recevoir des données externes via des props. Un composant peut être une fonction ou une classe et est utilisé pour découper l'interface en éléments modulaires et réutilisables. Chaque composant retourne un JSX (un mélange de JavaScript et de HTML) qui définit ce qui doit être affiché à l'écran. ",
    },
    {
      question: " les composants de type classe ",
      answer:
        "Les composants de classe sont des classes qui étendent React.Component et utilisent une méthode render() pour retourner du JSX. Ils peuvent avoir un état interne via this.state et utiliser des méthodes du cycle de vie de React pour gérer des opérations avant ou après le rendu. ",
    },
    {
      question: " Les composants fonctionnels ",
      answer:
        "Les composants fonctionnels sont des fonctions JavaScript simples qui renvoient du JSX.",
    },
    {
      question: " le composant parent",
      answer:
        "Un composant parent peut être considéré comme un conteneur pour d'autres composants. Il gère la structure générale de l'interface utilisateur et organise les composants enfants à l'intérieur de lui. ",
    },
    {
      question: " le composant enfant",
      answer:
        "Un composant enfant est un composant qui est inclus à l'intérieur d'un composant parent. Il est souvent responsable d'une section spécifique de l'interface utilisateur. ",
    },
    {
        question: "fonction JavaScript react.createElement",
        answer:
          "La fonction React.createElement est au cœur de React. Elle est utilisée pour créer des éléments React, qui sont des représentations immuables d'une interface utilisateur. Ces éléments sont ensuite utilisés par le DOM virtuel de React pour effectuer des mises à jour optimales dans le DOM réel.",
    },
    {
        question: "Le JSX ",
        answer:
          "JSX (JavaScript XML) est une extension de syntaxe pour JavaScript qui permet d’écrire un code similaire à HTML dans les fichiers JavaScript. Il est utilisé dans React pour rendre le code plus lisible et pour décrire l'interface utilisateur. JSX est une abstraction syntaxique qui simplifie la création des éléments React. Sous le capot, le code JSX est transformé en appels à React.createElement.",
    },
    {
        question: "Babel ",
        answer:
          "Babel est un translateur JavaScript qui convertit le code écrit en JSX en code JavaScript standard compréhensible par les navigateurs. ",
    },
    {
        question: " Les fragments",
        answer:
          "En React, un Fragment est utilisé pour regrouper plusieurs éléments sans ajouter un nœud DOM supplémentaire. C'est une fonctionnalité utile pour optimiser la structure du DOM et éviter des conteneurs inutiles, tels que les balises <div> imbriquées. ",
    },
    {
        question: "Les propriétés(props) ",
        answer:
          "Les props sont des informations que tu passes d'un composant parent à un composant enfant. Elles permettent de personnaliser un composant selon les besoins. Les props sont immutables, c'est-à-dire qu'un composant enfant ne peut pas les modifier.",
    },
    {
        question: "Les états(states) ",
        answer:
          "Les états (states) permettent aux composants React de stocker des données dynamiques et de réagir aux changements dans ces données en mettant à jour l'interface utilisateur (UI). Contrairement aux props, qui sont immuables et transmises par les composants parents, les states sont internes à un composant et peuvent être modifiés localement. ",
    },
    {
        question: "Les hooks(states)",
        answer:
          "Les Hooks sont Introduits dans React 16.8, ils permettent d'utiliser les fonctionnalités de React comme l'état et le cycle de vie dans des composants fonctionnels, sans avoir besoin de créer des classes. Cela rend le code plus concis, réutilisable et facile à comprendre. Un Hook est une fonction spéciale de React qui commence toujours par le mot use (ex. : useState, useEffect). Il permet de « brancher » (hook into) des fonctionnalités de React. ",
    },
    {
        question: " Les événements  ",
        answer:
          "Un événement est une action ou une occurrence détectée par le système ou le navigateur, généralement en réponse à une interaction de l'utilisateur ou à des changements dans l'environnement de l'application. Les événements permettent de capturer et de réagir à ces actions, rendant une application interactive.",
    },
    {
        question: "Les formulaires ",
        answer:
          "Un formulaire est une interface utilisateur conçue pour permettre la saisie, la modification ou la soumission de données par un utilisateur. Il se compose d'un ensemble de champs d’entrée tels que des cases à cocher, des boutons, des champs de texte, des sélecteurs, etc., regroupés dans une structure logique. Les formulaires sont couramment utilisés dans les applications web pour collecter des informations auprès des utilisateurs",
    },
    {
        question: "le routage ",
        answer:
          "Le routage en React permet de gérer la navigation entre différentes pages ou vues dans une application. Il est souvent réalisé à l’aide de bibliothèques comme React Router, qui offrent des outils puissants pour créer des routes dynamiques, gérer les URL et maintenir une expérience utilisateur fluide sans recharger la page.",
    },
    {
        question: "Redux ",
        answer:
          "Redux est une bibliothèque de gestion d'état prévisible utilisée pour les applications JavaScript. Elle est souvent combinée avec React pour gérer l'état de manière centralisée dans des applications complexes. Redux suit trois principes fondamentaux : Unicité de la source de vérité L'état est en lecture seule Les changements sont effectués par des fonctions pures appelées reducers",
    },
    {
        question: "la bibliothèque Immer ",
        answer:
          "Immer est une bibliothèque JavaScript qui simplifie la gestion des états immuables, particulièrement utile dans des frameworks comme ReactJS. Avec Immer, vous pouvez manipuler les états de manière 'mutative' dans une zone sûre (appelée draft), et Immer génère automatiquement un nouvel état immuable.",
    },
    {
        question: "Redux Toolkit ",
        answer:
          "Redux Toolkit est un outil officiel proposé par l'équipe de Redux pour simplifier le développement avec Redux. Redux, en tant que bibliothèque de gestion d'état, peut parfois sembler complexe à cause de sa configuration et des nombreux fichiers nécessaires. Redux Toolkit vise à résoudre ces problèmes en rendant Redux plus simple, rapide et intuitif.",
    },
    {
        question: "Redux DevTools ",
        answer:
          "Redux DevTools est un outil puissant pour déboguer et analyser les états et actions dans une application utilisant Redux. Il permet de suivre l'historique des actions, de visualiser les modifications de l'état et même de rejouer ou modifier des actions en direct. ",
    },
    {
        question: "Tester une application ",
        answer:
          "Redux DevTools est un outil puissant pour déboguer et analyser les états et actions dans une application utilisant Redux. Il permet de suivre l'historique des actions, de visualiser les modifications de l'état et même de rejouer ou modifier des actions en direct. ",
    },
    {
        question: "Enzyme ",
        answer:
          "Enzyme est une bibliothèque utilisée pour tester les composants React. Elle a été populaire avant l'émergence de React Testing Library, mais elle reste utile pour des tests basés sur la structure des composants. Voici comment l'utiliser avec des exemples concrets.",
    },
];

  return (
    <section id="faq" className="faq section">
              <div className="khawi"></div>
      <div className="container">
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
            >
              <h3
                onClick={() => toggleFAQ(index)}
                className={activeIndex === index ? 'active-question' : ''}
              >
                <span className="num">{index + 1}.</span> <span className='ques'>{faq.question}</span>
              </h3>
              {activeIndex === index && (
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              )}
              <i
                onClick={() => toggleFAQ(index)}
                className={`faq-toggle bi bi-chevron-${activeIndex === index ? 'down' : 'right'}`}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;