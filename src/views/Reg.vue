<template>

<div class="login">
<img src="../assets/AC.jpg" alt="logo" class="logo">
  <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="username"
    label="用户名"
    placeholder="用户名"
    :rules="[{ pattern, message: '请正确填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[{ pattern2, message: '密码必须包含数字与字母，长度为8-16位' }]"
  />
  <van-field
    v-model="repwd"
    type="password"
    name="repwd"
    label="确认密码"
    placeholder="确认密码"
    :rules="[{ pattern3, message: '请再次填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
<router-link class="login-link" :to="{name:'Login'}">已有账号？我要登录</router-link>
  </div>
</template>

<script>
import {reg} from '../services/auth';
import {Toast} from 'vant'

export default{
name:'Login',
data() {
    return {
      username: '',
      password: '',
      repwd:'',
      pattern:/^[a-zA-Z0-9_-]{4,16}$/, //正则表达式怎么分别验证
      pattern2:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
      pattern3:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
    };
  },
methods: {
  async  onSubmit(values) {
      const result = await reg(values);
      console.log(result);
      if(result.data.code == 1){
Toast.success('注册成功');
this.$router.push({name:'Login'});
      }
      else{
Toast.fail(result.data.msg)
      }
    },
  },
}
</script>

<style scoped>
.logo{
width:50%;
display:block;
margin: 0 auto;
text-align:center;
}
.login-link{
  float:right;
  margin-right:0.5rem;
  font-size:0.5rem;
  color:red;
}
</style>