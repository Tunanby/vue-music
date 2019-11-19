/*
 * @Author: zby
 * @Date: 2019-11-19 11:32:11 
 * 
 */

import Jsonp from "jsonp"

export default function jsonp (url, data, option) {
    
    return new Promise ((resolve, reject) => {
        Jsonp(url, option, (err, data) => {
            // if (!err) {
            //     resolve(data)
            // } else {
            //     reject(err)
            // }
        })
    })
}

// function Param () {

// }