import axios from 'axios';

export const URL = {
    socket: 'wss://ws.bitso.com',
    api: 'https://api.bitso.com/public/info'
}

export const apiBitso = async() => {
    let response = await axios.get(URL.api);
    return response.data.btc_mxn;
}

export const connect = () => {
    let bitso = new WebSocket(URL.socket);
    bitso.onopen = () => {
        let data =  {action: 'subscribe', book: 'btc_mxn', type: 'trades' }
        bitso.send(JSON.stringify(data));
    }
    bitso.onerror = _err => console.log(_err);
    bitso.onmessage = _response => {
        let response = JSON.parse(_response.data);
        if(response.payload) setData(response.payload); 
    }
}

export const setData = _data => {
    console.log(_data)
}