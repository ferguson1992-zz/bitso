import axios from 'axios';

export const url = 'https://api-dev.bitso.com/v3/';

export const service = async(_type, _parameters = undefined) => {
    if (!_type) return 'Punto de entrada es necesario';
    let parameter = _parameters ? _parameters : { params: _parameters };
    console.log(parameter);
    let response = await axios.get(url + _type + '/?book=btc_mxn');
    console.log(response);
}