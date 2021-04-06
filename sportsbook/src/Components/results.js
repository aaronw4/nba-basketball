import React, { useEffect, useState } from 'react';
import {sign} from '../Functions/sign';
import {resultsData} from '../Functions/resultsData';
import ResultsCount from './resultsCount';

const Results = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     let results = resultsData();
    //     setData(results)
    // },[])
    let data = require('../tempData.json')

    return(
        <div>
            {/* <ResultsCount data={data}/> */}
            {data.map(game => (
                <div className='gameBox gameInfo'>
                    <div>
                        <h5>Teams</h5>
                        <p>{game.teamAway}</p>
                        <p>{game.teamHome}</p>
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
                        <h5>Opening Lines</h5>
                        <p>{game.openingSpreadAway}</p>
                        <p>{game.openingSpreadHome}</p>
                        <p>{game.openingTotal}</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Projected Lines</h5>
                        <p>{game.projectedSpreadAway}</p>
                        <p>{game.projectedSpreadHome}</p>
                        <p>{game.projectedTotal}</p>
                    </div>
                    <div className='fgMidpoint'>
                        <h5>Projected L10 Lines</h5>
                        <p>{game.projectedSpreadAwayL10}</p>
                        <p>{game.projectedSpreadHomeL10}</p>
                        <p>{game.projectedTotalL10}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Results