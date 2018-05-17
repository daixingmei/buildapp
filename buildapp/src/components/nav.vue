<template>
  <div class="nav">
    <ul>
      <router-link to="/home" tag="li" active-class>
        <a href="javascript:;">首页</a>
      </router-link>
      <router-link to="/concern" tag="li">
        <a href='javascript:;'>关注</a>
      </router-link>
      <router-link to="/column" tag="li">
        <a href="javascript:;">栏目</a>
      </router-link>
    </ul>
  </div>
</template>
<style scoped>
.nav {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 9;
}

.nav ul {
  width: 8rem;
  overflow: hidden;
  margin: auto;
}

.nav ul li {
  width: 2.66rem;
  text-align: center;
  font-size:0.375rem;
  float: left;
  line-height: 0.8rem;
}

.nav ul li a {
  text-decoration: none;
  color: #333;
}

.active {
  border-bottom: 0.106667rem solid #3399cc
}

</style>
