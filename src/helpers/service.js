import axios from 'axios';

export const URL = {
    socket: 'wss://ws.bitso.com',
    pre: 'http://localhost:8080/test/test/',
    pro: 'https://test.tpinteractiva.com/test/'
}

export const connect = () => {
    let bitso = new WebSocket(URL.socket);
    bitso.onopen = () => {
        let data =  {action: 'subscribe', book: 'btc_mxn', type: 'trades' }
        bitso.send(JSON.stringify(data));
    }
    bitso.onerror = _err => _err;
    bitso.onmessage = _response => {
        let response = JSON.parse(_response.data);
        if(response.payload) {
            let {i, a, r, v} = response.payload[0],
                date = new Date();
            date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            let data = {id: i, value: v, rate: r, amount: a, date: date };
            service(URL.pro+'data', data, 'POST');
        }  
    }
}

export const service = (_url,  _data = null, _method = 'GET') => {
    let config = getConfig(_url, _data, _method);
    try { 
        return axios(config);
    } catch(_err) {
        return _err;
    }
}

export const getConfig = (_url, _params = null, _method = 'GET') => {
    let header = {'Content-Type': 'application/x-www-form-urlencoded'},
    params = new URLSearchParams();
    if(_params)Object.entries(_params).map((_key) =>  params.append(_key[0], _key[1]));
    let config = {
            method: _method,
            url: _url,
            headers: header,
            data: params
        }
    return config;
}