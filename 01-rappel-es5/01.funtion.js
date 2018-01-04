
var nombre1 = 10;
var nombre2 = 20;

function additionner(nbr1, nbr2) {
    return nbr1 + nbr2;
}
var resultat1 = additionner(nombre1, nombre2)
console.log("resultat1 ==" + resultat1);

var somme = additionner;
var resultat2 = somme(nombre1, nombre2);
console.log("resultat2 ==" + resultat2);

function multiplication(nbr1, nbr2) {
    return nbr1 * nbr2;
}

var resultat3 = multiplication(nombre1, nombre2);
console.log("resultat3==" + resultat3);

var afficherOperation = function (nomOperation, operation, nbr1, nbr2) {

    console.log(nomOperation + " [ " + "nbr1== " + nbr1 + "nbr2== " + nbr2 + "]" + "==" + operation(nbr1, nbr2))

}

afficherOperation("Somme", somme, 20, 40)
afficherOperation("Multiplication", multiplication, 10, 20)
afficherOperation("Soustraction", function (n1, n2) {
    return n1 - n2
}, 15, 5)