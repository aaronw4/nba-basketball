export function findTeamL10(name) {
    let stats = require('../last10.json')
    let adjName = fixNameL10(name)
    let teamStats = stats[adjName]
    console.log(teamStats)

    return teamStats
}

function fixNameL10(name) {
    return name
}

function noMatchL10() {
    let stats = require('../last10.json')
    let odds = require('../odds.json')
    let oddsNames = []
    let statsNames = Object.keys(stats)
    let missingNames = []

    for (let i = 0; i < odds.length; i++) {
        let away = fixNameL10(odds[i].teams.away)
        let home = fixNameL10(odds[i].teams.home)

        oddsNames.push(away)
        oddsNames.push(home)
    }

    for (let i = 0; i < oddsNames.length; i++) {
        let match = false

        for (let j = 0; j < statsNames.length; j++) {            
            if (oddsNames[i] === statsNames[j]) {
                match = true
            }
        }

        if (match === false) {
            missingNames.push(oddsNames[i])
        }
    }
    
    return missingNames
}

console.log(noMatchL10())