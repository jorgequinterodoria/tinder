import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://tinder-jq.herokuapp.com'
})

export default instance