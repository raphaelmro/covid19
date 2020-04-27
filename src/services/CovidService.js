import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://corona.lmao.ninja/v2',
})

export default {
  getSummaryBrazil() {
    return apiClient.get('/countries/BR')
  },
}
