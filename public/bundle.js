(()=>{var o={68:o=>{var t="undefined"!=typeof Element,e="function"==typeof Map,n="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(o,c){if(o===c)return!0;if(o&&c&&"object"==typeof o&&"object"==typeof c){if(o.constructor!==c.constructor)return!1;var s,l,a,f;if(Array.isArray(o)){if((s=o.length)!=c.length)return!1;for(l=s;0!=l--;)if(!i(o[l],c[l]))return!1;return!0}if(e&&o instanceof Map&&c instanceof Map){if(o.size!==c.size)return!1;for(f=o.entries();!(l=f.next()).done;)if(!c.has(l.value[0]))return!1;for(f=o.entries();!(l=f.next()).done;)if(!i(l.value[1],c.get(l.value[0])))return!1;return!0}if(n&&o instanceof Set&&c instanceof Set){if(o.size!==c.size)return!1;for(f=o.entries();!(l=f.next()).done;)if(!c.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(o)&&ArrayBuffer.isView(c)){if((s=o.length)!=c.length)return!1;for(l=s;0!=l--;)if(o[l]!==c[l])return!1;return!0}if(o.constructor===RegExp)return o.source===c.source&&o.flags===c.flags;if(o.valueOf!==Object.prototype.valueOf&&"function"==typeof o.valueOf&&"function"==typeof c.valueOf)return o.valueOf()===c.valueOf();if(o.toString!==Object.prototype.toString&&"function"==typeof o.toString&&"function"==typeof c.toString)return o.toString()===c.toString();if((s=(a=Object.keys(o)).length)!==Object.keys(c).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(c,a[l]))return!1;if(t&&o instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==a[l]&&"__v"!==a[l]&&"__o"!==a[l]||!o.$$typeof)&&!i(o[a[l]],c[a[l]]))return!1;return!0}return o!=o&&c!=c}o.exports=function(o,t){try{return i(o,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return o[n](i,i.exports,e),i.exports}e.n=o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},e.d=(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},e.o=(o,t)=>Object.prototype.hasOwnProperty.call(o,t),(()=>{"use strict";const o=(o,t)=>{return e="0",n=t-o.toString().length,new Array(n+1).join(e)+o;var e,n};"undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date;var t=e(68),n=e.n(t);const r={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}};function i(o,t,e,i){const c=n()(o,t);try{i?e.groupCollapsed("diff"):e.group("diff")}catch(o){e.log("diff")}c?c.forEach((o=>{const{kind:t}=o,n=function(o){const{kind:t,path:e,lhs:n,rhs:r,index:i,item:c}=o;switch(t){case"E":return[e.join("."),n,"→",r];case"N":return[e.join("."),r];case"D":return[e.join(".")];case"A":return[`${e.join(".")}[${i}]`,c];default:return[]}}(o);e.log(`%c ${r[t].text}`,function(o){return`color: ${r[o].color}; font-weight: bold`}(t),...n)})):e.log("—— no diff ——");try{e.groupEnd()}catch(o){e.log("—— diff end —— ")}}function c(o,t,e,n){switch(typeof o){case"object":return"function"==typeof o[n]?o[n](...e):o[n];case"function":return o(t);default:return o}}function s(o){const{timestamp:t,duration:e}=o;return(o,n,r)=>{const i=["action"];return i.push(`%c${String(o.type)}`),t&&i.push(`%c@ ${n}`),e&&i.push(`%c(in ${r.toFixed(2)} ms)`),i.join(" ")}}const l=function(t,e){const{logger:n,actionTransformer:r,titleFormatter:l=s(e),collapsed:a,colors:f,level:u,diff:d}=e,g=void 0===e.titleFormatter;t.forEach(((s,p)=>{const{started:h,startedTime:m,action:y,prevState:_,error:$}=s;let{took:v,nextState:w}=s;const b=t[p+1];b&&(w=b.prevState,v=b.started-h);const S=r(y),E="function"==typeof a?a((()=>w),y,s):a,O=(x=m,`${o(new Date(x).getHours(),2)}:${o(new Date(x).getMinutes(),2)}:${o(new Date(x).getSeconds(),2)}.${o(new Date(x).getMilliseconds(),3)}`);var x;const A=f.title?`color: ${f.title(S)};`:"",k=["color: gray; font-weight: lighter;"];k.push(A),e.timestamp&&k.push("color: gray; font-weight: lighter;"),e.duration&&k.push("color: gray; font-weight: lighter;");const T=l(S,O,v);try{E?f.title&&g?n.groupCollapsed(`%c ${T}`,...k):n.groupCollapsed(T):f.title&&g?n.group(`%c ${T}`,...k):n.group(T)}catch(o){n.log(T)}const j=c(u,S,[_],"prevState"),D=c(u,S,[S],"action"),C=c(u,S,[$,_],"error"),F=c(u,S,[w],"nextState");if(j)if(f.prevState){const o=`color: ${f.prevState(_)}; font-weight: bold`;n[j]("%c prev state",o,_)}else n[j]("prev state",_);if(D)if(f.action){const o=`color: ${f.action(S)}; font-weight: bold`;n[D]("%c action    ",o,S)}else n[D]("action    ",S);if($&&C)if(f.error){const o=`color: ${f.error($,_)}; font-weight: bold;`;n[C]("%c error     ",o,$)}else n[C]("error     ",$);if(F)if(f.nextState){const o=`color: ${f.nextState(w)}; font-weight: bold`;n[F]("%c next state",o,w)}else n[F]("next state",w);d&&i(_,w,n,E);try{n.groupEnd()}catch(o){n.log("—— log end ——")}}))},a={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:o=>o,actionTransformer:o=>o,errorTransformer:o=>o,colors:{title:()=>"inherit",prevState:()=>"#9E9E9E",action:()=>"#03A9F4",nextState:()=>"#4CAF50",error:()=>"#F20404"},diff:!1,diffPredicate:void 0,transformer:void 0};const f=io("https://web-production-94d6.up.railway.app/");console.log("Connecting to server");let u=!1,d=!1;f.on("event_from_app_to_web",(function(o){if(!o)return;const{type:t,logBuffer:e,data:n}=o;if(u)try{console.groupCollapsed("%cDATA_SOCKET","color: green; font-weight: bold;"),console.log(JSON.stringify(o)),console.groupEnd()}catch(o){}if("console"!==t)if("redux"==t&&e)!function(o,t={}){const e=Object.assign({},a,t),{logger:n,stateTransformer:r,errorTransformer:i,predicate:c,logErrors:s,diffPredicate:f}=e,u=e.diff&&"function"==typeof f?f(getState,action):e.diff;l(o,Object.assign({},e,{diff:u}))}(e,{collapsed:!0,duration:!0});else if("socket"!=t){if("call_api"==t){const{method:t,payload:e}=o;if(!t||!e)return;console.log("payload",e);const{url:n,token:r,time:i,config:c,data:s}=e;return g(`${t}`,n,r,c,s),void(d&&console.log("TIME_CALL_API::",i))}if("call_api_response"==t){const{payload:t}=o;if(t)return void console.log(t)}if("local_data"!=t)console.log(o);else{const{payload:t}=o;console.log(t)}}else{const{title:t}=o.data;if(!t)return;o.data.data?console.log(`${t}`,o.data.data):console.log(t)}else console.log(...n)})),f.on("admin_had_login",(function(){$("#login").hide(),$("#logout").show()})),f.on("server_send_list_user",(function(o){$(".boxContent").html(""),o.forEach((function(o){$(".boxContent").append(`<li class='userOnline'><span>${o.name}</span><button socketId="${o.socket_id}" id="btn_disconnection" class="btn_disconnection">disconnection</button></li>`)}))})),f.on("login_status",(function(o){const{success:t}=o;t?(console.log("Login success"),$("#login").hide(),$("#logout").show()):alert("Mật khẩu không đúng")})),$((function(){const o=u?"HideJSON":"ShowJSON";$("#btn_showJson").html(o);const t=d?"Hide Time":"Show Time";$("#btn_showTime").html(t),$("#btn_disconnect").on("click",(function(){console.log("Sending disable connection to app"),f.emit("event_from_web_disconnect")})),$("#btn_login").on("click",(function(){console.log("onLogin",f),f.emit("client_login",$("#input_password").val()),$("#input_password").val("")})),$("#btn_logout").on("click",(function(){console.log("logout"),f.emit("client_logout"),$("#login").show(),$("#logout").hide()})),$("#btn_showJson").on("click",(function(){u=!u,console.log((u?"SHOW":"HIDE")+" JSON");const o=u?"HideJSON":"ShowJSON";$("#btn_showJson").html(o)})),$("#btn_showTime").on("click",(function(){d=!d,console.log((d?"SHOW":"HIDE")+" TIME");const o=d?"Hide Time":"Show Time";$("#btn_showTime").html(o)}))})),$(document).on("click","#btn_disconnection",(function(o){let t=o.target.getAttribute("socketId");console.log("Sending disable socket to app",t),f.emit("event_from_web_disconnect_user",{socket_id:t})}));const g=(o,t,e,n,r)=>{console.groupCollapsed(`%cAPI::${o} ${t}`,"color: green; font-weight: bold;"),console.log("DATA::",r),console.groupCollapsed("TOKEN::"),console.log(e),console.log("X-Channel::",n),console.groupEnd(),console.groupEnd()}})()})();