<template>
    <div>
        <div v-for="item in list" :key="item.id">
            <p  @click="link(item.id)">{{item.name}}</p>
            <div>
                <button>-</button> 
                {{item.count}}
                <button>+</button>
                </div> 
            <p>{{item.price}}</p>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {

    computed:{
        ...mapState(['list'])
    },
    methods:{
        ...mapActions(['getList']),
        link(id){
            this.$router.push('/detail/'+id)
            
        }
    },
    created(){
        this.getList()
    }
   
}
</script>
<style scoped lang="">

</style>