import { api } from 'src/boot/axios'
import { useQuasar, QSpinnerGears  } from 'quasar'

const API_KEY = 'ef5aea3daa734da9b8d9405357a5801d'
const $q = useQuasar();
export default {
    

    getData(){
        try {
            return api.get(`v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)    
        } catch (error) {
            return error
        }
        
        
    },
    getHeadLine(){
        try {
            return api.get(`v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)    
        } catch (error) {
            return error
        }
        
    }
}
