export function WinOrLoseSpread(awayScore, homeScore, pick, teamSpread) {
    let gameResult
    let result

    if (pick === 'Away') {
        gameResult = Number(homeScore) - Number(awayScore)
    } else if (pick === 'Home') {
        gameResult = Number(awayScore) - Number(homeScore)
    }
    
    if (pick === 'No bet') {
        result = ''
    } else if (Number(teamSpread) -gameResult > 0) {
        result = 'Win'
    } else if (Number(teamSpread) - gameResult < 0) {
        result = 'Lose'
    } else {
        result = 'Push'
    }

    return result
}

export function WinOrLoseTotal(awayScore, homeScore, pick, total) {
    let gameResult = Number(awayScore) + Number(homeScore)
    let result
    
    if (pick === 'No bet') {
        result = ''
    } else if (pick === 'Over') {
        if (Number(gameResult) - Number(total) > 0) {
            result = 'Win'
        } else if (Number(gameResult) - Number(total) < 0) {
            result = 'Lose'
        } else {
            result = 'Push'
        }
    } else if (pick === 'Under') {
        if (Number(total) - Number(gameResult) > 0) {
            result = 'Win'
        } else if (Number(total) - Number(gameResult) < 0) {
            result = 'Lose'
        } else {
            result = 'Push'
        }
    }
    
    return result
}