<template>
  <div>
    <mt-swipe :show-indicators="false">
      <mt-swipe-item>hi</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" style="text-decoration:none;"><h6>1 选照片</h6></mt-tab-item>
      <mt-tab-item id="2" style="text-decoration:none;"><h6>2 选地点</h6></mt-tab-item>
      <mt-tab-item id="3" style="text-decoration:none;"><h6>3 下载成果</h6></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1"><br>
        <transition name="fade">
          <SelectImg :inputImg="inputImg" :setImg="setImg" :selecteNav="selecteNav"
            :setimgName="setimgName" v-show="selected=='1'"/>
        </transition>
      </mt-tab-container-item>
      <mt-tab-container-item id="2"><br>
        <transition name="fade">
          <SelectPosition :setCoordinate="setCoordinate" :selecteNav="selecteNav" 
            :convertedCoordinate="convertedCoordinate" :inputImg="inputImg" 
            :setModifiedImg="setModifiedImg" v-show="selected=='2'"/>
        </transition>
      </mt-tab-container-item>
      <mt-tab-container-item id="3"><br>
        <transition name="fade">
          <Download :modifiedImg="modifiedImg" :imgName="imgName" 
            :selecteNav="selecteNav" v-show="selected=='3'"/>
        </transition>
      </mt-tab-container-item>
    </mt-tab-container>
    
  </div>
</template>

<script>
  import SelectImg from './components/SelectImg'
  import SelectPosition from './components/SelectPosition'
  import Download from './components/Download'
   export default { 
     data() {
       return {
         inputImg: require('./img/transparent1.png'),
         imgName: '',
         modifiedImg: '',
         selected: '1',
         convertedCoordinate: [],
         isShow: true
       }
     },
     components: {
       SelectImg,
       SelectPosition,
       Download,
     },
     methods: {
       setImg(inputImg) {
         this.inputImg = inputImg
       },
       selecteNav(index) {
         this.selected = index
       },
       setCoordinate(value) {
         this.convertedCoordinate = value
       },
      setModifiedImg(modifiedImg) {
        this.modifiedImg = modifiedImg
      },
      setimgName(imgName) {
        this.imgName = imgName
      },
      handle() {
        this.isShow = !this.isShow
      }
     },
    }
</script>
  
<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 1.2s;
  }
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
    transition: all 0.8s;
}
.slide-fade-leave-active {
    transition: all 0.8s;
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(400px);
    /* opacity: 0; */
}
</style>