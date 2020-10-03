<template>
  <div class="hot">  

  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in banners" :key="item.banner_id">
  <img :src="item.banner_img_url">
  </van-swipe-item>
  </van-swipe>


<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
<van-card v-for="item in list"
  :key="item.pid"
  :price="item.pprice"
  :desc="item.pdesc"
  :title="item.pname"
  :thumb="item.pimg"
  @click="todetail(item)"
>
<template #tags>
    <van-tag plain type="danger">热卖</van-tag>
  </template>
  <template #footer>
    <van-button @click="buy(item)" type="danger" size="mini">购买</van-button>
  </template>
  </van-card>
</van-list>



  </div>
</template>

<script>
import {getProducts} from '../services/products'
import {getBanners} from '../services/banner'
import {addCarts} from '../services/carts'
import {loadCarts} from '../services/carts'
import Vue from 'vue';

export default {
  name:'Hot',
  data(){
    return{
      list:[],
      banners:[],
      loading: false,
      finished: false,
    }
  },
  created(){
    this.loadData();
    getBanners().then((res)=>{
    this.banners = res.data.data;
    });
  },
  methods:{
    async loadData(){
      const res = await getProducts()
      this.list = res.data.data       
    },   
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 0; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
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
  }
}
</script>

<style scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 0px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item img{   
    height:100%;
    width:100%;
  }
  
</style>