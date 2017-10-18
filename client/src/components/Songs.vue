<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="songs">
        <v-btn slot="action" @click="navigateTo({name: 'add-song'})" class="cyan accent-2" light small absolute right middle fab>
          <v-icon>+</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
          {{song.title}}--
          {{song.artist}}--
          {{song.album}}
        </div>
      </panel>
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
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    //  do a request to the backend for all the songs.
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
