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
        dark
      >
        BITSO
      </v-btn>
    </v-toolbar>

    <v-content>
      <component :is="active"></component>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import {service} from './helpers/service';

service('ticker');
let bitso = new WebSocket('wss://ws.bitso.com');

bitso.onopen = () => {
  bitso.send(JSON.stringify({ action: 'subscribe', book: 'btc_mxn', type: 'trades' }));
  //bitso.send(JSON.stringify({ action: 'subscribe', book: 'btc_mxn', type: 'diff-orders' }));
  //bitso.send(JSON.stringify({ action: 'subscribe', book: 'btc_mxn', type: 'orders' }));
}

bitso.onmessage = _response => {
  let response = JSON.parse(_response.data);
  if(response.payload) console.log(response)
}

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      active: 'HelloWorld'
    }
  }
}
</script>

<style lang="scss">
  .logo{
    height: 100%;
  }
</style>



