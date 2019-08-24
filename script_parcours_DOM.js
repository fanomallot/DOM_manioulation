console.log("bonjour on vas commencer");
// nombre d'elements <p>
var count  = document.getElementsByTagName('p');
long = count.length
console.log("1.le nombre des éléments <p> présents dans la page HTML est" +" "+  long);
// Quel est le contenu texte de l'élément portant l'id coucou ?
var content = document.getElementById('coucou').textContent;
console.log("2."+content)
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
var lance = document.getElementsByTagName("a")
console.log("3 "+ " "+lance[2].href)
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.

var number = document.getElementsByClassName("compte-moi");
console.log("4. Les éléments de la classe compte-moi est" +" "+  number.length)
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
licount =  document.querySelectorAll("li.compte-moi")
console.log("5. Les éléments de  <li> portant la classe compte-moi est "+"" + licount.length)
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
licount =  document.querySelectorAll("ol>li.compte-moi")
console.log("6. éléments <li> et situés dans une liste ordonnée portent la classe compte-moi est "+" "+ licount.length)
// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.
divtake = document.querySelector("div:not([class])>ul:nth-of-type(2)>li").textContent;
console.log(divtake)
