<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="mo(Id)" value="name">点击</button>
    <div>{{Id}}</div>
    <div class="box">
      <ul v-for="(shu,id) in shuju" :key="id">
        <li>{{shu[0].id}}</li>
        <li>{{shu[0].much}}</li>
        <li><img :src="shu[0].img" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import one from '@/components/one'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      a: 1,
      ids: '1,2,3,4,5,6,7,8,9',
      arr: [
      ],
      id: 0,
      name: ''
    }
  },
  computed: {
    ...mapState(['shuju', 'num', 'Id'])
  },
  components: {},
  methods: {
    ...mapMutations({mo: 'pu'}),
    mo () {
      console.log(this.a++)
      mapMutations({mo: 'pu'})
    }
  },
  deleted (a) {
    console.log(this.arr[a].id)
    this.arr.splice(a, 1)
  },
  created () {
    // ...mapMutations({"mess"}),
    this.$store.commit('mess')
    this.$store.dispatch('getlist')
    // this.$axios.get('/public/list.json').then(({data}) => {
    //   console.log(data)
    // })
  }
}
</script>

<style >
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.for {
  display: flex;
}
.box{
  /* display: flex; */
  width: 100%;
}
.box ul{
  display: flex;
}
</style>
