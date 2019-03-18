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
            let url = `${URL.pre}indicators/${date}`;
            let response = await service(url);
            commit('getIndicators', response.data.data);
        },
        getOneHour: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours() - 1,
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pre}one_hour/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getOneHour', response);
        },
        getSixHours: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours() - 6,
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pre}six_hours/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getSixHours', response);
        },
        getTwelveHours: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours() - 12,
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pre}twelve_hours/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getTwelveHours', response);
        },
        getTwentyFourHours: async ({commit}) => {
            let date = new Date(),
                hour = date.getHours() - 24,
                month =  `${date.getMonth() + 1}`;
            if(month.length <= 1) month = `0${month}`;
            date = `${date.getFullYear()}-${month}-${date.getDate()}`;
            let url = `${URL.pre}twenty_four_hours/${date}/${hour}`,
                response = await service(url);
            response = filter(response.data.data);
            commit('getTwentyFourHours', response);
        }
    }
}