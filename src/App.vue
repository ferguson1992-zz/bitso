<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BITCOIN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        href="https://bitso.com/"
        target="_blank"
        color="primary"
        outline
      >
        BITSO
      </v-btn>
    </v-toolbar>

    <v-content fluit fill-height>
      <v-layout justify-center align-center row wrap>
          <v-flex xs11 sm10 xl8>
            <component :is="active"></component>
          </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import {connect, apiBitso} from './helpers/service';
import Home from './pages/Home';

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      active: 'home'
    }
  },
  methods : {
    init() {
      connect();
    }
  },
  mounted() {
    this.init()
  }
}
</script>



