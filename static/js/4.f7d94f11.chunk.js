(this["webpackJsonpjosh.maldonado.githib.io"]=this["webpackJsonpjosh.maldonado.githib.io"]||[]).push([[4],{516:function(e){e.exports=JSON.parse('{"a":["2020-Dec","2020-Nov","2019-Sep","2021-Sep","2019-May","2019-Jun","2019-Nov","2021-Jan","2021-Mar"]}')},518:function(e,t,n){var r={"./2019-Jun.ts":[584,6],"./2019-May.ts":[585,7],"./2019-Nov.ts":[586,8],"./2019-Sep.ts":[587,9],"./2020-Dec.ts":[588,10],"./2020-Nov.ts":[589,11],"./2021-Jan.ts":[590,12],"./2021-Mar.ts":[591,13],"./2021-Sep.ts":[592,14]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=518,e.exports=a},555:function(e,t){},573:function(e,t,n){var r={"./bitcoin.png":574,"./fast-api-banner.png":575,"./game_addon.png":576,"./graduated.png":577,"./guitar.png":578,"./mock_plugins_db.png":579,"./musher.png":580,"./musher_wip.png":581,"./personal_website.png":582,"./strange_loop.png":583};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=573},574:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bitcoin.f939e7b3.png"},575:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fast-api-banner.cb10e254.png"},576:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/game_addon.d6768fa3.png"},577:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/graduated.289978a7.png"},578:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/guitar.e08b1fd4.png"},579:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mock_plugins_db.8d2e1c82.png"},580:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/musher.8d7d6e38.png"},581:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/musher_wip.4b7e1a27.png"},582:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/personal_website.1b50cd22.png"},583:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/strange_loop.9aad2c6d.png"},598:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePage",(function(){return We}));var r=n(150),a=n(0),i=n.n(a),o=n(107),c=n(63),l=n(217);var u,s=n(490),m=n(109),d={layouts:{lg:[],md:[],sm:[],xs:[],xxs:[]},breakpoint:"lg",itemDetails:[],showHint:!0,randomNumber:Math.random()},p=(u={name:"homePage",initialState:d,reducers:{loadItems:function(e){},setLayouts:function(e,t){e.layouts=t.payload},setLayout:function(e,t){var n=Object(s.a)(t.payload,2),r=n[0],a=n[1];e.layouts[r]=a},setBreakpoint:function(e,t){e.breakpoint=t.payload},setItemDetails:function(e,t){e.itemDetails=t.payload},hideHint:function(e){e.showHint=!1}}},Object(m.b)(u)),g=p.actions,f=p.reducer,b=p.name,h=n(43),v=function(e){return e.homePage||d},y=(Object(h.a)([v],(function(e){return e})),Object(h.a)([v],(function(e){return e.layouts}))),x=Object(h.a)([v],(function(e){return e.breakpoint})),w=Object(h.a)([v],(function(e){return e.itemDetails})),O=Object(h.a)([v],(function(e){return e.showHint})),j=Object(h.a)([v],(function(e){return e.randomNumber})),E=n(514),k=n.n(E),I=n(152),C=n(515),N=n(596),L=n(516),M=n(517),z=n.n(M),D=n(481),S=n.n(D),H=k.a.mark(T),B=k.a.mark(A);function R(e){return P.apply(this,arguments)}function P(){return(P=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=S.a,e.next=3,Promise.all(S.a.map(t,function(){var e=Object(C.a)(k.a.mark((function e(t){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(518)("./".concat(t,".ts"));case 2:return r=e.sent,e.abrupt("return",r.itemDetailsWithoutId);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return e.t1=e.sent,e.abrupt("return",e.t0.flatten.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){var e,t,n,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=L.a,a.next=3,Object(N.a)(R,e);case 3:return t=a.sent,n=S.a.sortBy(t.reverse(),[function(e){return z()(e.date,"YYYY-MMM").toDate()}]).reverse(),r=S.a.map(n,(function(e,t){return Object(I.a)(Object(I.a)({},e),{},{i:t.toString()})})),a.next=8,Object(N.b)(g.setItemDetails(r));case 8:case"end":return a.stop()}}),H)}function A(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)(g.loadItems.type,T);case 2:case"end":return e.stop()}}),B)}var _=n(519),G=n(215);function J(){var e=Object(G.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  label {\n    font-family: Georgia, Times, 'Times New Roman', serif;\n    line-height: 1.5em;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n  }\n  .react-grid-item {\n    transition: all 200ms ease;\n    transition-property: left, top;\n  }\n  .react-grid-item.cssTransforms {\n    transition-property: transform;\n  }\n  .react-grid-item.resizing {\n    z-index: 1;\n    will-change: width, height;\n  }\n\n  .react-grid-item.react-draggable-dragging {\n    transition: none;\n    z-index: 3;\n    will-change: transform;\n  }\n\n  .react-grid-item.react-grid-placeholder {\n    background: red;\n    opacity: 0.2;\n    transition-duration: 100ms;\n    z-index: 2;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n\n  .react-grid-item > .react-resizable-handle {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    bottom: 0;\n    right: 0;\n    background: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=\");\n    background-position: bottom right;\n    padding: 0 3px 3px 0;\n    background-repeat: no-repeat;\n    background-origin: content-box;\n    box-sizing: border-box;\n    cursor: se-resize;\n  }\n\n  body {\n    background: white;\n    padding: 20px;\n    overflow: scroll;\n  }\n  #content {\n    width: 100%;\n  }\n  .react-grid-layout {\n    background: #eee;\n  }\n  .layoutJSON {\n    background: #ddd;\n    border: 1px solid black;\n    margin-top: 10px;\n    padding: 10px;\n  }\n  .columns {\n    -moz-columns: 120px;\n    -webkit-columns: 120px;\n    columns: 120px;\n  }\n  .react-grid-item {\n    box-sizing: border-box;\n  }\n  /* CONTROLS BACKGROUND COLOR AND BORDER\n    Remove generic border and background from custom components\n   */\n  .react-grid-item:not(.react-grid-placeholder):not(.custom-component) {\n    background: #ccc;\n    border: 1px solid black;\n  }\n  .react-grid-item.resizing {\n    opacity: 0.9;\n  }\n  .react-grid-item.static {\n    background: #cce;\n  }\n  .react-grid-item .text {\n    font-size: 24px;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 24px;\n  }\n  .react-grid-item .minMax {\n    font-size: 12px;\n  }\n  .react-grid-item .add {\n    cursor: pointer;\n  }\n\n  /* Prevents image from being dragged when trying to drag an item.\n    https://github.com/STRML/react-grid-layout/pull/1283#issuecomment-692085189 */\n  .react-grid-item img {\n    pointer-events: none;\n  }\n\n  .react-grid-dragHandleExample {\n    cursor: move; /* fallback if grab cursor is unsupported */\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n  }\n  li b {\n    font-size: 19px;\n    line-height: 14px;\n  }\n\n"]);return J=function(){return e},e}var W=Object(r.a)(J()),Z=n(595),F=n(530),Y=n.n(F),V=Object(a.memo)((function(e){var t=e.title,n=e.details,r=e.image;return i.a.createElement(X,null,U(r),i.a.createElement(Z.a.Body,null,i.a.createElement(Z.a.Title,null,Y()(t)),Y()(n)))})),U=function(e){return null===e.name?null:i.a.createElement(Q,{variant:"top",src:n(573)("./".concat(e.name)).default})},X=Object(r.b)(Z.a).withConfig({componentId:"sedqs6-0"})(["height:100%;overflow:auto;"]),Q=Object(r.b)(Z.a.Img).withConfig({componentId:"sedqs6-1"})(["max-height:50%;"]),q=n(593),K=Object(a.memo)((function(e){var t=e.layout,n=e.randomNumber,r=S.a.split(t.i,"_")[0];return i.a.createElement(re,{className:"date-seperator",randomcolor:$(r,n)},i.a.createElement(q.a.Header,{closeButton:!1},i.a.createElement(ne,null,i.a.createElement("strong",{className:"mr-auto"},r))))})),$=function(e,t){var n=S.a.reduce(S.a.split(e,""),(function(e,t){return e+t.charCodeAt(0)}),0),r=Math.pow(ee(n),3)*t,a=function(e){return e%1}(r+.618033988749895),i=te(a,.99,.99),o=Object(s.a)(i,3),c=o[0],l=o[1],u=o[2];return"rgb(".concat([c,l,u],")")},ee=function(e){return parseInt(e.toString().split("").reverse().join(""))},te=function(e,t,n){var r=Math.floor(6*e),a=6*e-r,i=n*(1-t),o=n*(1-a*t),c=n*(1-(1-a)*t),l=0===r?[n,c,i]:1===r?[o,n,i]:2===r?[i,n,c]:3===r?[i,o,n]:4===r?[c,i,n]:[n,i,o],u=Object(s.a)(l,3),m=u[0],d=u[1],p=u[2];return[Math.floor(256*m),Math.floor(256*d),Math.floor(256*p)]},ne=r.b.div.withConfig({componentId:"sc-1eh64xi-0"})(["margin-left:auto;margin-right:auto;"]),re=Object(r.b)(q.a).withConfig({componentId:"sc-1eh64xi-1"})(["width:100%;height:100%;max-width:none;display:flex;justify-content:center;align-items:center;cursor:pointer;border-bottom-color:",";"],(function(e){return e.randomcolor}));function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var oe=a.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:2,strokeMiterlimit:10,x1:0,y1:40,x2:64,y2:40}),ce=a.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:2,strokeMiterlimit:10,x1:0,y1:32,x2:64,y2:32}),le=a.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:2,strokeMiterlimit:10,x1:0,y1:24,x2:64,y2:24});function ue(e,t){var n=e.title,r=e.titleId,i=ie(e,["title","titleId"]);return a.createElement("svg",ae({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"64px",height:"64px",viewBox:"0 0 64 64",enableBackground:"new 0 0 64 64",xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,oe,ce,le)}var se=a.forwardRef(ue),me=(n.p,Object(a.memo)((function(e){var t=e.children;return i.a.createElement(de,null,i.a.createElement(pe,{className:"draggable"},i.a.createElement(se,null)),t)}))),de=r.b.div.withConfig({componentId:"hl3h6u-0"})(["height:100%;display:flex;flex-direction:column;"]),pe=r.b.div.withConfig({componentId:"hl3h6u-1"})(["width:100%;height:20px;min-height:20px;border:1px solid black;background-color:white;border-style:solid solid none solid;display:flex;flex-direction:column;align-items:center;cursor:pointer;border-radius:3px;"]),ge=Object(_.WidthProvider)(_.Responsive),fe=Object(a.memo)((function(e){var t=e.layouts,n=e.breakpoint,r=e.itemDetails,a=e.onLayoutChange,o=e.onBreakpointChange,c=e.onClickTimeline,l=e.onClickRandomize,u=e.showHint,s=e.randomNumber,m=t[n];return i.a.createElement(be,null,i.a.createElement(ve,null,i.a.createElement("h4",{id:"Headline"},"What am I up to?")),i.a.createElement(ve,null,xe(c,l,u)),i.a.createElement(ge,{draggableHandle:".draggable",layouts:t,isBounded:!0,className:"layout",rowHeight:30,breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:3},onLayoutChange:a,onBreakpointChange:o,compactType:null},function(e,t,n){var r=function(e){return S.a.map(e,(function(e){switch(e.component){case"BasicCard":return Object(I.a)(Object(I.a)({},e),{},{component:V});default:return e}}))}(function(e,t){return S.a.map(e,(function(e){var n=e.i,r=S.a.findIndex(t,(function(e){return e.i===n}));return-1===r?{isDateSeperator:!0,component:K,layout:e}:Object(I.a)(Object(I.a)({},t[r]),{},{layout:e})}))}(e,t));return S.a.map(r,(function(e){var t=e.layout;if(null===e.component)return i.a.createElement("div",{key:t.i},i.a.createElement(me,null,i.a.createElement("span",{className:"text"},t.i)));var r={},a={randomNumber:n};return i.a.createElement("div",{key:t.i,className:"custom-component"},"isDateSeperator"in e?i.a.createElement("div",{className:"draggable"},i.a.createElement(e.component,Object.assign({},e,a))):i.a.createElement(me,null,i.a.createElement(e.component,Object.assign({},e,r))))}))}(m,r,s)),i.a.createElement(W,null))})),be=r.b.div.withConfig({componentId:"m0wum1-0"})([""]),he=r.b.div.withConfig({componentId:"m0wum1-1"})(["width:15px;height:auto;display:inline-block;"]),ve=r.b.div.withConfig({componentId:"m0wum1-2"})(["display:flex;justify-content:center;"]),ye=function(e){return e.showHint?i.a.createElement("small",null,"HINT: press this ---\x3e"):null},xe=function(e,t,n){return i.a.createElement("div",null,i.a.createElement(ye,{showHint:n}),i.a.createElement(he,null),i.a.createElement("button",{id:"timeline-button",onClick:e},"Timeline"),i.a.createElement("small",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/jmaldon1/josh.maldonado.githib.io/blob/2d2ce17e4c6cd176ecc851bd104ce364632a73af/src/app/containers/HomePage/components/GridLayout/generateLayouts.ts#L6-L123"},"(source code)")),i.a.createElement(he,null),i.a.createElement("button",{id:"randomize-button",onClick:t},"Randomize"),i.a.createElement("small",null,i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/jmaldon1/josh.maldonado.githib.io/blob/2d2ce17e4c6cd176ecc851bd104ce364632a73af/src/app/containers/HomePage/components/GridLayout/generateLayouts.ts#L125-L137"},"(source code)")))};var we=n(228),Oe=n(229);function je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=3,r=8,a=S.a.reduce(e,(function(e,a){var i=Object(s.a)(e,4),o=i[0],c=i[1],l=i[2],u=i[3],m=null===u||u.x+u.w+n>t,d=a.date!==l,p=null===u?0:u.y,g=null===u?0:u.x,f=m?0:g+n,b=m?c+2:p,h=Math.max(c,b+r),v={i:S.a.flatten(S.a.values(o)).length.toString(),x:f,w:n,y:b,h:r};return[function(){var e=function(){var e=S.a.filter(S.a.keys(o),(function(e){return S.a.includes(e,a.date)}));if(m||d){var t=e.length;return"".concat(a.date,"_").concat(t)}return Object(Oe.a)(e).sort().reverse()[0]}(),t=m||d?Object(I.a)(Object(I.a)({},o),{},Object(we.a)({},e,[])):o,n=t[e],r=S.a.concat(n,v);return Object(I.a)(Object(I.a)({},t),{},Object(we.a)({},e,r))}(),h,a.date,v]}),[{},-1,"",null])[0],i=S.a.map(a,(function(e,t){var r=S.a.head(e);if(void 0===r)return[];var a=r.x,i=r.y-1;return[{i:t,x:a,w:e.length*n,y:i,h:1,maxH:1}].concat(Object(Oe.a)(e))}));return S.a.sortBy(S.a.flatten(i),["y","x"])}function Ee(e){return S.a.map(S.a.range(e),(function(e,t){var n=Math.ceil(4*Math.random())+1;return{x:2*Math.round(5*Math.random()),y:Math.floor(t/6)*n,w:3,h:8,i:t.toString()}}))}function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ce=a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"});function Ne(e,t){var n=e.title,r=e.titleId,i=Ie(e,["title","titleId"]);return a.createElement("svg",ke({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,Ce)}var Le=a.forwardRef(Ne);n.p;function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var De=a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"});function Se(e,t){var n=e.title,r=e.titleId,i=ze(e,["title","titleId"]);return a.createElement("svg",Me({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,De)}var He=a.forwardRef(Se),Be=(n.p,Object(a.memo)((function(e){return i.a.createElement(Re,null,i.a.createElement(Te,null,i.a.createElement(Ae,null,i.a.createElement(Pe,{id:"name"},"Joshua Maldonado"),i.a.createElement("p",{id:"occupation"},"Software Engineer")),i.a.createElement("span",{id:"socials"},i.a.createElement("span",null,i.a.createElement(Le,null),i.a.createElement("a",{href:"https://github.com/jmaldon1",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Ge,null,"Github"))),i.a.createElement(_e,null),i.a.createElement("span",null,i.a.createElement(He,null),i.a.createElement("a",{href:"https://www.linkedin.com/in/joshua-maldonado/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Ge,null,"Linkedin"))))))}))),Re=r.b.div.withConfig({componentId:"nr4cxd-0"})([""]),Pe=r.b.h1.withConfig({componentId:"nr4cxd-1"})(["margin-bottom:2px;"]),Te=r.b.div.withConfig({componentId:"nr4cxd-2"})(["margin:2em;margin-bottom:0.5em;"]),Ae=r.b.div.withConfig({componentId:"nr4cxd-3"})([""]),_e=r.b.span.withConfig({componentId:"nr4cxd-4"})(["border-left:1px solid;height:20px;margin-left:10px;margin-right:10px;"]),Ge=r.b.b.withConfig({componentId:"nr4cxd-5"})(["margin-left:5px;"]),Je=n(594),We=Object(a.memo)((function(e){var t;t={key:b,reducer:f},Object(l.b)(t),function(e){Object(l.c)(e)}({key:b,saga:A});var n,r=Object(c.c)(),u=Object(c.d)(w),s=Object(c.d)(y),m=Object(c.d)(O),d=Object(c.d)(j),p=Object(c.d)(x);n=function(){Je.a.initialize("G-814B22G7SF"),Je.a.pageview(window.location.pathname+window.location.search)},Object(a.useEffect)(n,[]);!function(e){Object(a.useEffect)(e,[u])}((function(){if(0===u.length||0===S.a.flatten(S.a.values(s)).length){r(g.loadItems());var e=Ee(u.length),t={lg:e,md:e,sm:e,xs:e,xxs:e};r(g.setLayouts(t))}}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("title",null,"Home"),i.a.createElement("meta",{name:"description",content:"Josh's Timeline"})),i.a.createElement(Ze,null,i.a.createElement(Be,null),i.a.createElement(fe,{layouts:s,breakpoint:p,itemDetails:u,onLayoutChange:function(e,t){r(g.setLayouts(t))},onBreakpointChange:function(e,t){r(g.setBreakpoint(e));var n={lg:je(u,12),md:je(u,10),sm:je(u,6),xs:je(u,4),xxs:je(u,3)};r(g.setLayouts(n))},onClickRandomize:function(){var e=Ee(u.length),t={lg:e,md:e,sm:e,xs:e,xxs:e};r(g.setLayouts(t))},onClickTimeline:function(){var e={lg:je(u,12),md:je(u,10),sm:je(u,6),xs:je(u,4),xxs:je(u,3)};r(g.setLayouts(e)),r(g.hideHint())},showHint:m,randomNumber:d})))})),Ze=r.b.div.withConfig({componentId:"sc-12ijtj2-0"})([""])}}]);