import axios from "axios"

const API = 'https://api.shrtco.de/v2/shorten?url='

function Shorter(url) {
  return axios
    .get(API + url)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error.response.data
    })
}


export default Shorter