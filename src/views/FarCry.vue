<template>
  <div class="farcry">
   <van-nav-bar
  title="孤岛惊魂专区"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

  <van-image width="100%"  src="https://static-cstore.cdn.ubi.com/cstatic/on/demandware.static/-/Library-Sites-shared-library-web/default/dw2667811e/images/category-banners/FC_FWD_SALE.jpg" />

  <van-card v-for="item in list"
  :key="item.pid"
  :price="item.pprice"
  :desc="item.pdesc"
  :title="item.pname"
  :thumb="item.pimg"
  @click="todetail(item)"
>
<template #tags>
    <van-tag plain type="danger">人气</van-tag>
  </template>
  <template #footer>
    <van-button @click="buy(item)" type="danger" size="mini">购买</van-button>
  </template>
  </van-card>

   </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
import { getProducts } from '../services/products'
import {addCarts} from '../services/carts'

export default {
name:'AssassinCreed',
created(){
    this.loadData()
},
data(){
    return{
        list:[],
        val:"孤岛惊魂",
    }
},
methods:{
    async loadData(val){ //实现筛选功能
      var productlist = new Array;
      for(let i = 0;i<20;i++){
      const res = await getProducts()
      if(res.data.data[i].pname.indexOf(this.val)!=-1)
      {
      productlist.push(res.data.data[i])
      }}
      console.log(productlist)
      this.list = productlist
      },
      async buy(p){ //添加到购物车功能
      console.log(p);
      const res = await addCarts(p.pid);
      console.log(res);
      this.$toast('添加购物车成功');
    },
    async todetail(p){
      console.log(p);
      let productid = p.pid;
      this.$router.push({path:`/detail?pid=${productid}`})
      },
      onClickLeft() {
      this.$router.go(-1);
    },
}
}
</script>