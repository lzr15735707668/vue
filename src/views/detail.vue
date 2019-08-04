<template>
    <div>
     详情
     {{detail.name}}
     <div>
         <button @click="changeCount({type:'-',id:detail.id})">-</button>
            {{detail.count}}
         <button @click="changeCount({type:'+',id:detail.id})">+</button>
     </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
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
       ...mapState(['detail'])
    },
    methods:{
        ...mapActions(['getDetail']),
        ...mapMutations(['changeCount'])
    },
    created(){
        let id=this.$route.params.id
         this.getDetail(id)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>