/**
 * author:xr
 * descript: toolList item Collection state config
 */

import vuex from 'vuex'
//左侧功能栏  用于切换编辑栏栏目信息
const toolModule = {
    state: {
        //当前编辑栏 展示内容
        currentTool:'LayerList',
        //功能按钮设置
        toolList: [{
            className: 'social-buffer-outline',
            toolName:'LayerList'
        }, {
            className: 'compose',
            toolName:'LayerEditor'
        }],
        //地图展示的图层列表
        //}{XR TODO
        layerCollect: [{
            name: '亿二三四五六起吧就是',
        }, {
            name: 'layer2'
        }, {
            name: 'layer3'
        }, {
            name: 'layer4'
        }, {
            name: 'layer5'
        }, {
            name: 'layer6'
        }, {
            name: 'layer7'
        }, {
            name: 'layer8'
        }, {
            name: 'layer9'
        }]
    },
    mutations:{
        changeTab(state,{ layerName }){
            state.currentTool = layerName;
        }
    }
}

export default toolModule