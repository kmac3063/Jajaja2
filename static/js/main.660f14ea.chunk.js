(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{133:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(21),r=c.n(i),a=c(12),s=c.n(a),o=c(25),d=c.n(o),l=c(29),j=c(34),u=c(17),b=c(5),f=(c(131),c(134)),O=c(135),p=c(136),x=c(137),h=c(4),g=function(e){var t=e.id,c=e.go,n=(e.fetchedUser,e.showQRReader),i=e.codeList,r=(e.logText,e.getText,e.openStories);return Object(h.jsxs)(b.i,{id:t,children:[Object(h.jsx)(b.j,{children:"QR \u043f\u0440\u0438\u043b\u043e\u0436\u0443\u043b\u044c\u043a\u0430"}),Object(h.jsx)(b.d,{onClick:n,before:Object(h.jsx)(f.a,{}),children:"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c QR \u043a\u043e\u0434"}),Object(h.jsx)(b.d,{onClick:c,"data-to":"QrList",expandable:!0,before:Object(h.jsx)(O.a,{}),indicator:Object(h.jsx)(b.e,{mode:"primary",children:i.length}),children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 QR \u043a\u043e\u0434\u043e\u0432"}),Object(h.jsx)(b.n,{}),Object(h.jsx)(b.d,{onClick:c,"data-to":"AllowedQrList",expandable:!0,before:Object(h.jsx)(p.a,{}),children:"\u0411\u043e\u043d\u0443\u0441\u043d\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(h.jsx)(b.n,{}),Object(h.jsx)(b.d,{onClick:r,before:Object(h.jsx)(x.a,{}),children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u044f\u0445"})]})},m=(c.p,c(138)),v=function(e){var t,c=e.id,n=e.fetchedUser,i=e.go;return Object(h.jsx)(b.i,{id:c,children:Object(h.jsx)(b.f,{children:Object(h.jsx)(b.l,{icon:Object(h.jsx)(m.a,{}),header:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043c, "+(t=n,(null==t||null==t.first_name?"\u041f\u0440\u0438\u044f\u0442\u0435\u043b\u044c":n.first_name)+"!"),action:Object(h.jsx)(b.c,{size:"m",onClick:i,"data-to":"Home",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a QR \u043a\u043e\u0434\u0430\u043c"}),children:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0444\u0438\u043d\u0430\u043b\u0430 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430."})})})},y=function(e){var t=e.id,c=e.go,n=(e.fetchedUser,e.codeList),i=e.setCodeList;return Object(h.jsxs)(b.i,{id:t,children:[Object(h.jsx)(b.j,{left:Object(h.jsx)(b.k,{onClick:c,"data-to":"Home"}),children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u0434\u043e\u0432"}),Object(h.jsx)(b.f,{children:Object(h.jsx)(b.h,{children:n.map((function(e){return Object(h.jsx)(b.d,{multiline:!0,removable:!0,onRemove:function(){var t;t=e.id,i(n.filter((function(e){return e.id!==t})))},children:e.text},e.id)}))})})]})},S=c(20),k=function(e){var t=e.id,c=e.go,n=(e.fetchedUser,e.codeList),i=e.allowedList;return Object(h.jsxs)(b.i,{id:t,children:[Object(h.jsx)(b.j,{left:Object(h.jsx)(b.k,{onClick:c,"data-to":"Home",label:b.r===b.p?"\u041d\u0430\u0437\u0430\u0434":void 0}),children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u0434\u044b"}),Object(h.jsxs)(b.d,{multiline:!0,children:[" \u041a\u043e\u0434 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u043c, \u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u043e\u0434\u043d\u0443 \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u0442\u0440\u043e\u043a: ",i.map((function(e,t){return'"'+e.text+'"'+(t===i.length-1?"":", ")}))]}),Object(h.jsx)(b.o,{}),Object(h.jsx)(b.f,{header:Object(h.jsx)(b.g,{children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u0434\u044b"}),children:Object(h.jsx)(b.h,{children:function(){console.log(n),console.log(i);var e,t=[],c=Object(S.a)(n);try{for(c.s();!(e=c.n()).done;){var r=e.value;console.log("code: "+r.text),console.log("codeType: "+typeof r.text);var a,s=!1,o=Object(S.a)(i);try{for(o.s();!(a=o.n()).done;){var d=a.value;if(r.text.includes(d.text)){s=!0;break}}}catch(l){o.e(l)}finally{o.f()}s&&t.push(r)}}catch(l){c.e(l)}finally{c.f()}return t}().map((function(e){return Object(h.jsx)(b.d,{multiline:!0,children:e.text},e.id)}))})}),Object(h.jsx)(b.f,{header:Object(h.jsx)(b.g,{children:"\u041d\u0435\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u0434\u044b"}),children:Object(h.jsx)(b.h,{children:function(){var e,t=[],c=Object(S.a)(n);try{for(c.s();!(e=c.n()).done;){var r,a=e.value,s=!1,o=Object(S.a)(i);try{for(o.s();!(r=o.n()).done;){var d=r.value;if(a.text.includes(d.text)){s=!0;break}}}catch(l){o.e(l)}finally{o.f()}s||t.push(a)}}catch(l){c.e(l)}finally{c.f()}return t}().map((function(e){return Object(h.jsx)(b.d,{multiline:!0,children:e.text},e.id)}))})})]})},L=function(){arguments.length>0&&void 0!==arguments[0]||allowedList;return function(){var e=Object(n.useState)("WelcomeScreen"),t=Object(u.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(null),a=Object(u.a)(r,2),o=a[0],f=a[1],O=Object(n.useState)(Object(h.jsx)(b.m,{size:"large"})),p=Object(u.a)(O,2),x=p[0],m=p[1],S=Object(n.useState)(null),L=Object(u.a)(S,2),w=(L[0],L[1]),A=Object(n.useState)([]),R=Object(u.a)(A,2),W=R[0],C=R[1],K=Object(n.useState)(""),U=Object(u.a)(K,2),_=U[0],Q=(U[1],Object(n.useState)("")),V=Object(u.a)(Q,2),z=V[0];V[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(null),e.next=3,s.a.send("VKWebAppGetUserInfo");case 3:t=e.sent,f(t),s.a.send("VKWebAppStorageGetKeys",{count:1,offset:0}).then((function(e){s.a.send("VKWebAppStorageGet",{keys:["codeList"]}).then((function(e){C(JSON.parse(e.keys[0].value))}))})).catch((function(){s.a.send("VKWebAppStorageSet",{key:"codeList",value:JSON.stringify([])})}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var i=document.createAttribute("scheme");i.value="client_light",w(i.value),document.body.attributes.setNamedItem(i)}"VKWebAppOpenCodeReaderResult"===c&&C((function(e){return[].concat(Object(j.a)(e),[{text:n.code_data,id:Math.random().toString()}])}))})),function(){e.apply(this,arguments)}()}),[]),function(e,t){var c=Object(n.useRef)(!1);Object(n.useEffect)((function(){c.current?e():c.current=!0}),t)}((function(){s.a.send("VKWebAppStorageSet",{key:"codeList",value:JSON.stringify(W)})}),[W]);var I=function(e){i(e.currentTarget.dataset.to)};return Object(h.jsx)(b.a,{children:Object(h.jsx)(b.b,{children:Object(h.jsxs)(b.q,{activePanel:c,popout:x,children:[Object(h.jsx)(v,{id:"WelcomeScreen",fetchedUser:o,go:I}),Object(h.jsx)(g,{id:"Home",fetchedUser:o,go:I,showQRReader:function(){s.a.send("VKWebAppOpenCodeReader")},codeList:W,logText:_,getText:z,openStories:function(){s.a.send("VKWebAppShowStoryBox",{background_type:"image",url:"https://sun9-76.userapi.com/impg/G6i0ZjO52gSaY8469-OaAo8EOCgeD0UwzKmrBw/YWliW3MIRus.jpg?size=438x248&quality=96&sign=776f0b9196351c86d1ec3702e7b81fca&type=album",stickers:[{sticker_type:"renderable",sticker:{can_delete:0,content_type:"image",url:"https://sun9-28.userapi.com/impg/lyluQE_SUkYowD4tuhMiBx5cYsIYjzff39YR1A/LJKidxSlsNw.jpg?size=512x512&quality=96&sign=ed48ae9a7b751e35e2763f5bfe4232ce&type=album",clickable_zones:[{action_type:"app",action:{app_id:7993425}}]}}]})}}),Object(h.jsx)(y,{id:"QrList",fetchedUser:o,go:I,codeList:W,setCodeList:C}),Object(h.jsx)(k,{id:"AllowedQrList",fetchedUser:o,go:I,codeList:W,allowedList:[{text:".org",id:4},{text:".ru",id:5},{text:"aa",id:6}]})]})})})}()};s.a.send("VKWebAppInit"),r.a.render(Object(h.jsx)(L,{}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.660f14ea.chunk.js.map