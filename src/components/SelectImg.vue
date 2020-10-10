<template>
    <div class="box">
        <input 
            type="file"     
            @change="handleInput"
            id="file"
            style="display:none;"
        />
        <label for="file" class="btn btn-light">点我选择图片</label>
        <p>选好后自动跳转到位置选择页面.</p>
        <img :src="inputImg" alt="preview" class="preview rounded mx-auto d-block">
    </div>
</template>

<script>
    export default { 
        props: ['inputImg', 'setImg', 'selecteNav', 'setimgName'],
        methods: {
            handleInput (event) {
                // 获取文件对象
                const files = event.target.files
                this.setimgName(files[0].name)
                // 读取文件
                const reader = new FileReader()
                reader.readAsDataURL(files[0])
                reader.onload = (e) => {
                    // 修改预览图片
                    this.setImg(e.target.result)
                    this.selecteNav('2')
                }
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
