<template>
  <div>
    首页
    <div>
      <a href="./list">a链接跳转（不推荐）</a>
      <nuxt-link to="/list">nuxt-link跳转</nuxt-link>
      <button @click="routerPush">方法跳转</button>
    
    </div>
    <div>
      <nuxt-link to="/pageA">跳转到pageA首页</nuxt-link>
      <nuxt-link to="/pageB">跳转到pageB首页</nuxt-link>
      <nuxt-link to="/news">跳转到新闻列表页</nuxt-link>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  validate({params,query}){
    console.log('validate')
    return true
  },

  asyncData(){
    //一般在此生命周期发送请求，请求后台数据
    console.log('asyncData')
  },
  fetch(){
    console.log('fetch')
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeDestroy(){
    console.log('beforeDestroy')
  },
  destroyed(){
    console.log('destroyed')
  },
  methods:{
    routerPush(){
      this.$router.push({
        path:'/list'
      })
    }
  }
}
</script>
