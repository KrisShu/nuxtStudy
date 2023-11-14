<template>
	<div>
		<div class="title">
			<h1> 首页 </h1>
			<h2> 副标题</h2>
		</div>
		<div>
			<a href="./list">a链接跳转（不推荐）</a>
			<nuxt-link to="/list">nuxt-link跳转</nuxt-link>
			<el-button type="primary" @click="routerPush">方法跳转</el-button>
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
    validate({
      params,
      query
    }) {
      console.log('validate')
      return true
    },

    asyncData() {
      //一般在此生命周期发送请求，请求后台数据
      console.log('asyncData')
    },
    fetch() {
      console.log('fetch')
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeDestroy() {
      console.log('beforeDestroy')
    },
    destroyed() {
      console.log('destroyed')
    },
    methods: {
      routerPush() {
        this.$router.push({
          path: '/list'
        })
      }
    }
  }

</script>

<style scoped lang="scss">
/* //

全局样式在对应的nuxt.config.js文件的css模块配置

 1.注意使用scss要安装对应的模块  
 yarn add --save-dev sass sass-loader@10
 2.scoped 要添加上 以上组件之间的样式污染 
 */
 
  .title{
	h1 {
		font-size: 30px;
		font-weight: bold;
	}
	h2 {
		font-size: 24px;
		font-weight: bold;
	}
  }

</style>

