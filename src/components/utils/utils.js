import {useContext} from 'react';
import GameContext from '../../context/game-context.js'
import axios from '../../api/challongeConfig.js';

const getTournaments = () => {
    return axios.get('./tournaments.json', {data: null})
    .then(res => res)
    .catch(err => console.error(err))
}

const getTournament = (url) => {
    return axios.get(`./tournaments/${url}.json`, {data: null})
    .then(res => res)
    .catch(err => console.error(err))
}

const postTournaments = (name, url, starts_at, description) => {
    return axios.post('./tournaments.json', {
        data: {
            type: "Tournaments",
            attributes: {
                name: name,
                url: url,
                tournament_type: "single elimination",
                private: true,
                starts_at: starts_at,
                description: description
            }
        }
    })
}

const editTournament = (selectedURL,name,url,starts_at, description) => {
    return axios.put(`./tournaments/${selectedURL}.json`, {
        data: {
            type: "Tournaments",
            attributes: {
                name: name,
                url: url,
                tournament_type: 'single elimination',
                private: true,
                starts_at: starts_at,
                description: description,
                }
            }
    })
}

const changeTournament = (url, change_state) => {
    return axios.put(`./tournaments/${url}/change_state.json`,{
        data: {
            type: `TournamentState`,
            attributes: {
                state: change_state
            }
        }
    })
}

const getMatches = (url) => {
    return axios.get(`./tournaments/${url}/matches.json`, {data: null})
    .then(res => res)
    .catch(err => console.error(err))
}

const addParticipants = (url, name, seed, misc, email, username) => {
    return axios.post(`./tournaments/${url}/participants.json`,{
        data: {
            type: `Participants`,
            attributes: {
                name: name,
                seed: seed,
                misc: misc,
                email: email,
                username, username,
            }
        }
    })
}

const deleteTournament = (url) => {
    return axios.delete(`./tournaments/${url}.json`, {data: null})
    .then(res => res)
    .catch(err => console.error(err))
}



export {getTournaments, getTournament, postTournaments, editTournament, changeTournament, getMatches, addParticipants, deleteTournament};
