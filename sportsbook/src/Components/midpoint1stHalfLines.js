import React from 'react';
import {MidPoint} from '../Functions/midpoint';
import {sign} from '../Functions/sign';

const Midpoint1stHalfLines = (props) => {
    let game = props.game    
    
    return (
        <div className='fhMidpoints'>
            <h5>First Half Midpoints</h5>
            <p>
                Away: {game.first_half.spread.away_spread}
                ({sign(game.first_half.spread.away_odds, game.first_half.spread.home_odds)}
                {MidPoint(game.first_half.spread.away_odds, game.first_half.spread.home_odds)})
            </p>
            <p>
                Home: {game.first_half.spread.home_spread}
                ({sign(game.first_half.spread.home_odds, game.first_half.spread.away_odds)}
                {MidPoint(game.first_half.spread.away_odds, game.first_half.spread.home_odds)})</p>
            <br/>
            <p>
                Away: {sign(game.first_half.moneyline.away, game.first_half.moneyline.home)}
                {MidPoint(game.first_half.moneyline.away, game.first_half.moneyline.home)}</p>
            <p>
                Home: {sign(game.first_half.moneyline.home, game.first_half.moneyline.away)}
                {MidPoint(game.first_half.moneyline.away, game.first_half.moneyline.home)}</p>
            <br/>
            <p>
                Over {game.first_half.over_under.total}: {sign(game.first_half.over_under.over, game.first_half.over_under.under)}
                {MidPoint(game.first_half.over_under.over, game.first_half.over_under.under)}
            </p>
            <p>
                Under {game.first_half.over_under.total}: {sign(game.first_half.over_under.under, game.first_half.over_under.over)}
                {MidPoint(game.first_half.over_under.over, game.first_half.over_under.under)}
            </p>
        </div>
    )
}

export default Midpoint1stHalfLines