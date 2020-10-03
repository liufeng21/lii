import {get} from '../utils/request'

export function login(data){
    return get(`http://jx.xuzhixiang.top/ap/api/login.php?username=${data.username}&password=${data.password}`);
    console.log(data)
}

export function reg(data){
    return get(`http://jx.xuzhixiang.top/ap/api/reg.php?username=${data.username}&password=${data.password}`);
    console.log(data)
}