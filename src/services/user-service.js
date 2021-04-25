const USER_API = "http://wbdv-sp21-dc-project-server.herokuapp.com/api";
// const USER_API = 'http://localhost:8080/api'

const getCurrentUser = () => {
    return fetch(`${USER_API}/users/profile`, {
        method: "POST",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const loginUser = (credentials) => {
    return fetch(`${USER_API}/users/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const registerUser = (credentials) => {
    return fetch(`${USER_API}/users/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const getUsersByUsername = (userName) => {
    return fetch(`${USER_API}/users/username?name=${userName}`)
        .then(response => response.json())
}

const logoutUser = () => {
    return fetch(`${USER_API}/session/logout`, {
        method: "POST",
        credentials: "include"
    })
}

const getAllUsers = () => {
    return fetch(`${USER_API}/users`)
        .then(response => response.json())
}

const findUserByUserId = (uid) => {
    return fetch(`${USER_API}/users/${uid}`)
        .then(response => response.json())
}

const deleteUser = (uid) => {
    return fetch(`${USER_API}/users/${uid}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
}

const updateUser = (uid, user) => {
    return fetch(`${USER_API}/users/${uid}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const createUser = (user) => {
    return fetch(`${USER_API}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export default {
    registerUser, loginUser, 
    logoutUser, getCurrentUser, 
    logoutUser, getAllUsers, findUserByUserId,
    deleteUser, updateUser, createUser, getUsersByUsername
}