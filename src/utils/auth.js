

export function setToken(val){
    localStorage.setItem('token',val)
}

export function getToken(){
    return localStorage.getItem('token')
}

export function removeToken(){
    return localStorage.removeItem('token')
}

//是否登录
export function isLogined(){
    if(getToken()){
        return true;
    }else{
    return false;
}
}