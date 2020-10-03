<template>
  <div class="Search">

  <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>

<van-empty description="搜索结果空空如也" v-show="seen"/>

<van-card v-for="item in list"
  :key="item.pid"
  :price="item.pprice"
  :desc="item.pdesc"
  :title="item.pname"
  :thumb="item.pimg"
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
import { getProducts } from '../services/products'
import Vue from 'vue';
import { Toast } from 'vant';
import {addCarts} from '../services/carts'

export default {
  name:'Search',
  data() {
    return {
      value: '',
      list:[],
      seen:true,
    };
  },
  methods: {
    async loadData(val){ //实现搜索功能
        var productlist = new Array;
      for(let i = 0;i<19;i++){
      const res = await getProducts()
      //console.log(res.data.data[i].pname)
      if(res.data.data[i].pname.indexOf(val)!=-1)
      {
      productlist.push(res.data.data[i])
      this.seen=false //加载出搜索结果时隐藏空状态组件
      }}
      if(productlist == ''){
          this.seen=true //如果搜索结果是空的，则恢复显示空状态组件
      }
      console.log(productlist)
      this.list = productlist
      
    },
    onSearch(val) {
      Toast(`您搜索的内容为"`+val+`"`);   
      this.loadData(val);
    },
    onCancel() {
      value=''; //清空输入值
    },
     

    /*onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },*/

     async buy(p){ //添加到购物车功能
      console.log(p);
      const res = await addCarts(p.pid);
      console.log(res);
      this.$toast('添加购物车成功');
    }
  },
}
</script>

<style scoped>
</style>