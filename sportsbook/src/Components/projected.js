export function projected (away, home){
    let awayAdjO = away.points_scored / away.possessions * 100
    let awayAdjD = away.points_against / away.possessions * 100
    let homeAdjO = home.points_scored / home.possessions * 100
    let homeAdjD = home.points_against / home.possessions * 100

    let pythAway = awayAdjO**14 / (awayAdjO**14 + awayAdjD**14)
    let pythHome = homeAdjO**14 / (homeAdjO**14 + homeAdjD**14)

    let oddsAway = ((pythAway - pythAway*pythHome) / (pythAway + pythHome - 2*pythAway*pythHome))*100
    let oddsHome = ((pythHome - pythAway*pythHome) / (pythAway + pythHome - 2*pythAway*pythHome))*100
    let decAway = ((100 - oddsAway) / oddsAway) + 1
    let decHome = ((100 - oddsHome) / oddsHome) + 1
    let moneylineAway
    let moneylineHome
    if (decAway >= 2) {
        moneylineAway = (decAway - 1) * 100
    } else {
        moneylineAway = -100 / (decAway - 1)
    }
    if (decHome >= 2) {
        moneylineHome = (decHome - 1) * 100
    } else {
        moneylineHome = -100 / (decHome - 1)
    }

    let data = require("../stats.json")
    let adjTvalues = data.map(value => Number(value.possessions))
    let adjTTotal = adjTvalues.reduce((total, amount) => total + amount)
    let adjTAve = adjTTotal / adjTvalues.length
    let possessions = (away.possessions/adjTAve)*home.possessions

    let adjOvalues = data.map(value => Number(value.points_scored) / Number(value.possessions) * 100)
    let adjOtotals = adjOvalues.reduce((total, amount) => total + amount)
    let adjOave = adjOtotals / adjOvalues.length
    let scoreAway = (awayAdjO/adjOave)*homeAdjD*(possessions/100)
    let scoreHome = (homeAdjO/adjOave)*awayAdjD*(possessions/100)
    console.log(scoreAway, scoreHome)

    let spreadHome = (scoreAway - scoreHome).toFixed(1)
    let spreadAway = (scoreHome - scoreAway).toFixed(1)
    let total = (scoreAway + scoreHome).toFixed(1)

    return ([{
        away: away.name,
        home: home.name,
        moneylineAway: moneylineAway.toFixed(1), 
        moneylineHome: moneylineHome.toFixed(1),
        spreadAway: spreadAway,
        spreadHome: spreadHome,
        total: total
    }])
}

// let team1 = {"name": "Milwaukee", "points_scored": "121.9", "points_against": "110.3", "possessions": "105.6"}
// let team2 = {"name": "Cleveland", "points_scored": "100.0", "points_against": "102.8", "possessions": "101.9"}
// console.log(projected(team1, team2))