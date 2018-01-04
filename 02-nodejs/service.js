var data = require("./data/devfest-2015.js")

function listerTousLesPresentateurs() {
    return data.speakers;
}

function listerToutesLesSessions() {
    return data.sessions;
}

function trouverUneSession(idSession) {
    var ses = data.sessions.findIndex(s => s.id == idSession)
    return data.sessions[ses]
}

function filtrerTopPresentateurs() {
    var pre = data.speakers.findIndex(t => t.topspeaker = true)
    return data.speakers[pre]
}

exports.listerTousLesPresentateurs = listerTousLesPresentateurs
exports.listerToutesLesSessions = listerToutesLesSessions
exports.trouverUneSession = trouverUneSession
exports.filtrerTopPresentateurs = filtrerTopPresentateurs
