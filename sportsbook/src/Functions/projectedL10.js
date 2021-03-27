export function projectedL10(stats, seasonStats) {
    let scores = stats.map(score => score.score)
    let pointsFor = []
    let pointsAgainst = []

    scores.map(points => {
        let splitString = points.split(' ')
        pointsFor.push(Number(splitString[1]))
        pointsAgainst.push(Number(splitString[3]))
        
        return splitString
    })

    let OffenseTotal = pointsFor.reduce((a, b) => a + b, 0)
    let OffenseAve = OffenseTotal / pointsFor.length
    let DefenseTotal = pointsAgainst.reduce((a, b) => a + b, 0)
    let DefenseAve = DefenseTotal / pointsAgainst.length

    let adjStats = {
        points_scored: Number(OffenseAve),
        points_against: Number(DefenseAve),
        possessions: seasonStats.possessions
    }

    return (adjStats)
}