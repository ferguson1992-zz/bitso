export const filter = (_data) => {
    let hash = [];
    let res =  _data.filter(_res => {
        let exist = !hash[_res.rate] || false;
        hash[_res.rate] = true;
        return exist;
    });
    if(res.length > 10) {
        let aux = Math.ceil(res.length/10);
        let ctrl = 0;
        res = res.map((_res, _key) => {
            if(_key === ctrl) {
                ctrl += aux;
                _res.date = _res.date.split(' ');
                return _res;
            }
        });
        res = res.filter(_res => _res);
    }
    return res;
}