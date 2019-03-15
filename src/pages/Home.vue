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
    </v-layout>
</template>
<script>
import Indicators from '@/components/home/Indicators';
export default {
    name: 'Home',
    components: {
        Indicators
    }
}
</script>
