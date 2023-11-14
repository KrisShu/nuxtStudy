<template>
    <!-- 该页面是动态路由 动态路由的语法是 _页面名称.vue -->
    <div>
        <h1>新闻详情页</h1>
        {{ id }}
    </div>
</template>

<script>
    export default{
        data(){
            return{
                id:'',
            }
        },
        head(){ //head方法就是动态配置 当前页面的head内容块
            return{
                title: this.id,
                meta:[
                    
                ]
            }
        },
        created(){
            console.log("详情页",this.$route)
            this.id = this.$route.params.id
        }
    }
</script>