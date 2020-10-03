<template>
  <div class="user">
  
  <van-image src="https://gss0.baidu.com/7Ls0a8Sm2Q5IlBGlnYG/sys/portraith/item/tb.1.166463bf.LfwqD9x9EDjg4IFMUO0hNA?t=1585537305" width="110px" height="110px" style="float:left"/>

  <p>用户账号：{{userid}}</p>
  <br>
  <router-link :to="{name:'Userinfo'}"> 修改收货地址</router-link>
  <br><br>

  <van-grid>
  <van-grid-item icon="phone-o" text="客服热线"  @click="callPhone"/>
  <van-grid-item icon="gem-o" text="会员中心" @click="iconclick"/>
  <van-grid-item icon="free-postage" text="快递运输" @click="iconclick"/>
  <van-grid-item icon="records" text="建议反馈" @click="iconclick4"/>
  </van-grid>

  <van-cell title="我的购物车" is-link to="Cart" />

 <!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>
<!-- 优惠券列表 -->
<van-popup
  v-model="showList"
  round
  position="bottom"
  style="height: 90%; padding-top: 4px;"
>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>

<van-cell is-link title="退出登录" @click="show = true" />
<van-action-sheet
  v-model="show"
  :actions="actions"
  @select="onSelect"
  cancel-text="取消"
  description="您确定要退出登录吗"
  close-on-click-action
/>

<van-cell title="分享" @click="showShare = true"  is-link/>
<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>

  </div>
</template>

<script>

import Vue from 'vue';
import {removeToken} from '../utils/auth.js';
import { Toast } from 'vant';

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠120元',
  reason: '',
  value: 8800,
  name: '金秋大促',
  startAt: 1589105000,
  endAt: 1599105000,
  valueDesc: '88',
  unitDesc: '元',
};


export default {
  name:'User',
  data(){
    return{
      userid:302562737,
      show: false,
      showList:false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      actions: [
        { name: '退出账号' },
        { name: '切换账号' },
      ],
       showShare: false,
      options: [
        [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],[
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
    };
  },
   methods: {
    onSelect(item) {
      this.show = false;
      Toast(item.name);
      removeToken();  //功能突然失效了
      location.reload(); //刷新功能待优化
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    iconclick(){
      Toast('该功能暂未开放，不用期待');
    },
    iconclick4(){
      this.$router.push({name:"Advice"});
    },
     onSelect(option) {
      this.showShare = false;
      
        Toast(option.name+"功能维护中")
      
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    callPhone(){
      window.location.href = 'tel://18866668888'
    },
  },
};
</script>
<style scoped>
img{
  width:25%;
  float:left;
  margin:1rem;
}
.user{
  background-color:#F6F7F9;
}
</style>
