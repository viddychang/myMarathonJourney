const USER_API = "https://wbdv-sp21-dc-project-server.herokuapp.com/api";

const getCurrentUserProfile = () => {
    return fetch(`${USER_API}/users/profile`, {
        method: "POST",
        credentials: "include"
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
    })
        .then(response => response.json())
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

const logoutUser = () => {
    return fetch(`${USER_API}/session/invalidate`)
        .then(response => response.json())
}

const getAllUsers = () => {
    return fetch(`${USER_API}/users`)
        .then(response => response.json())
}

const findUserByUserId = (uid) => {
    return fetch(`${USER_API}/users${uid}`)
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
    logoutUser, getCurrentUserProfile, 
    logoutUser, getAllUsers, findUserByUserId,
    deleteUser, updateUser, createUser
}