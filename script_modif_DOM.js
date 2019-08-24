// Modification n°1
function changeTitles(titre,soustitre){
Titre = document.querySelector("h1").textContent= titre ;
console.log("Titre changé par: "+"'"+ Titre+"'");
soustitre = document.querySelector("p.lead").textContent= soustitre ;
console.log("Soustitre changé par: "+"'"+ soustitre+"'");

}
changeTitles("Ce que j'ai appris à THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
// Modification n°2
function changeCallToActions(type1,type2){
	main = document.querySelector('a.btn-primary');
	main.textContent= type1;
	console.log(" Changé par: "+"'"+ main+"'");
	main.setAttribute("href", "http://www.thehackingproject.org")
	console.log("Attribute: "+"'"+ main+"'");
	main2 = document.querySelector('a.btn-secondary');
	main2.textContent= type2;
	console.log("changé par: "+"'"+ main2+"'");
	main2.setAttribute("href", "https://www.pole-emploi.fr/accueil/")
	console.log("Attribute changé par: "+"'"+ main2+"'");
}
changeCallToActions("OK je veux tester !","Non Merci");
// Modification n°3
function changeLogoName(navbar){
	nav = document.querySelector('div.container>a>strong');
	nav.textContent = navbar;
	nav.style.fontSize = "2em";
	console.log(nav.textContent);
}
changeLogoName("The THP Experience");
// Modification n°4
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
function populateImages(way){
	let countcards = document.querySelectorAll('img.card-img-top');
	for (let count in countcards) {
		countcards[count].src = way[count];
	}	
console.log(countcards.length);
}
populateImages(imagesArray);
// Modification n°5
function deleteLastCards(remo){
deletecards = document.querySelectorAll('div.card');
for (let i = 3; i >= 1; i--) {
	deletecards[deletecards.length - i].remove(remo);
}
}
deleteLastCards('img');
// Modification n°6
let write = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]; 
function changeCardsText(text){
for (let count = 0; count <= 2 ; count++) {
	document.querySelectorAll('div.card>div.card-body>p')[count].textContent = text[count];
}
} 
changeCardsText(write);
// Modification n°7
var rock = document.querySelectorAll('button.btn');
function changeViewButtons(value){
let number = 0;
while (number < rock.length){
	value[number].setAttribute("class","btn btn-sm btn-success");	
	number +=2
}
}
changeViewButtons(rock);
// Modification n°8
var fils = document.getElementsByClassName("row")
console.log(fils[0]);
var parent = fils[0].parentNode;
console.log(parent);
var create = document.createElement('div');
create.setAttribute('class','row');
var cardjs = document.getElementsByClassName("card");
console.log(cardjs[2]);
create.appendChild(cardjs[2]);
console.log(create);
parent.appendChild(create);
console.log(parent);