var data = require("./data/devfest-2015.js")

function listerTousLesPresentateurs() {
    return data.speakers;
}

function listerToutesLesSessions() {
    return data.sessions;
}

function trouverUneSession(idSession) {
    return data.sessions.filter((element, index, array) => element.id == idSession)
}

function filtrerTopPresentateurs() {
    return data.speakers.filter((element, index, array) => element.topspeaker == true)
}

exports.listerTousLesPresentateurs = listerTousLesPresentateurs
exports.listerToutesLesSessions = listerToutesLesSessions
exports.trouverUneSession = trouverUneSession
exports.filtrerTopPresentateurs = filtrerTopPresentateurs
