<template>
  <div class="cart">

  <van-nav-bar 
  title="购物车"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

 <van-card v-for="item in list"
  :key="item.pid"
  :num="item.pnum"
  :price="item.pprice"
  :desc="item.pdesc"
  :title="item.pname"
  :thumb="item.pimg"
>
<template #tags>
    <van-tag plain type="danger">热门</van-tag>
  </template>
  <template #footer>
    <van-button @click="plus(item)" size="mini">增加</van-button>
    <van-button @click="reduce(item)" size="mini">减少</van-button>
    <van-button @click="del(item)" type="danger" size="mini">删除</van-button>
     
  </template>
  </van-card>

<van-submit-bar :price="price" button-text="立即购买" @submit="onSubmit" />

  </div>
</template>

<script>
import {loadCarts} from '../services/carts';
import {delCarts} from '../services/carts';
import {plusCarts} from '../services/carts';
import {reduceCarts} from '../services/carts';
import Vue from 'vue';
import { Toast } from 'vant';


export default {
  name:'Cart',
  created(){ //加载购物车列表
    loadCarts().then((res)=>{
    this.list = res.data.data;
    this.$on('init',this.jisuanprice); //计算总价功能决定放弃
    this.$emit('init',this.price);
    });
  },
  data(){
    return{
      list:[],
      price:2736
    }
  },
  methods:{
    async del(p){ /*删除购物车商品*/
      console.log(p);
      const res = await delCarts(p);
      console.log(res);
      location.reload(); /*刷新功能待优化*/
    },
    onClickLeft() {
      this.$router.go(-1); //返回上一个页面
    },   
    async plus(p){ //商品数量+1
    const res = await plusCarts(p);
    },
    async reduce(p){ //商品数量-1
    const res = await reduceCarts(p);
    },
    jisuanprice(){
      var totalprice = res.data.data.pprice 
    }

    }
  }

</script>
<style scoped>
</style>
