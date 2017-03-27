<template>
    <a class='menu-anchor'  @click="clickFn">
        <Icon  :type=iconClass size=20 color='white'></Icon >
    </a>
</template>


<script>
//social-buffer-outline
    import {Icon} from 'iview';
    import store from '../../store/stores'

    console.log('icon', Icon);
    export default{
        name:'toolItem',
        components:{
            Icon
        },
        props :[
            'iconClass',
            'toolName'
        ],
        methods:{
            clickFn(){
                store.commit({
                    type:'changeTab',
                    layerName:this.toolName
                })
            }
        }
    }
</script>

<style>
    .menu-anchor{
        display: block;
        padding: 12px;
    }
</style>