<template>
    <v-tabs
        v-model="active"
        slider-color="primary"
    >
        <v-tab :key="0">1 hrs</v-tab>
        <v-tab :key="1">6 hrs</v-tab>
        <v-tab :key="2">12 hrs</v-tab>
        <v-tab :key="3">24 hrs</v-tab>
        <v-tab-item :key="0">
            <graph v-if="oneHour" :info="oneHour" ></graph>
            <v-card v-else>
                <v-card-title class="primary--text title text-xs-center">Procesando Información</v-card-title>
            </v-card>
        </v-tab-item>
        <v-tab-item :key="1">
            <graph v-if="sixHours" :info="sixHours" ></graph>
            <v-card v-else>
                <v-card-title class="primary--text title text-xs-center">Procesando Información</v-card-title>
            </v-card>
        </v-tab-item>
        <v-tab-item :key="2">
            <graph v-if="oneHour" :info="twelveHours" ></graph>
            <v-card v-else>
                <v-card-title class="primary--text title text-xs-center">Procesando Información</v-card-title>
            </v-card>
        </v-tab-item>
        <v-tab-item :key="3">
            <graph v-if="oneHour" :info="twentyFourHours" ></graph>
            <v-card v-else>
                <v-card-title class="primary--text title text-xs-center">Procesando Información</v-card-title>
            </v-card>
        </v-tab-item>

    </v-tabs>
</template>
<script>
import Graph from './Graph';
import { mapActions, mapState } from 'vuex';
import { setInterval } from 'timers';

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
        ...mapActions('bitcoin', ['getOneHour', 'getSixHours', 'getTwelveHours', 'getTwentyFourHours']),
        init() {
            this.getOneHour();
            this.getSixHours();
            this.getTwelveHours();
            this.getTwentyFourHours();
            setInterval(() => {
                this.getOneHour();
                this.getSixHours();
                this.getTwelveHours();
                this.getTwentyFourHours();
            }, 1000 * 60 * 60);
        }
    },
    mounted() {
        this.getOneHour();
        this.getSixHours();
        this.getTwelveHours();
        this.getTwentyFourHours();
    }
}
</script>

