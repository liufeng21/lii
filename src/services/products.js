import {get} from '../utils/request'

export function getProducts(val){
    return get("http://jx.xuzhixiang.top/ap/api/productlist.php?uid=302562737")
}

export function getProductInfo(id){
    return get(`http://jx.xuzhixiang.top/ap/api/detail.php?id=${id}`)
}