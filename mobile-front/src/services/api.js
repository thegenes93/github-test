import axios from 'axios'

const api = axios.create({
    baseURL: 'https://testegithub.herokuapp.com/api'
})

export default api