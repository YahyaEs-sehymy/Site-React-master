import React, { useState } from "react";
import './components/css/ExerciceCorection.css';
import { jsPDF } from "jspdf";

function ExerciceCorection() {
    const [selectID, setSelectID] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomedImage, setZoomedImage] = useState('');
    const [isCorrectionVisible, setIsCorrectionVisible] = useState(false);
    const [selectedCorrection, setSelectedCorrection] = useState('');



 const Project = [
        {
          id: 1,
          images: [
            {
              src: '/Exercices/Ex1-serie1.png',
              alt: 'Exercice 1',
              code: `
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Tableau des Balises HTML</title>
                  <style>
                    table {
                      width: 80%;
                      margin: 20px auto;
                      border-collapse: collapse;
                    }
                    th, td {
                      border: 1px solid black;
                      padding: 8px;
                      text-align: left;
                    }
                    th {
                      background-color: #f2f2f2;
                    }
                    img {
                      display: block;
                      margin: 10px auto;
                      max-width: 100px;
                    }
                    h1, h2 {
                      text-align: center;
                    }
                  </style>
                </head>
                <body>
                  <h1>Tableau des Balises HTML</h1>
                  <img src="html5.png" alt="Logo HTML5">
        
                  <h2>Liste des balises HTML et leur utilisation courante</h2>
        
                  <table>
                    <thead>
                      <tr>
                        <th>Balise</th>
                        <th>Fonction de la Balise</th>
                        <th>Attribut</th>
                        <th>Fonction de l'Attribut</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>&lt;p&gt;</td>
                        <td>Définit un paragraphe</td>
                        <td>class</td>
                        <td>Applique des styles CSS</td>
                      </tr>
                      <tr>
                        <td>&lt;p&gt;</td>
                        <td>Définit un paragraphe</td>
                        <td>id</td>
                        <td>Identifiant unique</td>
                      </tr>
                      <tr>
                        <td>&lt;p&gt;</td>
                        <td>Définit un paragraphe</td>
                        <td>style</td>
                        <td>Définit un style CSS inline</td>
                      </tr>
                      <tr>
                        <td>&lt;a&gt;</td>
                        <td>Crée un lien hypertexte</td>
                        <td>href</td>
                        <td>Lien URL</td>
                      </tr>
                      <tr>
                        <td>&lt;a&gt;</td>
                        <td>Crée un lien hypertexte</td>
                        <td>target</td>
                        <td>Détermine où ouvrir le lien</td>
                      </tr>
                      <tr>
                        <td>&lt;a&gt;</td>
                        <td>Crée un lien hypertexte</td>
                        <td>title</td>
                        <td>Texte d'info bulle</td>
                      </tr>
                    </tbody>
                  </table>
                </body>
                </html>
              `
            },
            {
              src: '/Exercices/Ex2-serie1.png',
              alt: 'Exercice 2',
              code: `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>Listes Imbriquées</title> 
                </head> 
                <body> 
                  <h1>Liste à puces imbriquées</h1> 
                  <ul> 
                    <li>Front-end 
                      <ul> 
                        <li>HTML</li> 
                        <li>CSS</li> 
                        <li>JavaScript 
                          <ul> 
                            <li>React</li> 
                            <li>Vue</li> 
                            <li>Angular</li> 
                          </ul> 
                        </li> 
                      </ul> 
                    </li> 
                    <li>Back-end 
                      <ul> 
                        <li>Node.js</li> 
                        <li>PHP</li> 
                        <li>Python 
                          <ul> 
                            <li>Django</li> 
                            <li>Flask</li> 
                          </ul> 
                        </li> 
                      </ul> 
                    </li> 
                  </ul> 
                </body> 
                </html> 
        
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>Liste Numérotée Imbriquée</title> 
                </head> 
                <body> 
                  <h1>Liste Numérotée Imbriquée</h1> 
                  <ol> 
                    <li>Front-end 
                      <ol> 
                        <li>HTML</li> 
                        <li>CSS</li> 
                        <li>JavaScript 
                          <ol> 
                            <li>React</li> 
                            <li>Vue</li> 
                            <li>Angular</li> 
                          </ol> 
                        </li> 
                      </ol> 
                    </li> 
                    <li>Back-end 
                      <ol> 
                        <li>Node.js</li> 
                        <li>PHP</li> 
                        <li>Python 
                          <ol> 
                            <li>Django</li> 
                            <li>Flask</li> 
                          </ol> 
                        </li> 
                      </ol> 
                    </li> 
                  </ol> 
                </body> 
                </html>
              `
            },
            { 
              PdfUrl: '/Exercices/N1.pdf', 
              pdfLink: 'Serie N1.pdf' 
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              src: '/Exercices/Ex1-serie2.png',
              alt: 'Exercice 1',
              code: `
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Inscription à un Événement</title>
                  <style>
                    body {
                      font-family: sans-serif;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      min-height: 100vh;
                      margin: 0;
                      background-color: #f0f0f0;
                    }
                    form {
                      background-color: white;
                      padding: 20px;
                      border-radius: 8px;
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                      display: flex;
                      flex-direction: column;
                      width: 600px;
                    }
                    fieldset {
                      border: 1px solid #ccc;
                      margin-bottom: 15px;
                      padding: 10px;
                    }
                    legend {
                      font-weight: bold;
                      padding: 0 5px;
                    }
                    label {
                      display: block;
                      margin-bottom: 5px;
                    }
                    input[type="text"],
                    input[type="email"],
                    input[type="tel"],
                    input[type="date"],
                    select {
                      width: calc(100% - 12px);
                      padding: 8px;
                      margin-bottom: 10px;
                      border: 1px solid #ccc;
                      border-radius: 4px;
                      box-sizing: border-box;
                    }
                    .buttons {
                      display: flex;
                      justify-content: space-between;
                      margin-top: 20px;
                    }
                    button {
                      padding: 10px 20px;
                      border: none;
                      border-radius: 4px;
                      cursor: pointer;
                    }
                    button[type="submit"] {
                      background-color: #4CAF50;
                      color: white;
                    }
                    button[type="reset"] {
                      background-color: #f44336;
                      color: white;
                    }
                  </style>
                </head>
                <body>
                  <form>
                    <h1>Inscription à un Événement</h1>
                    <fieldset>
                      <legend>Informations Personnelles</legend>
                      <label for="nom">Nom :</label>
                      <input type="text" id="nom" name="nom" required>
                      <label for="prenom">Prénom :</label>
                      <input type="text" id="prenom" name="prenom" required>
                      <label for="date_naissance">Date de naissance :</label>
                      <input type="date" id="date_naissance" name="date_naissance" required>
                      <label for="genre">Genre :</label>
                      <select id="genre" name="genre">
                        <option value="masculin">Masculin</option>
                        <option value="feminin">Féminin</option>
                      </select>
                    </fieldset>
                    <fieldset>
                      <legend>Coordonnées</legend>
                      <label for="email">Adresse e-mail :</label>
                      <input type="email" id="email" name="email" required>
                      <label for="telephone">Numéro de téléphone :</label>
                      <input type="tel" id="telephone" name="telephone">
                      <label for="adresse">Adresse :</label>
                      <input type="text" id="adresse" name="adresse">
                      <label for="ville">Ville :</label>
                      <input type="text" id="ville" name="ville">
                    </fieldset>
                    <div class="buttons">
                      <button type="submit">Soumettre</button>
                      <button type="reset">Réinitialiser</button>
                    </div>
                  </form>
                </body>
                </html>
              `
            },
            {
              src: '/Exercices/Ex2-serie2.png',
              alt: 'Exercice 2',
              code: `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>Choix de Niveau d'Études</title> 
                  <style> 
                    body { 
                      font-family: sans-serif; 
                      display: flex; 
                      justify-content: center; 
                      align-items: center; 
                      min-height: 100vh; 
                      margin: 0; 
                      background-color: #f0f0f0; 
                    }
                    form { 
                      background-color: white; 
                      padding: 20px; 
                      border-radius: 8px; 
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                      width: 400px;  
                    }
                    fieldset { 
                      border: 1px solid #ccc; 
                      margin-bottom: 15px; 
                      padding: 10px; 
                    }
                    legend { 
                      font-weight: bold; 
                      padding: 0 5px; 
                    }
                    label { 
                      display: block; 
                      margin-bottom: 5px; 
                    }
                    .radio-group {  
                      display: flex; 
                      flex-direction: column;  
                      gap: 5px;  
                      margin-bottom: 10px; 
                    }
                    .buttons { 
                      display: flex; 
                      justify-content: space-between; 
                      margin-top: 20px; 
                    }
                    button { 
                      padding: 10px 20px; 
                      border: none; 
                      border-radius: 4px; 
                      cursor: pointer; 
                    }
                    button[type="submit"] { 
                      background-color: #4CAF50;  
                      color: white; 
                    }
                    button[type="reset"] { 
                      background-color: #4CAF50;  
                      color: white; 
                    } 
                  </style> 
                </head> 
                <body>
                  <form> 
                    <h1>Choix de Niveau d'Études</h1> 
                    <fieldset> 
                      <legend>Niveau d'études :</legend> 
                      <div class="radio-group"> 
                        <label> 
                          <input type="radio" name="niveau" value="licence" required> Licence 
                        </label> 
                        <label> 
                          <input type="radio" name="niveau" value="master"> Master 
                        </label> 
                        <label> 
                          <input type="radio" name="niveau" value="doctorat"> Doctorat 
                        </label> 
                      </div> 
                    </fieldset>
                    <fieldset> 
                      <legend>Options :</legend> 
                      <label> 
                        <input type="checkbox" name="bourse" value="demande"> Demande de bourse 
                      </label> 
                      <label> 
                        <input type="checkbox" name="logement" value="demande"> Demande de logement 
                      </label> 
                      <label> 
                        <input type="checkbox" name="stage" value="demande"> Demande de stage 
                      </label> 
                    </fieldset>
                    <div class="buttons"> 
                      <button type="submit">Soumettre</button> 
                      <button type="reset">Réinitialiser</button> 
                    </div> 
                  </form>
                </body> 
                </html>
              `
            },
            { 
              PdfUrl: '/Exercices/N2.pdf', 
              pdfLink: 'Serie N2.pdf' 
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              src: '/Exercices/Ex1-serie3.png',
              alt: 'Exercice 1',
              code: `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>CV Complet</title> 
                  <style> 
                    ……. 
                  </style> 
                </head> 
                <body> 
                  <div class="container"> 
                    <div class="header"> 
                      <h1>Nom Prénom</h1> 
                      <div class="contact-info"> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/64/64487.png" alt="Adresse"> 123 Rue de Exemple, Ville, Code Postal</p> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/126/126509.png" alt="Téléphone">+33 6.12 34 56 78</p> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/561/561127.png" alt="Email">exemple@email.com</p> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="LinkedIn">linkedin.com/in/exemple</p> 
                      </div> 
                    </div> 
                    <div class="profile"> 
                      Passionné(e) par [votre domaine], je possède une expérience significative dans 
                      [vos spécialités]. Mon objectif est de [votre objectif professionnel]. 
                    </div> 
                    <div class="section"> 
                      <h2>Expérience Professionnelle</h2> 
                      <div class="section"> 
                        <h3>Poste - Entreprise</h3> 
                        <div class="period">Janvier 2020 - Présent</div> 
                        <ul> 
                          <li>Responsabilité 1</li> 
                          <li>Responsabilité 2</li> 
                          <li>Responsabilité 3</li> 
                        </ul> 
                      </div> 
                      <div class="section"> 
                        <h3>Autre Poste - Autre Entreprise</h3> 
                        <div class="period">Juin 2015 - Décembre 2017</div> 
                        <ul> 
                          <li>Responsabilité A</li> 
                          <li>Responsabilité B</li> 
                        </ul> 
                      </div> 
                    </div> 
                    <div class="section"> 
                      <h2>Éducation</h2> 
                      <div>Diplôme - Établissement</div> 
                      <div class="period">Année d'obtention</div> 
                    </div> 
                    <div class="section"> 
                      <h2>Compétences</h2> 
                      <div class="skills-list"> 
                        <div>Compétence 1</div> 
                        <div>Compétence 2</div> 
                        <div>Compétence 3</div> 
                        <div>Compétence 4</div> 
                        <div>Compétence 5</div> 
                        <div>Compétence 6</div> 
                        <div>Compétence 7</div> 
                      </div> 
                    </div> 
                  </div> 
                </body> 
                </html>
              `
            },
            {
              src: '/Exercices/Ex2-serie3.png',
              alt: 'Exercice 2',
              code: `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>CV Complet</title> 
                  <style> 
                    ……. 
                  </style> 
                </head> 
                <body> 
                  <div class="container"> 
                    <div class="header"> 
                      <h1>Nom Prénom</h1> 
                      <div class="contact-info"> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/64/64487.png" alt="Adresse"> 123 Rue de Exemple, Ville, Code Postal</p> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/126/126509.png" alt="Téléphone">+33 6.12 34 56 78</p> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/561/561127.png" alt="Email">exemple@email.com</p> 
                        <p><img src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="LinkedIn">linkedin.com/in/exemple</p> 
                      </div> 
                    </div> 
                    <div class="profile"> 
                      Passionné(e) par [votre domaine], je possède une expérience significative dans [vos spécialités]. 
                      Mon objectif est de [votre objectif professionnel]. 
                    </div> 
                    <div class="section"> 
                      <h2>Expérience Professionnelle</h2> 
                      <div class="section"> 
                        <h3>Poste - Entreprise</h3> 
                        <div class="period">Janvier 2020 - Présent</div> 
                        <ul> 
                          <li>Responsabilité 1</li> 
                          <li>Responsabilité 2</li> 
                          <li>Responsabilité 3</li> 
                        </ul> 
                      </div> 
                      <div class="section"> 
                        <h3>Autre Poste - Autre Entreprise</h3> 
                        <div class="period">Juin 2015 - Décembre 2017</div> 
                        <ul> 
                          <li>Responsabilité A</li> 
                          <li>Responsabilité B</li> 
                        </ul> 
                      </div> 
                    </div> 
                    <div class="section"> 
                      <h2>Éducation</h2> 
                      <div>Diplôme - Établissement</div> 
                      <div class="period">Année d'obtention</div> 
                    </div> 
                    <div class="section"> 
                      <h2>Compétences</h2> 
                      <div class="skills-list"> 
                        <div>Compétence 1</div> 
                        <div>Compétence 2</div> 
                        <div>Compétence 3</div> 
                        <div>Compétence 4</div> 
                        <div>Compétence 5</div> 
                        <div>Compétence 6</div> 
                        <div>Compétence 7</div> 
                      </div> 
                    </div> 
                  </div> 
                </body> 
                </html>
              `
            },
            { 
              PdfUrl: '/Exercices/N3.pdf', 
              pdfLink: 'Serie N3.pdf' 
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              src: '/Exercices/Ex1-serie4.png',
              alt: 'Exercice 1',
              code: `
                Fichier html 
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>Quiz de Connaissances</title> 
                  <link rel="stylesheet" href="style.css"> 
                </head> 
                <body> 
                  <div class="container"> 
                    <h1>Quiz de Connaissances</h1> 
                    <form id="quiz-form"> 
                      <div class="question"> 
                        <p>1. Quelle est la capitale de la France ?</p> 
                        <label><input type="radio" name="q1" value="londres"> Londres</label><br> 
                        <label><input type="radio" name="q1" value="paris"> Paris</label><br> 
                        <label><input type="radio" name="q1" value="berlin"> Berlin</label><br> 
                        <label><input type="radio" name="q1" value="madrid"> Madrid</label><br> 
                      </div> 
                      <div class="question"> 
                        <p>2. Quel est le plus grand océan du monde ?</p> 
                        <label><input type="radio" name="q2" value="atlantique"> Atlantique</label><br> 
                        <label><input type="radio" name="q2" value="indien"> Indien</label><br> 
                        <label><input type="radio" name="q2" value="pacifique"> Pacifique</label><br> 
                        <label><input type="radio" name="q2" value="arctique"> Arctique</label><br> 
                      </div> 
                      <button type="submit">Soumettre</button> 
                    </form> 
                    <div id="resultat" style="display: none;"></div> 
                  </div> 
                  <script src="script.js"></script> 
                </body> 
                </html>
                
                Fichier CSS 
                body { 
                  font-family: sans-serif; 
                  background-color: #f0f0f0; 
                  display: flex; 
                  justify-content: center; 
                  align-items: center; 
                  min-height: 100vh; 
                  margin: 0; 
                }
                .container { 
                  background-color: white; 
                  padding: 20px; 
                  border-radius: 8px; 
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                  width: 400px; 
                }
                h1 { 
                  color: #28a745; 
                  text-align: center; 
                  margin-bottom: 20px; 
                }
                .question { 
                  margin-bottom: 15px; 
                }
                button { 
                  background-color: #28a745; 
                  color: white; 
                  padding: 10px 20px; 
                  border: none; 
                  border-radius: 4px; 
                  cursor: pointer; 
                  display: block;  
                  margin: 0 auto; 
                }
                #resultat { 
                  margin-top: 20px; 
                  text-align: center; 
                  font-weight: bold; 
                }
                
                Fichier JS 
                document.getElementById('quiz-form').addEventListener('submit', function(event) { 
                  event.preventDefault();  
                  let score = 0; 
                  const reponses = { 
                    q1: 'paris', 
                    q2: 'pacifique' 
                  }; 
                  for (const question in reponses) { 
                    const reponseChoisie = document.querySelector('input[name="{question}"]:checked'); //9dam {question} Ajouter $
                    if (reponseChoisie && reponseChoisie.value === reponses[question]) { 
                      score++; 
                    } 
                  }
                  const resultatDiv = document.getElementById('resultat'); 
                  resultatDiv.textContent = 'Vous avez obtenu {score} sur {Object.keys(reponses).length} !'; // 9dam {score} {Object.keys(reponses).length} Ajouter $
                  resultatDiv.style.display = 'block';  
                });
              ` 
            },
            {
              "src": "/Exercices/Ex2-serie4.png",
              "alt": "Exercice 2",
              "code": `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                  <meta charset="UTF-8"> 
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                  <title>Quiz de Connaissances</title> 
                  <link rel="stylesheet" href="style.css"> 
                </head> 
                <body> 
                  <div class="container"> 
                    <h1>Quiz de Connaissances</h1> 
                    <form id="quiz-form"> 
                      <div class="question"> 
                        <p>1. Quelle est la capitale de la France ?</p> 
                        <label><input type="radio" name="q1" value="londres"> Londres</label><br> 
                        <label><input type="radio" name="q1" value="paris"> Paris</label><br> 
                        <label><input type="radio" name="q1" value="berlin"> Berlin</label><br> 
                        <label><input type="radio" name="q1" value="madrid"> Madrid</label><br> 
                      </div> 
                      <div class="question"> 
                        <p>2. Quel est le plus grand océan du monde ?</p> 
                        <label><input type="radio" name="q2" value="atlantique"> Atlantique</label><br> 
                        <label><input type="radio" name="q2" value="indien"> Indien</label><br> 
                        <label><input type="radio" name="q2" value="pacifique"> Pacifique</label><br> 
                        <label><input type="radio" name="q2" value="arctique"> Arctique</label><br> 
                      </div> 
                      <div class="question"> 
                        <p>3. Qui a peint la Joconde ?</p> 
                        <label><input type="radio" name="q3" value="vinci"> Léonard de Vinci</label><br> 
                        <label><input type="radio" name="q3" value="michelange"> Michel-Ange</label><br> 
                        <label><input type="radio" name="q3" value="raphael"> Raphaël</label><br> 
                        <label><input type="radio" name="q3" value="rembrandt"> Rembrandt</label><br> 
                      </div> 
                      <div class="question"> 
                        <p>4. En quelle année a débuté la Première Guerre mondiale ?</p> 
                        <label><input type="radio" name="q4" value="1914"> 1914</label><br> 
                        <label><input type="radio" name="q4" value="1917"> 1917</label><br> 
                        <label><input type="radio" name="q4" value="1939"> 1939</label><br> 
                        <label><input type="radio" name="q4" value="1945"> 1945</label><br> 
                      </div> 
                      <button type="submit">Soumettre</button> 
                    </form> 
                    <div id="result" style="display: none;"></div> 
                  </div> 
                  <script src="script.js"></script> 
                </body> 
                </html> 
                </html> 
            
                <!-- Fichier CSS -->
                …. 
            
                <!-- Fichier JS -->
                <script>
                document.getElementById('quiz-form').addEventListener('submit', function(event) { 
                  event.preventDefault(); 
            
                  let score = 0; 
                  const reponses = { 
                    q1: 'paris', 
                    q2: 'pacifique', 
                    q3: 'vinci', 
                    q4: '1914' 
                  }; 
            
                  for (const question in reponses) { 
                    const reponseChoisie = document.querySelector(\`input[name="\${question}"]:checked\`); 
                    if (reponseChoisie && reponseChoisie.value === reponses[question]) { 
                      score++; 
                    } 
                  } 
            
                  const resultatDiv = document.getElementById('resultat'); 
                  const nombreQuestions = Object.keys(reponses).length; 
                  let message = \`Vous avez obtenu \${score} sur \${nombreQuestions} !\`; 
                  if (score === nombreQuestions) { 
                    message += " Excellent !"; 
                  } else if (score >= nombreQuestions / 2) { 
                    message += " Bien joué !"; 
                  } else { 
                    message += " Essayez encore !"; 
                  } 
                  resultatDiv.textContent = message; 
                  resultatDiv.style.display = 'block'; 
                });
                </script>
              `
              },
              { PdfUrl: '/Exercices/N4.pdf', pdfLink: 'Serie N4.pdf' }
            ]
          },
          {
            "id": 5,
            "images": [
              {
                "src": "/Exercices/Ex1-serie5.png",
                "alt": "Exercice 1",
                "code": `
                  <!DOCTYPE html> 
                  <html lang="fr"> 
                  <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Calculatrice de Somme</title> 
                    <style> 
                      body { 
                        font-family: sans-serif; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        min-height: 100vh; 
                        margin: 0; 
                        background-color: #f0f0f0; /* Fond gris clair */ 
                      } 
                      .container { 
                        background-color: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        text-align: center;  
                      } 
                      input[type="number"] { 
                        padding: 8px; 
                        margin: 5px; 
                        border: 1px solid #ccc; 
                        border-radius: 4px; 
                        width: 80px;  
                      } 
                      button { 
                        background-color: #28a745; /* Vert */ 
                        color: white; 
                        padding: 10px 20px; 
                        border: none; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        margin-top: 10px; 
                      } 
                      #resultat { 
                        margin-top: 20px; 
                        font-weight: bold; 
                      } 
                    </style> 
                  </head> 
                  <body> 
                    <div class="container"> 
                      <h1>Calculatrice de Somme</h1> 
                      <input type="number" id="nombre1" placeholder="Nombre 1"> 
                      <input type="number" id="nombre2" placeholder="Nombre 2"> 
                      <button onclick="calculerSomme()">Calculer la Somme</button> 
                      <div id="resultat"></div> 
                    </div> 
                    <script> 
                      function calculerSomme() { 
                        const nombre1 = parseFloat(document.getElementById("nombre1").value); 
                        const nombre2 = parseFloat(document.getElementById("nombre2").value); 
                        if (isNaN(nombre1) || isNaN(nombre2)) { 
                          document.getElementById("resultat").textContent = "Veuillez entrer des nombres valides."; 
                          return;  
                        } 
                        const somme = nombre1 + nombre2; 
                        document.getElementById("resultat").textContent = "La somme est : " + somme; 
                      } 
                    </script> 
                  </body> 
                  </html>
                `
              },
              {
                "src": "/Exercices/Ex2-serie5.png",
                "alt": "Exercice 2",
                "code": `
                  <!DOCTYPE html> 
                  <html lang="fr"> 
                  <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Formulaire de Connexion</title> 
                    <style> 
                      body { 
                        font-family: sans-serif; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        min-height: 100vh; 
                        margin: 0; 
                        background-color: #f0f0f0; 
                      } 
                      .container { 
                        background-color: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        text-align: center; 
                      } 
                      input[type="text"], 
                      input[type="password"] { 
                        padding: 8px; 
                        margin: 5px; 
                        border: 1px solid #ccc; 
                        border-radius: 4px; 
                        width: 200px; 
                      } 
                      input.erreur { 
                        border-color: red; 
                      } 
                      button { 
                        background-color: #28a745; 
                        color: white; 
                        padding: 10px 20px; 
                        border: none; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        margin-top: 10px; 
                      } 
                      #message-erreur { 
                        color: red; 
                        margin-top: 10px; 
                      } 
                    </style> 
                  </head> 
                  <body> 
                    <div class="container"> 
                      <h2>Connexion</h2> 
                      <input type="text" id="utilisateur" placeholder="Nom d'utilisateur"> 
                      <input type="password" id="motdepasse" placeholder="Mot de passe"> 
                      <button onclick="validerFormulaire()">Se connecter</button> 
                      <div id="message-erreur"></div> 
                    </div> 
                    <script> 
                      function validerFormulaire() { 
                        const utilisateur = document.getElementById("utilisateur"); 
                        const motdepasse = document.getElementById("motdepasse"); 
                        const messageErreur = document.getElementById("message-erreur"); 
                        utilisateur.classList.remove("erreur"); 
                        motdepasse.classList.remove("erreur"); 
                        messageErreur.textContent = ""; 
                        if (utilisateur.value.trim() === "" && motdepasse.value.trim() === "") { 
                          utilisateur.classList.add("erreur"); 
                          motdepasse.classList.add("erreur"); 
                          messageErreur.textContent = "Remplir tous les champs."; 
                        } else if (utilisateur.value.trim() === "") { 
                          utilisateur.classList.add("erreur"); 
                          messageErreur.textContent = "Remplir le champ Nom d'utilisateur."; 
                        } else if (motdepasse.value.trim() === "") { 
                          motdepasse.classList.add("erreur"); 
                          messageErreur.textContent = "Remplir le champ Mot de passe."; 
                        } else { 
                          alert("Connexion réussie !"); 
                        } 
                      } 
                    </script> 
                  </body> 
                  </html>
                `
              },
              {
                "src": "/Exercices/Ex3-serie5.png",
                "alt": "Exercice 3",
                "code": `
                  <!DOCTYPE html> 
                  <html lang="fr"> 
                  <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Vérification du Mot de Passe</title> 
                    <style> 
                      body { 
                        font-family: sans-serif; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        min-height: 100vh; 
                        margin: 0; 
                        background-color: #f0f0f0; 
                      } 
                      .container { 
                        background-color: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        text-align: center; 
                      } 
                      input[type="password"] { 
                        padding: 8px; 
                        margin: 10px; 
                        border: 1px solid #ccc; 
                        border-radius: 4px; 
                        width: 200px; 
                      } 
                      #message-force { 
                        margin-top: 10px; 
                        font-weight: bold; 
                      } 
                      .faible { 
                        color: red; 
                      } 
                      .moyen { 
                        color: orange; 
                      } 
                      .fort { 
                        color: green; 
                      } 
                    </style> 
                  </head> 
                  <body> 
                    <div class="container"> 
                      <h2>Vérification du Mot de Passe</h2> 
                      <input type="password" id="motdepasse" placeholder="Mot de passe" oninput="verifierForce()"> 
                      <div id="message-force"></div> 
                    </div> 
                    <script> 
                      function verifierForce() { 
                        const motdepasse = document.getElementById("motdepasse").value; 
                        const messageForce = document.getElementById("message-force"); 
                        let force = ""; 
                        let classe = ""; 
                        if (motdepasse.length === 0) { 
                          messageForce.textContent = ""; 
                          return; 
                        } else if (motdepasse.length < 6) { 
                          force = "Faible"; 
                          classe = "faible"; 
                        } else if (motdepasse.length < 10) { 
                          force = "Moyen"; 
                          classe = "moyen"; 
                        } else { 
                          force = "Fort"; 
                          classe = "fort"; 
                        } 
                        messageForce.textContent = "Mot de passe : " + force; 
                        messageForce.className = classe; 
                      } 
                    </script> 
                  </body> 
                  </html>
                `
              },
              { PdfUrl: '/Exercices/N5.pdf', pdfLink: 'Serie N5.pdf' }
            ]
          },
          {
            "id": 6,
            "images": [
              {
                "src": "/Exercices/Ex1-serie6.png",
                "alt": "Exercice 1",
                "code": `
                  <!DOCTYPE html> 
                  <html lang="fr"> 
                  <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Calculateur d'IMC</title> 
                    <style> 
                      body { 
                        font-family: sans-serif; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        min-height: 100vh; 
                        margin: 0; 
                        background-color: #f0f0f0; 
                      } 
                      .container { 
                        background-color: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        text-align: center; 
                      } 
                      input[type="number"] { 
                        padding: 8px; 
                        margin: 5px; 
                        border: 1px solid #ccc; 
                        border-radius: 4px; 
                        width: 80px; 
                      } 
                      button { 
                        background-color: #28a745; 
                        color: white; 
                        padding: 10px 20px; 
                        border: none; 
                        border-radius: 4px; 
                        margin-top: 10px; 
                      } 
                      #resultat { 
                        margin-top: 20px; 
                        font-weight: bold; 
                      } 
                    </style> 
                  </head> 
                  <body> 
                    <div class="container"> 
                      <h2>Calcul de l'IMC</h2> 
                      <input type="number" id="taille" placeholder="Taille (m)" step="0.01"> 
                      <input type="number" id="poids" placeholder="Poids (kg)" step="0.1"> 
                      <button onclick="calculerIMC()">Calculer l'IMC</button> 
                      <div id="resultat"></div> 
                    </div> 
                    <script> 
                      function calculerIMC() { 
                        const taille = parseFloat(document.getElementById("taille").value); 
                        const poids = parseFloat(document.getElementById("poids").value); 
                        const resultatDiv = document.getElementById("resultat"); 
                        if (isNaN(taille) || isNaN(poids) || taille <= 0 || poids <= 0) { 
                          resultatDiv.textContent = "Veuillez entrer des valeurs valides (taille > 0 et poids > 0)."; 
                          return; 
                        } 
                        const imc = poids / (taille * taille); 
                        const imcArrondi = imc.toFixed(2);  
                        let categorie = ""; 
                        if (imc < 18.5) { 
                          categorie = "Insuffisance pondérale"; 
                        } else if (imc < 24.9) { 
                          categorie = "Poids normal"; 
                        } else if (imc < 29.9) { 
                          categorie = "Surpoids"; 
                        } else { 
                          categorie = "Obésité"; 
                        } 
                        resultatDiv.textContent = \`Votre IMC est : \${imcArrondi} (\${categorie})\`; 
                      } 
                    </script> 
                  </body> 
                  </html>
                `
              },
              {
                src: '/Exercices/Ex2-serie6.png',
                alt: 'Exercice 2',
                code:`
                  <!DOCTYPE html> 
                  <html lang="fr"> 
                  <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Conversion Euro en Dirham</title> 
                    <style> 
                      body { 
                        font-family: sans-serif; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        min-height: 100vh; 
                        margin: 0; 
                        background-color: #f0f0f0; 
                      } 
                      .container { 
                        background-color: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        text-align: center; 
                      } 
                      input[type="number"] { 
                        padding: 8px; 
                        margin: 5px; 
                        border: 1px solid #ccc; 
                        border-radius: 4px; 
                        width: 100px;  
                      } 
                      button { 
                        background-color: #28a745; 
                        color: white; 
                        padding: 10px 20px; 
                        border: none; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        margin-top: 10px; 
                      } 
                      #resultat { 
                        margin-top: 20px; 
                        font-weight: bold; 
                      } 
                    </style> 
                  </head> 
                  <body> 
                    <div class="container"> 
                      <h2>Conversion Euro en Dirham</h2> 
                      <input type="number" id="montantEuro" placeholder="Montant en €" step="0.01"> 
                      <input type="number" id="tauxChange" placeholder="Taux de change" step="0.01" value="10.7"> 
                      <button onclick="convertir()">Convertir</button> 
                      <div id="resultat"></div> 
                    </div> 
                    <script> 
                      function convertir() { 
                        const montantEuro = parseFloat(document.getElementById("montantEuro").value); 
                        const tauxChange = parseFloat(document.getElementById("tauxChange").value); 
                        const resultatDiv = document.getElementById("resultat"); 
                        if (isNaN(montantEuro) || isNaN(tauxChange) || montantEuro < 0 || tauxChange <= 0) { 
                          resultatDiv.textContent = "Veuillez entrer des valeurs numériques positives valides (Taux > 0)."; 
                          return; 
                        } 
                        const montantDirham = montantEuro * tauxChange; 
                        const montantDirhamArrondi = montantDirham.toFixed(2); 
                        resultatDiv.textContent = 'Montant converti : {montantDirhamArrondi} MAD'; //9dam {montantDirhamArrondi} Ajouter $
                      } 
                    </script> 
                  </body> 
                  </html>
                `               
                },
              {
                src: '/Exercices/Ex3-serie6.png',
                alt: 'Exercice 3',
                code:`
                  <!DOCTYPE html> 
                  <html lang="fr"> 
                  <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Sélection de Hobbies</title> 
                    <style> 
                      body { 
                        font-family: sans-serif; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        min-height: 100vh; 
                        margin: 0; 
                        background-color: #f0f0f0; 
                      } 
                      .container { 
                        background-color: white; 
                        padding: 20px; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                        text-align: left;  
                      } 
                      label { 
                        display: block;  
                        margin-bottom: 5px; 
                      } 
                      button { 
                        background-color: #28a745; 
                        color: white; 
                        padding: 10px 20px; 
                        border: none; 
                        border-radius: 4px; 
                        cursor: pointer; 
                        margin-top: 10px; 
                      } 
                      #resultat { 
                        margin-top: 20px; 
                        font-weight: bold; 
                      } 
                    </style> 
                  </head> 
                  <body> 
                    <div class="container"> 
                      <h2>Sélectionnez vos Hobbies</h2> 
                      <form id="hobbies-form"> 
                        <label><input type="checkbox" name="hobbies" value="Lecture"> Lecture</label> 
                        <label><input type="checkbox" name="hobbies" value="Musique"> Musique</label> 
                        <label><input type="checkbox" name="hobbies" value="Cuisine"> Cuisine</label> 
                        <label><input type="checkbox" name="hobbies" value="Photographie"> Photographie</label> 
                        <label><input type="checkbox" name="hobbies" value="Jeux vidéo"> Jeux vidéo</label> 
                        <label><input type="checkbox" name="hobbies" value="Sport"> Sport</label> 
                        <label><input type="checkbox" name="hobbies" value="Voyage"> Voyage</label> 
                        <label><input type="checkbox" name="hobbies" value="Art"> Art</label> 
                        <label><input type="checkbox" name="hobbies" value="Jardinage"> Jardinage</label> 
                        <label><input type="checkbox" name="hobbies" value="Danse"> Danse</label> 
                        <button type="submit">Soumettre</button> 
                      </form> 
                      <div id="resultat"></div> 
                    </div> 
                    <script> 
                      document.getElementById('hobbies-form').addEventListener('submit', function(event) { 
                        event.preventDefault(); // Empêche le rechargement de la page 
                        const checkboxes = document.querySelectorAll('input[name="hobbies"]:checked'); 
                        let hobbiesSelectionnes = []; 
                        checkboxes.forEach(checkbox => { 
                          hobbiesSelectionnes.push(checkbox.value); 
                        }); 
                        const resultatDiv = document.getElementById('resultat'); 
                        if (hobbiesSelectionnes.length === 0) { 
                          resultatDiv.textContent = "Aucun hobby sélectionné."; 
                        } else { 
                          resultatDiv.textContent = "Hobbies sélectionnés : " + hobbiesSelectionnes.join(', '); 
                        } 
                      }); 
                    </script> 
                  </body> 
                  </html>
                `                  
              },
              { PdfUrl: '/Exercices/N6.pdf', pdfLink: 'Serie N6.pdf' }
            ]
          },
          {
            "id": 7,
            "images": [
              {
                "src": "/Exercices/Ex1-serie7.png",
                "alt": "Exercice 1",
                "code": `
                <html lang="fr"> 
                <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Validation d'E-mail</title> 
                    <style> 
                        body { 
                            font-family: sans-serif; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center; 
                            min-height: 100vh; 
                            margin: 0; 
                            background-color: #f0f0f0; 
                        } 
                        .container { 
                            background-color: white; 
                            padding: 20px; 
                            border-radius: 8px; 
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                            text-align: center; 
                        } 
          
                        input[type="email"] { 
                            padding: 8px; 
                            margin: 10px; 
                            border: 1px solid #ccc; 
                            border-radius: 4px; 
                            width: 250px; 
                        } 
          
                        button { 
                            background-color: #28a745; 
                            color: white; 
                            padding: 10px 20px; 
                            border: none; 
                            border-radius: 4px; 
                            cursor: pointer; 
                        } 
          
                        #message { 
                            margin-top: 10px; 
                            font-weight: bold; 
                        } 
          
                        .valide { 
                            color: green; 
                        } 
          
                        .invalide { 
                            color: red; 
                        } 
                    </style> 
                </head> 
                <body> 
                    <div class="container"> 
                        <h2>Validation d'E-mail</h2> 
                        <input type="email" id="email" placeholder="Adresse e-mail"> 
                        <button onclick="validerEmail()">Valider</button> 
                        <div id="message"></div> 
                    </div> 
          
                    <script> 
                        function validerEmail() { 
                            const email = document.getElementById("email").value; 
                            const messageDiv = document.getElementById("message"); 
          
                            if (email.trim() === "") { 
                                messageDiv.textContent = "Veuillez entrer une adresse e-mail."; 
                                messageDiv.className = "invalide"; 
                                return; 
                            } 
          
                            if (validateEmail(email)) { 
                                messageDiv.textContent = "L'e-mail est valide."; 
                                messageDiv.className = "valide"; 
                            } else { 
                                messageDiv.textContent = "L'e-mail n'est pas valide."; 
                                messageDiv.className = "invalide"; 
                            } 
                        } 
          
                        function validateEmail(email) { 
                          const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
                          return re.test(String(email).toLowerCase()); 
                        } 
                    </script> 
                </body> 
                </html>
                `
              },
              {
                "src": "/Exercices/Ex2-serie7.png",
                "alt": "Exercice 2",
                "code": `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Liste de Tâches</title> 
                    <style> 
                        body { 
                            font-family: sans-serif; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center; 
                            min-height: 100vh; 
                            margin: 0; 
                            background-color: #f0f0f0; 
                        } 
                        .container { 
                            background-color: white; 
                            padding: 20px; 
                            border-radius: 8px; 
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                            width: 400px; 
                        } 
              
                        #nouvelle-tache { 
                            width: 100%; 
                            padding: 8px; 
                            margin-bottom: 10px; 
                            box-sizing: border-box; 
                        } 
              
                        .tache { 
                            display: flex; 
                            align-items: center; 
                            padding: 8px; 
                            border-bottom: 1px solid #eee; 
                        } 
              
                        .tache span { 
                            flex-grow: 1; 
                        } 
              
                        .tache button { 
                          margin-left: 5px; 
                            background-color: #4CAF50;  
                            border: none; 
                            color: white; 
                            padding: 5px 10px; 
                            text-align: center; 
                            text-decoration: none; 
                            display: inline-block; 
                            font-size: 16px; 
                            cursor: pointer; 
                            border-radius: 4px; 
                        } 
                        .tache .supprimer { 
                          background-color: #f44336; 
                        } 
                    </style> 
                </head> 
                <body> 
                    <div class="container"> 
                        <h2>Liste de Tâches</h2> 
                        <input type="text" id="nouvelle-tache" placeholder="Nouvelle tâche"> 
                        <input type="datetime-local" id="date-tache"> 
                        <button onclick="ajouterTache()">Ajouter</button> 
                        <div id="liste-taches"></div> 
                    </div> 
                    <script> 
                        function ajouterTache() { 
                            const tacheText = document.getElementById("nouvelle-tache").value; 
                            const dateTache = document.getElementById("date-tache").value; 
                            const listeTaches = document.getElementById("liste-taches"); 
                            if (tacheText.trim() === "") return; 
                            const tacheDiv = document.createElement("div"); 
                            tacheDiv.className = "tache"; 
              
                            const dateFormatee = formaterDate(dateTache); 
              
                            tacheDiv.innerHTML = \`
                                <span>\${tacheText} (Due: \${dateFormatee})</span>
                                <button onclick="tacheFaite(this)">✓</button> 
                                <button class="supprimer" onclick="supprimerTache(this)">Supprimer</button>
                            \`; 
              
                            listeTaches.appendChild(tacheDiv); 
                            document.getElementById("nouvelle-tache").value = ""; 
                            document.getElementById("date-tache").value = ""; 
                        } 
              
                        function formaterDate(dateISO) { 
                          if (!dateISO) return "Pas de date"; 
                          const date = new Date(dateISO); 
                          const jour = date.getDate().toString().padStart(2, '0'); 
                          const mois = (date.getMonth() + 1).toString().padStart(2, '0'); 
                          const annee = date.getFullYear(); 
                          const heure = date.getHours().toString().padStart(2, '0'); 
                          const minute = date.getMinutes().toString().padStart(2, '0'); 
                          const seconde = date.getSeconds().toString().padStart(2, '0'); 
                          return \`\${jour}/\${mois}/\${annee} \${heure}:\${minute}:\${seconde}\`; 
                        } 
              
                        function supprimerTache(bouton) { 
                            bouton.parentNode.remove(); 
                        } 
              
                        function tacheFaite(bouton) { 
                          bouton.parentNode.classList.toggle("fait"); 
                        } 
                    </script> 
                </body> 
                </html>
                `
              },
              {
                "src": "/Exercices/Ex3-serie7.png",
                "alt": "Exercice 3",
                "code": `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Calculatrice</title> 
                    <style> 
                        body { 
                            font-family: sans-serif; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center; 
                            min-height: 100vh; 
                            margin: 0; 
                            background-color: #f0f0f0; 
                        } 
              
                        .calculatrice { 
                            background-color: white; 
                            padding: 20px; 
                            border-radius: 8px; 
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                            display: grid; 
                            grid-template-columns: repeat(4, 1fr); /* 4 colonnes égales */ 
                            grid-gap: 10px; 
                        } 
              
                        #ecran { 
                            grid-column: 1 / -1;  
                            padding: 10px; 
                            margin-bottom: 10px; 
                            border: 1px solid #ccc; 
                            border-radius: 4px; 
                            text-align: right; 
                            font-size: 1.2em; 
                        } 
              
                        button { 
                            background-color: #4CAF50;  
                            border: none; 
                            color: white; 
                            padding: 15px; 
                            text-align: center; 
                            text-decoration: none; 
                            display: inline-block; 
                            font-size: 1.2em; 
                            cursor: pointer; 
                            border-radius: 4px; 
                        } 
              
                        button:active { 
                            background-color: #45a049; 
                        } 
                    </style> 
                </head> 
                 
                <body> 
              
                <div class="calculatrice"> 
                    <input type="text" id="ecran" readonly> 
                    <button onclick="ajouter('7')">7</button> 
                    <button onclick="ajouter('8')">8</button> 
                    <button onclick="ajouter('9')">9</button> 
                    <button onclick="ajouter('/')">/</button> 
                    <button onclick="ajouter('4')">4</button> 
                    <button onclick="ajouter('5')">5</button> 
                    <button onclick="ajouter('6')">6</button> 
                    <button onclick="ajouter('*')">*</button> 
                    <button onclick="ajouter('1')">1</button> 
                    <button onclick="ajouter('2')">2</button> 
                    <button onclick="ajouter('3')">3</button> 
                    <button onclick="ajouter('-')">-</button> 
                    <button onclick="effacer()">C</button> 
                    <button onclick="ajouter('0')">0</button> 
                    <button onclick="calculer()">=</button> 
                    <button onclick="ajouter('+')">+</button> 
                </div> 
              
                <script> 
                    function ajouter(valeur) { 
                        document.getElementById("ecran").value += valeur; 
                    } 
              
                    function effacer() { 
                        document.getElementById("ecran").value = ""; 
                    } 
              
                    function calculer() { 
                        try { 
                            document.getElementById("ecran").value = 
                eval(document.getElementById("ecran").value); 
                        } catch (erreur) { 
                            document.getElementById("ecran").value = "Erreur"; 
                        } 
                    } 
                </script> 
              
                </body> 
                </html>
                `
              },
              {
                "PdfUrl": "/Exercices/N7.pdf",
                "pdfLink": "Serie N7.pdf"
              }
            ]
          },  
          {
            "id": 8,
            "images": [
              {
                "src": "/Exercices/Ex1-serie8.png",
                "alt": "Exercice 1",
                "code": `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Compteur de Mots</title> 
                    <style> 
                        body { 
                            font-family: sans-serif; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center; 
                            min-height: 100vh; 
                            margin: 0; 
                            background-color: #f0f0f0; 
                        } 
                
                        .container { 
                            background-color: white; 
                            padding: 20px; 
                            border-radius: 8px; 
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                            width: 500px; 
                        } 
                
                        #texte { 
                            width: 100%; 
                            height: 150px; 
                            padding: 10px; 
                            margin-bottom: 10px; 
                            box-sizing: border-box; 
                            border: 1px solid #ccc; 
                            border-radius: 4px; 
                            resize: vertical;  
                        } 
                
                        button { 
                            background-color: #4CAF50;  
                            border: none; 
                            color: white; 
                            padding: 10px 20px; 
                            text-align: center; 
                            text-decoration: none; 
                            display: inline-block; 
                            font-size: 1em; 
                            cursor: pointer; 
                            border-radius: 4px; 
                            margin-bottom: 10px; 
                        } 
                
                        .resultat { 
                            margin-bottom: 5px; 
                        } 
                    </style> 
                </head> 
                <body> 
                    <div class="container"> 
                        <h2>Compteur de Mots</h2> 
                        <textarea id="texte" placeholder="Saisissez votre texte ici..."></textarea> 
                        <button onclick="compter()">Compter</button> 
                        <div id="resultats"> 
                            <div class="resultat" id="nombre-mots">Nombre de mots : 0</div> 
                            <div class="resultat" id="nombrecaracteres">Nombre de caractères : 0</div> 
                            <div class="resultat" id="nombre-phrases">Nombre de phrases : 0</div> 
                        </div> 
                    </div> 
                
                    <script> 
                        function compter() { 
                            const texte = document.getElementById("texte").value; 
                
                            // Compter les mots 
                            const mots = texte.trim().split(/\s+/).filter(mot => mot !== ""); // Gère les espaces multiples 
                            const nombreMots = mots.length; 
                
                            // Compter les caractères 
                            const nombreCaracteres = texte.length; 
                
                            // Compter les phrases (approche simplifiée) 
                            const phrases = texte.split(/[.?!]+/).filter(phrase => phrase.trim() !== ""); 
                            const nombrePhrases = phrases.length; 
                
                
                            document.getElementById("nombre-mots").textContent = "Nombre de mots : " + nombreMots; 
                            document.getElementById("nombrecaracteres").textContent = "Nombre de caractères : " + nombreCaracteres; 
                            document.getElementById("nombre-phrases").textContent = "Nombre de phrases : " + nombrePhrases; 
                        } 
                    </script> 
                </body> 
                </html>
                `
              },
              {
                "src": "/Exercices/Ex2-serie8.png",
                "alt": "Exercice 2",
                "code": `
                <!DOCTYPE html> 
                <html lang="fr"> 
                <head> 
                    <meta charset="UTF-8"> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
                    <title>Compteur J'aime / Je n'aime pas</title> 
                    <style> 
                        body { 
                            font-family: sans-serif; 
                            display: flex; 
                            justify-content: center; 
                            align-items: center; 
                            min-height: 100vh; 
                            margin: 0; 
                            background-color: #f0f0f0; 
                        } 
                        .container { 
                            background-color: white; 
                            padding: 20px; 
                            border-radius: 8px; 
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
                            text-align: center; 
                        } 
                        button { 
                            padding: 10px 20px; 
                            margin: 10px; 
                            border: none; 
                            border-radius: 5px; 
                            cursor: pointer; 
                            font-size: 1em; 
                        } 
                        #jaime { 
                            background-color: #007bff;  
                            color: white; 
                        } 
                        #jaimepas { 
                            background-color: #dc3545;  
                            color: white; 
                        } 
                
                        .total { 
                            margin-top: 20px; 
                            font-size: 1.2em; 
                            font-weight: bold; 
                        } 
                    </style> 
                </head> 
                <body> 
                    <div class="container"> 
                        <h2>Publication</h2> 
                        <button id="jaime" onclick="incrementer('jaime')">J'aime</button> 
                        <button id="jaimepas" onclick="incrementer('jaimepas')">Je n'aime pas</button> 
                
                        <div class="total"> 
                            <span id="total-jaime">J'aime : 0</span><br> 
                            <span id="total-jaimepas">Je n'aime pas : 0</span> 
                        </div> 
                    </div> 
                
                    <script> 
                        let compteurJaime = 0; 
                        let compteurJaimepas = 0; 
                
                        function incrementer(type) { 
                            if (type === 'jaime') { 
                                compteurJaime++; 
                                document.getElementById('total-jaime').textContent = "J'aime : " + compteurJaime; 
                            } else if (type === 'jaimepas') { 
                                compteurJaimepas++; 
                                document.getElementById('total-jaimepas').textContent = "Je n'aime pas : " + compteurJaimepas; 
                            } 
                        } 
                    </script> 
                </body> 
                </html>
                `
              },
              { 
                "PdfUrl": "/Exercices/N8.pdf", 
                "pdfLink": "Serie N8.pdf" 
              }
            ]
          },
          {
              id: 9,
              images: [
                  {
                      src: '/Exercices/Ex1-serie9.png',
                      alt: 'Exercice 1',
                      code: `
                          1- Installer le NodeJs et le Npm, puis créer votre première application React.
                          - installation de NodeJS : https://nodejs.org/fr
                          2- Réaliser une page qui affiche « Hello, World » 
                          -en utilisant la commande suivante, créer votre premier projet ReactJs
          
                          "Npx create-react-app Serie09"
          
                          vous pouvez vous rendre dans le dossier de votre projet :
                          "cd Serie09"
          
                          - Pour voir votre application React en action, exécutez cette commande :
                          "npm start"
          
                          - Dans le fichier src/App.js. Vous pouvez modifier pour commencer à personnaliser votre application.
                          
                          import React from 'react';
                          function App() {
                              return (
                                  <div>
                                      <h1>Hello world!</h1>
                                  </div>
                              );
                          }
                          export default App;
                      `
                  },
                  {
                      src: '/Exercices/Ex2-serie9.png',
                      alt: 'Exercice 2',
                      code: `
                          import React from 'react'; 
                          function App() { 
                              return React.createElement( 
                                  'div', 
                                  null, 
                                  React.createElement( 
                                      'ol', 
                                      null, 
                                      React.createElement( 
                                          'li', 
                                          null, 
                                          'Front-end', 
                                          React.createElement( 
                                              'ol', 
                                              null, 
                                              React.createElement('li', null, 'HTML'), 
                                              React.createElement('li', null, 'CSS'), 
                                              React.createElement('li', null, 'JavaScript'), 
                                              React.createElement('li', null, 'React') 
                                          ) 
                                      ), 
                                      React.createElement( 
                                          'li', 
                                          null, 
                                          'Back-end', 
                                          React.createElement( 
                                              'ol', 
                                              null, 
                                              React.createElement('li', null, 'Node.js'), 
                                              React.createElement('li', null, 'Express.js'), 
                                              React.createElement( 
                                                  'li', 
                                                  null, 
                                                  'Databases', 
                                                  React.createElement( 
                                                      'ol', 
                                                      null, 
                                                      React.createElement('li', null, 'MongoDB'), 
                                                      React.createElement('li', null, 'PostgreSQL') 
                                                  ) 
                                              ) 
                                          ) 
                                      ), 
                                      React.createElement( 
                                          'li', 
                                          null, 
                                          'DevOps', 
                                          React.createElement( 
                                              'ol', 
                                              null, 
                                              React.createElement('li', null, 'Docker'), 
                                              React.createElement('li', null, 'Kubernetes'), 
                                              React.createElement('li', null, 'CI/CD') 
                                          ) 
                                      ) 
                                  ) 
                              ); 
                          } 
                          export default App;
                          -----------------------------------------------------------------------------------------------
                          import React from 'react'; 
                          function App() { 
                              return React.createElement( 
                                  'div', 
                                  null, 
                                  React.createElement( 
                                      'ul', 
                                      null, 
                                      React.createElement( 
                                          'li', 
                                          null, 
                                          'Front-end', 
                                          React.createElement( 
                                              'ul', 
                                              null, 
                                              React.createElement('li', null, 'HTML'), 
                                              React.createElement('li', null, 'CSS'), 
                                              React.createElement('li', null, 'JavaScript'), 
                                              React.createElement('li', null, 'React') 
                                          ) 
                                      ), 
                                      React.createElement( 
                                          'li', 
                                          null, 
                                          'Back-end', 
                                          React.createElement( 
                                              'ul', 
                                              null, 
                                              React.createElement('li', null, 'Node.js'), 
                                              React.createElement('li', null, 'Express.js'), 
                                              React.createElement( 
                                                  'li', 
                                                  null, 
                                                  'Databases', 
                                                  React.createElement( 
                                                      'ul', 
                                                      null, 
                                                      React.createElement('li', null, 'MongoDB'),
                                                      React.createElement('li', null, 'PostgreSQL') 
                                                  ) 
                                              ) 
                                          ) 
                                      ), 
                                      React.createElement( 
                                          'li', 
                                          null, 
                                          'DevOps', 
                                          React.createElement( 
                                              'ul', 
                                              null, 
                                              React.createElement('li', null, 'Docker'), 
                                              React.createElement('li', null, 'Kubernetes'), 
                                              React.createElement('li', null, 'CI/CD') 
                                          ) 
                                      ) 
                                  ) 
                              ); 
                          } 
                      export default App;
                      `
                  },
                  {
                      src: '/Exercices/Ex3-serie9.png',
                      alt: 'Exercice 3',
                      code: `
                          // App.js:
                          import React from 'react';
                          function App() {
                              return React.createElement(
                                  'div',
                                  null,
                                  { className: 'container' },
                                  React.createElement(
                                      'h2',
                                      null,
                                      'Login'
                                  ),
                                  React.createElement(
                                      'form',
                                      null,
                                      React.createElement(
                                          'div',
                                          null,
                                          React.createElement('label', null, 'Email:'),
                                          React.createElement('input', { type: 'email' })
                                      ),
                                      React.createElement(
                                          'div',
                                          null,
                                          React.createElement('label', null, 'Password:'),
                                          React.createElement('input', { type: 'password' })
                                      ),
                                      React.createElement(
                                          'button',
                                          { type: 'submit' },
                                          'Login'
                                      )
                                  )
                              );
                          }
                          export default App;
          
                          // App.css:
                          .container {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 100vh;
                              background-color: white;
                          }
          
                          form {
                              padding: 20px;
                              background-color: #d3d2d2;
                              border-radius: 8px;
                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                          }
          
                          h2{
                              text-align: center;
                              font-size: 2rem;
                              margin-bottom: 20px;
                          }
          
                          input {
                              width: 100%;
                              padding: 8px;
                              margin-top: 5px;
                              border: 1px solid #ccc;
                              border-radius: 4px;
                          }
          
                          button {
                              width: 100%;
                              padding: 10px;
                              background-color: #194be2;
                              color: white;
                              border: none;
                              border-radius: 4px;
                              cursor: pointer;
                          }
                      `
                  },
                  {
                      PdfUrl: '/Exercices/N9.pdf',
                      pdfLink: 'Serie N9.pdf'
                  }
              ]
          },
          {
              id: 10,
              images: [
                  {
                      src: '/Exercices/Ex1-serie10.png',
                      alt: 'Exercice 1',
                      code: `
                          // App.js:
                          import React from 'react';
                          function App() {
                              return (
                                  <div className="container">
                                      <h2>Login</h2>
                                      <form>
                                          <div>
                                              <label>Email:</label>
                                              <input type="email" />
                                          </div>
                                          <div>
                                              <label>Password:</label>
                                              <input type="password" />
                                          </div>
                                          <button type="submit">Login</button>
                                      </form>
                                  </div>
                              );
                          }
                          export default App;
          
                          // App.css:
                          .container {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 100vh;
                              background-color: white;
                          }
          
                          form {
                              padding: 20px;
                              background-color: #d3d2d2;
                              border-radius: 8px;
                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                          }
          
                          h2{
                              text-align: center;
                              font-size: 2rem;
                              margin-bottom: 20px;
                          }
          
                          input {
                              width: 100%;
                              padding: 8px;
                              margin-top: 5px;
                              border: 1px solid #ccc;
                              border-radius: 4px;
                          }
          
                          button {
                              width: 100%;
                              padding: 10px;
                              background-color: #194be2;
                              color: white;
                              border: none;
                              border-radius: 4px;
                              cursor: pointer;
                          }
                      `
                  },
                  {
                      src: '/Exercices/Ex2-serie10.png',
                      alt: 'Exercice 2',
                      code: `
                          // App.js:
                          import React from 'react';
                          function App() {
                              return (
                                  <div>
                                      <h2>Inscription à l'OFPPT</h2>
                                      <form>
                                          <div>
                                              <label>Nom Complet:</label>
                                              <input type="text" placeholder="Entrez votre nom complet" />
                                          </div>
                                          <div>
                                              <label>Email:</label>
                                              <input type="email" placeholder="Entrez votre email" />
                                          </div>
                                          <div>
                                              <label>Téléphone:</label>
                                              <input type="tel" placeholder="Entrez votre numéro de téléphone" />
                                          </div>
                                          <div>
                                              <label>Mot de passe:</label>
                                              <input type="password" placeholder="Entrez votre mot de passe" />
                                          </div>
                                          <div>
                                              <label>Filière:</label>
                                              <select>
                                                  <option value="">Choisissez une filière</option>
                                                  <option value="informatique">Informatique</option>
                                                  <option value="gestion">Gestion</option>
                                                  <option value="electrique">Électrique</option>
                                              </select>
                                          </div>
                                          <div>
                                              <label>Diplôme Obtenu:</label>
                                              <select>
                                                  <option value="">Choisissez un diplôme</option>
                                                  <option value="bac">Baccalauréat</option>
                                                  <option value="bacplus2">Bac +2</option>
                                                  <option value="bacplus3">Bac +3</option>
                                              </select>
                                          </div>
                                          <button type="submit">S'inscrire</button>
                                      </form>
                                  </div>
                              );
                          }
                          export default App;
          
                          // App.css:
                          .container {
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 100vh;
                              background-color: white;
                          }
          
                          form {
                              padding: 20px;
                              background-color: #d3d2d2;
                              border-radius: 8px;
                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                          }
          
                          h2{
                              text-align: center;
                              font-size: 2rem;
                              margin-bottom: 20px;
                          }
          
                          input {
                              width: 100%;
                              padding: 8px;
                              margin-top: 5px;
                              border: 1px solid #ccc;
                              border-radius: 4px;
                          }
          
                          button {
                              width: 100%;
                              padding: 10px;
                              background-color: #194be2;
                              color: white;
                              border: none;
                              border-radius: 4px;
                              cursor: pointer;
                          }
                      `
                  },
                  {
                      PdfUrl: '/Exercices/N10.pdf',
                      pdfLink: 'Serie N10.pdf'
                  }
              ]
          },        
          {
              id: 11,
              images: [
                  {
                      src: '/Exercices/Ex1-serie11.png',
                      alt: 'Exercice 1',
                      code: `
                          ------------------------------------------------------------------------------------------------------------------------------------------
                          const Greeting = () => {                                     |    const Greeting = () => { 
                              return <h1>Bienvenue à l'OFPPT!</h1>;                    |       return React.createElement('h1', null, "Bienvenue à l'OFPPT!");
                          };                                                           |    }; 
                          ------------------------------------------------------------------------------------------------------------------------------------------
                          const TodoList = () => {                                     |const TodoList = () => {
                              const todos = ['Apprendre React',                        |   const todos = ['Apprendre React', 'Pratiquer les exercices', 
                                  'Pratiquer les exercices', 'Construire un            |      'Construire un projet'
                              projet'];                                                |   ]; 
                              return (                                                 |   return React.createElement(          
                                  <ul> {                                               |       'ul',                      
                                      todos.map(todo => <li                            |        null, 
                                          key={todo}>{todo}</li>)                      |        todos.map(todo =>
                                      }                                                |            React.createElement('li', { key: todo }, todo)
                                  </ul>                                                |        )   
                              );                                                       |    )                    
                          };                                                           |}
                          -------------------------------------------------------------------------------------------------------------------------------------------
                          const UserProfile = ({ name, age }) => {                     |const UserProfile = ({ name, age }) => {
                              return (                                                 |     return React.createElement( 
                                  <div>                                                |          'div', 
                                      <h2>{name}</h2>                                  |           null, 
                                      <p>Âge: {age}</p>                                |           React.createElement('h2', null, name), 
                                  </div>                                               |           React.createElement('p', null, "Âge: {age}") //hda age ajouter $
                              );                                                       |     ); 
                          };                                                           |};
                          --------------------------------------------------------------------------------------------------------------------------------------------
                      ` 
                  },
                  {
                      src: '/Exercices/Ex2-serie11.png',
                      alt: 'Exercice 2',
                      code: `                                                          
                          -------------------------------------------------------------------------------------------------------------------------------------------
                          const App = () => {                                          |const App = () => {
                              return React.createElement(                              |   return ( 
                                  'div',                                               |      <div>
                                  null,                                                |          Bienvenue à l'OFPPT! 
                                  'Bienvenue à l'OFPPT!'                               |       </div> 
                              );                                                       |   ); 
                          };                                                           |}; 
                          -------------------------------------------------------------------------------------------------------------------------------------------
                          const App = () => {                                          |const App = () => {
                              return React.createElement(                              |    return (
                                  'div',                                               |       <div> 
                                  null,                                                |          <h1>Mon Application</h1> 
                                  React.createElement(                                 |           <p>Ceci est un paragraphe.</p>
                                      'h1',                                            |       </div> 
                                      null,                                            |    );     
                                      'Mon Application'                                |};
                                  ),                                                   |
                                  React.createElement(                                 |
                                      'p',                                             |
                                      null,                                            |
                                      'Ceci est un paragraphe.'                        |
                                  )                                                    |
                              );                                                       |
                          };                                                           |
                          -------------------------------------------------------------------------------------------------------------------------------------------
                      ` 
                  },
                  { PdfUrl: '/Exercices/N11.pdf', pdfLink: 'Serie N11.pdf' }
              ]
          },
          {
              id: 12,
              images: [
                  {
                      src: '/Exercices/Ex1-serie12.png',
                      alt: 'Exercice 1',
                      code: `
                      -------------------------------------------------------------------------------------------------------------------------------------------
                      const ShoppingCart = () => {                                   |const ShoppingCart = () => { 
                          return React.createElement(                                |     return ( 
                              'div',                                                 |         <div>
                              null,                                                  |             <h2>Mon Panier</h2>
                              React.createElement(                                   |             <ul> 
                                  'h2',                                              |                 <li>Produit 1</li> 
                                  null,                                              |                 <li>Produit 2</li> 
                                  'Mon Panier'),                                     |                 <li>Produit 3</li> 
                              React.createElement(                                   |             </ul> 
                                  'ul',                                              |          </div> 
                                  null,                                              |     );
                                  React.createElement('li',null, 'Produit 1'),       |}; 
                                  React.createElement('li',null, 'Produit 2'),       |
                                  React.createElement('li',null,'Produit 3')         |
                              )                                                      |
                          );                                                         |
                      };                                                             |
                      -------------------------------------------------------------------------------------------------------------------------------------------
                      ` 
                  },
                  {
                      src: '/Exercices/Ex2-serie12.png',
                      alt: 'Exercice 2',
                      code: `
                          // SumWithJSX component using JSX syntax
                          const SumWithJSX = () => { 
                            return ( 
                              <div> 
                                <h2>Somme de Nombres (JSX)</h2> 
                                <input type="number" placeholder="Premier nombre" /> 
                                <input type="number" placeholder="Deuxième nombre" /> 
                                <button>Calculer</button> 
                              </div> 
                            ); 
                          }; 
                      ----------------------------------------------------------------------------------------------------------------------------
                          // SumWithoutJSX component using React.createElement
                          const SumWithoutJSX = () => { 
                            return React.createElement( 
                              'div', 
                              null, 
                              React.createElement('h2', null, 'Somme de Nombres (Sans JSX)'), 
                              React.createElement('input', { type: 'number', placeholder: 'Premier nombre' }), 
                              React.createElement('input', { type: 'number', placeholder: 'Deuxième nombre' }), 
                              React.createElement('button', null, 'Calculer') 
                            ); 
                          }; 
                       -----------------------------------------------------------------------------------------------------------------------------
                          // Main App component rendering both SumWithJSX and SumWithoutJSX
                          const App = () => { 
                            return ( 
                              <div> 
                                <SumWithJSX /> 
                                <SumWithoutJSX /> 
                              </div> 
                            ); 
                          }; 
                  
                          export default App;
                      `
                  },
                  { PdfUrl: '/Exercices/N12.pdf', pdfLink: 'Serie N12.pdf' }        
              ]
          },        
          {
              id: 13,
              images: [
                  {
                      src: '/Exercices/Ex1-serie13.png',
                      alt: 'Exercice 1',
                      code: `
                      import React from 'react'; 
                      const Header = () => { 
                        return ( 
                          <div style={{ textAlign: 'center', marginBottom: '20px' }}> 
                            <img 
                              src="https://ofppt.ma/logo.png" 
                              alt="Logo OFPPT" 
                              style={{ width: '200px' }} /> 
                          </div> 
                        ); 
                      }; 
                       
                      const AboutSection = () => { 
                        return ( 
                          <div> 
                            <h3>À propos de l'OFPPT</h3> 
                            <p>  L'OFPPT est l'acteur principal de la formation 
                              professionnelle au Maroc. Il offre une large gamme de 
                              formations adaptées aux besoins du marché du travail pour 
                              aider les jeunes à développer leurs compétences et à 
                              améliorer leur employabilité.
                            </p> 
                          </div> 
                        ); 
                      }; 
                       
                      const FiliereSection = () => { 
                        return ( 
                          <div> 
                            <h3>Nos Filières</h3> 
                            <ul> 
                              <li>Informatique</li> 
                              <li>Génie Civil</li> 
                              <li>Gestion</li> 
                              <li>Industrie</li> 
                              <li>Artisanat</li> 
                            </ul> 
                          </div> 
                        ); 
                      }; 
                       
                      const WhyChooseSection = () => { 
                        return ( 
                          <div> 
                            <h3>Pourquoi choisir la formation professionnelle ?</h3> 
                            <p> 
                              La formation professionnelle vous permet d'acquérir des 
                              compétences pratiques, d'être prêt pour le marché du travail, 
                              et de bénéficier d'une grande diversité de filières adaptées 
                              aux besoins actuels de l'économie. 
                            </p> 
                          </div> 
                        ); 
                      }; 
                       
                      const TestimonialsSection = () => { 
                        return ( 
                          <div> 
                            <h3>Témoignages</h3> 
                            <blockquote> 
                              "La formation m'a permis de décrocher un emploi stable." - Fatima 
                            </blockquote> 
                            <blockquote> 
                              "Grâce à l'OFPPT, j'ai acquis des compétences précieuses pour le marché du travail." - Yassine 
                            </blockquote> 
                          </div> 
                        ); 
                      }; 
                       
                      const App = () => { 
                        return ( 
                          <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f9f9f9' }}> 
                            <Header /> 
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',gap: '20px' }}> 
                              <AboutSection /> 
                              <FiliereSection /> 
                              <WhyChooseSection /> 
                              <TestimonialsSection /> 
                            </div> 
                          </div> 
                        ); 
                      }; 
                      export default App;
                      `
                  },
                  {
                      src: '/Exercices/Ex2-serie13.png',
                      alt: 'Exercice 2',
                      code: `
                      import React from 'react'; 
                       
                      const Header = () => { 
                        return ( 
                          <header style={{ backgroundColor: '#333', padding:'20px', textAlign: 'center', color: '#fff' }}> 
                            <h1>Cours de React</h1> 
                          </header> 
                        ); 
                      }; 
                       
                      const Navbar = () => { 
                        return ( 
                          <nav style={{ backgroundColor: '#eee', padding: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}> 
                            <a href="#introduction">Introduction</a> 
                            <a href="#composants">Composants</a> 
                            <a href="#props">Props</a> 
                            <a href="#etat">État</a> 
                            <a href="#hooks">Hooks</a> 
                            <a href="#routing">Routing</a> 
                          </nav> 
                        ); 
                      }; 
                       
                      const Section = ({ title, description }) => { 
                        return ( 
                          <div style={{ border: '1px solid #ddd', margin: '20px 0',padding: '20px', borderRadius: '5px' }}> 
                            <h2 style={{ color: '#007bff' }}>{title}</h2> 
                            <p>{description}</p> 
                          </div> 
                        ); 
                      }; 
                       
                      const Footer = () => { 
                        return ( 
                          <footer style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center', color: '#fff' }}> 
                            <p>&copy; 2024 Cours de React</p> 
                          </footer> 
                        ); 
                      }; 
                       
                      const App = () => { 
                        return ( 
                          <div> 
                            <Header /> 
                            <Navbar /> 
                            <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}> 
                              <Section 
                                title="Introduction à React" 
                                description="React est une bibliothèque JavaScript pour construire des interfaces utilisateur." 
                              /> 
                              <Section 
                                title="Les Composants" 
                                description="Les composants sont les blocs de construction de l'interface utilisateur en React." 
                              /> 
                              <Section 
                                title="Les Props" 
                                description="Les props (propriétés) sont des données que l'on passe aux composants." 
                              /> 
                            </main> 
                            <Footer /> 
                          </div> 
                        ); 
                      }; 
                       
                      export default App; 
                      `
                  },
                  { PdfUrl: '/Exercices/N13.pdf', pdfLink: 'Serie N13.pdf' }
              ]
          },
          {
              id: 14,
              images: [
                  {
                      src: '/Exercices/Ex1-serie14.png',
                      alt: 'Exercice 1',
                      code: `
                      import React from 'react'; 
                      const DisplaySum = ({ sum }) => { 
                        return ( 
                          <p style={{ color: 'blue', fontSize: '18px' }}> 
                            La somme des trois nombres est : {sum} 
                          </p> 
                        ); 
                      }; 
                      const SumCalculator = ({ num1, num2, num3 }) => { 
                        const sum = num1 + num2 + num3; 
                        return ( 
                          <div style={{ textAlign: 'center', padding: '20px', fontFamily:'Arial, sans-serif' }}> 
                            <h2 style={{ color: 'blue' }}>Calculateur de Somme</h2> 
                            <DisplaySum sum={sum} /> 
                          </div> 
                        ); 
                      }; 
                      const App = () => { 
                        return <SumCalculator num1={10} num2={10} num3={10} />; 
                      }; 
                      export default App; 
                      `
                  },
                  {
                      src: '/Exercices/Ex2-serie14.png',
                      alt: 'Exercice 2',
                      code: `
                      import React from 'react'; 
                      const DisplayMax = ({ max }) => { 
                        return ( 
                          <p style={{ color: 'blue', fontSize: '18px' }}> 
                            Le maximum est : {max} 
                          </p> 
                        ); 
                      }; 
                      const MaxCalculator = ({ num1, num2, num3 }) => { 
                        const max = Math.max(num1, num2, num3); 
                        return ( 
                          <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                            <h2 style={{ color: 'blue' }}>Calculateur de Maximum</h2> 
                            <DisplayMax max={max} /> 
                          </div> 
                        ); 
                      }; 
                      const App = () => { 
                        return <MaxCalculator num1={5} num2={10} num3={15} />; 
                      }; 
                      export default App; 
                      `
                  },
                  {
                      src: '/Exercices/Ex3-serie14.png',
                      alt: 'Exercice 3',
                      code: `
                      import React from 'react'; 
                      const DisplayVowelCount = ({ count }) => { 
                        return ( 
                          <p style={{ color: 'blue', fontSize: '18px' }}> 
                            Le nombre de voyelles dans la chaîne est : {count} 
                          </p> 
                        ); 
                      }; 
                      const VowelCounter = ({ text }) => { 
                        const countVowels = (str) => { 
                          const vowels = 'aeiouAEIOU'; 
                          return str.split('').filter((char) => vowels.includes(char)).length; 
                        }; 
                        const vowelCount = countVowels(text); 
                        return ( 
                          <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                            <h2 style={{ color: 'blue' }}>Compteur de Voyelles</h2> 
                            <DisplayVowelCount count={vowelCount} /> 
                          </div> 
                        ); 
                      }; 
                      const App = () => { 
                        return <VowelCounter text="Compteur de voyelles dans React" />; 
                      }; 
                      export default App; 
                      `
                  },
                  {
                      src: '/Exercices/Ex4-serie14.png',
                      alt: 'Exercice 4',
                      code: `
                      import React from 'react'; 
                      const DisplayMiles = ({ miles }) => { 
                        return ( 
                          <p style={{ color: 'blue', fontSize: '18px' }}> 
                            La distance en miles est : {miles.toFixed(2)} 
                          </p> 
                        ); 
                      }; 
                      const UnitConverter = ({ kilometers }) => { 
                        const miles = kilometers * 0.621371; // Facteur de conversion kilomètres -> miles 
                       
                        return ( 
                          <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                            <h2 style={{ color: 'blue' }}>Convertisseur d'Unités</h2> 
                            <DisplayMiles miles={miles} /> 
                          </div> 
                        ); 
                      }; 
                      const App = () => { 
                        return <UnitConverter kilometers={10} />; 
                      }; 
                       
                      export default App;
                      `
                  },
                  {
                      src: '/Exercices/Ex5-serie14.png',
                      alt: 'Exercice 5',
                      code: `
                      import React from 'react'; 
                      const DisplaySign = ({ number }) => { 
                          let message; 
                          if (number > 0) { 
                              message = "Le nombre {number} est positif."; //9dam {number} Ajouter $
                          } 
                          else if (number < 0) { 
                              message = "Le nombre {number} est négatif."; //9dam {number} Ajouter $
                          } 
                          else { 
                              message = "Le nombre est zéro."; 
                          } 
                          return ( 
                              <p style={{ color: 'blue', fontSize: '18px' }}> 
                                  {message} 
                              </p> 
                          ); 
                      }; 
                      const PositiveChecker = ({ number }) => { 
                          return ( 
                              <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                                  <h2 style={{ color: 'blue' }}>Vérificateur de Signe</h2> 
                                  <DisplaySign number={number} /> 
                              </div> 
                          ); 
                      }; 
                      const App = () => { 
                          return <PositiveChecker number={-5} />; 
                      }; 
                      export default App;
                      `
                  },
                  { PdfUrl: '/Exercices/N14.pdf', pdfLink: 'Serie N14.pdf' }
              ]
          },        
              {
                id: 15,
                images: [
                  {
                    src: '/Exercices/Ex1-serie15.png',
                    alt: 'Exercice 1',
                    code: `
                      import React from 'react'; 
                      const Book = ({ book }) => { 
                        return ( 
                          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                            <h3>Détails du Livre</h3> 
                            <p><strong>Titre :</strong> {book.title}</p> 
                            <p><strong>Auteur :</strong> {book.author}</p> 
                            <p><strong>Année de publication :</strong> {book.year}</p> 
                          </div> 
                        ); 
                      }; 
                      const App = () => { 
                        const bookDetails = { 
                          title: 'React In Action', 
                          author: 'Mark Tielens Thomas', 
                          year: 2016 
                        }; 
                        return <Book book={bookDetails} />; 
                      }; 
                      export default App;
                    `
                  },
                  {
                    src: '/Exercices/Ex2-serie15.png',
                    alt: 'Exercice 2',
                    code: `
                      import React, { Component } from 'react'; 
                      class Student extends Component { 
                        render() { 
                          const { student } = this.props; // Récupération des props 
                          return ( 
                            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                              <h3>Détails de l'Étudiant</h3> 
                              <p><strong>Nom :</strong> {student.name}</p> 
                              <p><strong>Âge :</strong> {student.age}</p> 
                              <p><strong>Filière :</strong> {student.field}</p> 
                            </div> 
                          ); 
                        } 
                      } 
                      const App = () => { 
                        const studentDetails = { 
                          name: 'ABOU GHAZI', 
                          age: 22, 
                          field: 'Informatique'  
                        }; 
                        return <Student student={studentDetails} />; 
                      }; 
                      export default App;
                    `
                  },
                  {
                    src: '/Exercices/Ex3-serie15.png',
                    alt: 'Exercice 3',
                    code: `
                      import React from 'react'; 
                      const StudentList = ({ students }) => { 
                        return ( 
                          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                            <h3>Liste des Étudiants</h3> 
                            <ul> 
                              {students.map((student, index) => ( 
                                <li key={index} style={{ marginBottom: '10px' }}> 
                                  <p><strong>Prénom :</strong> {student.firstName}</p> 
                                  <p><strong>Âge :</strong> {student.age} ans</p> 
                                </li> 
                              ))} 
                            </ul> 
                          </div> 
                        ); 
                      }; 
                      const App = () => { 
                        const studentData = [ 
                          { firstName: 'Mohamed', age: 22 }, 
                          { firstName: 'Khadija', age: 24 }, 
                          { firstName: 'Ayman', age: 23 }, 
                        ]; 
                        return <StudentList students={studentData} />; 
                      }; 
                      export default App;
                    `
                  },
                  {
                    src: '/Exercices/Ex4-serie15.png',
                    alt: 'Exercice 4',
                    code: `
                      import React, { Component } from 'react'; 
                      class BookList extends Component { 
                        render() { 
                          const { books } = this.props;  
                          return ( 
                            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                              <h3>Liste des Livres</h3> 
                              <ul> 
                                {books.map((book, index) => ( 
                                  <li key={index} style={{ marginBottom: '10px' }}> 
                                    <p><strong>Titre :</strong> {book.title}</p> 
                                    <p><strong>Auteur :</strong> {book.author}</p> 
                                  </li> 
                                ))} 
                              </ul> 
                            </div> 
                          ); 
                        } 
                      } 
                      const App = () => { 
                        const bookData = [ 
                          { title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry' }, 
                          { title: '1984', author: 'George Orwell' }, 
                          { title: "L'Étranger", author: 'Albert Camus' }, 
                        ]; 
                        return <BookList books={bookData} />; 
                      }; 
                      export default App;
                    `
                  },
                  {
                    PdfUrl: '/Exercices/N15.pdf',
                    pdfLink: 'Serie N15.pdf'
                  }
                ]
              },
              {
                id: 16,
                images: [
                  {
                    src: '/Exercices/Ex1-serie16.png',
                    alt: 'Exercice 1',
                    code: `
                      TP1 : COMPOSANT DE CLASSE 
                      import React, { Component } from 'react'; 
                      class SumCalculatorClass extends Component { 
                        constructor(props) { 
                          super(props); 
                          this.state = { 
                            num1: 0, 
                            num2: 0, 
                            sum: 0, 
                          }; 
                        } 
                        handleInputChange = (e) => { 
                          const { name, value } = e.target; 
                          this.setState( 
                            { 
                              [name]: Number(value), 
                            }, 
                            () => { 
                              this.setState({ sum: this.state.num1 + this.state.num2 }); 
                            } 
                          ); 
                        }; 
                        render() { 
                          return ( 
                            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                              <h3>Calcul de la Somme de Deux Nombres (Classe)</h3> 
                              <input 
                                type="number" 
                                name="num1" 
                                value={this.state.num1} 
                                onChange={this.handleInputChange} 
                                style={{ marginRight: '10px' }} 
                              /> 
                              <input 
                                type="number" 
                                name="num2" 
                                value={this.state.num2} 
                                onChange={this.handleInputChange} 
                                style={{ marginRight: '10px' }} 
                              /> 
                              <p> 
                                <strong>Somme :</strong> {this.state.sum} 
                              </p> 
                            </div> 
                          ); 
                        } 
                      }
                    `
                  },
                  {
                    src: '/Exercices/Ex2-serie16.png',
                    alt: 'Exercice 2',
                    code: `
                      import React, { useState } from 'react'; 
                      const SumCalculatorFunctional = () => { 
                        const [num1, setNum1] = useState(0); 
                        const [num2, setNum2] = useState(0); 
                        const handleNum1Change = (e) => setNum1(Number(e.target.value)); 
                        const handleNum2Change = (e) => setNum2(Number(e.target.value)); 
                        return ( 
                          <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}> 
                            <h3>Calcul de la Somme de Deux Nombres (Fonctionnel)</h3> 
                            <input 
                              type="number" 
                              value={num1} 
                              onChange={handleNum1Change} 
                              style={{ marginRight: '10px' }} 
                            /> 
                            <input 
                              type="number" 
                              value={num2} 
                              onChange={handleNum2Change} 
                              style={{ marginRight: '10px' }} 
                            /> 
                            <p> 
                              <strong>Somme :</strong> {num1 + num2} 
                            </p> 
                          </div> 
                        ); 
                      }; 
                      export default SumCalculatorFunctional;
                    `
                  },
                  {
                    src: '/Exercices/Ex3-serie16.png',
                    alt: 'Exercice 3',
                    code: `
                      import React, { useState } from 'react'; 
                      const ContactForm = () => { 
                        const [formData, setFormData] = useState({ 
                          name: '', 
                          email: '', 
                          message: '', 
                        }); 
                        const handleChange = (e) => { 
                          const { name, value } = e.target; 
                          setFormData({ 
                            ...formData, 
                            [name]: value, 
                          }); 
                        }; 
                        return ( 
                          <div style={{ maxWidth: '500px', margin: '20px auto', fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #ddd',
                           borderRadius: '10px', backgroundColor: '#f9f9f9' }}> 
                            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Formulaire de Contact</h3> 
                            <form> 
                              <div style={{ marginBottom: '15px' }}> 
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nom</label> 
                                <input 
                                  type="text" 
                                  name="name" 
                                  value={formData.name} 
                                  onChange={handleChange} 
                                  style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} 
                                /> 
                              </div> 
                              <div style={{ marginBottom: '15px' }}> 
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email</label> 
                                <input 
                                  type="email" 
                                  name="email" 
                                  value={formData.email} 
                                  onChange={handleChange} 
                                  style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} 
                                /> 
                              </div> 
                              <div style={{ marginBottom: '15px' }}> 
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Message</label> 
                                <textarea 
                                  name="message" 
                                  value={formData.message} 
                                  onChange={handleChange} 
                                  rows="4" 
                                  style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} 
                                ></textarea> 
                              </div> 
                              <button type="button" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', 
                              borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Soumettre</button> 
                            </form> 
                            <div style={{ marginTop: '20px' }}> 
                              <h4>Données en temps réel :</h4> 
                              <p><strong>Nom :</strong> {formData.name}</p> 
                              <p><strong>Email :</strong> {formData.email}</p> 
                              <p><strong>Message :</strong> {formData.message}</p> 
                              {formData.name && <p>Merci pour votre message, {formData.name} !</p>} 
                            </div> 
                          </div> 
                        ); 
                      }; 
                      export default ContactForm;
                    `
                  },
                  { PdfUrl: '/Exercices/N16.pdf',pdfLink: 'Serie N16.pdf' }
                ]
              },
              {
                id: 17,
                images: [
                  {
                    src: '/Exercices/Ex1-serie17.png',
                    alt: 'Exercice 1',
                    code: `
                      TP1 :COMPOSANT DE CLASSE 
                      import React, { Component } from 'react'; 
                      class Compteur extends Component { 
                        state = { compteur: 0 }; 
                        
                        incrementer = () => { 
                          this.setState({ compteur: this.state.compteur + 1 }); 
                        }; 
                        
                        render() { 
                          return ( 
                            <div> 
                              <h2>Compteur : {this.state.compteur}</h2> 
                              <button onClick={this.incrementer}>Incrémenter</button> 
                            </div> 
                          ); 
                        } 
                      } 
                      export default Compteur; 
                      
                      TP1 :COMPOSANT FONCTIONNEL 
                      import React, { useState } from 'react'; 
                      function Compteur() { 
                        const [compteur, setCompteur] = useState(0); 
                        const incrementer = () => { 
                          setCompteur(compteur + 1); 
                        }; 
                        return ( 
                          <div> 
                            <h2>Compteur : {compteur}</h2> 
                            <button onClick={incrementer}>Incrémenter</button> 
                          </div> 
                        ); 
                      } 
                      export default Compteur;
                    `
                  },
                  {
                    src: '/Exercices/Ex2-serie17.png',
                    alt: 'Exercice 2',
                    code: `
                      TP2 :COMPOSANT DE CLASSE 
                      import React, { useState } from 'react'; 
                      import React, { Component } from 'react'; 
                      class SaisieTexte extends Component { 
                        state = { texte: '' }; 
                        handleChange = (e) => { 
                          this.setState({ texte: e.target.value }); 
                        }; 
                        render() { 
                          return ( 
                            <div> 
                              <input  
                                type="text"  
                                value={this.state.texte}  
                                onChange={this.handleChange}  
                              /> 
                              <h3>Texte saisi : {this.state.texte}</h3> 
                            </div> 
                          ); 
                        } 
                      } 
                      export default SaisieTexte; 
                      
                      TP2 :COMPOSANT FONCTIONNEL 
                      import React, { useState } from 'react'; 
                      function SaisieTexte() { 
                        const [texte, setTexte] = useState(''); 
                        const handleChange = (e) => { 
                          setTexte(e.target.value); 
                        }; 
                        return ( 
                          <div> 
                            <input  
                              type="text"  
                              value={texte}  
                              onChange={handleChange}  
                            /> 
                            <h3>Texte saisi : {texte}</h3> 
                          </div> 
                        ); 
                      } 
                      export default SaisieTexte;
                    `
                  },
                  {
                    src: '/Exercices/Ex3-serie17.png',
                    alt: 'Exercice 3',
                    code: `
                      TP3:COMPOSANT DE CLASSE 
                      import React, { Component } from 'react'; 
                      class CouleurFond extends Component { 
                        changerCouleur = (couleur) => { 
                          document.body.style.backgroundColor = couleur; 
                        }; 
                        render() { 
                          return ( 
                            <div> 
                              <button onClick={() => this.changerCouleur('red')}>Rouge</button> 
                              <button onClick={() => this.changerCouleur('blue')}>Bleu</button> 
                            </div> 
                          ); 
                        } 
                      } 
                      export default CouleurFond; 
                      
                      TP3 :COMPOSANT FONCTIONNEL 
                      import React from 'react'; 
                      function CouleurFond() { 
                        const changerCouleur = (couleur) => { 
                          document.body.style.backgroundColor = couleur; 
                        }; 
                        return ( 
                          <div> 
                            <button onClick={() => changerCouleur('red')}>Rouge</button> 
                            <button onClick={() => changerCouleur('blue')}>Bleu</button> 
                          </div> 
                        ); 
                      } 
                      export default CouleurFond;
                    `
                  },
                      {
                        src: '/Exercices/Ex4-serie17.png',
                        alt: 'Exercice 4',
                        code: `
                          TP4 :COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          class ToggleTexte extends Component { 
                            state = { visible: true }; 
                            
                            toggleTexte = () => { 
                              this.setState({ visible: !this.state.visible }); 
                            }; 
                            
                            render() { 
                              return ( 
                                <div> 
                                  <button onClick={this.toggleTexte}> 
                                    {this.state.visible ? 'Cacher' : 'Montrer'} 
                                  </button> 
                                  {this.state.visible && <p>Le texte est visible.</p>} 
                                </div> 
                              ); 
                            } 
                          } 
                          export default ToggleTexte; 
                          
                          TP4 :COMPOSANT FONCTIONNEL 
                          import React, { useState } from 'react'; 
                          function ToggleTexte() { 
                            const [visible, setVisible] = useState(true); 
                            const toggleTexte = () => { 
                              setVisible(!visible); 
                            }; 
                            return ( 
                              <div> 
                                <button onClick={toggleTexte}> 
                                  {visible ? 'Cacher' : 'Montrer'} 
                                </button> 
                                {visible && <p>Le texte est visible.</p>} 
                              </div> 
                            ); 
                          } 
                          export default ToggleTexte;
                        `
                      },
                      {
                        src: '/Exercices/Ex5-serie17.png',
                        alt: 'Exercice 5',
                        code: `
                          TP5 ::COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          class Compteur extends Component { 
                            constructor(props) { 
                              super(props); 
                              this.state = { compteur: 0 }; 
                            } 
                            incrementer = () => { 
                              this.setState({ compteur: this.state.compteur + 1 }); 
                            }; 
                            reinitialiser = () => { 
                              this.setState({ compteur: 0 }); 
                            }; 
                            render() { 
                              return ( 
                                <div> 
                                  <h2>Compteur : {this.state.compteur}</h2> 
                                  <button onClick={this.incrementer}>Incrémenter</button> 
                                  <button onClick={this.reinitialiser}>Réinitialiser</button>
                                </div> 
                              ); 
                            } 
                          } 
                          export default Compteur; 
                          
                          TP5 :COMPOSANT FONCTIONNEL 
                          import React, { useState } from 'react'; 
                          function Compteur() { 
                            const [compteur, setCompteur] = useState(0); 
                            const incrementer = () => { 
                              setCompteur(compteur + 1); 
                            }; 
                            const reinitialiser = () => { 
                              setCompteur(0); 
                            }; 
                            return ( 
                              <div> 
                                <h2>Compteur : {compteur}</h2> 
                                <button onClick={incrementer}>Incrémenter</button> 
                                <button onClick={reinitialiser}>Réinitialiser</button> 
                              </div> 
                            ); 
                          } 
                          export default Compteur;
                        `
                      },
                      { 
                        PdfUrl: '/Exercices/N17.pdf', 
                        pdfLink: 'Serie N17.pdf' 
                      }
                    ]
                  },
                  {
                    id: 18,
                    images: [
                      {
                        src: '/Exercices/Ex1-serie18.png',
                        alt: 'Exercice 1',
                        code: `
                          TP1 :COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          class Formulaire extends Component { 
                            constructor(props) { 
                              super(props); 
                              this.state = { 
                                nom: '', 
                                email: '', 
                                erreur: '', 
                              }; 
                            } 
                            handleChange = (e) => { 
                              this.setState({ [e.target.name]: e.target.value }); 
                            }; 
                            handleSubmit = (e) => { 
                              e.preventDefault(); 
                              const { nom, email } = this.state; 
                              if (!nom || !email) { 
                                this.setState({ erreur: 'Tous les champs doivent être remplis.' }); 
                              } else { 
                                this.setState({ erreur: '' }); 
                                alert('Nom : {nom}, Email : {email}'); //9dam {nom} {email} Ajouter $ 
                              } 
                            }; 
                            render() { 
                              const { nom, email, erreur } = this.state; 
                              return ( 
                                <div> 
                                  <form onSubmit={this.handleSubmit}> 
                                    <input 
                                      type="text" 
                                      name="nom" 
                                      placeholder="Nom" 
                                      value={nom} 
                                      onChange={this.handleChange} 
                                    /> 
                                    <input 
                                      type="email" 
                                      name="email" 
                                      placeholder="Email" 
                                      value={email} 
                                      onChange={this.handleChange} 
                                    /> 
                                    <button type="submit">Soumettre</button> 
                                  </form> 
                                  {erreur && <p style={{ color: 'red' }}>{erreur}</p>} 
                                </div> 
                              ); 
                            } 
                          } 
                          export default Formulaire; 
                          
                          TP1 :COMPOSANT FONCTIONNEL 
                          import React, { useState } from 'react'; 
                          function Formulaire() { 
                            const [nom, setNom] = useState(''); 
                            const [email, setEmail] = useState(''); 
                            const [erreur, setErreur] = useState(''); 
                            const handleSubmit = (e) => { 
                              e.preventDefault(); 
                              if (!nom || !email) { 
                                setErreur('Tous les champs doivent être remplis.'); 
                              } else { 
                                setErreur(''); 
                                alert('Nom : {nom}, Email : {email}'); //9dam {nom} {email} Ajouter $ 
                              } 
                            }; 
                            return ( 
                              <div> 
                                <form onSubmit={handleSubmit}> 
                                  <input 
                                    type="text" 
                                    placeholder="Nom" 
                                    value={nom} 
                                    onChange={(e) => setNom(e.target.value)} 
                                  /> 
                                  <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                  /> 
                                  <button type="submit">Soumettre</button> 
                                </form> 
                                {erreur && <p style={{ color: 'red' }}>{erreur}</p>} 
                              </div> 
                            ); 
                          } 
                          export default Formulaire;
                        `
                      },
                      {
                        src: '/Exercices/Ex2-serie18.png',
                        alt: 'Exercice 2',
                        code: `
                          TP2 :COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          class CouleurFond extends Component { 
                            constructor(props) { 
                              super(props); 
                              this.state = { 
                                couleur: 'white', 
                              }; 
                            } 
                            changerCouleur = (e) => { 
                              this.setState({ couleur: e.target.value }); 
                              document.body.style.backgroundColor = e.target.value; 
                            }; 
                            render() { 
                              return ( 
                                <div> 
                                  <select value={this.state.couleur} onChange={this.changerCouleur}> 
                                    <option value="white">Blanc</option> 
                                    <option value="red">Rouge</option> 
                                  </select> 
                                  <h3>Couleur choisie : {this.state.couleur}</h3> 
                                </div> 
                              ); 
                            } 
                          } 
                          export default CouleurFond; 
                          
                          TP2 :COMPOSANT FONCTIONNEL 
                          import React, { useState } from 'react'; 
                          function CouleurFond() { 
                            const [couleur, setCouleur] = useState('white'); 
                            const changerCouleur = (e) => { 
                              setCouleur(e.target.value); 
                              document.body.style.backgroundColor = e.target.value; 
                            }; 
                            return ( 
                              <div> 
                                <select value={couleur} onChange={changerCouleur}> 
                                  <option value="white">Blanc</option> 
                                  <option value="red">Rouge</option> 
                                </select> 
                                <h3>Couleur choisie : {couleur}</h3> 
                              </div> 
                            ); 
                          } 
                          export default CouleurFond;
                        `
                      },
                      {
                        src: '/Exercices/Ex3-serie18.png',
                        alt: 'Exercice 3',
                        code: `
                          TP3:COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          class TodoList extends Component { 
                            constructor(props) { 
                              super(props); 
                              this.state = { 
                                tache: '', 
                                taches: [], 
                              }; 
                            } 
                            ajouterTache = () => { 
                              if (this.state.tache.trim() !== '') { 
                                this.setState((prevState) => ({ 
                                  taches: [...prevState.taches, prevState.tache], tache: '', 
                                })); 
                              } 
                            }; 
                            handleChange = (e) => { 
                              this.setState({ tache: e.target.value }); 
                            }; 
                            render() { 
                              return ( 
                                <div> 
                                  <input 
                                    type="text" 
                                    placeholder="Ajouter une tâche" 
                                    value={this.state.tache} 
                                    onChange={this.handleChange} 
                                  /> 
                                  <button onClick={this.ajouterTache}>Ajouter</button> 
                                  <ul> 
                                    {this.state.taches.map((item, index) => ( 
                                      <li key={index}>{item}</li> 
                                    ))} 
                                  </ul> 
                                </div> 
                              ); 
                            } 
                          } 
                          export default TodoList; 
                          
                          TP3 :COMPOSANT FONCTIONNEL 
                          import React, { useState } from 'react'; 
                          function TodoList() { 
                            const [tache, setTache] = useState(''); 
                            const [taches, setTaches] = useState([]); 
                            const ajouterTache = () => { 
                              if (tache.trim() !== '') { 
                                setTaches([...taches, tache]); 
                                setTache(''); 
                              } 
                            }; 
                            return ( 
                              <div> 
                                <input 
                                  type="text" 
                                  placeholder="Ajouter une tâche" 
                                  value={tache} 
                                  onChange={(e) => setTache(e.target.value)} 
                                /> 
                                <button onClick={ajouterTache}>Ajouter tâche</button> 
                                <ul> 
                                  {taches.map((item, index) => ( 
                                    <li key={index}>{item}</li> 
                                  ))} 
                                </ul> 
                              </div> 
                            ); 
                          } 
                          export default TodoList;
                        `
                      },
                      {
                        src: '/Exercices/Ex4-serie18.png',
                        alt: 'Exercice 4',
                        code: `
                          TP4 :COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          class CalculAge extends Component { 
                            constructor(props) { 
                              super(props); 
                              this.state = { 
                                anneeNaissance: '', 
                                age: null, 
                              }; 
                            } 
                            handleChange = (e) => { 
                              this.setState({ anneeNaissance: e.target.value }); 
                            }; 
                            calculerAge = () => { 
                              const anneeActuelle = new Date().getFullYear(); 
                              const resultat = anneeActuelle - parseInt(this.state.anneeNaissance, 10); 
                              if (!isNaN(resultat) && resultat >= 0) { 
                                this.setState({ age: resultat }); 
                              } else { 
                                this.setState({ age: 'Veuillez saisir une année valide' }); 
                              } 
                            }; 
                            render() { 
                              return ( 
                                <div> 
                                  <input 
                                    type="number" 
                                    placeholder="Entrez votre année de naissance" 
                                    value={this.state.anneeNaissance} 
                                    onChange={this.handleChange} 
                                  /> 
                                  <button onClick={this.calculerAge}>Calculer âge</button> 
                                  {this.state.age !== null && <h3>Votre âge est : {this.state.age}</h3>} 
                                </div> 
                              ); 
                            } 
                          } 
                          export default CalculAge;
                            
                          TP4 :COMPOSANT FONCTIONNEL 
                          import React, { useState } from 'react'; 
                          
                          function CalculAge() { 
                            const [anneeNaissance, setAnneeNaissance] = useState(''); 
                            const [age, setAge] = useState(null); 
                            
                            const calculerAge = () => { 
                              const anneeActuelle = new Date().getFullYear(); 
                              const resultat = anneeActuelle - parseInt(anneeNaissance, 10); 
                              if (!isNaN(resultat) && resultat >= 0) { 
                                setAge(resultat); 
                              } else { 
                                setAge('Veuillez saisir une année valide'); 
                              } 
                            }; 
                            
                            return ( 
                              <div> 
                                <input 
                                  type="number" 
                                  placeholder="Entrez votre année de naissance" 
                                  value={anneeNaissance} 
                                  onChange={(e) => setAnneeNaissance(e.target.value)} 
                                /> 
                                <button onClick={calculerAge}>Calculer âge</button> 
                                {age !== null && <h3>Votre âge est : {age}</h3>} 
                              </div> 
                            ); 
                          } 
                          
                          export default CalculAge;
                        `
                      },
                      {
                        src: '/Exercices/Ex5-serie18.png',
                        alt: 'Exercice 5',
                        code: `
                          TP5 :COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          
                          class BienvenueLangue extends Component { 
                            constructor(props) { 
                              super(props); 
                              this.state = { 
                                langue: 'fr', 
                              }; 
                            } 
                            
                            messages = { 
                              fr: 'Bienvenue', 
                              en: 'Welcome', 
                              es: 'Bienvenido', 
                            }; 
                            
                            handleChange = (e) => { 
                              this.setState({ langue: e.target.value }); 
                            }; 
                            
                            render() { 
                              return ( 
                                <div> 
                                  <select value={this.state.langue} onChange={this.handleChange}> 
                                    <option value="fr">Français</option> 
                                    <option value="en">Anglais</option> 
                                    <option value="es">Espagnol</option> 
                                  </select> 
                                  <h2>{this.messages[this.state.langue]}</h2> 
                                </div> 
                              ); 
                            } 
                          } 
                          
                          export default BienvenueLangue; 
                          
                          TP5 :COMPOSANT FONCTIONNEL 
                          import React, { useState } from 'react'; 
                          function BienvenueLangue() { 
                            const [langue, setLangue] = useState('fr'); 
                            const messages = { 
                              fr: 'Bienvenue', 
                              en: 'Welcome', 
                              es: 'Bienvenido', 
                            }; 
                            const handleChange = (e) => { 
                              setLangue(e.target.value); 
                            }; 
                            return ( 
                              <div> 
                                <select value={langue} onChange={handleChange}> 
                                  <option value="fr">Français</option> 
                                  <option value="en">Anglais</option> 
                                  <option value="es">Espagnol</option> 
                                </select> 
                                <h2>{messages[langue]}</h2> 
                              </div> 
                            ); 
                          } 
                          export default BienvenueLangue; 
                        `
                      },
                      {
                        PdfUrl: '/Exercices/N18.pdf',
                        pdfLink: 'Serie N18.pdf'
                      }
                    ]
                  },
                      
                  {
                    id: 19,
                    images: [
                      {
                        src: '/Exercices/Ex1-serie19.png',
                        alt: 'Exercice 1',
                        code: `
                          TP1 :COMPOSANT DE CLASSE 
                          import React, { Component } from 'react'; 
                          class WelcomeComponent extends Component { 
                              constructor(props) { 
                                  super(props); 
                                  this.state = { 
                                      hasShownWelcome: false 
                                  }; 
                              } 
                              componentDidMount() { 
                                  if (!this.state.hasShownWelcome) { 
                                      alert('Bienvenue!');  
                                      this.setState({ hasShownWelcome: true }); 
                                  } 
                              } 
                              render() { 
                                  return ( 
                                      <div> 
                                          <h1>Bienvenue sur notre site!</h1> 
                                      </div> 
                                  ); 
                              } 
                          } 
                          export default WelcomeComponent; 
                          
                          TP1 :COMPOSANT FONCTIONNEL 
                          import React, { useEffect, useState } from 'react'; 
                          const WelcomeComponent = () => { 
                              const [hasShownWelcome, setHasShownWelcome] = useState(false); 
                              useEffect(() => { 
                                  if (!hasShownWelcome) { 
                                      alert('Bienvenue!');  
                                      setHasShownWelcome(true); 
                                  } 
                              }, [hasShownWelcome]); 
                              return ( 
                                  <div> 
                                      <h1>Bienvenue sur notre site!</h1> 
                                  </div> 
                              ); 
                          }; 
                          export default WelcomeComponent;
                        `
                      },
                      {
                        src: '/Exercices/Ex2-serie19.png',
                        alt: 'Exercice 2',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          const CounterComponent = () => { 
                              const [count, setCount] = useState(0); 
                              useEffect(() => { 
                                  console.log('Le compteur est à : {count}'); //9dam {count} Ajouter $
                              }, [count]); 
                           
                              return ( 
                                  <div> 
                                      <h1>Compteur : {count}</h1> 
                                      <button onClick={() => setCount(count + 1)}>Augmenter</button> 
                                  </div> 
                              ); 
                          }; 
                          export default CounterComponent;
                        `
                      },
                      {
                        src: '/Exercices/Ex3-serie19.png',
                        alt: 'Exercice 3',
                        code: `
                          import React, { Component } from 'react'; 
                          import React, { useState, useEffect } from 'react'; 
                          const CounterWithTitle = () => { 
                              const [count, setCount] = useState(0); 
                              useEffect(() => { 
                                  document.title = 'Vous avez cliqué {count} fois'; //9dam {count} Ajouter $
                              }, [count]); 
                              return ( 
                                  <div> 
                                      <h1>Compteur : {count}</h1> 
                                      <button onClick={() => setCount(count + 1)}>Augmenter</button> 
                                  </div> 
                              ); 
                          }; 
                          export default CounterWithTitle;
                        `
                      },
                      {
                        src: '/Exercices/Ex4-serie19.png',
                        alt: 'Exercice 4',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          const WeatherComponent = () => { 
                              const [weatherData, setWeatherData] = useState(null); 
                              const [loading, setLoading] = useState(true); 
                              useEffect(() => { 
                                  const fetchWeather = async () => { 
                                      try { 
                                          const response = await fetch('https://api.openmeteo.com/v1/forecast?latitude=10&longitude=10&current_weather=true'); 
                                          const data = await response.json(); 
                                          setWeatherData(data.current_weather); 
                                      } catch (error) { 
                                          console.error('Erreur lors de la récupération des données météo :', error); 
                                      } finally { 
                                          setLoading(false); 
                                      } 
                                  }; 
                                  fetchWeather(); 
                              }, []); 
                              if (loading) { 
                                  return <div>Chargement des données météo...</div>; 
                              } 
                              return ( 
                                  <div> 
                                      <h1>Données Météo Actuelles</h1> 
                                      {weatherData ? ( 
                                          <div> 
                                              <p>Température : {weatherData.temperature}°C</p> 
                                              <p>Vitesse du vent : {weatherData.windspeed} km/h</p> 
                                          </div> 
                                      ) : ( 
                                          <p>Aucune donnée disponible.</p> 
                                      )} 
                                  </div> 
                              ); 
                          }; 
                          export default WeatherComponent;
                        `
                      },
                      {
                        src: '/Exercices/Ex5-serie19.png',
                        alt: 'Exercice 5',
                        code: `
                          TP5  
                          import React, { useState, useEffect } from 'react'; 
                          const DataList = () => { 
                              const [data, setData] = useState([]); 
                              useEffect(() => { 
                                  fetch('data.json') 
                                      .then(response => response.json()) 
                                      .then(data => setData(data)) 
                                      .catch(error => console.error('Erreur de chargement des données', error)); 
                              }, []); 
                              return ( 
                                  <div> 
                                      <h1>Liste des données</h1> 
                                      <ul> 
                                          {data.map((item, index) => ( 
                                              <li key={index}>{item.name}</li> 
                                              <li key={index}>{item.price}</li> 
                                          ))} 
                                      </ul> 
                                  </div> 
                              ); 
                          }; 
                          export default DataList;
                  
                          Data.json :
                          [
                              {
                                  "id": 1,
                                  "name": "Produit A",
                                  "price": 25.99
                              },
                              {
                                  "id": 2,
                                  "name": "Produit B",
                                  "price": 15.99
                              },
                              {
                                  "id": 3,
                                  "name": "Produit C",
                                  "price": 45.50
                              },
                              {
                                  "id": 4,
                                  "name": "Produit D",
                                  "price": 30.00
                              },
                          ]
                        `
                      },
                      {
                        PdfUrl: '/Exercices/N19.pdf',
                        pdfLink: 'Serie N19.pdf'
                      }
                    ]
                  },
                  {
                    id: 20,
                    images: [
                      {
                        src: '/Exercices/Ex1-serie20.png',
                        alt: 'Exercice 1',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          const WeatherWidget = () => { 
                              const [weatherData, setWeatherData] = useState(null); 
                              const [error, setError] = useState(null); 
                              useEffect(() => { 
                                  const fetchWeather = async () => { 
                                      try { 
                                          const response = await fetch( 
                                              'https://api.openmeteo.com/v1/forecast?latitude=34.948&longitude=3.433&current_weather=true' 
                                          ); 
                                          if (!response.ok) { 
                                              throw new Error('Erreur lors du chargement des données météo.'); 
                                          } 
                                          const data = await response.json(); 
                                          setWeatherData(data.current_weather); 
                                      } catch (err) { 
                                          setError(err.message); 
                                      } 
                                  }; 
                                  fetchWeather(); 
                              }, []); 
                              return ( 
                                  <div style={{ 
                                      backgroundColor: '#a8d8f0', 
                                      padding: '20px', 
                                      borderRadius: '10px', 
                                      textAlign: 'center', 
                                      color: '#fff', 
                                      fontFamily: 'Arial, sans-serif' 
                                  }}> 
                                      <h1>شويردلا</h1> 
                                      {error ? ( 
                                          <p>{error}</p> 
                                      ) : weatherData ? ( 
                                          <> 
                                              <h2>{weatherData.temperature}°C</h2> 
                                              <p>Vitesse du vent : {weatherData.windspeed} km/h</p> 
                                          </> 
                                      ) : ( 
                                          <p>Chargement...</p> 
                                      )} 
                                  </div> 
                              ); 
                          }; 
                          export default WeatherWidget;
                        `
                      },
                      {
                        src: '/Exercices/Ex2-serie20.png',
                        alt: 'Exercice 2',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          const QuranVerse = ({ verseNumber }) => { 
                              const [verseData, setVerseData] = useState(null); 
                              const [error, setError] = useState(null); 
                           
                              useEffect(() => { 
                                  const fetchVerse = async () => { 
                                      try { 
                                          const response = await fetch( 
                                              'https://api.alquran.cloud/v1/ayah/{40}/ar' //9dam {40} Ajouter $
                                          ); 
                                          if (!response.ok) { 
                                              throw new Error('Erreur lors du chargement du verset.'); 
                                          } 
                                          const data = await response.json(); 
                                          setVerseData(data.data); 
                                      } catch (err) { 
                                          setError(err.message); 
                                      } 
                                  }; 
                           
                                  fetchVerse(); 
                              }, [verseNumber]); 
                           
                              return ( 
                                  <div style={{ 
                                      backgroundColor: '#f9f9f9', 
                                      padding: '20px', 
                                      borderRadius: '10px', 
                                      textAlign: 'center', 
                                      fontFamily: 'Arial, sans-serif', 
                                      direction: 'rtl', 
                                      color: '#333' 
                                  }}> 
                                      {error ? ( 
                                          <p>{error}</p> 
                                      ) : verseData ? ( 
                                          <> 
                                              <h1>ةروس {verseData.surah.name} - ةيآ {verseData.numberInSurah}</h1> 
                                              <p>{verseData.text}</p> 
                                          </> 
                                      ) : ( 
                                          <p>ليمحتلا يراج...</p> 
                                      )} 
                                  </div> 
                              ); 
                          }; 
                          export default QuranVerse;
                        `
                      },
                      {
                        src: '/Exercices/Ex3-serie20.png',
                        alt: 'Exercice 3',
                        code: `
                          TP3 (avec UseState): 
                          import React, { useState } from 'react'; 
                          const Counter = () => { 
                              const [count, setCount] = useState(0); 
                              return ( 
                                  <div style={{ 
                                      textAlign: 'center', 
                                      backgroundColor: '#e3f2fd', 
                                      padding: '20px', 
                                      borderRadius: '10px', 
                                      fontFamily: 'Arial, sans-serif' 
                                  }}> 
                                      <h1>Compteur : {count}</h1> 
                                      <div> 
                                          <button 
                                              onClick={() => setCount(count + 1)} 
                                              style={{ 
                                                  margin: '5px', 
                                                  padding: '10px 20px', 
                                                  backgroundColor: '#1976d2', 
                                                  color: '#fff', 
                                                  border: 'none', 
                                                  borderRadius: '5px', 
                                                  cursor: 'pointer', 
                                                  fontSize: '1rem' 
                                              }} 
                                          > 
                                              Incrémenter 
                                          </button> 
                                          <button 
                                              onClick={() => setCount(count - 1)} 
                                              style={{ 
                                                  margin: '5px', 
                                                  padding: '10px 20px', 
                                                  backgroundColor: '#1976d2', 
                                                  color: '#fff', 
                                                  border: 'none', 
                                                  borderRadius: '5px', 
                                                  cursor: 'pointer', 
                                                  fontSize: '1rem' 
                                              }} 
                                          > 
                                              Décrémenter 
                                          </button> 
                                          <button 
                                              onClick={() => setCount(0)} 
                                              style={{ 
                                                  margin: '5px', 
                                                  padding: '10px 20px', 
                                                  backgroundColor: '#1976d2', 
                                                  color: '#fff', 
                                                  border: 'none', 
                                                  borderRadius: '5px', 
                                                  cursor: 'pointer', 
                                                  fontSize: '1rem' 
                                              }} 
                                          > 
                                              Réinitialiser 
                                          </button> 
                                      </div> 
                                  </div> 
                              ); 
                          }; 
                          export default Counter; 
                        
                          TP3 (avec UseReducer): 
                          import React, { useReducer } from 'react'; 
                          const counterReducer = (state, action) => { 
                              switch (action.type) { 
                                  case 'increment': 
                                      return state + 1; 
                                  case 'decrement': 
                                      return state - 1; 
                                  case 'reset': 
                                      return 0; 
                                  default: 
                                      throw new Error('Action inconnue'); 
                              } 
                          }; 
                          const CounterWithReducer = () => { 
                              const [count, dispatch] = useReducer(counterReducer, 0); 
                              return ( 
                                  <div style={{ 
                                      textAlign: 'center', 
                                      backgroundColor: '#e3f2fd', 
                                      padding: '20px', 
                                      borderRadius: '10px', 
                                      fontFamily: 'Arial, sans-serif' 
                                  }}> 
                                      <h1>Compteur : {count}</h1> 
                                      <div> 
                                          <button 
                                              onClick={() => dispatch({ type: 'increment' })} 
                                              style={{ 
                                                  margin: '5px', 
                                                  padding: '10px 20px', 
                                                  backgroundColor: '#1976d2', 
                                                  color: '#fff', 
                                              }} 
                                          >Incrémenter</button> 
                                          <button 
                                              onClick={() => dispatch({ type: 'decrement' })} 
                                              style={{ 
                                                  margin: '5px', 
                                                  padding: '10px 20px', 
                                                  backgroundColor: '#1976d2', 
                                                  color: '#fff', 
                                              }} 
                                          >Décrémenter</button> 
                                          <button 
                                              onClick={() => dispatch({ type: 'reset' })} 
                                              style={{ 
                                                  margin: '5px', 
                                                  padding: '10px 20px', 
                                                  backgroundColor: '#1976d2', 
                                                  color: '#fff', 
                                              }} 
                                          >Réinitialiser</button> 
                                      </div> 
                                  </div> 
                              ); 
                          }; 
                          export default CounterWithReducer;
                        `
                      },
                      {
                        src: '/Exercices/Ex4-serie20.png',
                        alt: 'Exercice 4',
                        code: `
                          import React, { useReducer } from 'react'; 
                            
                          const actions = { 
                              TOGGLE_THEME: 'TOGGLE_THEME', 
                              RESET_THEME: 'RESET_THEME', 
                          }; 
                            
                          const themeReducer = (state, action) => { 
                              switch (action.type) { 
                                  case actions.TOGGLE_THEME: 
                                      return state === 'clair' ? 'sombre' : 'clair'; 
                                  case actions.RESET_THEME: 
                                      return 'clair'; 
                                  default: 
                                      return state; 
                              } 
                          }; 
                            
                          const App = () => { 
                              const [theme, dispatch] = useReducer(themeReducer, 'clair'); 
                            
                              return ( 
                                  <div 
                                      style={{ 
                                          backgroundColor: theme === 'clair' ? '#f9f9f9' : '#333', 
                                          color: theme === 'clair' ? '#000' : '#fff', 
                                          textAlign: 'center', 
                                          minHeight: '100vh', 
                                          padding: '20px', 
                                      }} 
                                  > 
                                      <h1>Changement de Thème</h1> 
                                      <p>Le thème actuel est {theme === 'clair' ? 'Clair' : 'Sombre'}</p> 
                                      <button 
                                          onClick={() => dispatch({ type: actions.TOGGLE_THEME })} 
                                          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }} 
                                      > 
                                          Basculer le Thème 
                                      </button> 
                                      <button 
                                          onClick={() => dispatch({ type: actions.RESET_THEME })} 
                                          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }} 
                                      > 
                                          Réinitialiser le Thème 
                                      </button> 
                                  </div> 
                              ); 
                          }; 
                            
                          export default App;
                        `
                      },
                      { PdfUrl: '/Exercices/N20.pdf', pdfLink: 'Serie N20.pdf' }
                    ]
                  },  
                  {
                    id: 21,
                    images: [
                      {
                        src: '/Exercices/Ex1-serie21.png',
                        alt: 'Exercice 1',
                        code: `
                          import React, { useReducer } from 'react'; 
                          
                          const actions = { 
                              VOTE_POUR: 'VOTE_POUR', 
                              VOTE_CONTRE: 'VOTE_CONTRE', 
                              RESET: 'RESET', 
                          }; 
                          
                          const voteReducer = (state, action) => { 
                              switch (action.type) { 
                                  case actions.VOTE_POUR: 
                                      return { ...state, pour: state.pour + 1 }; 
                                  case actions.VOTE_CONTRE: 
                                      return { ...state, contre: state.contre + 1 }; 
                                  case actions.RESET: 
                                      return { pour: 0, contre: 0 }; 
                                  default: 
                                      return state; 
                              } 
                          }; 
                          
                          const calculatePercentage = (part, total) => (total === 0 ? 0 : ((part / total) * 100).toFixed(2)); 
                          
                          const VotingSystem = () => { 
                              const [state, dispatch] = useReducer(voteReducer, { pour: 0, contre: 0 }); 
                              const totalVotes = state.pour + state.contre; 
                              const pourcentagePour = calculatePercentage(state.pour, totalVotes); 
                              const pourcentageContre = calculatePercentage(state.contre, totalVotes); 
                              return ( 
                                  <div 
                                      style={{ 
                                          backgroundColor: '#f1f8ff', 
                                          color: '#333', 
                                          textAlign: 'center', 
                                          minHeight: '100vh', 
                                          padding: '20px', 
                                      }} 
                                  > 
                                      <h1>Système de Vote</h1> 
                                      <p>Total de votes : {totalVotes}</p> 
                                      <p>Pourcentage "Pour" : {pourcentagePour}%</p> 
                                      <p>Pourcentage "Contre" : {pourcentageContre}%</p> 
                                      <button 
                                          onClick={() => dispatch({ type: actions.VOTE_POUR })} 
                                          style={{ 
                                              margin: '10px', 
                                              padding: '10px 20px', 
                                              fontSize: '16px', 
                                              backgroundColor: '#4CAF50', 
                                              color: 'white', 
                                              border: 'none', 
                                              borderRadius: '5px', 
                                          }} 
                                      > 
                                          Vote "Pour" 
                                      </button> 
                                      <button 
                                          onClick={() => dispatch({ type: actions.VOTE_CONTRE })} 
                                          style={{ 
                                              margin: '10px', 
                                              padding: '10px 20px', 
                                              fontSize: '16px', 
                                              backgroundColor: '#4CAF50', 
                                              color: 'white', 
                                              border: 'none', 
                                              borderRadius: '5px', 
                                          }} 
                                      > 
                                          Vote "Contre" 
                                      </button> 
                                      <button 
                                          onClick={() => dispatch({ type: actions.RESET })} 
                                          style={{ 
                                              margin: '10px', 
                                              padding: '10px 20px', 
                                              fontSize: '16px', 
                                              backgroundColor: '#4CAF50', 
                                              color: 'white', 
                                              border: 'none', 
                                              borderRadius: '5px', 
                                          }} 
                                      > 
                                          Réinitialiser les Votes 
                                      </button> 
                                  </div> 
                              ); 
                          }; 
                          
                          export default VotingSystem;
                        `
                      },
                      {
                        src: '/Exercices/Ex2-serie21.png',
                        alt: 'Exercice 2',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          import axios from 'axios'; 
                          
                          const WeatherComponent = () => { 
                              const [weatherData, setWeatherData] = useState(null); 
                              const [error, setError] = useState(null); 
                          
                              useEffect(() => { 
                                  const fetchWeatherData = async () => { 
                                      try { 
                                          const latitude = 10; 
                                          const longitude = 10; 
                                          const response = await axios.get( 
                                              \`https://api.open-meteo.com/v1/forecast?latitude=\${latitude}&longitude=\${longitude}&current_weather=true\`
                                          ); 
                                          setWeatherData(response.data.current_weather); 
                                      } catch (err) { 
                                          setError('Erreur lors de la récupération des données météo.'); 
                                      } 
                                  }; 
                                  
                                  fetchWeatherData(); 
                              }, []); 
                          
                              return ( 
                                  <div 
                                      style={{ 
                                          backgroundColor: '#f9f9f9', 
                                          color: '#333', 
                                          padding: '20px', 
                                          textAlign: 'center', 
                                          borderRadius: '5px', 
                                          maxWidth: '400px', 
                                          margin: '20px auto', 
                                          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
                                      }} 
                                  > 
                                      <h1>Météo actuelle :</h1> 
                                      {error ? ( 
                                          <p style={{ color: 'red' }}>{error}</p> 
                                      ) : weatherData ? ( 
                                          <ul style={{ listStyleType: 'none', padding: 0 }}> 
                                              <li>Température : {weatherData.temperature}°C</li> 
                                              <li>Vitesse du vent : {weatherData.windspeed} km/h</li> 
                                          </ul> 
                                      ) : ( 
                                          <p>Chargement des données...</p> 
                                      )} 
                                  </div> 
                              ); 
                          }; 
                          
                          export default WeatherComponent;
                        `
                      },
                      {
                        src: '/Exercices/Ex3-serie21.png',
                        alt: 'Exercice 3',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          import axios from 'axios'; 
                      
                          function AyahDisplay() { 
                            const [ayah, setAyah] = useState(null); 
                            const [loading, setLoading] = useState(true); 
                            const [error, setError] = useState(null); 
                      
                            useEffect(() => { 
                              const fetchAyah = async () => { 
                                try { 
                                  const response = await axios.get('https://api.alquran.cloud/v1/ayah/40/ar'); // Fetch Ayah 40 from the Quran API
                                  setAyah(response.data.data); 
                                  setLoading(false); 
                                } catch (err) { 
                                  setError(err); 
                                  setLoading(false); 
                                } 
                              }; 
                      
                              fetchAyah(); 
                            }, []); 
                      
                            if (loading) { 
                              return <div>Loading Ayah...</div>; 
                            } 
                      
                            if (error) { 
                              return <div>Error loading Ayah: {error.message}</div>; 
                            } 
                      
                            if (!ayah) { 
                                return <div>No data available</div>; 
                            } 
                      
                            return ( 
                              <div className="ayah-container"> 
                                <h3>{ayah.surah.name} - Ayah {ayah.numberInSurah}</h3> 
                                <p className="ayah-text">{ayah.text}</p> 
                                <p>Ayah Number: {ayah.number}</p> 
                                <p>Surah Number: {ayah.numberInSurah}</p> 
                                <p>Juz: {ayah.juz}</p> 
                                <p>Page: {ayah.page}</p> 
                                <p>Ruku: {ayah.ruku}</p> 
                                <p>Manzil: {ayah.manzil}</p> 
                              </div> 
                            ); 
                          } 
                      
                          export default AyahDisplay;
                        `
                      },
                      {
                        src: '/Exercices/Ex4-serie21.png',
                        alt: 'Exercice 4',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          import axios from 'axios'; 
                      
                          function ConseilDuJour() { 
                            const [conseil, setConseil] = useState(null); 
                            const [loading, setLoading] = useState(true); 
                            const [error, setError] = useState(null); 
                      
                            useEffect(() => { 
                              const fetchConseil = async () => { 
                                try { 
                                  const response = await axios.get('https://api.adviceslip.com/advice'); 
                                  setConseil(response.data.slip.advice); 
                                  setLoading(false); 
                                } catch (err) { 
                                  setError(err); 
                                  setLoading(false); 
                                } 
                              }; 
                      
                              fetchConseil(); 
                            }, []); 
                      
                            if (loading) { 
                              return <div>Loading advice...</div>; 
                            } 
                      
                            if (error) { 
                              return <div>Error loading advice: {error.message}</div>; 
                            } 
                      
                            return ( 
                              <div className="conseil-du-jour"> 
                                <h2>Conseil du Jour</h2> 
                                <p>"{conseil}"</p> 
                              </div> 
                            ); 
                          } 
                      
                          export default ConseilDuJour;
                        `
                      },
                      {
                        src: '/Exercices/Ex5-serie21.png',
                        alt: 'Exercice 5',
                        code: `
                          import React, { useState, useEffect } from 'react'; 
                          import axios from 'axios'; 
                      
                          function Pays() { 
                            const [pays, setPays] = useState([]); 
                            const [loading, setLoading] = useState(true); 
                            const [error, setError] = useState(null); 
                            const [searchTerm, setSearchTerm] = useState(''); 
                      
                            useEffect(() => { 
                              const fetchPays = async () => { 
                                try { 
                                  const response = await axios.get('https://restcountries.com/v3.1/all'); 
                                  setPays(response.data); 
                                  setLoading(false); 
                                } catch (err) { 
                                  setError(err); 
                                  setLoading(false); 
                                } 
                              }; 
                      
                              fetchPays(); 
                            }, []); 
                      
                            const filteredPays = pays.filter(pays => 
                              pays.name.common.toLowerCase().includes(searchTerm.toLowerCase()) 
                            ); 
                      
                            if (loading) { 
                              return <div>Loading countries...</div>; 
                            } 
                      
                            if (error) { 
                              return <div>Error loading countries: {error.message}</div>; 
                            } 
                      
                            return ( 
                              <div className="pays-container"> 
                                <input 
                                  type="text" 
                                  placeholder="Search a country..." 
                                  onChange={e => setSearchTerm(e.target.value)} 
                                  value={searchTerm} 
                                /> 
                                <div className="pays-list"> 
                                  {filteredPays.map((pays, index) => ( 
                                    <div key={index} className="pays-card"> 
                                      <h2>{pays.name.common}</h2> 
                                      <p>Capital: {pays.capital ? pays.capital[0] : "N/A"}</p> 
                                      <img src={pays.flags.png} alt={'Flag of ' + pays.name.common} width="100" /> 
                                      <p>Population: {pays.population.toLocaleString()}</p> 
                                      <p>Region: {pays.region}</p> 
                                      <p>Subregion: {pays.subregion ? pays.subregion : "N/A"}</p> 
                                      <p>Continents: {pays.continents.join(', ')}</p> 
                                    </div> 
                                  ))} 
                                </div> 
                              </div> 
                            ); 
                          } 
                      
                          export default Pays;
                        `
                      },
                      { 
                        PdfUrl: '/Exercices/N21.pdf', 
                        pdfLink: 'Serie N21.pdf' 
                      },
                    ]
                  },
          {
              id: 22,
              images: [
                {
                  src: '/Exercices/Ex1-serie22.png',
                  alt: 'Exercice 1',
                  code: `
                    // Store setup
                    import { legacy_createStore as createStore } from 'redux';
                    import reducer from './reducer';
                
                    const store = createStore(reducer);
                    export default store;
                
                    // Actions
                    export const increment = () => ({ 
                      type: 'INCREMENT',
                    });
                    export const decrement = () => ({ 
                      type: 'DECREMENT',
                    });
                    export const reset = () => ({ 
                      type: 'RESET',
                    });
                
                    // Reducer
                    const initialState = 0;
                    const reducer = (state = initialState, action) => {
                      switch (action.type) {
                        case 'INCREMENT':
                          return state + 1;
                        case 'DECREMENT':
                          return state - 1;
                        case 'RESET':
                          return 0;
                        default:
                          return initialState;
                      }
                    };
                    export default reducer;
                
                    // App Component
                    import React from 'react';
                    import { useSelector, useDispatch } from 'react-redux';
                    import { increment, decrement, reset } from './redux/actions';
                
                    function App() {
                      const counter = useSelector((state) => state);
                      const dispatch = useDispatch();
                
                      return (
                        <div className="App">
                          <h1>Compteur : {counter}</h1>
                          <div>
                            <button onClick={() => dispatch(increment())}>Incrémenter</button>
                            <button onClick={() => dispatch(decrement())}>Décrémenter</button>
                            <button onClick={() => dispatch(reset())}>Réinitialiser</button>
                          </div>
                        </div>
                      );
                    }
                    export default App;
                
                    // Main entry point
                    import React from 'react';
                    import ReactDOM from 'react-dom';
                    import { Provider } from 'react-redux';
                    import store from './redux/store.jsx';
                    import App from './App';
                
                    ReactDOM.render(
                      <Provider store={store}>
                        <App />
                      </Provider>,
                      document.getElementById('root')
                    );
                  `
                },
                {
                  src: '/Exercices/Ex2-serie22.png',
                  alt: 'Exercice 2',
                  code: `
                    // Store setup
                    import { legacy_createStore as createStore } from 'redux';
                    import reducer from './reducer';
                
                    const store = createStore(reducer);
                    export default store;
                
                    // Reducer
                    const initialState = '';
                    const reducer = (state = initialState, action) => {
                      switch (action.type) {
                        case 'UPDATE_MESSAGE':
                          return action.payload;
                        case 'RESET_MESSAGE':
                          return '';
                        default:
                          return state;
                      }
                    };
                    export default reducer;
                
                    // Actions
                    export const updateMessage = (newMessage) => ({
                      type: 'UPDATE_MESSAGE',
                      payload: newMessage,
                    });
                    export const resetMessage = () => ({
                      type: 'RESET_MESSAGE',
                    });
                
                    // App Component
                    import React, { useState } from 'react';
                    import { useSelector, useDispatch } from 'react-redux';
                    import { updateMessage, resetMessage } from './redux/actions';
                
                    function App() {
                      const [inputMessage, setInputMessage] = useState('');
                      const message = useSelector((state) => state);
                      const dispatch = useDispatch();
                
                      const handleChange = (event) => {
                        setInputMessage(event.target.value);
                      };
                
                      const handleUpdate = () => {
                        dispatch(updateMessage(inputMessage));
                      };
                
                      const handleReset = () => {
                        dispatch(resetMessage());
                        setInputMessage('');
                      };
                
                      return (
                        <div className="App">
                          <h1>Message : {message}</h1>
                          <input
                            type="text"
                            value={inputMessage}
                            onChange={handleChange}
                            placeholder="Entrez un message"
                          />
                          <button onClick={handleUpdate}>Modifier le message</button>
                          <button onClick={handleReset}>Réinitialiser le message</button>
                        </div>
                      );
                    }
                    export default App;
                  `
                },
                {
                  src: '/Exercices/Ex3-serie22.png',
                  alt: 'Exercice 3',
                  code: `
                    // Store setup
                    import { legacy_createStore as createStore } from 'redux';
                    import reducer from './reducer';
                
                    const store = createStore(reducer);
                    export default store;
                
                    // Reducer
                    const initialState = { names: [] };
                    const reducer = (state = initialState, action) => {
                      switch (action.type) {
                        case 'ADD_NAME':
                          return { ...state, names: [...state.names, action.payload] };
                        case 'REMOVE_NAME':
                          return { ...state, names: state.names.filter((_, idx) => idx !== action.payload) };
                        default:
                          return state;
                      }
                    };
                    export default reducer;
                
                    // Actions
                    export const addName = (name) => ({
                      type: 'ADD_NAME',
                      payload: name,
                    });
                    export const removeName = (index) => ({
                      type: 'REMOVE_NAME',
                      payload: index,
                    });
                
                    // App Component
                    import React, { useState } from 'react';
                    import { useSelector, useDispatch } from 'react-redux';
                    import { Provider } from 'react-redux';
                    import store from './redux/store';
                    import { addName, removeName } from './redux/actions';
                
                    const AppContent = () => {
                      const [name, setName] = useState('');
                      const names = useSelector((state) => state.names);
                      const dispatch = useDispatch();
                
                      const handleAdd = () => {
                        if (name.trim()) {
                          dispatch(addName(name));
                          setName('');
                        }
                      };
                
                      const handleRemove = (index) => {
                        dispatch(removeName(index));
                      };
                
                      return (
                        <div>
                          <h1>Liste des Noms</h1>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <button onClick={handleAdd}>Ajouter Nom</button>
                          <ul>
                            {names.map((name, index) => (
                              <li key={index}>
                                {name} <button onClick={() => handleRemove(index)}>Supprimer</button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    };
                
                    const App = () => (
                      <Provider store={store}>
                        <AppContent />
                      </Provider>
                    );
                
                    export default App;
                  `
                },
                {
                  src: '/Exercices/Ex4-serie22.png',
                  alt: 'Exercice 4',
                  code: `
                    // Store setup
                    import { legacy_createStore as createStore } from 'redux';
                    import reducer from './reducer';
                    const store = createStore(reducer);
                    export default store;
                
                    // Reducer
                    const initialState = { 
                      message: 'Bonjour, Redux!',   
                      compteur: 0                 
                    };
                
                    const SET_MESSAGE = 'SET_MESSAGE';
                    const INCREMENT_COMPTEUR = 'INCREMENT_COMPTEUR';
                    const DECREMENT_COMPTEUR = 'DECREMENT_COMPTEUR';
                
                    function reducer(state = initialState, action) {
                      switch (action.type) {
                        case SET_MESSAGE:       
                          return { ...state, message: action.payload }; 
                        case INCREMENT_COMPTEUR: 
                          return { ...state, compteur: state.compteur + 1 }; 
                        case DECREMENT_COMPTEUR: 
                          return { ...state, compteur: state.compteur - 1 };
                        default: 
                          return state;
                      }
                    }
                    export default reducer;
                
                    // Actions
                    export const setMessage = (message) => ({ 
                      type: 'SET_MESSAGE', 
                      payload: message 
                    });
                    export const incrementCompteur = () => ({ 
                      type: 'INCREMENT_COMPTEUR' 
                    });
                    export const decrementCompteur = () => ({ 
                      type: 'DECREMENT_COMPTEUR' 
                    });
                
                    // App Component
                    import React from 'react';
                    import ReactDOM from 'react-dom';
                    import { Provider } from 'react-redux';
                    import store from './store';
                    import MessageComponent from './MessageComponent';
                    import CompteurComponent from './CompteurComponent';
                
                    ReactDOM.render(
                      <Provider store={store}>
                        <MessageComponent />
                        <CompteurComponent />
                      </Provider>,
                      document.getElementById('root')
                    );
                
                    // MessageComponent.js
                    import React, { useState } from 'react';
                    import { useSelector, useDispatch } from 'react-redux';
                    import { setMessage } from './actions';
                
                    const MessageComponent = () => {
                      const message = useSelector((state) => state.message); // Access message from store
                      const dispatch = useDispatch();
                      const [newMessage, setNewMessage] = useState('');
                
                      const handleChangeMessage = () => {
                        dispatch(setMessage(newMessage)); // Update message in the store
                      };
                
                      return (
                        <div>
                          <h1>{message}</h1>
                          <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Nouveau message"
                          />
                          <button onClick={handleChangeMessage}>Modifier le message</button>
                        </div>
                      );
                    };
                    export default MessageComponent;
                
                    // CompteurComponent.js
                    import React from 'react';
                    import { useSelector, useDispatch } from 'react-redux';
                    import { incrementCompteur, decrementCompteur } from './actions';
                
                    const CompteurComponent = () => {
                      const compteur = useSelector((state) => state.compteur); // Access counter from store
                      const dispatch = useDispatch();
                
                      return (
                        <div>
                          <h2>Compteur: {compteur}</h2>
                          <button onClick={() => dispatch(incrementCompteur())}>Incrémenter</button>
                          <button onClick={() => dispatch(decrementCompteur())}>Décrémenter</button>
                        </div>
                      );
                    };
                
                    export default CompteurComponent;
                  `
                },
                { PdfUrl: '/Exercices/N22.pdf', pdfLink: 'Serie N22.pdf' }
              ]
            }, 
          {
              id: 23,
              images: [
                {
                  src: '/Exercices/Ex1-serie23.png',
                  alt: 'Exercice 1',
                  code: `
                    // Store setup
                    import { legacy_createStore as createStore } from 'redux'; 
                    import reducer from './reducer'; 
                    const store = createStore(reducer); 
                    export default store;
                
                    // Reducer
                    const initialState = { 
                      users: [], 
                      selectedUser: null, 
                    };
                
                    const reducer = (state = initialState, action) => { 
                      switch (action.type) { 
                        case 'ADD_USER': 
                          return { 
                            ...state, 
                            users: [...state.users, { ...action.payload, id: Date.now() }], 
                          }; 
                        case 'REMOVE_USER': 
                          return { 
                            ...state, 
                            users: state.users.filter((user) => user.id !== action.payload), 
                          }; 
                        case 'SELECT_USER': 
                          return { 
                            ...state, 
                            selectedUser: state.users.find((user) => user.id === action.payload), 
                          }; 
                        default: 
                          return state; 
                      } 
                    }; 
                    export default reducer;
                
                    // Actions
                    export const addUser = (user) => ({ 
                      type: 'ADD_USER', 
                      payload: user, 
                    }); 
                    export const removeUser = (id) => ({ 
                      type: 'REMOVE_USER', 
                      payload: id, 
                    }); 
                    export const selectUser = (id) => ({ 
                      type: 'SELECT_USER', 
                      payload: id, 
                    });
                
                    // App Component
                    import React, { useState } from 'react'; 
                    import { useSelector, useDispatch } from 'react-redux'; 
                    import { addUser, removeUser, selectUser } from './redux/actions'; 
                
                    const App = () => { 
                      const [name, setName] = useState(''); 
                      const [email, setEmail] = useState(''); 
                      const users = useSelector((state) => state.users); 
                      const selectedUser = useSelector((state) => state.selectedUser); 
                      const dispatch = useDispatch(); 
                
                      const handleAddUser = () => { 
                        if (name && email) { 
                          dispatch(addUser({ name, email })); 
                          setName(''); 
                          setEmail(''); 
                        } 
                      }; 
                
                      const handleRemoveUser = (id) => { 
                        dispatch(removeUser(id)); 
                      }; 
                
                      const handleSelectUser = (id) => { 
                        dispatch(selectUser(id)); 
                      }; 
                
                      return ( 
                        <div> 
                          <h1>Gestion des Utilisateurs</h1> 
                          <div> 
                            <input 
                              type="text" 
                              placeholder="Nom" 
                              value={name} 
                              onChange={(e) => setName(e.target.value)} 
                            /> 
                            <input 
                              type="email" 
                              placeholder="Email" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)} 
                            /> 
                            <button onClick={handleAddUser}>Ajouter Utilisateur</button> 
                          </div> 
                          <h2>Liste des Utilisateurs</h2> 
                          <ul> 
                            {users.map((user) => ( 
                              <li key={user.id}> 
                                {user.name} ({user.email}) 
                                <button onClick={() => handleSelectUser(user.id)}>Détails</button> 
                                <button onClick={() => handleRemoveUser(user.id)}>Supprimer</button> 
                              </li> 
                            ))} 
                          </ul> 
                          {selectedUser && ( 
                            <div> 
                              <h2>Détails de l'Utilisateur</h2> 
                              <p><strong>Nom:</strong> {selectedUser.name}</p> 
                              <p><strong>Email:</strong> {selectedUser.email}</p> 
                            </div> 
                          )} 
                        </div> 
                      ); 
                    }; 
                    export default App;
                  `
                },
                {
                  src: '/Exercices/Ex2-serie23.png',
                  alt: 'Exercice 2',
                  code: `
                    // Store setup
                    import { legacy_createStore as createStore } from 'redux'; 
                    import reducer from './reducer'; 
                    const store = createStore(reducer); 
                    export default store;
                
                    // Reducer
                    const initialState = { 
                      cart: [], 
                      total: 0, 
                    };
                
                    const reducer = (state = initialState, action) => { 
                      switch (action.type) { 
                        case 'ADD_ITEM': 
                          return { 
                            ...state, 
                            cart: [...state.cart, action.payload], 
                            total: state.total + action.payload.price, 
                          }; 
                        case 'REMOVE_ITEM': 
                          const itemToRemove = state.cart.find((item) => item.id === action.payload); 
                          return { 
                            ...state, 
                            cart: state.cart.filter((item) => item.id !== action.payload), 
                            total: state.total - (itemToRemove ? itemToRemove.price : 0), 
                          }; 
                        default: 
                          return state; 
                      } 
                    }; 
                    export default reducer;
                
                    // Actions
                    export const addItem = (item) => ({ 
                      type: 'ADD_ITEM', 
                      payload: item, 
                    }); 
                    export const removeItem = (id) => ({ 
                      type: 'REMOVE_ITEM', 
                      payload: id, 
                    });
                
                    // App Component
                    import React, { useState } from 'react'; 
                    import { useSelector, useDispatch } from 'react-redux'; 
                    import { addItem, removeItem } from './redux/actions'; 
                
                    const App = () => { 
                      const [itemName, setItemName] = useState(''); 
                      const [itemPrice, setItemPrice] = useState(''); 
                      const cart = useSelector((state) => state.cart); 
                      const total = useSelector((state) => state.total); 
                      const dispatch = useDispatch(); 
                
                      const handleAddItem = () => {    
                        if (itemName && itemPrice) { 
                          dispatch(addItem({ id: Date.now(), name: itemName, price: parseFloat(itemPrice) })); 
                          setItemName(''); 
                          setItemPrice(''); 
                        } 
                      }; 
                
                      const handleRemoveItem = (id) => { 
                        dispatch(removeItem(id)); 
                      }; 
                
                      return ( 
                        <div> 
                          <h1>Panier d'Achat</h1> 
                          <div> 
                            <input type="text" placeholder="Nom de l'article" 
                                   value={itemName} 
                                   onChange={(e) => setItemName(e.target.value)} 
                            />   
                            <input type="number" placeholder="Prix de l'article" 
                                   value={itemPrice} 
                                   onChange={(e) => setItemPrice(e.target.value)} 
                            /> 
                            <button onClick={handleAddItem}>Ajouter au Panier</button> 
                          </div> 
                          <h2>Articles dans le Panier</h2> 
                          <ul> 
                            {cart.map((item) => ( 
                              <li key={item.id}> 
                                {item.name} - {item.price.toFixed(2)} 
                                <button onClick={() => handleRemoveItem(item.id)}>Supprimer</button> 
                              </li> 
                            ))} 
                          </ul> 
                          <h2>Total : {total.toFixed(2)}</h2> 
                        </div> 
                      ); 
                    }; 
                    export default App;
                  `
                },
                { PdfUrl: '/Exercices/N23.pdf', pdfLink: 'Serie N23.pdf' }
              ]
            }
          ];
      
const handleDownload = (fileUrl, fileName) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileName;
  link.click();
  link.remove(); 
};

const handleImageToPdf = (imageSrc) => {
  if (!imageSrc) {
      alert("Invalid image source!");
      return;
  }

  const doc = new jsPDF();
  doc.addImage(imageSrc, 'PNG', 10, 10, 180, 160);
  doc.save('image.pdf');
};

const filteredProjects = Project.filter(project =>
  (selectID ? project.id === parseInt(selectID) : true)
);

const filteredImageAlts = selectID
  ? filteredProjects.flatMap(project => project.images.map(image => image.alt))
  : [];

const filteredImages = filteredProjects.map(project => ({
  ...project,
  images: project.images.filter(image =>
      (selectedImage ? image.alt === selectedImage : true)
  )
}));

const handleImageClick = (src, code) => {
  setZoomedImage(src);
  setIsZoomed(true);
};

const coregeFalse = () => {
  setIsCorrectionVisible('');
};

const handleCloseZoom = () => {
  setIsZoomed(false);
};

const handleCorrectionClick = (image) => {
  setSelectedCorrection(image.code);  
  setIsCorrectionVisible(true);
};

const handleImageChange = (e) => {
  setSelectedImage(e.target.value);
  setIsCorrectionVisible(false);  // Reset correction visibility when image changes
};

return (
  <section className="section" id="projects">
      <header className="top-headers">
          <h1>Les Exercices</h1>
          <select onChange={(e) => setSelectID(e.target.value)} value={selectID}>
              <option value="">Select ID</option>
              {Project.map(project => (
                  <option key={project.id} value={project.id}>Serie N : {project.id}</option>
              ))}
          </select>

          {selectID && (
              <select onChange={handleImageChange} value={selectedImage}>
                  <option value="">Select Exercice</option>
                  {filteredImageAlts.map((alt, index) => (
                      <option key={index} value={alt}>{alt}</option>
                  ))}
              </select>
          )}

          {selectID && selectedImage && (
              <button 
                  className="correction-button"
                  onClick={() => handleCorrectionClick(filteredProjects.flatMap(project => project.images).find(img => img.alt === selectedImage))}
              >
                  Correction 
              </button>
          )}
      </header>

      {filteredImages.map((project) => (
          <div key={project.id}>
              <div className="project-container">
                  {project.images.map((image, index) => (
                      <div className="project-box" key={index}>
                          <div className="img">
                              <img
                                  src={image.src}
                                  alt={image.alt}
                                  onClick={() => handleImageClick(image.src, image.code)}
                              />
                              <div className="zoom-icon">
                                  <i className="fa fa-search-plus" />
                              </div>
                          </div>
                          <footer className="title-telechrger">
                              <span className="span">
                                  <b>{image.alt}</b>
                              </span>
                              <button
                                  className="download-pdf-button"
                                  onClick={() => handleImageToPdf(image.src, image.alt)}
                              >
                                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z"/></svg>
                              </button>
                          </footer>
                      </div>
                  ))}
              </div>

              {isZoomed && (
                  <div className="zoomed-image-container" onClick={handleCloseZoom}>
                      <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
                      <span className="close-zoom" onClick={handleCloseZoom}>x</span>
                  </div>
              )}

              {selectID && selectedImage && isCorrectionVisible && (
                  <div className="correction-container">
                      <h1>La Correction : </h1>
                      <div className="correction-code">
                          <pre>{selectedCorrection}</pre>
                      </div>
                  </div>
              )}

              {project.images.some(image => image.PdfUrl) && (
                  <div className="download-button-container">
                      <button
                          className="download-button"
                          onClick={() => {
                              const pdfImage = project.images.find(image => image.PdfUrl);
                              if (pdfImage) {
                                  handleDownload(pdfImage.PdfUrl, pdfImage.pdfLink);
                              }
                          }}
                      >
                          Download File
                      </button>
                  </div>
              )}
          </div>
      ))}
  </section>
);
}

export default ExerciceCorection;