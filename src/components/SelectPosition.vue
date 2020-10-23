<template>
  <div class="box">
    <a href="javascript:;" class="btn btn-light" @click="handleClick">使用当前位置</a>
    <a class="btn btn-light" @click="backToStart">重选照片</a>
    <p>点击后将跳转到完成页面</p>
    <!-- <mt-button type="default" size="normal" @click.native="handleClick" >使用当前位置</mt-button> -->
    <div id="container"></div>
    <p class="card-text">{{address}}</p>
</div>
</template>

<script>
  import AMapLoader from '@amap/amap-jsapi-loader';
  import gcj02towgs84 from '../utils/coordinate_converter'
  import modifyExif from '../utils/modifyExif'

  export default {
    props: ['selecteNav', 'setCoordinate', 'convertedCoordinate', 'inputImg', 'setModifiedImg'],
    data() {
      return {
        address: '',
      }
    },
    methods: {
      handleClick () {
        const {inputImg, convertedCoordinate, setModifiedImg, selecteNav} = this
        const modifiedImg = modifyExif(inputImg, convertedCoordinate)
        setModifiedImg(modifiedImg)
        selecteNav('3')
      },
      backToStart() {
          this.selecteNav('1')
      }
    },
    mounted() {
      AMapLoader.load({
            "key": "9c5c51916fc0a4e7e2cf745fb39ffe2c",              // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'  // Loca 版本，缺省 1.3.2
            },
        }).then((AMap)=>{
            const map = new AMap.Map('container');

            AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
              var map = new AMap.Map('container',{
                  zoom:16
              })
              var positionPicker = new PositionPicker({
                  mode:'dragMap',//设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
                  map:map//依赖地图对象
              });
              //事件绑定、结果处理等
              positionPicker.on('success', (positionResult) => {
                  var {lng, lat} = positionResult.position
                  this.address = positionResult.address
                  this.setCoordinate(gcj02towgs84(lng,lat))
              });
              positionPicker.start();
          });

        }).catch(e => {
            console.log(e);
        })
    },
  }
</script>
  
<style>
  #container {width:100%; height: 20rem; }  
  .box {
        text-align : center
    }
</style>
