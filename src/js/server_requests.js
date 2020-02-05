import axios from 'axios/dist/axios'

const getDevlogs = () => {
    return axios('http://localhost:3000',
    {
        headers: {
            request: 'devlogMain'
        }
    })
}
const getUsers = () => {
    return axios('http://localhost:3000',
    {
        headers: {
            request: 'Users'
        }
    })
}
export { getDevlogs, getUsers }