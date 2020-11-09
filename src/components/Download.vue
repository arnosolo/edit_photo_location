<template>
    <div class="box">
        <div v-if="!modifiedImg">
            <p>编辑还未完成</p>
        </div>
        <div v-else="!modifiedImg">
            <p>以为照片添加位置信息</p>
        </div>
        <div v-show="modifiedImg">
            <a :href="modifiedImg" :download="imgName" class="btn btn-light">点我下载</a>
            <a class="btn btn-light" @click="backToStart">再来一张</a>
            <img :src="modifiedImg" alt="modifiedImg" class="preview rounded mx-auto d-block">
            <!-- <p>手机上还可以长按下载</p> -->
            <br>
            <a class="btn btn-light" @click="switchPayment">向作者投掷两枚硬币</a>
            <div v-show="showPayment">
                <img src="static/img/alipay_qrcode.jpeg" alt="alipay_qrcode" class="qrcode">
                <a class="btn btn-light" :href="mailto">联系作者</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default { 
        data() {
            return {
                mailto: 'mailto:arno756@outlook.com',
                showPayment: false
            }
        },
        props: ['modifiedImg', 'imgName', 'selecteNav'],
        methods: {
            backToStart() {
                this.selecteNav('1')
            },
            switchPayment() {
                this.showPayment = !this.showPayment
            }
        },
    }
</script>

<style>
   .preview {
        width: 18rem;
    }
    .qrcode {
        width: 14rem;
    }
    .box {
        text-align : center
    }
</style>
