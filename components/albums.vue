<template>
    <div class="albums-wrap">
        <h3>相册展示</h3>
        <ul>

            <li v-for="item in list" :key="item.img">
                <img class="img-box" :src="item.img" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        async fetch(){
            /**
             * fetch是有this
             * 组件中请求数据
             */
            let res  = await this.$axios.get('http://101.35.18.18:8777/m_jddc/api/more_album',{page:1});
    
            this.list = res.data.data.list
        }
    }
</script>

<style scoped  lang="scss">
    .albums-wrap{
        padding-top: 20px;
        h3{
            font-size: 24px;
            font-weight: bold;
        }
        .img-box{
            width: 150px;
            height: 150px;
            margin-right: 10px;
        }
    }
</style>