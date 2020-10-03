import {get} from '../utils/request'

export function addCarts(pid){
    return get(`http://jx.xuzhixiang.top/ap/api/add-product.php?uid=22869&pid=${pid}&pnum=1`);
}

export function loadCarts(pid){
    return get(`http://jx.xuzhixiang.top/ap/api/cart-list.php?id=22869`);
}

export function delCarts(pid){
    return get(`http://jx.xuzhixiang.top/ap/api/cart-delete.php?uid=22869&pid=${pid.pid}`)
}

export function plusCarts(pid){
    return get(`http://jx.xuzhixiang.top/ap/api/cart-update-num.php?uid=22869&pid=${pid.pid}&pnum=${pid.pnum++}`)
}

export function reduceCarts(pid){
    return get(`http://jx.xuzhixiang.top/ap/api/cart-update-num.php?uid=22869&pid=${pid.pid}&pnum=${pid.pnum--}`)
}

