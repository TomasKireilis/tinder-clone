import axios from 'axios'
const instance = axios.create({
    baseURL:'https://tomas-tinder-backend.herokuapp.com/'
})
export default instance