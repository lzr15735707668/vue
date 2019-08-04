<template>
    <div class="home">
       <header class="header"></header>
       
       <router-view class="mains"></router-view>
       <div class="footer">
           <router-link to='/home/sy'>首页</router-link>
           <router-link to='/home/car'>购物车</router-link>
           <router-link to='/home/my'>我的</router-link>
       </div>
    </div>
</template>
<script>
import {} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
    }
    .header{
        height: 1rem;
        background: red;
    }    
    .footer{
        height: 1rem;
        background: red;
    }
    .mains{
        flex: 1;
    }
</style>