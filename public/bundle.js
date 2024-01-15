(()=>{var t={68:t=>{var o="undefined"!=typeof Element,e="function"==typeof Map,n="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,c){if(t===c)return!0;if(t&&c&&"object"==typeof t&&"object"==typeof c){if(t.constructor!==c.constructor)return!1;var s,l,a,f;if(Array.isArray(t)){if((s=t.length)!=c.length)return!1;for(l=s;0!=l--;)if(!i(t[l],c[l]))return!1;return!0}if(e&&t instanceof Map&&c instanceof Map){if(t.size!==c.size)return!1;for(f=t.entries();!(l=f.next()).done;)if(!c.has(l.value[0]))return!1;for(f=t.entries();!(l=f.next()).done;)if(!i(l.value[1],c.get(l.value[0])))return!1;return!0}if(n&&t instanceof Set&&c instanceof Set){if(t.size!==c.size)return!1;for(f=t.entries();!(l=f.next()).done;)if(!c.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(c)){if((s=t.length)!=c.length)return!1;for(l=s;0!=l--;)if(t[l]!==c[l])return!1;return!0}if(t.constructor===RegExp)return t.source===c.source&&t.flags===c.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof c.valueOf)return t.valueOf()===c.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof c.toString)return t.toString()===c.toString();if((s=(a=Object.keys(t)).length)!==Object.keys(c).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(c,a[l]))return!1;if(o&&t instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==a[l]&&"__v"!==a[l]&&"__o"!==a[l]||!t.$$typeof)&&!i(t[a[l]],c[a[l]]))return!1;return!0}return t!=t&&c!=c}t.exports=function(t,o){try{return i(t,o)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),(()=>{"use strict";const t=(t,o)=>{return e="0",n=o-t.toString().length,new Array(n+1).join(e)+t;var e,n};"undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date;var o=e(68),n=e.n(o);const r={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}};function i(t,o,e,i){const c=n()(t,o);try{i?e.groupCollapsed("diff"):e.group("diff")}catch(t){e.log("diff")}c?c.forEach((t=>{const{kind:o}=t,n=function(t){const{kind:o,path:e,lhs:n,rhs:r,index:i,item:c}=t;switch(o){case"E":return[e.join("."),n,"→",r];case"N":return[e.join("."),r];case"D":return[e.join(".")];case"A":return[`${e.join(".")}[${i}]`,c];default:return[]}}(t);e.log(`%c ${r[o].text}`,function(t){return`color: ${r[t].color}; font-weight: bold`}(o),...n)})):e.log("—— no diff ——");try{e.groupEnd()}catch(t){e.log("—— diff end —— ")}}function c(t,o,e,n){switch(typeof t){case"object":return"function"==typeof t[n]?t[n](...e):t[n];case"function":return t(o);default:return t}}function s(t){const{timestamp:o,duration:e}=t;return(t,n,r)=>{const i=["action"];return i.push(`%c${String(t.type)}`),o&&i.push(`%c@ ${n}`),e&&i.push(`%c(in ${r.toFixed(2)} ms)`),i.join(" ")}}const l=function(o,e){const{logger:n,actionTransformer:r,titleFormatter:l=s(e),collapsed:a,colors:f,level:u,diff:d}=e,g=void 0===e.titleFormatter;o.forEach(((s,p)=>{const{started:h,startedTime:m,action:y,prevState:_,error:$}=s;let{took:v,nextState:w}=s;const b=o[p+1];b&&(w=b.prevState,v=b.started-h);const S=r(y),E="function"==typeof a?a((()=>w),y,s):a,O=(x=m,`${t(new Date(x).getHours(),2)}:${t(new Date(x).getMinutes(),2)}:${t(new Date(x).getSeconds(),2)}.${t(new Date(x).getMilliseconds(),3)}`);var x;const A=f.title?`color: ${f.title(S)};`:"",k=["color: gray; font-weight: lighter;"];k.push(A),e.timestamp&&k.push("color: gray; font-weight: lighter;"),e.duration&&k.push("color: gray; font-weight: lighter;");const T=l(S,O,v);try{E?f.title&&g?n.groupCollapsed(`%c ${T}`,...k):n.groupCollapsed(T):f.title&&g?n.group(`%c ${T}`,...k):n.group(T)}catch(t){n.log(T)}const j=c(u,S,[_],"prevState"),D=c(u,S,[S],"action"),C=c(u,S,[$,_],"error"),N=c(u,S,[w],"nextState");if(j)if(f.prevState){const t=`color: ${f.prevState(_)}; font-weight: bold`;n[j]("%c prev state",t,_)}else n[j]("prev state",_);if(D)if(f.action){const t=`color: ${f.action(S)}; font-weight: bold`;n[D]("%c action    ",t,S)}else n[D]("action    ",S);if($&&C)if(f.error){const t=`color: ${f.error($,_)}; font-weight: bold;`;n[C]("%c error     ",t,$)}else n[C]("error     ",$);if(N)if(f.nextState){const t=`color: ${f.nextState(w)}; font-weight: bold`;n[N]("%c next state",t,w)}else n[N]("next state",w);d&&i(_,w,n,E);try{n.groupEnd()}catch(t){n.log("—— log end ——")}}))},a={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:t=>t,actionTransformer:t=>t,errorTransformer:t=>t,colors:{title:()=>"inherit",prevState:()=>"#9E9E9E",action:()=>"#03A9F4",nextState:()=>"#4CAF50",error:()=>"#F20404"},diff:!1,diffPredicate:void 0,transformer:void 0};const f=io("https://web-production-94d6.up.railway.app/");console.log("Connecting to server");let u=!1,d=!1;f.on("event_from_app_to_web",(function(t){if(!t)return;const{type:o,logBuffer:e,data:n}=t;if(u)try{console.groupCollapsed("%cDATA_SOCKET","color: green; font-weight: bold;"),console.log(JSON.stringify(t)),console.groupEnd()}catch(t){}if("console"!==o)if("redux"==o&&e)!function(t,o={}){const e=Object.assign({},a,o),{logger:n,stateTransformer:r,errorTransformer:i,predicate:c,logErrors:s,diffPredicate:f}=e,u=e.diff&&"function"==typeof f?f(getState,action):e.diff;l(t,Object.assign({},e,{diff:u}))}(e,{collapsed:!0,duration:!0});else if("socket"!=o){if("call_api"==o){const{method:o,payload:e}=t;if(!o||!e)return;const{url:n,token:r,time:i,config:c,data:s}=e;return g(`${o}`,n,r,c,s),void(d&&console.log("TIME_CALL_API::",i))}if("call_api_response"==o){const{payload:o}=t;if(o)return void console.log(o)}if("local_data"!=o)console.log(t);else{const{payload:o}=t;console.log(o)}}else{const{title:o}=t.data;if(!o)return;t.data.data?console.log(`${o}`,t.data.data):console.log(o)}else console.log(...n)})),f.on("admin_had_login",(function(){$("#login").hide(),$("#logout").show()})),f.on("server_send_list_user",(function(t){$(".boxContent").html(""),t.forEach((function(t){$(".boxContent").append(`<li class='userOnline'><span>${t.name}</span><button socketId="${t.socket_id}" id="btn_disconnection" class="btn_disconnection">disconnection</button></li>`)}))})),f.on("login_status",(function(t){const{success:o}=t;o?(console.log("Login success"),$("#login").hide(),$("#logout").show()):alert("Mật khẩu không đúng")})),$((function(){const t=u?"HideJSON":"ShowJSON";$("#btn_showJson").html(t);const o=d?"Hide Time":"Show Time";$("#btn_showTime").html(o),$("#btn_disconnect").on("click",(function(){console.log("Sending disable connection to app"),f.emit("event_from_web_disconnect")})),$("#btn_login").on("click",(function(){console.log("onLogin",f),f.emit("client_login",$("#input_password").val()),$("#input_password").val("")})),$("#btn_logout").on("click",(function(){console.log("logout"),f.emit("client_logout"),$("#login").show(),$("#logout").hide()})),$("#btn_showJson").on("click",(function(){u=!u,console.log((u?"SHOW":"HIDE")+" JSON");const t=u?"HideJSON":"ShowJSON";$("#btn_showJson").html(t)})),$("#btn_showTime").on("click",(function(){d=!d,console.log((d?"SHOW":"HIDE")+" TIME");const t=d?"Hide Time":"Show Time";$("#btn_showTime").html(t)}))})),$(document).on("click","#btn_disconnection",(function(t){let o=t.target.getAttribute("socketId");console.log("Sending disable socket to app",o),f.emit("event_from_web_disconnect_user",{socket_id:o})}));const g=(t,o,e,n,r)=>{let i={};try{i=JSON.parse(`${r}`)}catch(t){}console.groupCollapsed(`%cAPI::${t} ${o}`,"color: green; font-weight: bold;"),console.log("DATA::",i),console.groupCollapsed("TOKEN::"),console.log(e),console.log("X-Channel::",n),console.groupEnd(),console.groupEnd()}})()})();