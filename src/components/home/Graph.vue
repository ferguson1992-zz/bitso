<template>
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="white"
      elevation="1"
    >
      <v-sparkline v-if="info"
        :labels="labels"
        :value="value"
        color="orange"
        line-width="1"
        padding="10"
      ></v-sparkline>
    </v-sheet>
</template>
<script>

export default {
    name: 'Graph',
    props: ['info'],
    computed: {
      labels() {
        if(this.info){
          return this.info.map(_res => {
            let label = _res.date[1];
            return label.replace('0', '');
          });
        }
      },
      value() {
        if(this.info){
          return this.info.map(_res => parseInt(_res.rate));
        }
      }
    }
}
</script>
<style lang="scss" >
  .v-window-item {
    text {
      font-size: 4px;
    }
  }
  
</style>


