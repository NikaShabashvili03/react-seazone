import axios from 'axios'

const instance = axios.create({
    baseURL: `http://localhost:1337/api`,
});

// instance.interceptors.request.use(async (config) => {
//     // config.headers.Authorization = await localStorage.getItem('token');

//     return config
// })

export default instance;