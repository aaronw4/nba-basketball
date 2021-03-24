export function findTeam (name) {
    let stats = require('../stats.json')
    let adjName = fixName(name)
    let teamStats = stats.filter(team => team.name === adjName)

    return teamStats
}

function fixName(name) {
    if (name.search("Oklahoma City" !== -1)) {
        name = name.replace("Oklahoma City", "Okla City")
    }
    if (name.search("L.A. Lakers" !== -1)) {
        name = name.replace("L.A. Lakers", "LA Lakers")
    }
    if (name.search("L.A. Clippers" !== -1)) {
        name = name.replace("L.A. Clippers", "LA Clippers")
    }

    return name
}

function noMatch () {
    let odds = require('../odds.json')
    let stats = require('../stats.json')
    let oddsNames = []
    let missingNames = []

    for (let i = 0; i < odds.length; i++) {
        let away = fixName(odds[i].teams.away)
        let home = fixName(odds[i].teams.home)

        oddsNames.push(away)
        oddsNames.push(home)
    }

    for (let i = 0; i < oddsNames.length; i++) {
        let match = false

        for (let j = 0; j < stats.length; j++) {            
            if (oddsNames[i] === stats[j].name) {
                match = true
            }
        }

        if (match === false) {
            missingNames.push(oddsNames[i])
        }
    }

    return missingNames
}

console.log(noMatch())