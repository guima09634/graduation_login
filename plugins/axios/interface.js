import axios from './axios'

export default {
  queryGame: params => {
    return axios.get('/api/game/query', {
      params
    })
  }
}
