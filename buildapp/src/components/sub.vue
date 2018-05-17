<template>
  <div class="sub">
    <div class="nav">
      <i class="iconfont  icon-jiantou4" onclick="window.history.go(-1)"></i>
    </div>
    <h2 class="h2">{{lists.title}}</h2>
    <div class="time">
      <p>{{lists.time|formatTime}}</p>
    </div>
    <div class="subcontent">
      <p v-html="lists.content"></p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import filter from '../components/filter'
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))
export default {
  data () {
    return {
      lists: {}
    }
  },
  mounted () {
    this.getdata(this.$route.params.id)
    if (this.$route.path.lastIndexOf('sub') > 0) {
      this.$store.dispatch('HideFooter')
    }
  },
  watch: {
    $route (to) {
      var reg = /sub\/\d+/
      if (reg.test(to.path)) {
        this.getdata(this.$route.params.id)
        this.$store.dispatch('HideFooter')
      }
    }
  },
  methods: {
    getdata (id) {
      this.$axios.get('/static/data/sub.json').then(function (res) {
        this.lists = res.data[id - 1]
        console.log(this.lists)
      }.bind(this))
        .catch(function () {})
    }
  }
}
</script>
<style scoped>
.nav {
  height: 0.8rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
}
.nav i {

  line-height: 0.8rem;
  font-size: 0.266667rem;
}
.h2 {
  margin-top: .8rem;
  text-align: center;
  padding: 0.106667rem 0;
}
.sub {
  padding: 0.213333rem;
}
.subcontent p {
  line-height: 0.426667rem;
}
</style>
