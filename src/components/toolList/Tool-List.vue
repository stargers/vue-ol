<template>
    <div class="left_menu_bar">
        <tool-item v-for="tool in tools" :iconClass='tool.className' :toolName='tool.toolName'></tool-item>
    </div>
</template>

<script>
    import ToolItem from './Tool-Item.vue'
    import store from '../../store/stores'

    console.log('toolitem',ToolItem);
    export default{
        name:'toolList',
        components:{
            ToolItem
        },
        computed:{
            tools(){
                console.log('toggie tool init',store.state.tools.toolList);

                return store.state.tools.toolList
            }
        },
        props:['iconClass','toolName']
    }
</script>

<style>
    .left_menu_bar {
        width: 40px;
        background: black;
        height: 100%;
        float: left;
        /*flex-direction: column;*/
    }
</style>