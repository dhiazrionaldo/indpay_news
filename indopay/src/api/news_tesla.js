import { api } from 'src/boot/axios'

const API_KEY = 'ef5aea3daa734da9b8d9405357a5801d'

export default {
    getData(){
        return api.get(`/v2/everything?q=tesla&from=2023-01-23&sortBy=publishedAt&apiKey=${API_KEY}`)
    }
}
