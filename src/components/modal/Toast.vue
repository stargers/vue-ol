<template>
    <Button type="primary" @click="modal1 = true">显示对话框</Button>
    <Modal
        v-model="modal1"
        :title="modalTitle"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>{{modalText}}</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                modalTitle:'警告',
                modalText:'对话框内容'
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
