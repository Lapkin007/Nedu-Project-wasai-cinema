"use strict";(self["webpackChunkwasai_cinema"]=self["webpackChunkwasai_cinema"]||[]).push([[246],{6246:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"outbox"},[a("div",{staticClass:"header"},[a("el-row",[a("el-col",{staticClass:"header-item",attrs:{span:5}},[e._v("用户ID")]),a("el-col",{staticClass:"header-item",staticStyle:{"padding-left":"0px"},attrs:{span:4}},[e._v("账号")]),a("el-col",{staticClass:"header-item",staticStyle:{"padding-left":"70px"},attrs:{span:5}},[e._v("邮箱")]),a("el-col",{staticClass:"header-item",staticStyle:{"padding-left":"170px"},attrs:{span:10}},[e._v("操作")])],1)],1),a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.userlist,(function(t,s){return a("el-collapse-item",{key:s,staticStyle:{"border-bottom":"1px solid black"},attrs:{name:s,disabled:""}},[a("template",{slot:"title"},[a("el-row",{staticStyle:{"background-color":"white",width:"1800px",height:"48px"}},[a("el-col",{staticClass:"order-box-item1",attrs:{span:5}},[e._v(e._s(t.id))]),a("el-col",{staticClass:"order-box-item1",attrs:{span:5}},[e._v(e._s(t.username))]),a("el-col",{staticClass:"order-box-item1",attrs:{span:5}},[e._v(e._s(t.email))]),a("el-col",{staticClass:"order-box-item3",attrs:{span:8}},[a("el-button",{staticClass:"wait1",on:{click:function(t){return e.UpdateUserData(s)}}},[e._v("修改用户信息")]),a("el-button",{staticClass:"fail1",on:{click:function(t){return e.DeleteUser(s)}}},[e._v(" 删除用户")]),a("el-button",{staticClass:"PadButton",on:{click:function(t){return e.changePad(s)}}},[e._v(" 展开收起")])],1)],1)],1),a("div",{staticClass:"collapse-panel-item"},[e._v("用户ID:"+e._s(t.id))]),a("div",{staticClass:"collapse-panel-item"},[e._v("用户账号:"+e._s(t.username))]),a("div",{staticClass:"collapse-panel-item"},[e._v("用户昵称:"+e._s(t.nickname))]),a("div",{staticClass:"collapse-panel-item"},[e._v("用户头像URL:"+e._s(t.avatar))]),a("img",{staticStyle:{"margin-left":"30px",width:"100px",height:"100px"},attrs:{src:t.avatar}}),a("div",{staticClass:"collapse-panel-item"},[e._v("生日:"+e._s(t.birthday))]),a("div",{staticClass:"collapse-panel-item"},[e._v("性别:"+e._s(t.gender))]),a("div",{staticClass:"collapse-panel-item"},[e._v("介绍:"+e._s(t.info))]),a("div",{staticClass:"collapse-panel-item"},[e._v("创建时间:"+e._s(t.createTime))]),a("div",{staticClass:"collapse-panel-item"},[e._v("状态(0可用1锁定):"+e._s(t.status))])],2)})),1),a("el-dialog",{attrs:{title:"确定删除吗?此操作不可撤销",visible:e.DeleteVisible},on:{"update:visible":function(t){e.DeleteVisible=t}}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.DeleteOneUser()}}},[e._v("确定删除")]),a("el-button",{on:{click:function(t){e.DeleteVisible=!1}}},[e._v("取消")])],1),a("el-dialog",{attrs:{title:"修改用户信息",visible:e.UpdateFormVisible},on:{"update:visible":function(t){e.UpdateFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",[a("p",{staticStyle:{display:"block"}},[e._v("昵称")]),a("el-input",{staticStyle:{display:"inline-block",width:"300px"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{prop:"pass"}},[a("p",[e._v("密码")]),a("el-input",{staticStyle:{width:"300px"},attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),a("el-form-item",[a("p",[e._v("性别")]),a("el-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-radio",{attrs:{label:"男"}}),a("el-radio",{attrs:{label:"女"}})],1)],1),a("el-form-item",[a("p",[e._v("出生年月")]),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)],1),a("el-form",{ref:"dynamicValidateForm",attrs:{model:e.dynamicValidateForm}},[a("el-form-item",{attrs:{prop:"email",rules:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"　　　　　　　　请输入正确的邮箱地址",trigger:["blur","change"]}]}},[a("p",{staticStyle:{display:"block",position:"relative",left:"80px"}},[e._v("邮箱")]),a("el-input",{staticStyle:{display:"block",position:"relative",left:"80px",width:"300px"},model:{value:e.dynamicValidateForm.email,callback:function(t){e.$set(e.dynamicValidateForm,"email",t)},expression:"dynamicValidateForm.email"}})],1)],1),a("el-form-item",[a("p",[e._v("状态(1锁定0解锁)")]),a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-radio",{attrs:{label:"1"}}),a("el-radio",{attrs:{label:"0"}})],1)],1),a("el-form-item",[a("p",[e._v("个人简介")]),a("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit2()}}},[e._v("更新基本信息")]),a("el-button",{on:{click:function(t){e.UpdateFormVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},l=[],i=(a(1539),a(8783),a(3948),a(285),a(1637),a(8309),a(561),a(6165)),r=a(9254),o={data:function(){return{imageUrl:null,dynamicValidateForm:{domains:[{value:null}],email:null},ruleForm:{pass:null},form:{status:null,name:null,region:null,date1:null,date2:null,delivery:!1,type:[],sex:null,desc:null},fileName:"",activeNames:[],userlist:[],UpdateIndex:-1,UpdateFormVisible:!1,DeleteVisible:!1}},methods:{beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},handleAvatarSuccess:function(e,t){console.log(e.data.fileName),this.fileName=e.data.fileName,this.imageUrl=URL.createObjectURL(t.raw)},onSubmit2:function(){var e=this;if("1"==this.form.status)var t=1;if("0"==this.form.status)t=0;var a={status:t,password:this.ruleForm.pass,avatar:null,nickname:this.form.name,email:this.dynamicValidateForm.email,birthday:this.form.date1,gender:this.form.sex,info:this.form.desc,id:this.userlist[this.UpdateIndex].id};console.log(a),null!=this.ruleForm.pass&&a.password.length<6?this.$message.error("请输入6位以上的密码"):(0,i.EC)(a).then((function(t){200==t.code?"success"==t.data.success?(e.$message({message:t.data.msg,type:t.data.success}),e.UpdateFormVisible=!1,window.location.href="#/admin_panel/order_manage",window.location.href="#/admin_panel/user_manage"):e.$message.error("更新失败"):e.$message.error("请求失败")}))},DeleteOneUser:function(){var e=this;(0,i.tb)(this.userlist[this.UpdateIndex].id).then((function(t){200==t.code?"success"==t.data.success?(e.$message({message:"删除成功",type:t.data.success}),e.DeleteVisible=!1,e.userlist.splice(e.UpdateIndex,1)):e.$message.error("删除失败"):e.$message.error("请求失败")}))},UpdateUserData:function(e){this.UpdateFormVisible=!0,this.UpdateIndex=e},changePad:function(e){-1==this.activeNames.indexOf(e)?this.activeNames.push(e):this.activeNames.splice(this.activeNames.indexOf(e),1)},DeleteUser:function(e){this.DeleteVisible=!0,this.UpdateIndex=e},QueryAlluser:function(){var e=this;(0,i._z)().then((function(t){if(200==t.code){e.userlist=t.data;for(var a=0;a<e.userlist.length;a++)e.userlist[a].birthday=(0,r.T)(new Date(e.userlist[a].birthday),"{y}-{m}-{d}"),e.userlist[a].createTime=(0,r.T)(new Date(e.userlist[a].createTime))}}))}},created:function(){this.QueryAlluser()}},n=o,c=a(1001),m=(0,c.Z)(n,s,l,!1,null,"4dd9de5f",null),d=m.exports}}]);
//# sourceMappingURL=246-legacy.4dea1b8f.js.map