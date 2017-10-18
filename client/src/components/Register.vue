<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
          <form autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-text-field
                  label="Password"
                  hint="At least 8 characters"
                  type="password"
                  v-model="password"
                ></v-text-field>
              <div class="err" v-html="error" />
              <br>
              <v-btn class="cyan" @click="register">Register</v-btn>
          </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const res = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', res.data.user)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .err{
    color: red
  }
</style>
