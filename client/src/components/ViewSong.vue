<template>
  <v-layout center>
    <v-flex xs8 offset-xs2>
      <panel :title="song.title">
        <v-layout>
          <v-flex xs6>
            <div class="song-album">
              {{song.artist}}---{{song.album}}---{{song.genre}}
            </div>
            <div class="grey lighten-3 pa-3 mt-2">
              {{song.lyrics}}
            </div>
            
          </v-flex>
          <v-flex xs6>
            <img :src="song.albumImageUrl" class="album-image"/>
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
  </v-layout>
  
  
</template>

<script>
import SongSerive from '@/services/SongsService'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongSerive.show(songId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-album {
  font-size: 20px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
