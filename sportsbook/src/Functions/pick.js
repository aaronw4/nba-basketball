export function pickSpread(projecteAwayLine, actualAwayLine) {
    let pick
    let condition

    if (projecteAwayLine === '') {
        pick = 'No bet'
        condition = ''
    } else if (Number(actualAwayLine) - Number(projecteAwayLine) >= 4) {
        pick = 'Away'
        condition = Number(actualAwayLine)
    } else if (Number(actualAwayLine) - Number(projecteAwayLine) <= -4) {
        pick = 'Home'
        condition = -1 * Number(actualAwayLine)
    } else {
        pick = 'No bet'
        condition = ''
    }

    return [pick, condition]
}

export function pickTotal(projecteTotal, lineTotal) {
    let pick

    if (projecteTotal === '') {
        pick = 'No bet'
    } else if (Number(lineTotal) - Number(projecteTotal) >= 4) {
        pick = 'Under'
    } else if (Number(lineTotal) - Number(projecteTotal) <= -4) {
        pick = 'Over'
    } else {
        pick = 'No bet'
    }
    
    return pick
}