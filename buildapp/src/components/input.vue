<template>
  <div>
    <div class="input-group">
      <span class="input-group-addon iconfont  icon-icon-"></span>
      <input class="form-control loginInput" type="text" maxlength="30" name="usname" value="" id="username" placeholder="请输入用户名" data-bv-field="usname" v-model="getusername">
    </div>
    <div class="input-group">
      <span class="input-group-addon iconfont  icon-mima"></span>
      <input class="form-control loginInput" type="password" name="psword" value="" id="psword" placeholder="请输入密码" v-model="getpassword">
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {
      getusername: '',
      getpassword: ''
    }
  },
  watch: {
    getusername (val, oldVal) { // 普通的watch监听
      this.$store.dispatch('getusername', val)
    },
    getpassword (val) {
      this.$store.dispatch('getpassword', val)
    }
  }
}

</script>
<style scoped>
@import '../../static/css/login.css';

</style>
