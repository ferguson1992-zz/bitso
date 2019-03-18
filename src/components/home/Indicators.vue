<template>
    <v-layout wrap my-3 ustify-center align-center>
        <v-flex xs12 md6>
            <v-layout class="accent" wrap justify-center align-center>
                <v-flex xs12 md6 pa-3>
                    <h1 class="primary--text title text-md-center">Máximo</h1>
                    <p class="headline text-xs-center mt-3" v-if="indicators.max">{{indicators.max}} <span class="primary--text">MXN</span></p>
                    <p class="headline text-xs-center mt-3" v-else>--</p>
                </v-flex>
                <v-flex xs12 md6 pa-3>
                    <h1 class="primary--text title text-md-center">Mínimo</h1>
                    <p class="headline text-xs-center mt-3" v-if="indicators.min">{{indicators.min}} <span class="primary--text">MXN</span></p>
                    <p class="headline text-xs-center mt-3" v-else>--</p>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 md4 offset-md2>
            <v-card >
                <v-card-title class="primary--text title text-xs-center">Último precio</v-card-title>
                <v-card-text class="display-1 text-xs-center">{{indicators.value}} <span class="primary--text">MXN</span></v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'Indicators',
    data() {
        return {

        }
    },
    computed: {
        ...mapState('bitcoin', ['indicators'])
    },
    methods: {
        ...mapActions('bitcoin', ['getIndicators'])
    },
    mounted(){
        this.getIndicators();
    }
}
</script>

