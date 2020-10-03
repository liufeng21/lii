<template>
<div class="login">
<img src="../assets/AC.jpg" alt="logo" class="logo">
  <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="username"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
<router-link class="reg-link" :to="{name:'Reg'}">没有账号？立即注册</router-link>
  </div>
</template>

<script>
import {setToken} from '../utils/auth';
import {login} from '../services/auth';
import {Toast} from 'vant'
export default{
name:'Login',
data() {
    return {
      username: '',
      password: '',
    };
  },
methods: {
    async onSubmit(values) {
      const result = await login(values);
      console.log(result);
      if(result.data.code == 1){
Toast.success('登录成功');
this.$router.push({name:'Home'});
setToken(result.data.data.token)
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
.reg-link{
  float:right;
  margin-right:0.5rem;
  font-size:0.5rem;
  color:red;
}
</style>