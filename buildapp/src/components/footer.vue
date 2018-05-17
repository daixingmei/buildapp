<template>
  <div class="footer">
    <ul>
      <router-link tag="li" to="/home" active-class>
        <a href="javascript:;">
          <div class="mt">
            <i class=" iconfont icon-shouye"></i>
            <div>首页</div>
          </div>
        </a>
      </router-link>
      <router-link tag="li" to="/concern" class="footerFollow">
        <a href="javascript:;">
          <div>
            <i class=" iconfont icon-guanzhu"></i>
          </div>
        </a>
      </router-link>
      <router-link tag="li" to="/my">
        <a href="javascript:;">
          <div class="mt">
            <i class=" iconfont icon-custom-my"></i>
            <div>我的</div>
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #9e9a95;
  z-index: 9;
}

.footer ul {
  width: 8rem;
  margin: auto;
}

.footer ul li {
  float: left;
  width: 2.66rem;

  text-align: center;
}

.footer ul li a {
  width: 100%;
  height: 100%;
  display: inline-block;
  font-size:0.285rem;
}

.footer ul li a i {
  font-size: 0.3rem;
}

.icon-guanzhu {
  line-height: 0.8rem;
}

.mt {
  margin-top: 0.1rem;
}

.active a {
  color: #3399cc;
}

</style>
