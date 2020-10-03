<template>
  <div class="advice">

  <van-nav-bar
  title="意见反馈"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599712046700&di=19618a6df93de408279e2a0cc357e362&imgtype=0&src=http%3A%2F%2Fdealer0.autoimg.cn%2Fdl%2F1704%2Fnewsimg%2F130324391378226273.jpg" style="width:100%">

  <van-field
  v-model="message"
  rows="2"
  label="留言"
  type="textarea"
  maxlength="50"
  placeholder="请输入您的建议"
  show-word-limit
  class="text"
/>

<van-button type="primary" class="btn" @click="btnclick">提交</van-button>

  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

export default {
  name:'Advice',
  methods:{
    btnclick(){
      Toast("提交成功");
      this.$router.go(-1);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.btn{
  text-align:center;
  position:relative;
  left: calc(50% - 30px);
  top:30px;
}
</style>