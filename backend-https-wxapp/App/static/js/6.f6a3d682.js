(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+UB1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",[n("Row",{attrs:{align:"middle"}},[n("Card",[n("Tree",{attrs:{data:t.treeData.value,render:t.renderContent}})],1)],1)],1),t._v(" "),n("Modal",{attrs:{title:t.addModelTitle,width:"500"},model:{value:t.addModel,callback:function(e){t.addModel=e},expression:"addModel"}},[n("Form",{ref:"addFormValidate",attrs:{model:t.tModel,rules:t.ruleValidate,"label-width":80}},[n("FormItem",{attrs:{label:"名称",prop:"name"}},[n("Input",{attrs:{placeholder:"请输入名称"},model:{value:t.tModel.name,callback:function(e){t.$set(t.tModel,"name",e)},expression:"tModel.name"}})],1)],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.handleCancelAdd("addFormValidate")}}},[t._v("取消")]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:function(e){t.handleConfirmAdd("addFormValidate")}}},[t._v("确定")])],1)],1)],1)},i=[],o=(n("dRSK"),n("91GP"),n("f3/d"),n("yk3/")),r={name:"treeManage",components:{},data:function(){return{addModelTitle:"添加",ruleValidate:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},tModel:{name:""},addModel:!1,nodedata:{},treeData:[],isedit:!1}},computed:{tree:{get:function(){var t=[];return this.$store.state.system.systems.filter(function(t){return"组织机构"===t.name})[0]&&(t=this.$store.state.system.systems.filter(function(t){return"组织机构"===t.name})[0]),t}}},mounted:function(){var t=this;Object(o["a"])("get").then(function(e){var n=e.data.data;t.treeData=n.filter(function(t){return"数据权限"==t.name})[0]})},methods:{renderContent:function(t,e){var n=this,a=e.root,i=e.node,o=e.data;return t("span",{style:{display:"inline-block",width:"100%"}},[t("span",[t("Icon",{props:{type:"ios-paper-outline"},style:{marginRight:"8px"}}),t("span",o.title)]),t("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[t("Button",{props:Object.assign({},this.buttonProps,{icon:"md-add"}),style:{marginRight:"8px"},on:{click:function(){n.append(o)}}}),t("Button",{props:Object.assign({},this.buttonProps,{icon:"md-create"}),style:{marginRight:"8px"},on:{click:function(){n.edit(a,i,o)}}}),t("Poptip",{props:{confirm:!0,title:"确定删除？",placement:"bottom-end",transfer:!0},on:{"on-ok":function(){n.remove(a,i,o)}}},[t("Button",{props:Object.assign({},this.buttonProps,{icon:"md-close"})})])])])},append:function(t){this.nodedata=t,this.addModel=!0,this.isedit=!1},edit:function(t,e,n){var a=t.find(function(t){return t===e}).parent;void 0==a?this.$Message.success("根节点不允许编辑"):(this.isedit=!0,this.tModel.name=n.title,this.nodedata=n,this.addModel=!0)},remove:function(t,e,n){var a=this,i=t.find(function(t){return t===e}).parent;if(void 0!=i){var r=t.find(function(t){return t.nodeKey===i}).node,d=r.children.indexOf(n);r.children.splice(d,1),Object(o["b"])({form:this.treeData}).then(function(t){a.$Message.success("Success!")}).catch(function(t){a.$Message.error(t)})}else this.$Message.success("根节点不允许删除")},handleConfirmAdd:function(t){var e=this;this.$refs[t].validate(function(t){if(t){if(e.isedit){var n=e.nodedata;e.$set(n,"title",e.tModel.name),e.$set(n,"id",e.tModel.name),e.addModel=!1,e.tModel.name=""}else{n=e.nodedata;var a=n.children||[];a.push({title:e.tModel.name,id:e.tModel.name,expand:!0}),e.$set(n,"children",a),e.addModel=!1,e.tModel.name=""}Object(o["b"])({form:e.treeData}).then(function(t){e.$Message.success("Success!")}).catch(function(t){e.$Message.error(t)})}})},handleCancelAdd:function(t){this.$refs[t].resetFields(),this.tModel.name="",this.addModel=!1}},created:function(){}},d=r,s=(n("7/Sx"),n("KHd+")),l=Object(s["a"])(d,a,i,!1,null,null,null);e["default"]=l.exports},"7/Sx":function(t,e,n){"use strict";var a=n("k9QM"),i=n.n(a);i.a},dRSK:function(t,e,n){"use strict";var a=n("XKFU"),i=n("CkkT")(5),o="find",r=!0;o in[]&&Array(1)[o](function(){r=!1}),a(a.P+a.F*r,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(o)},k9QM:function(t,e,n){},"yk3/":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r});var a=n("Zt8a"),i=a["a"].axios,o=function(t){return i.request({url:"get_privs_data",method:"get",params:{action:t}})},r=function(t){var e=t.form,n={form:e};return i.request({url:"get_privs_data",method:"put",data:n})}}}]);