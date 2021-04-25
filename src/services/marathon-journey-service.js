const MARATHON_JOURNEY_URL = "http://wbdv-sp21-dc-project-server.herokuapp.com/api";
// const MARATHON_JOURNEY_URL = 'http://localhost:8080/api'


export const createMarathonJourney = (uid, raceJourney) =>
    fetch(`${MARATHON_JOURNEY_URL}/users/${uid}/raceJourneys`, {
        method: "POST",
        body: JSON.stringify(raceJourney),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findMarathonJourneyForUser = (uid) =>
    fetch(`${MARATHON_JOURNEY_URL}/users/${uid}/raceJourneys`)
        .then(response => response.json())


export const updateMarathonJourney = (rJid, raceJourney) =>
    fetch(`${MARATHON_JOURNEY_URL}/raceJourneys/${rJid}`, {
        method: "PUT",
        body: JSON.stringify(raceJourney),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteMarathonJourney = (rJid) =>
    fetch(`${MARATHON_JOURNEY_URL}/raceJourneys/${rJid}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export default {
    createMarathonJourney,
    findMarathonJourneyForUser,
    updateMarathonJourney,
    deleteMarathonJourney
}