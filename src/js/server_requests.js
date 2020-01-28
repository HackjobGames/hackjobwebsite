import axios from 'axios/dist/axios'

const getDevlogs = () => {
    return axios('http://localhost:3000',
    {
	    proxy: {
	        host: '127.0.0.1',
            port: 4400,
	    },
        headers: {
            request: 'devlogMain'
        }
    })
}

export { getDevlogs }