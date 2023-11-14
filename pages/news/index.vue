<template>
    <div>
        
        <h1>新闻列表页</h1>
        <ul>
            <li style="cursor: pointer;" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                list:[
                    {
                        title:'新闻1',
                        id:1
                    },
                    {
                        title:'新闻2',
                        id:2
                    },
                    {
                        title:'新闻3',
                        id:3
                    },
                    {
                        title:'新闻4',
                        id:4
                    },
                ]
            }
        },
        methods:{
            goDetail(id){
                this.$router.push({
                    path:`/news/${id}`
                })
            }
        }
    }
</script>