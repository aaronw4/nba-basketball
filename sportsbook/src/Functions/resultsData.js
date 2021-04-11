import {findTeam} from '../Functions/findTeam';
import {findTeamL10} from '../Functions/findTeamL10';
import {projected} from '../Functions/projected';
import {projectedL10} from '../Functions/projectedL10';
import {MidPoint} from '../Functions/midpoint';
import {pickSpread, pickTotal} from '../Functions/pick';

export function resultsData() {
    let data = []
    let results = require('../results.json')

    for (let i = 0; i < results.length; i++) {
        let gameResults = {}
        gameResults.teamAway = results[i].team1
        gameResults.teamHome = results[i].team2
        gameResults.scoreAway = results[i].score1
        gameResults.scoreHome = results[i].score2
        gameResults.spreadAway = results[i].spread1
        gameResults.spreadHome = results[i].spread2
        gameResults.spreadAwayOdds = results[i].odds1
        gameResults.spreadHomeOdds = results[i].odds2
        gameResults.total = results[i].total
        gameResults.openingSpreadAway = results[i].openingSpread1
        gameResults.openingSpreadHome = results[i].openingSpread2
        gameResults.openingTotal = results[i].openingTotal

        let awayStats = findTeam(results[i].team1);
        let homeStats = findTeam(results[i].team2);
        let projectedStats = projected(awayStats[0], homeStats[0]);
        gameResults.projectedSpreadAway = projectedStats[0].spreadAway;
        gameResults.projectedSpreadHome = projectedStats[0].spreadHome;
        gameResults.projectedTotal = projectedStats[0].total;

        let awayDataL10 = findTeamL10(results[i].team1)
        let homeDataL10 = findTeamL10(results[i].team2)
        let awayStatsL10 = projectedL10(awayDataL10, awayStats[0]);
        let homeStatsL10 = projectedL10(homeDataL10, homeStats[0]);
        let projectedStatsL10 = projected(awayStatsL10, homeStatsL10);
        gameResults.projectedSpreadAwayL10 = projectedStatsL10[0].spreadAway;
        gameResults.projectedSpreadHomeL10 = projectedStatsL10[0].spreadHome;
        gameResults.projectedTotalL10 = projectedStatsL10[0].total;


        let spreadMP = MidPoint(results[i].odds1, results[i].odds2);
        gameResults.midpointSpread = spreadMP

        let projSpreadPick = pickSpread(projectedStats[0].spreadAway, results[i].spread1)
        let projTotalPick = pickTotal(projectedStats[0].total, results[i].total)
        let projL10SpreadPick = pickSpread(projectedStatsL10[0].spreadAway, results[i].spread1)
        let projL10STotalPick = pickTotal(projectedStatsL10[0].total, results[i].total)
        let mpSpreadPick = pickSpread(results[i].openingSpread1, results[i].spread1)
        let mpTotalPick = pickTotal(results[i].openingTotal, results[i].total)
        gameResults.projSpreadPick = projSpreadPick[0]
        gameResults.projSpreadPickSpread = projSpreadPick[1]
        gameResults.projTotalPick = projTotalPick
        gameResults.projL10SpreadPick = projL10SpreadPick[0]
        gameResults.projL10SpreadPickSpread = projL10SpreadPick[1]
        gameResults.projL10TotalPick = projL10STotalPick
        gameResults.mpSpreadPick = mpSpreadPick[0]
        gameResults.mpSpreadPickSpread = mpSpreadPick[1]
        gameResults.mpTotalPick = mpTotalPick
        data.push(gameResults)
    }
    
    return data
}