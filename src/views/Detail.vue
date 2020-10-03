<template>
  <div class="Detail">

  <van-nav-bar 
  :title="pname"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

<img :src="pimg" class="pic" style="width:100%">
<van-notice-bar scrollable
color="#1989fa" background="#ecf9ff" 
  left-icon="volume-o"
  text="双11狂欢！全场商品促销优惠"
/>

<van-cell center title="价格" icon="balance-o">
  <template #right-icon>
    <div class="price">{{pprice}}</div>
    <van-icon name="passed" class="search=icon" />
  </template>
</van-cell>
<van-cell center title="版本" icon="apps-o">
  <template #right-icon>
    <div class="ver">{{pdesc}}</div>
    <van-icon name="passed" class="search=icon" />
  </template>
</van-cell>

  
<van-goods-action class="van-goods-action">
  <van-goods-action-icon icon="chat-o" text="客服QQ" @click="onClickIcon1" />
  <van-goods-action-icon icon="comment-o" text="评论" @click="onClickIcon" />
  <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
  <van-goods-action-button
    type="danger"
    text="加入购物车"
    @click="onClickButton(pid)"
  />
</van-goods-action>

   </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
import { getProductInfo } from '../services/products';
import {addCarts} from '../services/carts'

export default {
  name:'Detail',
  data(){
      return{
          list:[],
          pname:'',
          pimg:'',
          pprice:'',
          pdesc:'',
          pid:'',
      }
  },
  created(){
      var urlParams = location.hash;
      console.log(urlParams)
      var urlParams2 = urlParams.slice(13,19)
      console.log(urlParams2)
   getProductInfo(urlParams2).then((res)=>{
   this.list = res.data.data;
   console.log(res.data.data);
   this.pname = res.data.data.pname
   this.pimg = res.data.data.pimg
   this.pprice = res.data.data.pprice
   this.pdesc = res.data.data.pdesc
   this.pid = res.data.data.pid
   })
  },
  methods: {
    onClickIcon() {
      Toast('该功能暂未开放');
    },
    onClickIcon1() {
       window.location.href = "http://wpa.qq.com/msgrd?v=3&uin=302562737&site=qq&menu=yes"
    },
    async onClickButton(pid) {
      const res = await addCarts(pid);
      console.log(res);
      this.$router.push({name:"Cart"})
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>
.van-goods-action{
    z-index:2;   
}
.pic{

}


  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>