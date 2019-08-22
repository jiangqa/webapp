import axios from "axios";

const get = (url, params = {}) => {
    return new Promise(resolve => {
        axios
            .get(url, {params: params})
            .then(response => resolve(response.data))
            .catch(err => console.log(err))
    })
}
const post = (url, params = {}) => {
    return new Promise(resolve => {
        axios
            .post(url, JSON.stringify(params))
            .then(response => resolve(response.data))
            .catch(err => console.log(err))
    })
}
const put = (url, params = {}) => {
    return new Promise(resolve => {
        axios
            .put(url, JSON.stringify(params))
            .then(response => resolve(response.data))
            .catch(err => console.log(err))
    })
}
export {
    get,post,put
}
