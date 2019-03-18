<template>
    <v-tabs
        v-model="active"
        slider-color="primary"
    >
        <v-tab :key="0">1 hrs</v-tab>
        <v-tab :key="1">6 hrs</v-tab>
        <v-tab :key="2">12 hrs</v-tab>
        <v-tab :key="3">1 día</v-tab>
        <v-tab-item :key="0">
            <graph v-if="oneHour" :info="oneHour" ></graph>
        </v-tab-item>
        <v-tab-item :key="1">
            <graph v-if="sixHours" :info="sixHours" ></graph>
        </v-tab-item>
        <v-tab-item :key="2">
            <graph v-if="oneHour" :info="twelveHours" ></graph>
        </v-tab-item>
        <v-tab-item :key="3">
            <graph v-if="oneHour" :info="twentyFourHours" ></graph>
        </v-tab-item>

    </v-tabs>
</template>
<script>
import Graph from './Graph';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Graphs',
    components: {
        Graph
    },
    data() {
        return {
            active: 0
        }
    },
    computed: {
        ...mapState('bitcoin', ['oneHour', 'sixHours', 'twelveHours', 'twentyFourHours'])
    },
    methods: {
      ...mapActions('bitcoin', ['getOneHour', 'getSixHours', 'getTwelveHours', 'getTwentyFourHours'])
    },
    mounted() {
        this.getOneHour();
        this.getSixHours();
        this.getTwelveHours();
        this.getTwentyFourHours();
    }
}
</script>

