webpackJsonp([1],{Cz6C:function(A,e){},Jic8:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkwAAACKCAYAAABYShVDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAGYktHRAD/AP8A/6C9p5MAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMDoxMDowNSAyMjowMDo1Mlj6g4oAAAFSSURBVHhe7cExAQAAAMKg9U9tDQ8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4VAP0pgABXgq3KAAAAABJRU5ErkJggg=="},Lrbi:function(A,e){},N6YR:function(A,e){},NHnr:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("UIRh");var n=t("uOA4"),a=t.n(n),i=(t("jayP"),t("QKkm")),s=t.n(i),o=(t("y+mr"),t("3JdW")),r=t.n(o),c=(t("XDqQ"),t("Axha")),d=t.n(c),l=(t("Cz6C"),t("dU8H")),m=t.n(l),u=(t("Lrbi"),t("aMxQ")),v=t.n(u),f=t("7+uW"),h={props:["inputImg","setImg","selecteNav","setimgName"],methods:{handleInput:function(A){var e=this,t=A.target.files;this.setimgName(t[0].name);var n=new FileReader;n.readAsDataURL(t[0]),n.onload=function(A){e.setImg(A.target.result),e.selecteNav("2")}}}},g={render:function(){var A=this.$createElement,e=this._self._c||A;return e("div",{staticClass:"box"},[e("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:this.handleInput}}),this._v(" "),e("label",{staticClass:"btn btn-light",attrs:{for:"file"}},[this._v("点我选择图片")]),this._v(" "),e("p",[this._v("选好后自动跳转到位置选择页面.")]),this._v(" "),e("img",{staticClass:"preview rounded mx-auto d-block",attrs:{src:this.inputImg,alt:"preview"}})])},staticRenderFns:[]};var p=t("VU/8")(h,g,!1,function(A){t("w4R2")},null,null).exports,I=t("Milw"),M=t.n(I),_=3.141592653589793,b=6378245,w=.006693421622965943;function N(A,e){if(function(A,e){return A<72.004||A>137.8347||e<.8293||e>55.8271||!1}(A,e))return[A,e];var t=function(A,e){var t=2*A-100+3*e+.2*e*e+.1*A*e+.2*Math.sqrt(Math.abs(A));return t+=2*(20*Math.sin(6*A*_)+20*Math.sin(2*A*_))/3,t+=2*(20*Math.sin(e*_)+40*Math.sin(e/3*_))/3,t+=2*(160*Math.sin(e/12*_)+320*Math.sin(e*_/30))/3}(A-105,e-35),n=function(A,e){var t=300+A+2*e+.1*A*A+.1*A*e+.1*Math.sqrt(Math.abs(A));return t+=2*(20*Math.sin(6*A*_)+20*Math.sin(2*A*_))/3,t+=2*(20*Math.sin(A*_)+40*Math.sin(A/3*_))/3,t+=2*(150*Math.sin(A/12*_)+300*Math.sin(A/30*_))/3}(A-105,e-35),a=e/180*_,i=Math.sin(a);i=1-w*i*i;var s=Math.sqrt(i);return t=180*t/(b*(1-w)/(i*s)*_),[2*A-(A+(n=180*n/(b/s*Math.cos(a)*_))),2*e-(e+t)]}var S=t("mvHQ"),C=t.n(S),x=t("DkUT"),P=t.n(x);var R={props:["selecteNav","setCoordinate","convertedCoordinate","inputImg","setModifiedImg"],data:function(){return{address:""}},methods:{handleClick:function(){var A=this.inputImg,e=this.convertedCoordinate,t=this.setModifiedImg,n=this.selecteNav;t(function(A,e){var t=P.a.load(A);console.log("oldExifObj:"),console.log(t);var n=e[0],a=e[1],i=JSON.parse(C()(t));i.GPS[P.a.GPSIFD.GPSLatitudeRef]=a<0?"S":"N",i.GPS[P.a.GPSIFD.GPSLatitude]=P.a.GPSHelper.degToDmsRational(a),i.GPS[P.a.GPSIFD.GPSLongitudeRef]=n<0?"W":"E",i.GPS[P.a.GPSIFD.GPSLongitude]=P.a.GPSHelper.degToDmsRational(n);var s=P.a.dump(i),o=P.a.insert(s,A),r=P.a.load(o);return console.log("newExifObj"),console.log(r),o}(A,e)),n("3")}},mounted:function(){var A=this;M.a.load({key:"9c5c51916fc0a4e7e2cf745fb39ffe2c",version:"1.4.15",plugins:[],AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}}).then(function(e){new e.Map("container");AMapUI.loadUI(["misc/PositionPicker"],function(t){var n=new t({mode:"dragMap",map:new e.Map("container",{zoom:16})});n.on("success",function(e){var t=e.position,n=t.lng,a=t.lat;A.address=e.address,A.setCoordinate(N(n,a))}),n.start()})}).catch(function(A){console.log(A)})}},D={render:function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"box"},[t("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:A.handleClick}},[A._v("使用当前位置")]),A._v(" "),t("p",[A._v("点击后将跳转到完成页面")]),A._v(" "),t("div",{attrs:{id:"container"}}),A._v(" "),t("p",{staticClass:"card-text"},[A._v(A._s(A.address))])])},staticRenderFns:[]};var U={render:function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"box"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!A.modifiedImg,expression:"!modifiedImg"}]},[t("p",[A._v("编辑还未完成")])]),A._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:A.modifiedImg,expression:"modifiedImg"}]},[t("a",{staticClass:"btn btn-light",attrs:{href:A.modifiedImg,download:A.imgName}},[A._v("点我下载")]),A._v(" "),t("a",{staticClass:"btn btn-light",on:{click:A.backToStart}},[A._v("再来一张")]),A._v(" "),t("img",{staticClass:"preview rounded mx-auto d-block",attrs:{src:A.modifiedImg,alt:"modifiedImg"}}),A._v(" "),t("p",[A._v("手机上还可以长按下载")])])])},staticRenderFns:[]};var k={data:function(){return{inputImg:t("Jic8"),imgName:"",modifiedImg:"",selected:"1",convertedCoordinate:[],isShow:!0}},components:{SelectImg:p,SelectPosition:t("VU/8")(R,D,!1,function(A){t("x8em")},null,null).exports,Download:t("VU/8")({props:["modifiedImg","imgName","selecteNav"],methods:{backToStart:function(){this.selecteNav("1")}}},U,!1,function(A){t("N6YR")},null,null).exports},methods:{setImg:function(A){this.inputImg=A},selecteNav:function(A){this.selected=A},setCoordinate:function(A){this.convertedCoordinate=A},setModifiedImg:function(A){this.modifiedImg=A},setimgName:function(A){this.imgName=A},handle:function(){this.isShow=!this.isShow}}},G={render:function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",[t("mt-navbar",{model:{value:A.selected,callback:function(e){A.selected=e},expression:"selected"}},[t("mt-tab-item",{staticStyle:{"text-decoration":"none"},attrs:{id:"1"}},[t("h6",[A._v("1 选照片")])]),A._v(" "),t("mt-tab-item",{staticStyle:{"text-decoration":"none"},attrs:{id:"2"}},[t("h6",[A._v("2 选地点")])]),A._v(" "),t("mt-tab-item",{staticStyle:{"text-decoration":"none"},attrs:{id:"3"}},[t("h6",[A._v("3 下载成果")])])],1),A._v(" "),t("mt-tab-container",{model:{value:A.selected,callback:function(e){A.selected=e},expression:"selected"}},[t("mt-tab-container-item",{attrs:{id:"1"}},[t("br"),A._v(" "),t("transition",{attrs:{name:"slide-fade"}},[t("SelectImg",{directives:[{name:"show",rawName:"v-show",value:"1"==A.selected,expression:"selected=='1'"}],attrs:{inputImg:A.inputImg,setImg:A.setImg,selecteNav:A.selecteNav,setimgName:A.setimgName}})],1)],1),A._v(" "),t("mt-tab-container-item",{attrs:{id:"2"}},[t("br"),A._v(" "),t("transition",{attrs:{name:"slide-fade"}},[t("SelectPosition",{directives:[{name:"show",rawName:"v-show",value:"2"==A.selected,expression:"selected=='2'"}],attrs:{setCoordinate:A.setCoordinate,selecteNav:A.selecteNav,convertedCoordinate:A.convertedCoordinate,inputImg:A.inputImg,setModifiedImg:A.setModifiedImg}})],1)],1),A._v(" "),t("mt-tab-container-item",{attrs:{id:"3"}},[t("br"),A._v(" "),t("transition",{attrs:{name:"slide-fade"}},[t("Download",{directives:[{name:"show",rawName:"v-show",value:"3"==A.selected,expression:"selected=='3'"}],attrs:{modifiedImg:A.modifiedImg,imgName:A.imgName,selecteNav:A.selecteNav}})],1)],1)],1)],1)},staticRenderFns:[]};var y=t("VU/8")(k,G,!1,function(A){t("m/ZV")},null,null).exports;f.default.component(v.a.name,v.a),f.default.component(m.a.name,m.a),f.default.component(d.a.name,d.a),f.default.component(r.a.name,r.a),f.default.component(s.a.name,s.a),f.default.component(a.a.name,a.a),new f.default({el:"#app",components:{App:y},template:"<App/>"})},UIRh:function(A,e){},XDqQ:function(A,e){},jayP:function(A,e){},joTY:function(A,e){},"m/ZV":function(A,e){},w4R2:function(A,e){},x8em:function(A,e){},"y+mr":function(A,e){}},["NHnr"]);
//# sourceMappingURL=app.e60460953bae5e27e3e7.js.map