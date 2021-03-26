import React from 'react';
import {MidPoint} from '../Functions/midpoint';
import {sign} from '../Functions/sign';

const MidpointLines = (props) => {
    let game = props.game
    
    return (
        <div className='fgMidpoint'>
            <h5>Full Game Midpoints</h5>
            <p>
                Away: {game.full_game.spread.away_spread}
                ({sign(game.full_game.spread.away_odds, game.full_game.spread.home_odds)}
                {MidPoint(game.full_game.spread.away_odds, game.full_game.spread.home_odds)})
            </p>
            <p>
                Home: {game.full_game.spread.home_spread}
                ({sign(game.full_game.spread.home_odds, game.full_game.spread.away_odds)}
                {MidPoint(game.full_game.spread.away_odds, game.full_game.spread.home_odds)})</p>
            <br/>
            <p>
                Away: {sign(game.full_game.moneyline.away, game.full_game.moneyline.home)}
                {MidPoint(game.full_game.moneyline.away, game.full_game.moneyline.home)}</p>
            <p>
                Home: {sign(game.full_game.moneyline.home, game.full_game.moneyline.away)}
                {MidPoint(game.full_game.moneyline.away, game.full_game.moneyline.home)}</p>
            <br/>
            <p>
                Over {game.full_game.over_under.total}: {sign(game.full_game.over_under.over, game.full_game.over_under.under)}
                {MidPoint(game.full_game.over_under.over, game.full_game.over_under.under)}
            </p>
            <p>
                Under {game.full_game.over_under.total}: {sign(game.full_game.over_under.under, game.full_game.over_under.over)}
                {MidPoint(game.full_game.over_under.over, game.full_game.over_under.under)}
            </p>
        </div>
    )
}

export default MidpointLines