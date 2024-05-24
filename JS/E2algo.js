// types primitifs

let myNumber = 12;
console.log(myNumber, typeof myNumber);

let myString = "Hye !";
console.log(myString, typeof myString);

let myBoolean = true;
console.log(myBoolean, typeof myBoolean);

let myNull = null;
console.log(myNull, typeof myNull);

let myUndefined = undefined;
console.log(myUndefined, typeof myUndefined);

// combinaisons de types

let nan = myNumber * myString;
console.log(nan, typeof nan);

let myConcat = myString + myNumber;
console.log(myConcat, typeof myConcat);

// tableaux et objets

let myArray = [12, 23, 45, 67, 89];
console.log(myArray, typeof myArray);
console.log(myArray[3]);

let myObjet = { id: 1, name: "Toto" };
console.log(myObjet, typeof myObjet);

// Eléments du DOM

let myBody = document.getElementsByTagName("body");
console.log(myBody, typeof myBody);

let myUl = document.getElementsByTagName("ul");
console.log(myUl, typeof myUl);