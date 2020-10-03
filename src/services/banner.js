import {get} from '../utils/request'

export function getBanners(){
    return get("http://jx.xuzhixiang.top/ap/api/bannerlist.php?uid=302562737")
}