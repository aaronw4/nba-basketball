export function pickSpread(projecteAwayLine, actualAwayLine) {
    let pick
    let condition

    if (projecteAwayLine === '') {
        pick = 'No bet'
        condition = ''
    } else if (Number(actualAwayLine) - Number(projecteAwayLine) >= 4) {
        pick = 'Away'
        condition = Number(projecteAwayLine)
    } else if (-1 * Number(actualAwayLine) - Number(projecteAwayLine) >= 4) {
        pick = 'Home'
        condition = -1 * Number(projecteAwayLine)
    } else {
        pick = 'No bet'
        condition = ''
    }

    return [pick, condition]
}

export function pickTotal(projecteTotal, actualTotal) {
    let pick

    if (projecteTotal === '') {
        pick = 'No bet'
    } else if (Number(actualTotal) - Number(projecteTotal) >= 4) {
        pick = 'Under'
    } else if (-1 * Number(actualTotal) - Number(projecteTotal) >= 4) {
        pick = 'Over'
    } else {
        pick = 'No bet'
    }

    return pick
}