import { service, URL } from '@/helpers/service';
import {filter} from '@/helpers/dataGrap';

export default {
    namespaced: true,
    state: {
        indicators: {},
        oneHour: [],
        sixHours: [],
        twelveHours: [],
        twentyFourHours: []
    },
    mutations: {
        getIndicators(_state, _payload) {
            _state.indicators = {..._payload};
        },
        getOneHour(_state, _payload) {
            _state.oneHour = [..._payload];
        },
        getSixHours(_state, _payload) {
            _state.sixHours = [..._payload];
        },
        getTwelveHours(_state, _payload) {
            _state.twelveHours = [..._payload];
        },
        getTwentyFourHours(_state, _payload) {
            _state.twentyFourHours = [..._payload];
        }
    },
    actions: {
        getIndicators: async({commit}) => {
            let date = new Date(),
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pro}indicators/${date}`;
            let response = await service(url);
            commit('getIndicators', response.data.data);
        },
        getOneHour: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours(),
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pro}one_hour/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getOneHour', response);
        },
        getSixHours: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours(),
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pro}six_hours/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getSixHours', response);
        },
        getTwelveHours: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours(),
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pro}twelve_hours/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getTwelveHours', response);
        },
        getTwentyFourHours: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours(),
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pro}twenty_four_hours/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getTwentyFourHours', response);
        }
    }
}