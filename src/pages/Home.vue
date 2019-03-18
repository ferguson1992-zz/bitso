<template>
    <v-layout align-center ustify-space-around mt-5 wrap>
        <v-flex xs6 >
            <div class="title">MERCADO</div>
        </v-flex>
        <v-flex xs6>
            <div class="title text-xs-right primary--text">BTC/MXN</div>
        </v-flex>
        <v-flex xs12>
            <indicators/>
        </v-flex>
        <v-flex xs12 mb-5>
            <graphs/>
        </v-flex>
    </v-layout>
</template>
<script>
import Indicators from '@/components/home/Indicators';
import Graphs from '@/components/home/Graphs';

export default {
    name: 'Home',
    components: {
        Indicators,
        Graphs
    }
}
</script>
