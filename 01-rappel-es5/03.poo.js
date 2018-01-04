function Personne(nom, prenom, pseudo) {
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.getNomComplet = function () {
        return this.nom + this.prenom + this.pseudos
    }
}

var jules = new Personne("Jules", "LEMAIRE", "jules77")

var paul = new Personne("Paul", "LEMAIRE", "paul44")

console.log(jules.nom + jules.prenom + jules.pseudo + jules.getNomComplet())

console.log(paul.nom + paul.prenom + paul.pseudo + paul.getNomComplet())


