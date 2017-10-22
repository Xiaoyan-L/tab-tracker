<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      
      <search-panel />
      <panel title="songs">
        <v-btn slot="action" :to="{name: 'add-song'}" class="cyan accent-2" light small absolute right middle fab>
          <v-icon>+</v-icon>
        </v-btn>
        <div v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex>
              <panel :title="song.title">
                <v-btn slot="action" class="cyan accent-2" light small absolute fab right middle
                  :to="{
                    name:'view-song', 
                    params: {
                      songId: song.id
                    }
                  }">
                  V
                  </v-btn>
                <v-layout>
                  <v-flex xs6>
                    <div class="song-artist">
                      {{song.artist}}
                    </div>
                    <div class="song-genre">
                      {{song.genre}}
                    </div>
                  </v-flex>
                  <v-flex xs6>
                    <img :src="song.albumImageUrl" class="album-image">
                  </v-flex>
                </v-layout>
              </panel>
            </v-flex>  
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SearchPanel from '@/components/SongsSearchPanel'
export default {
  components: {
    SearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-title {
  font-size: 30px;
} 
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 20px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
