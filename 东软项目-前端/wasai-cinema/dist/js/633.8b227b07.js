"use strict";(self["webpackChunkwasai_cinema"]=self["webpackChunkwasai_cinema"]||[]).push([[633],{6633:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all"},[i("el-container",[i("el-header",[i("div",{staticClass:"tagbox"},[i("el-row",{staticClass:"tagrow"},[i("el-col",{attrs:{span:1}},[i("span",{staticStyle:{"margin-left":"10px"}},[t._v("类型:")])]),i("el-radio-group",{staticClass:"tag",on:{change:function(e){return t.tag_change()}},model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}},t._l(t.typeList,(function(t,e){return i("el-radio-button",{key:e,staticClass:"tagRadiobutton",attrs:{label:t,"border-size":"mini"}})})),1)],1),i("el-row",{staticClass:"tagrow"},[i("el-col",{attrs:{span:1}},[i("span",{staticStyle:{"margin-left":"10px"}},[t._v("地区:")])]),i("el-radio-group",{staticClass:"tag",on:{change:function(e){return t.tag_change()}},model:{value:t.selectRegion,callback:function(e){t.selectRegion=e},expression:"selectRegion"}},t._l(t.regionList,(function(t,e){return i("el-radio-button",{key:e,staticClass:"tagRadiobutton",attrs:{label:t,"border-size":"mini"}})})),1)],1)],1)]),i("el-main",t._l(t.FliterMovieList,(function(e,s){return i("el-col",{key:s,staticStyle:{"margin-top":"20px"},attrs:{span:5,offset:1}},[i("div",{on:{click:function(i){return t.Movie_card_click(e)}}},[i("el-link",{attrs:{underline:!1}},[i("el-card",{staticStyle:{"margin-bottom":"30px",height:"330px"},attrs:{"body-style":{padding:"13px 0px"}}},[i("img",{staticStyle:{width:"170px",height:"250px"},attrs:{src:e.cover,alt:"ERROR",title:""}}),i("div",{staticStyle:{padding:"5px"}},[i("div",{staticClass:"movie_info"},[i("div",{staticClass:"movie_info_inside"},[t._v(t._s(e.name))])])])])],1)],1)])})),1)],1)],1)},o=[],l=i(6580),a={data(){return{selectType:"全部",selectRegion:"全部",typeList:["全部","家庭","惊悚","科幻","爱情","动作","喜剧","恐怖","悬疑","犯罪","冒险","战争","历史","武侠","传记","古装","其他"],regionList:["全部","内地","香港","台湾","美国","韩国","日本","泰国","印度","法国","英国","德国","其他"],movielist:[],newmovielist:[]}},methods:{tag_change(){this.newmovielist=void 0,console.log(this.newmovielist),this.newmovielist=new Array,console.log(this.newmovielist)},CreateMovieList(){(0,l.VM)().then((t=>{if(200==t.code)for(var e=0;e<t.data.length;e++)1==t.data[e].status&&this.movielist.push(t.data[e])}))},Movie_card_click(t){this.$router.push("/film_detail?fid="+t.id),this.$store.state.navnum=1,this.$store.state.color2.color="blue",this.$store.state.color1.color="#5b5d63",this.$store.state.color3.color="#5b5d63",this.$store.state.color4.color="#5b5d63"}},computed:{FliterMovieList:function(){if("全部"==this.selectType&"全部"==this.selectRegion)for(var t=0;t<this.movielist.length;t++)this.newmovielist.push(this.movielist[t]);else if("全部"!=this.selectType&"全部"!=this.selectRegion)for(t=0;t<this.movielist.length;t++)this.selectType==this.movielist[t].type&this.selectRegion==this.movielist[t].region&&this.newmovielist.push(this.movielist[t]);else if("全部"==this.selectType&"全部"!=this.selectRegion)for(t=0;t<this.movielist.length;t++)this.selectRegion==this.movielist[t].region&&this.newmovielist.push(this.movielist[t]);else if("全部"!=this.selectType&"全部"==this.selectRegion)for(t=0;t<this.movielist.length;t++)this.selectType==this.movielist[t].type&&this.newmovielist.push(this.movielist[t]);return this.newmovielist}},beforeCreate:function(){console.log("BeforeCreate"),this.$store.state.navnum=1,this.$store.state.color2.color="blue",this.$store.state.color1.color="#5b5d63",this.$store.state.color3.color="#5b5d63",this.$store.state.color4.color="#5b5d63"},mounted:function(){this.CreateMovieList(),console.log(this.movielist),console.log(this.newmovielist)}},n=a,r=i(1001),c=(0,r.Z)(n,s,o,!1,null,"c0aef62c",null),h=c.exports}}]);
//# sourceMappingURL=633.8b227b07.js.map