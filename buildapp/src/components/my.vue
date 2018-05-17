<template>
  <div>
    <div class="header">
      <div class="login-info">
        <div>{{username}}</div>
        <img src="../assets/img/header.png">
      </div>
      <div class="loginlink">
        <a href="javascript:;">
          <router-link to="/userLogin">登录</router-link>
        </a>
        <a href="javascript:;" class="reg">
          <router-link to="/userReg">注册</router-link>
        </a>
      </div>
      <div class="fans">
        <div class="fanslist">
          <span>1</span>
          <p>关注</p>
        </div>
        <div class="fanslist">
          <span>1</span>
          <p class="border">粉丝</p>
        </div>
      </div>
    </div>
    <div class="list">
      <ul>
        <li class="gk-text">
          <i class="iconfont icon-gongkai"></i>
          <p>公开博文</p>
          <b class="iconfont icon-jiantouyou"></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i class="iconfont icon-simi"></i>
          <p>秘密博文</p>
          <b class="iconfont icon-jiantouyou"></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i class="iconfont icon-caogaoxiang"></i>
          <p>草稿箱</p>
          <b class="iconfont icon-jiantouyou"></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i class="iconfont icon-shoucang"></i>
          <p>收藏夹</p>
          <b class="iconfont icon-jiantouyou"></b>
          <span>0</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'username'
  ])
}

</script>
<style scoped>
.header {
  height: 2.9rem;
  background: #9e9a95;
}

.login-info {
  text-align: center;
  padding-top: 0.213333rem;
}

.loginlink {
  width: 1.066667rem;
  margin: auto;
  font-size: 0.213333rem;
}

.loginlink a {
  color: #fff;
}

.reg {
  float: right;
}

.fans {
  margin-top: 0.213333rem;
}

.fanslist {
  width: 50%;
  float: left;
  text-align: center;
  font-size: 0.213333rem;
  color: #fff;
}

.border {
  border-left: 0.021333rem solid #fff;
}

.list ul li {
  background: #fff;
  height: 0.79rem;
  border-top: 1px solid #bcbbba;
  border-bottom: 1px solid #7b7c7c;
  line-height: 0.79rem;
}

.list ul li p,
.list ul li i {
  float: left;
  padding: 0 0.106667rem
}

.list ul li p {}

.list ul li b {
  float: right;
}

</style>
