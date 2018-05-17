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
        <button type="button" @click="reg()" class="login">注册</button>
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
    reg () {
      if (this.getusername === '') {
        return this.warn('用户名不能为空')
      } else if (this.getpassword === '') {
        return this.warn('密码不能为空')
      } else {
        this.$router.push({ path: 'my' })
      }
    },
    warn (msg) {
      this.$vux.toast.text(msg, 'middle')
    }
  }
}

</script>
<style scoped>
@import '../assets/css/login.css';

</style>
