(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45767b06"],{"05bb":function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"d",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return s}));var r=e("d4ec"),i=e("bee2"),a=(e("c740"),e("99af"),e("d81d"),e("a15b"),e("4de4"),e("d3b7"),function(){function t(n,e){Object(r["a"])(this,t),this.data=n,this.indexs=e}return Object(i["a"])(t,[{key:"getCircleIndex",value:function(t,n){return(this.indexs[t]+n+this.data[t].length)%this.data[t].length}},{key:"slide",value:function(t,n){this.indexs[t]=this.getCircleIndex(t,n);var e=this.data[t][this.indexs[t]],r=e.id,i=e.pid,a=e.nc,c=n>0?1:-1;return this._parentsIndex(i,t-1,c),this._childrenIndex(r,t+1,c,a),this.indexs}},{key:"_parentsIndex",value:function(t,n,e){if(!(n<0)){var r=this.data[n].findIndex((function(n){return n.id===t}));if(-1!==r)return this.indexs[n]=r,this._parentsIndex(this.data[n][r].pid,n-1,e)}}},{key:"_childrenIndex",value:function(t,n,e){if(!(n>=this.data.length)){var r=this.data[n].findIndex((function(n){return n.pid===t}));return r>-1?(this.indexs[n]=r,this._childrenIndex(this.data[n][r].id,n+1,e)):(this.indexs[n]=this.data[n].length-1,this._childrenIndex(null,n+1,e))}}}]),t}()),c=function(t,n,e){var r=t.birth,i=t.death,a=t.givenName,c=t.generation,o=t.memo,s=t.wives,d=t.sons,u=t.daughters,F=t.father,l=t.id,h=function(t){var n={17:"十七",18:"十八",19:"十九",20:"二十",21:"廿一",22:"廿二",23:"廿三",24:"廿四",25:"廿五",26:"廿六",27:"廿七",28:"廿八",29:"廿九"};return"".concat(n[t],"世")},f=function(t,n){return t||n?"<strong>生卒：</strong>".concat(t," ~ ").concat(n):"<strong>生卒：</strong> 不祥"},E=function(t){if(!t||!t.length)return"";var n=t.map((function(t,n){return'<li class="item"><strong>'.concat(0===n?"原":"继","配：</strong>").concat(t.fullName," ").concat(t.from||""," ").concat(t.memo||"","</li>")}));return'\n      <ul class="wives">\n        '.concat(n.join(""),"\n      </ul>\n    ")},C=["长","次","三","四","五","六","七","八","九"],p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"子";return t&&t.length?t.map((function(t,e){return"子"===n?'<li class="item"><strong>'.concat(C[e]).concat(n,"：</strong>").concat(t.givenName,"</li>"):'<li class="item"><strong>'.concat(C[e]).concat(n,"：</strong>").concat(t.givenName," ").concat(t.married||""," ").concat(t.memo||"","</li>")})).join(""):""},m=function(t){if(!F)return"";var e=F.generation,r=F.givenName,i=F.id,a=n.filter((function(t){return t.parentId===i})),c=a.findIndex((function(n){return n.id===t}));return"系".concat(h(e)).concat(r,"公").concat(C[c],"子")},B=function(t){return t?'<button class="edit" data-id="'.concat(l,'">编辑</button>'):""},v=function(t){return t?'<div class="memo">\n              <strong>备注：</strong>'.concat(t,"\n            </div>"):""};return'\n          <div class="item-tooltip">\n            <h4 class="title">\n              <span class="era">'.concat(h(c),'</span>\n              <span class="name">\n                讳<strong>').concat(a,'</strong>\n              </span>\n              <span class="bad">\n                ').concat(f(r,i),"\n              </span>\n            </h4>\n            ").concat(B(e),"\n            ").concat(E(s),'\n            <h5 class="sub-title">\n              <span class="courtesy">\n              &nbsp;\n              </span>\n              <strong class="relationship">').concat(m(l),'</strong>\n            </h5>\n            <div class="children">\n              <ul class="sons">\n                ').concat(p(d),'\n              </ul>\n              <ul class="daughters">\n                ').concat(p(u,"女"),"\n              </ul>\n            </div>\n            ").concat(v(o),"\n          </div>\n          ")},o=[["#FFEBEE","#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71C1C"],["#FCE4EC","#F8BBD0","#F48FB1","#F06292","#EC407A","#E91E63","#D81B60","#C2185B","#AD1457","#880E4F"],["#F3E5F5","#E1BEE7","#CE93D8","#BA68C8","#AB47BC","#9C27B0","#8E24AA","#7B1FA2","#6A1B9A","#4A148C"],["#EDE7F6","#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92"],["#E8EAF6","#C5CAE9","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB","#303F9F","#283593","#1A237E"],["#E3F2FD","#BBDEFB","#90CAF9","#64B5F6","#42A5F5","#2196F3","#1E88E5","#1976D2","#1565C0","#0D47A1"],["#E1F5FE","#B3E5FC","#81D4FA","#4FC3F7","#29B6F6","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B"],["#E0F7FA","#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F","#006064"],["#E0F2F1","#B2DFDB","#80CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40"],["#E8F5E9","#C8E6C9","#A5D6A7","#81C784","#66BB6A","#4CAF50","#43A047","#388E3C","#2E7D32","#1B5E20"],["#F1F8E9","#DCEDC8","#C5E1A5","#AED581","#9CCC65","#8BC34A","#7CB342","#689F38","#558B2F","#33691E"],["#F9FBE7","#F0F4C3","#E6EE9C","#DCE775","#D4E157","#CDDC39","#C0CA33","#AFB42B","#9E9D24","#827717"],["#FFFDE7","#FFF9C4","#FFF59D","#FFF176","#FFEE58","#FFEB3B","#FDD835","#FBC02D","#F9A825","#F57F17"],["#FFF8E1","#FFECB3","#FFE082","#FFD54F","#FFCA28","#FFC107","#FFB300","#FFA000","#FF8F00","#FF6F00"],["#FFF3E0","#FFE0B2","#FFCC80","#FFB74D","#FFA726","#FF9800","#FB8C00","#F57C00","#EF6C00","#E65100"],["#FBE9E7","#FFCCBC","#FFAB91","#FF8A65","#FF7043","#FF5722","#F4511E","#E64A19","#D84315","#BF360C"]],s={2:11,3:11,4:11,6:10,7:10,8:10,60:7,61:8,91:9,62:8,92:5,93:7,118:6,159:5,228:15,443:3,444:3,358:2,359:2,360:0,361:1,382:0,229:13,230:15,232:14,247:13}},"4f0d":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"chart-wrap"})])}],a=e("b85c"),c=e("c7eb"),o=e("5530"),s=e("3835"),d=e("1da1"),u=(e("d81d"),e("b0c0"),e("313e")),F=e("ad8f"),l=e("05bb"),h=e("5f87"),f=null,E={mounted:function(){this.init(),document.addEventListener("click",this.handleEdit)},beforeDestroy:function(){document.removeEventListener("click",this.handleEdit)},methods:{init:function(){var t=this;return Object(d["a"])(Object(c["a"])().mark((function n(){var e,r,i,a,d;return Object(c["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(F["d"])();case 2:e=n.sent,r=t.arrayToTree(e.result.rows),i=t.computedValue(r),i=t.addColor(i),a=u["a"](document.querySelector(".chart-wrap")),d={toolbox:{show:!0,top:"4px",right:"200px",itemSize:24,feature:{restore:{show:!0}}},tooltip:{triggerOn:"none",backgroundColor:"#FFFDE7",enterable:!0,hideDelay:500,position:function(t){var n=Object(s["a"])(t,2),e=n[0],r=n[1];return{left:e,top:r}},formatter:function(t,n,r){var i=t.data,a=i.id,c=i.children;return Object(F["b"])({id:a}).then((function(t){var i=t.result,a=Object(o["a"])(Object(o["a"])({},i),{},{sons:c.map((function(t){return{givenName:t.name}}))});r(n,Object(l["d"])(a,e.result.rows,!!Object(h["a"])()))})),"Loading"}},series:{type:"sunburst",data:i,radius:[0,"100%"],label:{rotate:"radial"},itemStyle:{borderWidth:.2,color:"#fff"}}},a.setOption(d),a.on("mouseover",(function(t){var n=t.dataIndex;f=setTimeout((function(){a.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:n})}),400)})),a.on("mouseout",(function(t){clearTimeout(f),a.dispatchAction({type:"hideTip"})})),a.getZr().on("click",(function(t){t.target||a.dispatchAction({type:"restore"})}));case 12:case"end":return n.stop()}}),n)})))()},arrayToTree:function(t){var n,e=[],r={},i=Object(a["a"])(t);try{for(i.s();!(n=i.n()).done;){var c=n.value,o=c.id,s=c.parentId;r[o]||(r[o]={children:[]}),r[o]={name:c.givenName,pid:c.parentId,id:o,children:r[o]["children"]};var d=r[o];s?(r[s]||(r[s]={children:[]}),r[s].children.push(d)):e.push(d)}}catch(u){i.e(u)}finally{i.f()}return e},computedValue:function(t){var n=this;return t.map((function(t){return t.children.length?n.computedValue(t.children):t.value=1,t}))},addColor:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;return t.map((function(t,i){return(1===e||2===e||3===e)&&(r=l["b"][t.id]),e&&(t.itemStyle={color:l["c"][r][e-1]}),t.children&&n.addColor(t.children,e+1,r),t}))},handleEdit:function(t){t&&t.target.dataset.id&&window.open("/#/admin/edit?id=".concat(t.target.dataset.id))}}},C=E,p=(e("ae1b"),e("2877")),m=Object(p["a"])(C,r,i,!1,null,"70aec4c4",null);n["default"]=m.exports},"965d":function(t,n,e){},ad8f:function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return s})),e.d(n,"f",(function(){return d}));var r=e("b775");function i(t){return Object(r["a"])({url:"/list/get",method:"post",data:t})}function a(){return Object(r["a"])({url:"/list/getTree",method:"post"})}function c(t){return Object(r["a"])({url:"/item/remove",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/item/get",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/item/create",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/item/update",method:"post",data:t})}},ae1b:function(t,n,e){"use strict";e("965d")}}]);