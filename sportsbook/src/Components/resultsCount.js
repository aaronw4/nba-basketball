import React from 'react'
import {WinOrLoseSpread, WinOrLoseTotal} from '../Functions/winOrLose';


const ResultsCount = (props) => {
    let data = props.data
    // let data = require('../tempData.json')
    let projSpreadCount = 0
    let projSpreadTotal = 0
    let projTotalCount = 0
    let projTotalTotal = 0
    let projL10SpreadCount = 0
    let projL10SpreadTotal = 0
    let projL10TotalCount = 0
    let projL10TotalTotal = 0
    let mpSpreadCount = 0
    let mpSpreadTotal = 0
    let mpTotalCount = 0
    let mpTotalTotal = 0
    let psPsL10Count = 0
    let psPsL10Total = 0
    let ptPtL10Count = 0
    let ptPtL10Total = 0
    let psMpsCount = 0
    let psMpsTotal = 0
    let ptMptCount = 0
    let ptMptTotal = 0
    let mpL10SpreadCount = 0
    let mpL10SpreadTotal = 0
    let mpL10TotalCount = 0
    let mpL10TotalTotal = 0
    let pNotL10SpreadCount = 0
    let pNotL10SpreadTotal = 0
    let pNotL10TotalCount = 0
    let pNotL10TotalTotal = 0
    

    for (let i=0; i < data.length; i++) {
        let projSpreadResult = WinOrLoseSpread(data[i].scoreAway, data[i].scoreHome, data[i].projSpreadPick, data[i].projSpreadPickSpread)
        
        if (projSpreadResult === 'Win') {
            projSpreadCount++
            projSpreadTotal++
        } else if (projSpreadResult === 'Lose') {
            projSpreadTotal++
        }

        let projTotalResult = WinOrLoseTotal(data[i].scoreAway, data[i].scoreHome, data[i].projTotalPick, data[i].total)
        console.log(data[i].projTotalPick)
        if (projTotalResult === 'Win') {
            projTotalCount++
            projTotalTotal++
        } else if (projTotalResult === 'Lose') {
            projTotalTotal++
        }

        let projSpreadL10Result = WinOrLoseSpread(data[i].scoreAway, data[i].scoreHome, data[i].projL10SpreadPick, data[i].projL10SpreadPickSpread)

        if (projSpreadL10Result === 'Win') {
            projL10SpreadCount++
            projL10SpreadTotal++
        } else if (projSpreadL10Result === 'Lose') {
            projL10SpreadTotal++
        }

        let projTotalL10Result = WinOrLoseTotal(data[i].scoreAway, data[i].scoreHome, data[i].projL10TotalPick, data[i].total)

        if (projTotalL10Result === 'Win') {
            projL10TotalCount++
            projL10TotalTotal++
        } else if (projTotalL10Result === 'Lose') {
            projL10TotalTotal++
        }

        let mpSpreadResult = WinOrLoseSpread(data[i].scoreAway, data[i].scoreHome, data[i].mpSpreadPick, data[i].mpSpreadPickSpread)

        if (mpSpreadResult === 'Win') {
            mpSpreadCount++
            mpSpreadTotal++
        } else if (mpSpreadResult === 'Lose') {
            mpSpreadTotal++
        }

        let mpTotalResult = WinOrLoseTotal(data[i].scoreAway, data[i].scoreHome, data[i].mpTotalPick, data[i].total)

        if (mpTotalResult === 'Win') {
            mpTotalCount++
            mpTotalTotal++
        } else if (mpTotalResult === 'Lose') {
            mpTotalTotal++
        }

        if (projSpreadResult === 'Win' && projSpreadL10Result === 'Win') {
            psPsL10Count++
            psPsL10Total++
        } else if (projSpreadResult === 'Lose' && projSpreadL10Result === 'Lose') {
            psPsL10Total++
        }

        if (projTotalResult === 'Win' && projTotalL10Result === 'Win') {
            ptPtL10Count++
            ptPtL10Total++
        } else if (projTotalResult === 'Lose' && projTotalL10Result === 'Lose') {
            ptPtL10Total++
        }

        if (projSpreadResult === 'Win' && mpSpreadResult === 'Win') {
            psMpsCount++
            psMpsTotal++
        } else if (projSpreadResult === 'Lose' && mpSpreadResult === 'Lose') {
            psMpsTotal++
        }

        if (projTotalResult === 'Win' && mpTotalResult === 'Win') {
            ptMptCount++
            ptMptTotal++
        } else if (projTotalResult === 'Lose' && mpTotalResult === 'Lose') {
            ptMptTotal++
        }

        if (projSpreadL10Result === 'Win' && mpSpreadResult === 'Win') {
            mpL10SpreadCount++
            mpL10SpreadTotal++
        } else if (projSpreadL10Result === 'Lose' && mpSpreadResult === 'Lose') {
            mpL10SpreadTotal++
        }

        if (projTotalL10Result === 'Win' && mpTotalResult === 'Win') {
            mpL10TotalCount++
            mpL10TotalTotal++
        } else if (projTotalL10Result === 'Lose' && mpTotalResult === 'Lose') {
            mpL10TotalTotal++
        }
        
        if (projSpreadResult === 'Win' && projSpreadL10Result === 'Lose') {
            pNotL10SpreadCount++
            pNotL10SpreadTotal++
        } else if (projSpreadResult === 'Lose' && projSpreadL10Result === 'Win') {
            pNotL10SpreadTotal++
        }

        if (projTotalResult === 'Win' && projTotalL10Result === 'Lose') {
            pNotL10TotalCount++
            pNotL10TotalTotal++
        } else if (projTotalResult === 'Lose' && projTotalL10Result === 'Win') {
            pNotL10TotalTotal++
        }

    }
    
    return (
        <div className='resultCountCont'>
            <div>
                <h3>Projected Spread Wins = {projSpreadCount}/{projSpreadTotal} ({(projSpreadCount/projSpreadTotal*100).toFixed()}%)</h3>
                <h3>Projected L10 Spread Wins = {projL10SpreadCount}/{projL10SpreadTotal} ({(projL10SpreadCount/projL10SpreadTotal*100).toFixed()}%)</h3>
                <h3>Midpoint Spread Wins = {mpSpreadCount}/{mpSpreadTotal} ({(mpSpreadCount/mpSpreadTotal*100).toFixed()}%)</h3>
            </div>
            <div>
                <h3>Projected Total Wins = {projTotalCount}/{projTotalTotal} ({(projTotalCount/projTotalTotal*100).toFixed()}%)</h3>
                <h3>Projected L10 Total Wins = {projL10TotalCount}/{projL10TotalTotal} ({(projL10TotalCount/projL10TotalTotal*100).toFixed()}%)</h3>
                <h3>Midpoint Total Wins = {mpTotalCount}/{mpTotalTotal} ({(mpTotalCount/mpTotalTotal*100).toFixed()}%)</h3>
            </div>
            <div>
                <h3>Proj + L10 Spread Wins = {psPsL10Count}/{psPsL10Total} ({(psPsL10Count/psPsL10Total*100).toFixed()}%)</h3>
                <h3>Proj + MP Spread Wins = {psMpsCount}/{psMpsTotal} ({(psMpsCount/psMpsTotal*100).toFixed()}%)</h3>
                <h3>L10 + MP Spread Wins = {mpL10SpreadCount}/{mpL10SpreadTotal} ({(mpL10SpreadCount/mpL10SpreadTotal*100).toFixed()}%)</h3>
                <h3>Proj Not L10 Spread Wins = {pNotL10SpreadCount}/{pNotL10SpreadTotal} ({(pNotL10SpreadCount/pNotL10SpreadTotal*100).toFixed()}%)</h3>
            </div>
            <div>
                <h3>Proj + L10 Total Wins = {ptPtL10Count}/{ptPtL10Total} ({(ptPtL10Count/ptPtL10Total*100).toFixed()}%)</h3>
                <h3>Proj + MP Total Wins = {ptMptCount}/{ptMptTotal} ({(ptMptCount/ptMptTotal*100).toFixed()}%)</h3>
                <h3>L10 + MP Total Wins = {mpL10TotalCount}/{mpL10TotalTotal} ({(mpL10TotalCount/mpL10TotalTotal*100).toFixed()}%)</h3>
                <h3>Proj Not L10 Total Wins = {pNotL10TotalCount}/{pNotL10TotalTotal} ({(pNotL10TotalCount/pNotL10TotalTotal*100).toFixed()}%)</h3>
            </div>
        </div>
    )
}

 export default ResultsCount