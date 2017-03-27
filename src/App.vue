<template>
  <div id="app">
    <tool-list></tool-list>
    <div id="side-menu-detail" keep-alive>
      <component  :is="currentTab" ></component>
    </div>


    <Map></Map>

  </div>
</template>

<script>
import {Map, ToolList, LayerList,LayerEditor} from './components/componentsBase';
import store from './store/stores'

export default {
  name: 'app',
  components:{
    //base components
    Map,
    ToolList,
    //multi-components choose one
    LayerList,
    LayerEditor
  },
  computed:{
    currentTab(){
      return store.state.tools.currentTool
    }
  }
}
</script>

<style lang="scss">
  *{
    margin:0px;
    padding:0px;
  }

  #side-menu-detail{
    width:240px;
    border-right:1px solid #ddd;
    height:100%;
    float:left;
  }

  #app{
    height:100%;
    width:100%;
  }
</style>
