import { api } from 'src/boot/axios'

const API_KEY = 'ef5aea3daa734da9b8d9405357a5801d'

export default {
    getData(){
        return api.get(`v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
    },
    getHeadLine(){
        return api.get(`v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
    }
}
