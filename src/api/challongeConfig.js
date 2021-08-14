import axios from 'axios';

const instance = 
        axios.create({
            baseURL: 'https://api.challonge.com/v2/',
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/json',
                'Authorization-Type': 'v1',
                'Authorization': `${process.env.REACT_APP_CHALLONGE_KEY}`,
            }
        })
    


export default instance;