// alert("yo");

// console.log("coucou la console");

// let variable = "hello";

// console.log(variable);
// concatenation
// let chaine = "je suis l'une de tes chaines de caractere";

// let nouvellechaine = "chaine precedente : " + chaine;

// console.log(nouvellechaine);

// let autreConcatenation = `chaine precedente :  ${chaine}
//  voila c'etait le contenu`;

// console.log(autreConcatenation);

// les types de donnees
let string = "je suis une chaine de caractere";

let number = 24;
let boolean = false;

let array = ["je ", "suis", 47, true];

// objet
// let objet = {
//   prenom: "audrey",
//   age: 33,
//   ville: bordeaux,
// };

// les operateurs
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);

// puissance

// console.log(4 ** 5);

// opretaeurs d'affectation
let total = 0;

total++;

total += 5;
total -= 4;
// console.log(total);

//structures de controles
let x = 2;
let y = 7;

// if (x > y) {
//   alert("yes");
// } else {
//   alert("no");
// }

// on test si la variables est true
if (x) {
  // console.log("x existe");
}

// les egalite
// === test l'egalite en type et en contenu
if (x === y) {
  // console.log("ils sont egaux");
}

// == test l'egalite de valeures sans prendre en compte le type

// if (x < y || x > 6) {
//   console.log("oui");
// }

// les fonctions
function faireQuelqueChose() {
  console.log("salut");

  console.log(5 + 6);

  alert("calcule");
}

// faireQuelqueChose();
// l'appel de la fonction est obligatoire

//fonction flechee
const adition = (a, b) => {
  console.log(a + b);
};

// adition(2, 3);

// adition(45, 7);

// la porte des variables
function add2() {
  let a = 4;
  console.log(a + 2);
}

add2();
