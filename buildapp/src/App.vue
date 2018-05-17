<template>
  <div id="app">
    <NavHeader v-show="showNav">
    </NavHeader>
    <loading v-show="loadingshow"></loading>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer v-show="footerShow">
    </Footer>
  </div>
</template>
<script>
import Footer from './components/footer.vue'
import NavHeader from './components/nav.vue'
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters([
    'showNav',
    'footerShow',
    'loadingshow'
  ]),

  components: {
    NavHeader,
    Footer
  },
  mounted () {
    var path = this.$route.path
    this.navShow(path)
    this.footShow(path)
  },
  watch: {
    $route (to) {
      var path = to.path
      this.navShow(path)
      this.footShow(path)
    }
  },
  methods: {
    navShow (path) {
      if (path === '/my' || path === '/userLogin' || path === '/userReg') {
        this.$store.dispatch('HideHeader')
      } else {
        this.$store.dispatch('ShowHeader')
      }
    },
    footShow (path) {
      var reg = /sub\/\d+/
      if (reg.test(path)) {
        this.$store.dispatch('HideFooter')
      } else {
        this.$store.dispatch('ShowFooter')
      }
    }
  }
}

</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app {
  max-width: 8.0rem;
  margin: auto;
}

.main {

  margin-bottom: 0.8rem;
}

</style>
