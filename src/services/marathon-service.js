const findMarathonsByName = (n) => {
    return fetch(
        `https://hidden-mountain-72737.herokuapp.com/https://runsignup.com/rest/races?format=json&api_key=Me9AhLY9kvuc2GAKyRtFckMGy9nZVzXI&api_secret=oqqWWM6kf3iB9GuxcemQSdYRZu9cRBQk&name=${n}`)
        .then(response => response.json())
}

// make sure that 's' values are two letter abbreviations
const findMarathonsByState = (s) => {
    return fetch(
        `https://runsignup.com/rest/races?format=json&api_key=Me9AhLY9kvuc2GAKyRtFckMGy9nZVzXI&api_secret=oqqWWM6kf3iB9GuxcemQSdYRZu9cRBQk&state=${s}`)
        .then(response => response.json())
        
}

const findMarathonById = (id) => {
    return fetch(
        `https://runsignup.com/rest/race/${id}?format=json&api_key=Me9AhLY9kvuc2GAKyRtFckMGy9nZVzXI&api_secret=oqqWWM6kf3iB9GuxcemQSdYRZu9cRBQk`)
        .then(response => response.json())
}

export default {
    findMarathonsByName, findMarathonsByState, findMarathonById
}