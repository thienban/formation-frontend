const service = require("./service")


console.log(service.filtrerTopPresentateurs())
console.log(service.listerTousLesPresentateurs())
console.log(service.listerToutesLesSessions())
console.log(service.trouverUneSession())

console.log("*** Application Conférence ***\n"
    + "1. Liste de tous les présentateurs 1\n"
    + "2. Top présentateurs 2\n"
    + "3. Liste des sessions 3\n"
    + "4. Détail d'une session")