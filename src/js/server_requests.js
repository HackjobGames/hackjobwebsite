import axios from 'axios/dist/axios'

const getDevlogs = () => {
    return axios('http://localhost:3000',
    {
        headers: {
            request: 'devlogMain'
        }
    })
}

const login = (args) => {
    console.log(args)
    return axios('http://localhost:3000',
        {
            headers: {
                request: 'login',
                args: JSON.stringify(args)
            }
        }
    )
}

export { getDevlogs, login }
