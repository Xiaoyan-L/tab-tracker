import Api from '@/services/Api.js'

export default {
  index () {
    return Api().get('songs')
  },
  add (Song) {
    return Api().post('songs', Song)
  }
}
