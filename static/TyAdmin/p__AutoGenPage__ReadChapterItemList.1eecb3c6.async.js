(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"9EiH":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"d",(function(){return m}));var n=r("k1fw"),a=r("WmNS"),c=r.n(a),i=r("9og8"),u=r("io9h");function o(e){return s.apply(this,arguments)}function s(){return s=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/read_chapter",{params:t}));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/read_chapter/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(c.a.mark((function e(t){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/read_chapter",{method:"POST",data:Object(n["a"])(Object(n["a"])({},t),{},{method:"post"})}));case 1:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,t){return h.apply(this,arguments)}function h(){return h=Object(i["a"])(c.a.mark((function e(t,r){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(u["a"])("/api/xadmin/v1/read_chapter/".concat(r),{method:"PUT",data:Object(n["a"])(Object(n["a"])({},t),{},{id:r})}));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},IpcI:function(e,t,r){e.exports={container:"container___nT1ry"}},PkmJ:function(e,t,r){"use strict";r("DZo9");var n=r("8z0m"),a=r("oBTY"),c=r("fWQN"),i=r("mtLc"),u=r("yKVA"),o=r("879j"),s=r("q1tI"),l=r.n(s),p=r("ye1Q"),d=r("xvlK"),f=r("IpcI"),m=r.n(f);function h(e,t){var r=new FileReader;r.addEventListener("load",(function(){return t(r.result)})),r.readAsDataURL(e)}var b=function(e){Object(u["a"])(r,e);var t=Object(o["a"])(r);function r(e){var n;return Object(c["a"])(this,r),n=t.call(this,e),n.state={loading:!1,fileList:[]},n.handleChange=function(e){var t=Object(a["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),n.props.onChange(e),e.file&&h(t[0].originFileObj,(function(e){return n.setState({fileList:t,imageUrl:e,loading:!1})}))},n}return Object(i["a"])(r,[{key:"render",value:function(e){console.log(this.props),console.log("props");var t=l.a.createElement("div",null,this.state.loading?l.a.createElement(p["default"],null):l.a.createElement(d["default"],null),l.a.createElement("div",{className:"ant-upload-text"},"Upload")),r=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(r=this.props.img),l.a.createElement(n["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},r?l.a.createElement("img",{src:r,alt:"avatar",style:{width:"100%"}}):t)}}]),r}(l.a.Component);t["a"]=function(e){return l.a.createElement("div",{className:m.a.container},l.a.createElement("div",{id:"components-upload-demo-avatar"},l.a.createElement(b,e)))}},VTtT:function(e,t,r){"use strict";r.r(t);r("qVdP");var n=r("jsC+"),a=(r("lUTK"),r("BvKs")),c=(r("5NDa"),r("5rEg")),i=(r("+L6B"),r("2/Rp")),u=(r("P2fV"),r("NJEC")),o=(r("/zsF"),r("PArb")),s=(r("BoS7"),r("Sdc0")),l=r("PpiC"),p=r("WmNS"),d=r.n(p),f=r("k1fw"),m=(r("miYZ"),r("tsqr")),h=r("9og8"),b=r("tJVT"),v=(r("OaEy"),r("2fM7")),O=r("G3dp"),w=r("/MfK"),j=r("xvlK"),y=r("8Skl"),E=r("q1tI"),x=r.n(E),g=r("Hx5s"),k=r("56R7"),C=(r("2qtc"),r("kLXV")),S=function(e){var t=e.modalVisible,r=e.onCancel;return x.a.createElement(C["a"],{destroyOnClose:!0,title:"\u65b0\u5efa\u4e13\u680f\u7ae0\u8282\u5c0f\u8282",visible:t,width:600,onCancel:function(){return r()},footer:null},e.children)},T=S,R=r("io9h");function _(e){return I.apply(this,arguments)}function I(){return I=Object(h["a"])(d.a.mark((function e(t){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(R["a"])("/api/xadmin/v1/read_chapter_item",{params:t}));case 1:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function L(e){return V.apply(this,arguments)}function V(){return V=Object(h["a"])(d.a.mark((function e(t){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(R["a"])("/api/xadmin/v1/read_chapter_item/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function q(e){return F.apply(this,arguments)}function F(){return F=Object(h["a"])(d.a.mark((function e(t){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(R["a"])("/api/xadmin/v1/read_chapter_item",{method:"POST",data:Object(f["a"])(Object(f["a"])({},t),{},{method:"post"})}));case 1:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function K(e,t){return P.apply(this,arguments)}function P(){return P=Object(h["a"])(d.a.mark((function e(t,r){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(R["a"])("/api/xadmin/v1/read_chapter_item/".concat(r),{method:"PUT",data:Object(f["a"])(Object(f["a"])({},t),{},{id:r})}));case 1:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}var U=function(e){var t=e.modalVisible,r=e.onCancel;return x.a.createElement(C["a"],{destroyOnClose:!0,title:"\u4fee\u6539\u4e13\u680f\u7ae0\u8282\u5c0f\u8282",visible:t,width:600,onCancel:function(){return r()},footer:null},e.children)},N=U,A=(r("PkmJ"),r("9EiH")),D=r("wd/R"),J=r.n(D),B=r("+n12"),W=(r("Lzxq"),v["a"].Option),z=function(){var e=Object(E["useState"])(!1),t=Object(b["a"])(e,2),r=t[0],p=t[1],C=Object(E["useState"])(!1),S=Object(b["a"])(C,2),R=S[0],I=S[1],V=Object(E["useState"])({}),F=Object(b["a"])(V,2),P=F[0],U=F[1],D=Object(E["useRef"])(),z=Object(E["useRef"])(),H=Object(E["useRef"])(),M=function(){var e=Object(h["a"])(d.a.mark((function e(t){var r,n,a;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=m["b"].loading("\u6b63\u5728\u6dfb\u52a0"),e.prev=1,e.next=4,q(Object(f["a"])({},t));case 4:return r(),m["b"].success("\u6dfb\u52a0\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(n in e.t0.data.fields_errors)a=e.t0.data.fields_errors[n],z.current.setFields([{name:n,errors:a}]);else m["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return r(),m["b"].error("\u6dfb\u52a0\u5931\u8d25"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(h["a"])(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=m["b"].loading("\u6b63\u5728\u4fee\u6539"),e.prev=1,e.next=4,K(t,r);case 4:return n(),m["b"].success("\u4fee\u6539\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(a in e.t0.data.fields_errors)t=e.t0.data.fields_errors[a],H.current.setFields([{name:a,errors:t}]);else m["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return n(),m["b"].error("\u4fee\u6539\u5931\u8d25\u8bf7\u91cd\u8bd5\uff01"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}(),Y=function(){var e=Object(h["a"])(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=m["b"].loading("\u6b63\u5728\u5220\u9664"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,n=t.map((function(e){return e.id})).join(","),e.next=7,L(n);case 7:return r(),m["b"].success("\u5220\u9664\u6210\u529f"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),r(),m["b"].error("\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),Z=["time"],G=[{title:"ID",dataIndex:"id",hideInForm:!0,hideInSearch:!0,rules:[{required:!0,message:"ID\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u6240\u5c5e\u7ae0\u8282",dataIndex:"read_chapter",backendType:"foreignKey",rules:[{required:!0,message:"\u6240\u5c5e\u7ae0\u8282\u4e3a\u5fc5\u586b\u9879"}],renderFormItem:function(e,t){t.value;var r=t.onChange,n=de.map((function(e){return x.a.createElement(W,{key:e.id,value:e.id},e.title)}));return x.a.createElement(v["a"],{placeholder:"\u8bf7\u9009\u62e9\u6240\u5c5e\u7ae0\u8282",onChange:r},n)}},{title:"\u5c0f\u7ae0\u8282\u6807\u9898",dataIndex:"title",rules:[{required:!0,message:"\u5c0f\u7ae0\u8282\u6807\u9898\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u662f\u5426\u8bd5\u770b",dataIndex:"isTry",rules:[{required:!0,message:"\u662f\u5426\u8bd5\u770b\u4e3a\u5fc5\u586b\u9879"}],render:function(e,t){return Object(B["a"])(e)},renderFormItem:function(e,t,r){var n=t.type,a=(t.defaultRender,Object(l["a"])(t,["type","defaultRender"]),r.getFieldValue("isTry"));return"form"!==n||a||r.setFieldsValue({isTry:!1}),x.a.createElement(s["a"],{checked:a,onClick:function(e){r.setFieldsValue({isTry:e})}})}},{title:"\u53d1\u5e03\u65f6\u95f4",dataIndex:"time",valueType:"dateTime",rules:[{required:!0,message:"\u53d1\u5e03\u65f6\u95f4\u4e3a\u5fc5\u586b\u9879"}],render:function(e,t){return Object(B["c"])(e)}},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return x.a.createElement(x.a.Fragment,null,x.a.createElement(O["default"],{title:"\u7f16\u8f91",className:"icon",onClick:Object(h["a"])(d.a.mark((function e(){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.time=J()(t.time),I(!0),U(t);case 3:case"end":return e.stop()}}),e)})))}),x.a.createElement(o["a"],{type:"vertical"}),x.a.createElement(u["a"],{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u4e13\u680f\u7ae0\u8282\u5c0f\u8282\u5417\uff1f",placement:"topRight",onConfirm:function(){Y([t]),D.current.reloadAndRest()},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},x.a.createElement(w["default"],{title:"\u5220\u9664",className:"icon"})))}}],X=Object(B["e"])(G),$=Object(B["k"])(X),ee=[].concat(G),te=[].concat(G),re=Object(E["useState"])({}),ne=Object(b["a"])(re,2),ae=ne[0],ce=ne[1],ie=Object(E["useState"])({}),ue=Object(b["a"])(ie,2),oe=ue[0],se=ue[1],le=Object(E["useState"])([]),pe=Object(b["a"])(le,2),de=pe[0],fe=pe[1];return Object(E["useEffect"])((function(){Object(A["b"])().then((function(e){fe(e.data)}))}),[]),x.a.createElement(g["c"],null,x.a.createElement(k["a"],{beforeSearchSubmit:function(e){return Object(B["d"])(e,Z),e},params:oe,scroll:{x:"100%"},columnsStateMap:ae,onColumnsStateChange:function(e){return ce(e)},headerTitle:"\u4e13\u680f\u7ae0\u8282\u5c0f\u8282\u8868\u683c",actionRef:D,rowKey:"id",toolBarRender:function(e,t){var r=t.selectedRows;return[x.a.createElement(i["a"],{type:"primary",onClick:function(){return p(!0)}},x.a.createElement(j["default"],null)," \u65b0\u5efa"),x.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"\u641c\u7d22\u4e13\u680f\u7ae0\u8282\u5c0f\u8282 ",onSearch:function(e){se({search:e}),D.current.reload()}}),r&&r.length>0&&x.a.createElement(n["a"],{overlay:x.a.createElement(a["a"],{onClick:function(){var e=Object(h["a"])(d.a.mark((function e(t){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=4;break}return e.next=3,Y(r);case 3:D.current.reloadAndRest();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},x.a.createElement(a["a"].Item,{key:"remove"},"\u6279\u91cf\u5220\u9664"))},x.a.createElement(i["a"],null,"\u6279\u91cf\u64cd\u4f5c ",x.a.createElement(y["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&x.a.createElement("div",null,"\u5df2\u9009\u62e9"," ",x.a.createElement("a",{style:{fontWeight:600}},t.length)," ","\u9879\xa0\xa0")},request:function(e,t,r){return _(Object(f["a"])(Object(f["a"])({},e),{},{sorter:t,filter:r}))},columns:$,rowSelection:{}}),x.a.createElement(T,{onCancel:function(){return p(!1)},modalVisible:r},x.a.createElement(k["a"],{formRef:z,onSubmit:function(){var e=Object(h["a"])(d.a.mark((function e(t){var r;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(B["l"])(t),e.next=3,M(t);case 3:r=e.sent,r&&(p(!1),D.current&&D.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{labelCol:{span:6},labelAlign:"left"},columns:te,rowSelection:{}})),x.a.createElement(N,{onCancel:function(){return I(!1)},modalVisible:R},x.a.createElement(k["a"],{formRef:H,onSubmit:function(){var e=Object(h["a"])(d.a.mark((function e(t){var r;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(B["l"])(t),e.next=3,Q(t,P.id);case 3:r=e.sent,r&&(I(!1),D.current&&D.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{initialValues:P,labelCol:{span:6},labelAlign:"left"},columns:ee,rowSelection:{}})))};t["default"]=z}}]);