<template>
  <v-layout>
    <v-flex xs5>
      <panel title="Add A Song">
        <v-text-field label="Title" :rules="[required]" required v-model="song.title"></v-text-field>
        <v-text-field label="Artist" :rules="[required]" required v-model="song.artist" ></v-text-field>
        <v-text-field label="Genre" :rules="[required]" required v-model="song.genre"></v-text-field>
        <v-text-field label="Album" :rules="[required]" required v-model="song.album"></v-text-field>
        <v-text-field label="AlbumImage" :rules="[required]" required v-model="song.albumImageUrl"></v-text-field>
        <v-text-field label="YoutubeId" :rules="[required]" required v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-3">
      <panel title="Song Structure">
        <v-text-field multi-line label="Lyrics" :rules="[required]" required v-model="song.lyrics"></v-text-field>
        <v-text-field multi-line label="Tab" :rules="[required]" required v-model="song.tab"></v-text-field>
      </panel>
      <v-btn class="cyan" @click="add" dark>add</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async add () {
      const areAllFilledIn = Object.keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.add(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
