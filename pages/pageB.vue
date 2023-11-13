<template>
    <div>
        pageB首页
        <div>
            <nuxt-link to="/pageB/a">跳转到a页</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default{
        middleware:'test',//局部中间件，引入中间件文件
    }
</script>