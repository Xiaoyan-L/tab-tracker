import Api from '@/services/Api.js'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  add (Song) {
    return Api().post('songs', Song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  }
}
