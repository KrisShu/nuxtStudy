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

    <div>
      <hr>
      <h2>列表数据展示</h2>
      <ul>
        <li v-for="item in list" :key="item.img">
          {{ item.title }}
        </li>
      </ul>
      <albums></albums>
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

    async asyncData({$axios}) {
		// 仅限于页面组件的生命周期
    //一般在此生命周期发送请求，请求后台数据，（组件页面就不能使用）
    //不能使用this
      console.log('asyncData')

      /**
       * 使用$axios
       * 1.1 yarn add @nuxtjs/axios
       * 1.2 在 nuxt.config.js 中的modules 配置 '@nuxtjs/axios'
       */
      // console.log('$axios$axios',$axios)

      let res  = await $axios.get('http://101.35.18.18:8777/m_jddc/api/more_album',{page:1});
      // let res  = await $axios.get('http://testapi/xuexiluxian.cn/api/slider/getSliders');
      // console.log('res',res.data.data.list)
      let list = res.data.data.list
      return {
        list
      }
    },
    fetch() {
      /**
       * fetch是有this
       * 组件中请求数据  （具体 查看 albums组件）
       */
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
    data(){
      return{
        list:[]
      }
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

