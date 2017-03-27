<template>
    <div id="mapEl">
    </div>
</template>

<script>
    import mapFactory from '../../scripts/mapFactory';
    import ol from 'openlayers';

    export default {
        name: 'map',
        data () {
            return {
                msg:' text msg',
                map:{}
            }
        },
        mounted(){
            var mapEl = document.getElementById('mapEl');
            this.map = mapFactory.genarateDefaultMap(mapEl);
            this.map.updateSize()
        },
        methods:{

        },
        computed:{

        }
    }
</script>

<style>
    #mapEl{
        height:100%;
        margin-left:281px;
    }
</style>