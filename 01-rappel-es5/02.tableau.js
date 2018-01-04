var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']
villes.forEach(function (element) {
    console.log(element);
});

function lettreADansToutesLesVilles(currentValue) {
    return currentValue.includes('a')
}
console.log("lettreADansToutesLesVilles== " + villes.every(lettreADansToutesLesVilles))

function auMoinsUneVilleAvecUnTiret(currentValue) {
    return currentValue.includes('-')
}

console.log("auMoinsUneVilleAvecUnTiret == " + villes.some(auMoinsUneVilleAvecUnTiret));


function filtrerSansTiretSansEspace(ville) {
    return !ville.includes('-') && !ville.includes(' ')
}
var villesSansTiretSansEspace = villes.filter(filtrerSansTiretSansEspace)
console.log("villesSansTiretSansEspace == " + villesSansTiretSansEspace)

var villesTerminesParS = function (element, index, array) {
    return element.lastIndexOf("s") > 0;
}

var villeMajuscule = function (ville) {
    return ville.toUpperCase()
}

console.log('villesTerminesParS==' + villes.filter(villesTerminesParS).map(villeMajuscule))