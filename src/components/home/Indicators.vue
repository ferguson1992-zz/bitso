<template>
    <v-layout wrap my-3 ustify-center align-center>
        <v-flex xs12 md8>
            <v-layout class="accent" wrap justify-center align-center>
                <v-flex xs12 md4 pa-3>
                    <h1 class="primary--text title text-md-center">Volúmen 24 Horas</h1>
                    <p class="headline text-xs-center mt-3">valor</p>
                </v-flex>
                <v-flex xs12 md4 pa-3>
                    <h1 class="primary--text title text-md-center">Máximo</h1>
                    <p class="headline text-xs-center mt-3">valor</p>
                </v-flex>
                <v-flex xs12 md4 pa-3>
                    <h1 class="primary--text title text-md-center">Mínimo</h1>
                    <p class="headline text-xs-center mt-3">valor</p>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs12 md4>
            <v-card >
                <v-card-title class="primary--text title text-xs-center">Último precio</v-card-title>
                <v-card-text class="display-1 text-xs-center">precio</v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    name: 'Indicators',
    data() {
        return {

        }
    }
}
</script>

