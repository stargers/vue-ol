import Map from './map/Map.vue'
import ToolList from './toolList/Tool-List.vue'
import LayerList from './layer_display/Layer-List.vue'
import LayerEditor from './layer_edit/Layer-Editor.vue'

import iview from 'iview';

var core = {}

Object.assign(core,{
    Map,
    ToolList
},iview);


export {Map, ToolList, LayerList,LayerEditor}