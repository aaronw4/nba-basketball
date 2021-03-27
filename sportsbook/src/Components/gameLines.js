import React from 'react';
import ProjectedLines from './projectedLines';
import MidpointLines from './midpointLines';
import Midpoint1stHalfLines from './midpoint1stHalfLines';
import Last10Lines from './last10Lines';

const GameLines = () => {
    let data = require('../odds.json')

    return (
        <div>
            {data.map(game => (
                <div className='gameBox'>
                    <h4>{game.date}</h4>
                    <div className='gameInfo'>
                        <div>
                            <h5>Teams</h5>
                            <p>{game.teams.away}</p>
                            <p>{game.teams.home}</p>
                        </div>
                        <div className='rowTitle'>
                            <p>Spread</p>
                            <p className='row'>Moneyline</p>
                            <p className='row'>Total</p>
                        </div>
                        <ProjectedLines
                            away = {game.teams.away}
                            home = {game.teams.home}
                        />
                        <Last10Lines
                            away = {game.teams.away}
                            home = {game.teams.home}
                        />
                        <MidpointLines
                            game = {game}
                        />
                        <Midpoint1stHalfLines
                            game = {game}
                        />
                        {/* <iframe 
                            className='iframe'
                            src={game.graph_address}
                        /> */}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GameLines