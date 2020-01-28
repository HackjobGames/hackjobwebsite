import axios from 'axios/dist/axios'

const getDevlogs = () => {
    return axios.get('https://localhost:3000',
    {
        headers: {
            request: 'devlogMain'
        }
    })
}

export { getDevlogs }