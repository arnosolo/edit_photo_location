<template>
    <div class="box">
        <div v-show="!modifiedImg">
            <p>编辑还未完成</p>
        </div>
        <div v-show="modifiedImg">
            <a :href="modifiedImg" :download="imgName" class="btn btn-light">点我下载</a>
            <a class="btn btn-light" @click="backToStart">再来一张</a>
            <img :src="modifiedImg" alt="modifiedImg" class="preview rounded mx-auto d-block">
            <p>手机上还可以长按下载</p>
        </div>
    </div>
</template>

<script>
    export default { 
        props: ['modifiedImg', 'imgName', 'selecteNav'],
        methods: {
            backToStart() {
                this.selecteNav('1')
            }
        },
    }
</script>

<style>
   .preview {
        width: 18rem;
    }
    .box {
        text-align : center
    }
</style>
