import axios from 'axios'
import { HOST } from "../common/js/config"

export function getBanner() {
    // console.log(HOST,'HOST')
    const url = HOST + '/banner'
    // console.log(url,'url')
    return axios.get(url)
}