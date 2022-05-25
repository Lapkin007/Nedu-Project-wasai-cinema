"use strict";(self["webpackChunkwasai_cinema"]=self["webpackChunkwasai_cinema"]||[]).push([[10],{10:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"outbox"},[s("div",{staticClass:"header"},[s("el-row",[s("el-col",{staticClass:"header-item",attrs:{span:5}},[e._v("海报ID")]),s("el-col",{staticClass:"header-item",staticStyle:{"padding-left":"0px"},attrs:{span:3}},[e._v("海报")]),s("el-col",{staticClass:"header-item",staticStyle:{"padding-left":"70px"},attrs:{span:5}},[e._v("状态(1上架)")]),s("el-col",{staticClass:"header-item",staticStyle:{"padding-left":"170px"},attrs:{span:11}},[e._v("操作")])],1)],1),s("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.userlist,(function(t,a){return s("el-collapse-item",{key:a,staticStyle:{"border-bottom":"1px solid black"},attrs:{name:a,disabled:""}},[s("template",{slot:"title"},[s("el-row",{staticStyle:{"background-color":"white",width:"1800px",height:"48px"}},[s("el-col",{staticClass:"order-box-item1",attrs:{span:5}},[e._v(e._s(t.id))]),s("el-col",{staticClass:"order-box-item1",attrs:{span:5}},[e._v(e._s(t.title))]),s("el-col",{staticClass:"order-box-item1",attrs:{span:5}},[e._v(e._s(t.status))]),s("el-col",{staticClass:"order-box-item3",attrs:{span:8}},[s("el-button",{staticClass:"wait1",on:{click:function(t){return e.UpdateUserData(a)}}},[e._v("修改海报信息")]),s("el-button",{staticClass:"fail1",on:{click:function(t){return e.DeleteUser(a)}}},[e._v(" 删除海报")]),s("el-button",{staticClass:"PadButton",on:{click:function(t){return e.changePad(a)}}},[e._v(" 展开收起")])],1)],1)],1),s("div",{staticClass:"collapse-panel-item"},[e._v("海报ID:"+e._s(t.id))]),s("div",{staticClass:"collapse-panel-item"},[e._v("海报FID:"+e._s(t.fid))]),s("div",{staticClass:"collapse-panel-item"},[e._v("海报名字:"+e._s(t.title))]),s("div",{staticClass:"collapse-panel-item"},[e._v("海报头像URL:"+e._s(t.url))]),s("img",{staticStyle:{"margin-left":"30px",width:"230px",height:"100px"},attrs:{src:t.url}}),s("div",{staticClass:"collapse-panel-item"},[e._v("状态:"+e._s(t.gender))]),s("div",{staticClass:"collapse-panel-item"},[e._v("创建时间:"+e._s(t.createTime))])],2)})),1),s("el-dialog",{attrs:{title:"确定删除吗?此操作不可撤销",visible:e.DeleteVisible},on:{"update:visible":function(t){e.DeleteVisible=t}}},[s("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.DeleteOneUser()}}},[e._v("确定删除")]),s("el-button",{on:{click:function(t){e.DeleteVisible=!1}}},[e._v("取消")])],1),s("el-dialog",{attrs:{title:"修改海报信息",visible:e.UpdateFormVisible},on:{"update:visible":function(t){e.UpdateFormVisible=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[s("el-form-item",[s("p",{staticStyle:{display:"block"}},[e._v("海报名")]),s("el-input",{staticStyle:{display:"inline-block",width:"300px"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),s("el-form-item",[s("p",[e._v("状态")]),s("el-radio-group",{model:{value:e.form.entry,callback:function(t){e.$set(e.form,"entry",t)},expression:"form.entry"}},[s("el-radio",{attrs:{label:"1"}},[e._v("启用")]),s("el-radio",{attrs:{label:"0"}},[e._v("禁用")])],1)],1),s("el-form-item",[s("div",{staticClass:"picture"},[s("div",[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://47.115.220.25:8081/api/user/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?s("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),s("p",[e._v("只能上传jpg/png图片")]),s("p",[e._v("不能带有特殊符号")])])]),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit2()}}},[e._v("更新基本信息")]),s("el-button",{on:{click:function(t){e.UpdateFormVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},i=[],l=(s(3709),s(6580)),r=s(9254),n={data(){return{imageUrl:null,dynamicValidateForm:{domains:[{value:null}],email:null},ruleForm:{pass:null},form:{phone:null,dept:null,entry:null,nickname:null,sex:null,desc:null},fileName:null,activeNames:[],userlist:[],UpdateIndex:-1,UpdateFormVisible:!1,DeleteVisible:!1}},methods:{beforeAvatarUpload(e){const t="image/jpeg"===e.type,s="image/png"===e.type,a=e.size/2048/2048<2;return!t&!s&&this.$message.error("上传头像图片只能是 JPG 或者 PNG 格式!"),a||this.$message.error("上传头像图片大小不能超过 8MB!"),s&t&&a},handleAvatarSuccess(e,t){console.log(e.data.fileName),this.fileName=e.data.fileName,this.imageUrl=URL.createObjectURL(t.raw)},onSubmit2(){if("1"==this.form.entry);if("0"==this.form.entry);let e={status:this.form.entry,url:this.fileName,title:this.form.nickname,id:this.userlist[this.UpdateIndex].id,updateTime:new Date};console.log(e),(0,l.XK)(e).then((e=>{200==e.code?"success"==e.data.success?(this.$message({message:e.data.msg,type:e.data.success}),this.UpdateFormVisible=!1):this.$message.error("更新失败"):this.$message.error("请求失败")}))},beforeAvatarUpload(e){const t="image/jpeg"===e.type,s="image/png"===e.type,a=e.size/2048/2048<2;return!t&!s&&this.$message.error("上传头像图片只能是 JPG 或者 PNG 格式!"),a||this.$message.error("上传头像图片大小不能超过 8MB!"),s&t&&a},handleAvatarSuccess(e,t){console.log(e.data.fileName),this.fileName=e.data.fileName,this.imageUrl=URL.createObjectURL(t.raw)},DeleteOneUser(){(0,l.Cw)(this.userlist[this.UpdateIndex].id).then((e=>{200==e.code?"success"==e.data.success?(this.$message({message:"删除成功",type:e.data.success}),this.DeleteVisible=!1,this.userlist.splice(this.UpdateIndex,1)):this.$message.error("删除失败"):this.$message.error("请求失败")}))},UpdateUserData(e){if(this.UpdateFormVisible=!0,this.UpdateIndex=e,this.form.nickname=this.userlist[e].title,1==this.userlist[e].status)var t="1";if(0==this.userlist[e].status)t="0";this.form.entry=t},changePad:function(e){-1==this.activeNames.indexOf(e)?this.activeNames.push(e):this.activeNames.splice(this.activeNames.indexOf(e),1)},DeleteUser(e){this.DeleteVisible=!0,this.UpdateIndex=e},QueryAlluser(){(0,l.P6)().then((e=>{if(200==e.code){this.userlist=e.data;for(var t=0;t<this.userlist.length;t++)this.userlist[t].createTime=(0,r.T)(new Date(this.userlist[t].createTime))}}))}},created:function(){this.QueryAlluser()}},c=n,o=s(1001),d=(0,o.Z)(c,a,i,!1,null,"9d0a9c70",null),m=d.exports}}]);
//# sourceMappingURL=10.ad398bf5.js.map