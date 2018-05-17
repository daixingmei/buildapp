<template>
  <div class="concern">
    <ul>
      <li v-for="(list) in lists" :key="list.index">
        <h2>{{list.title}}</h2>
        <p>{{list.detail}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lists: []
    }
  },
  mounted () {
    this.getconcern()
  },
  methods: {
    getconcern () {
      this.$axios({
        method: 'get',
        url: '../../static/data/concern.json'
      }).then(function (data) {
        this.lists = data.data
      }.bind(this)).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.concern {
  margin-top: 0.9rem;
}

.concern ul li {
  padding: 0.1rem;
}

.concern ul li p {
  line-height: .3rem;
}
 
</style>
