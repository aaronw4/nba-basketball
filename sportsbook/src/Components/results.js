import React, { useEffect, useState } from 'react';
import {WinOrLoseSpread, WinOrLoseTotal} from '../Functions/winOrLose';
import {sign} from '../Functions/sign';
import {resultsData} from '../Functions/resultsData';
import ResultsCount from './resultsCount';

const Results = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let results = resultsData();
        setData(results)
    },[])
    // let data = require('../tempData.json')
    console.log(data)
    return(
        <div>
            <ResultsCount data={data}/>
            {data.map(game => (
                <div className='gameBox gameInfo'>
                    <div>
                        <h5>Teams</h5>
                        <p>{game.teamAway}</p>
                        <p>{game.teamHome}</p>
                        <p>Total</p>
                        <p>Spread Pick</p>
                        <p>Total Pick</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Score</h5>
                        <p>{game.scoreAway}</p>
                        <p>{game.scoreHome}</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Results</h5>
                        <p>{game.scoreHome - game.scoreAway}</p>
                        <p>{game.scoreAway - game.scoreHome}</p>
                        <p>{Number(game.scoreAway) + Number(game.scoreHome)}</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Actual Lines</h5>
                        <p>{game.spreadAway}</p>
                        <p>{game.spreadHome}</p>
                        <p>{game.total}</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Opening Lines (MP)</h5>
                        <p>{game.openingSpreadAway}</p>
                        <p>{game.openingSpreadHome}</p>
                        <p>{game.openingTotal}</p>
                        <p>{game.mpSpreadPick}: {WinOrLoseSpread(game.scoreAway, game.scoreHome, game.mpSpreadPick, game.mpSpreadPickSpread)}</p>
                        <p>{game.mpTotalPick}: {WinOrLoseTotal(game.scoreAway, game.scoreHome, game.mpTotalPick, game.total)}</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Projected Lines</h5>
                        <p>{game.projectedSpreadAway}</p>
                        <p>{game.projectedSpreadHome}</p>
                        <p>{game.projectedTotal}</p>
                        <p>{game.projSpreadPick}: {WinOrLoseSpread(game.scoreAway, game.scoreHome, game.projSpreadPick, game.projSpreadPickSpread)}</p>
                        <p>{game.projTotalPick}: {WinOrLoseTotal(game.scoreAway, game.scoreHome, game.projTotalPick, game.total)}</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Projected L10 Lines</h5>
                        <p>{game.projectedSpreadAwayL10}</p>
                        <p>{game.projectedSpreadHomeL10}</p>
                        <p>{game.projectedTotalL10}</p>
                        <p>{game.projL10SpreadPick}: {WinOrLoseSpread(game.scoreAway, game.scoreHome, game.projL10SpreadPick, game.projL10SpreadPickSpread)}</p>
                        <p>{game.projL10TotalPick}: {WinOrLoseTotal(game.scoreAway, game.scoreHome, game.projL10TotalPick, game.total)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Results