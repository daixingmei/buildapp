<template>
  <div>
    <div class="back">
      <i class="iconfont  icon-jiantou4" onclick="window.history.go(-1)"></i>
    </div>
    <div class="head">
      <img src="../assets/img/header.png">
    </div>
    <div>
      <form>
        <Input></Input>
        <button type="button" @click="login()" class="login">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
import Input from '../components/input.vue'
import { Group, Toast, XInput } from 'vux'
import { mapGetters } from 'vuex'
export default {
  components: {
    Group,
    Toast,
    XInput,
    Input
  },
  computed: mapGetters([
    'getusername',
    'getpassword'
  ]),
  methods: {
    login () {
      if (this.getusername !== 'dxm') {
        return this.warn('用户名不正确')
      } else if (this.getpassword !== '123456') {
        return this.warn('密码不正确')
      } else {
        this.$router.push({ path: 'my' })
        this.$store.dispatch('UserName', this.getusername)
      }
    },
    warn (msg) {
      this.$vux.toast.text(msg, 'middle')
    }
  }
}

</script>
<style scoped>
@import '../../static/css/login.css';

</style>
