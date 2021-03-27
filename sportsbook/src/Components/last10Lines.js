import React from 'react';
import {findTeamL10} from '../Functions/findTeamL10';
import {projectedL10} from '../Functions/projectedL10';
import {findTeam} from '../Functions/findTeam';
import {projected} from '../Functions/projected';

const Last10Lines = (props) => {
    let awaySeason = findTeam(props.away);
    let homeSeason = findTeam(props.home);
    let awayData = findTeamL10(props.away);
    let homeData = findTeamL10(props.home);
    let awayStats = projectedL10(awayData, awaySeason[0]);
    let homeStats = projectedL10(homeData, homeSeason[0]);
    let projectedStats = projected(awayStats, homeStats);

    return (
        <div className='fgOpening'>
            <h5>Full Game Proj Last 10</h5>
            <p>Away: {projectedStats[0].spreadAway}</p>
            <p>Home: {projectedStats[0].spreadHome}</p>
            <br/>
            <p>Away: {projectedStats[0].moneylineAway}</p>
            <p>Home: {projectedStats[0].moneylineHome}</p>
            <br/>
            <p>Over {projectedStats[0].total}</p>
            <p>Under {projectedStats[0].total}</p>
        </div>
    )
}

export default Last10Lines