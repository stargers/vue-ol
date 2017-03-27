<template>
    <Card class="layer-card" :class="'layer-index-'+zIndex" padding="8">
        <Row>
            <Col  class="layer-checkbox-col" span = "12">
                <Checkbox>
                    <span>{{layerName}}</span>
                </Checkbox>    
            </Col>
            <Col class="layer-button-col" span = "6">
                <Button class="layer-edit-button" type="primary" size="small">
                    edit
                </Button>
            </Col>
            <Col class="layer-button-col" span = "6">
                <Button class="layer-delete-button" type="error" size="small">
                    delete
                </Button>    
            </Col>
        </Row>
    </Card>
</template>

<script>
    import {Card, Checkbox,Button, Row, Col} from 'iview'

    export default{
        name:'layerItem',
        components:{
            Card,
            Checkbox,
            Button,
            Row,
            Col
        },
        props:[
            'layerName',
            'zIndex'
        ]
    }
</script>

<style lang="scss">
.layer-card{
    text-alige:center;
    .layer-checkbox-col{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow:hidden;
    }
    .layer-button-col{
        text-align:center;
    }
}
    

</style>