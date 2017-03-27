<template>
    <div class="layer-menu-detail">
        <layer-Item v-for='(item,index) in layers' :zIndex='index' :layerName='item.name'></layer-Item>    
    </div>
</template>

<script>
    import {Card} from 'iview'
    import LayerItem from './Layer-Item.vue'
    import store from '../../store/stores'

    export default{
        name:'layerList',
        components:{
            LayerItem
        },
        computed:{
            layers(){
                return store.state.tools.layerCollect
            }
        }
    }
</script>

<style>

</style>