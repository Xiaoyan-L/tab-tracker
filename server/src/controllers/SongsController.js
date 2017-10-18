const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to load all songs'
      })
    }
  },
  async add (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to add a new song'
      })
    }
  },
  async findOne (req, res) {
    try {
      const song = Song.findOne({
        where: {
          id: req.body.id
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying find song by id'
      })
    }
  }
}
