import Axios from 'axios'
import { BASE_URL } from './constants'

export default class API {
    get(path, params) {
        const requestUrl = BASE_URL + path

        return Axios.get(requestUrl, { params }).then(res => res.data)
    }

   
}

export const api = new API()
