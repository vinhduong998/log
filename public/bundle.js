(()=>{var t={68:t=>{var e="undefined"!=typeof Element,o="function"==typeof Map,n="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,c){if(t===c)return!0;if(t&&c&&"object"==typeof t&&"object"==typeof c){if(t.constructor!==c.constructor)return!1;var s,l,a,f;if(Array.isArray(t)){if((s=t.length)!=c.length)return!1;for(l=s;0!=l--;)if(!i(t[l],c[l]))return!1;return!0}if(o&&t instanceof Map&&c instanceof Map){if(t.size!==c.size)return!1;for(f=t.entries();!(l=f.next()).done;)if(!c.has(l.value[0]))return!1;for(f=t.entries();!(l=f.next()).done;)if(!i(l.value[1],c.get(l.value[0])))return!1;return!0}if(n&&t instanceof Set&&c instanceof Set){if(t.size!==c.size)return!1;for(f=t.entries();!(l=f.next()).done;)if(!c.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(c)){if((s=t.length)!=c.length)return!1;for(l=s;0!=l--;)if(t[l]!==c[l])return!1;return!0}if(t.constructor===RegExp)return t.source===c.source&&t.flags===c.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof c.valueOf)return t.valueOf()===c.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof c.toString)return t.toString()===c.toString();if((s=(a=Object.keys(t)).length)!==Object.keys(c).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(c,a[l]))return!1;if(e&&t instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==a[l]&&"__v"!==a[l]&&"__o"!==a[l]||!t.$$typeof)&&!i(t[a[l]],c[a[l]]))return!1;return!0}return t!=t&&c!=c}t.exports=function(t,e){try{return i(t,e)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=(t,e)=>{return o="0",n=e-t.toString().length,new Array(n+1).join(o)+t;var o,n};"undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date;var e=o(68),n=o.n(e);const r={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}};function i(t,e,o,i){const c=n()(t,e);try{i?o.groupCollapsed("diff"):o.group("diff")}catch(t){o.log("diff")}c?c.forEach((t=>{const{kind:e}=t,n=function(t){const{kind:e,path:o,lhs:n,rhs:r,index:i,item:c}=t;switch(e){case"E":return[o.join("."),n,"→",r];case"N":return[o.join("."),r];case"D":return[o.join(".")];case"A":return[`${o.join(".")}[${i}]`,c];default:return[]}}(t);o.log(`%c ${r[e].text}`,function(t){return`color: ${r[t].color}; font-weight: bold`}(e),...n)})):o.log("—— no diff ——");try{o.groupEnd()}catch(t){o.log("—— diff end —— ")}}function c(t,e,o,n){switch(typeof t){case"object":return"function"==typeof t[n]?t[n](...o):t[n];case"function":return t(e);default:return t}}function s(t){const{timestamp:e,duration:o}=t;return(t,n,r)=>{const i=["action"];return i.push(`%c${String(t.type)}`),e&&i.push(`%c@ ${n}`),o&&i.push(`%c(in ${r.toFixed(2)} ms)`),i.join(" ")}}const l=function(e,o){const{logger:n,actionTransformer:r,titleFormatter:l=s(o),collapsed:a,colors:f,level:u,diff:d}=o,p=void 0===o.titleFormatter;e.forEach(((s,g)=>{const{started:h,startedTime:m,action:y,prevState:v,error:b}=s;let{took:S,nextState:_}=s;const w=e[g+1];w&&(_=w.prevState,S=w.started-h);const $=r(y),E="function"==typeof a?a((()=>_),y,s):a,O=(A=m,`${t(new Date(A).getHours(),2)}:${t(new Date(A).getMinutes(),2)}:${t(new Date(A).getSeconds(),2)}.${t(new Date(A).getMilliseconds(),3)}`);var A;const x=f.title?`color: ${f.title($)};`:"",T=["color: gray; font-weight: lighter;"];T.push(x),o.timestamp&&T.push("color: gray; font-weight: lighter;"),o.duration&&T.push("color: gray; font-weight: lighter;");const j=l($,O,S);try{E?f.title&&p?n.groupCollapsed(`%c ${j}`,...T):n.groupCollapsed(j):f.title&&p?n.group(`%c ${j}`,...T):n.group(j)}catch(t){n.log(j)}const D=c(u,$,[v],"prevState"),k=c(u,$,[$],"action"),C=c(u,$,[b,v],"error"),N=c(u,$,[_],"nextState");if(D)if(f.prevState){const t=`color: ${f.prevState(v)}; font-weight: bold`;n[D]("%c prev state",t,v)}else n[D]("prev state",v);if(k)if(f.action){const t=`color: ${f.action($)}; font-weight: bold`;n[k]("%c action    ",t,$)}else n[k]("action    ",$);if(b&&C)if(f.error){const t=`color: ${f.error(b,v)}; font-weight: bold;`;n[C]("%c error     ",t,b)}else n[C]("error     ",b);if(N)if(f.nextState){const t=`color: ${f.nextState(_)}; font-weight: bold`;n[N]("%c next state",t,_)}else n[N]("next state",_);d&&i(v,_,n,E);try{n.groupEnd()}catch(t){n.log("—— log end ——")}}))},a={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:t=>t,actionTransformer:t=>t,errorTransformer:t=>t,colors:{title:()=>"inherit",prevState:()=>"#9E9E9E",action:()=>"#03A9F4",nextState:()=>"#4CAF50",error:()=>"#F20404"},diff:!1,diffPredicate:void 0,transformer:void 0};const f=io("https://log-ashy.vercel.app/");console.log("Connecting to server");let u=!1,d=!1;f.on("event_from_app_to_web",(function(t){if(!t)return;const{type:e,logBuffer:o,data:n}=t;if(u)try{console.groupCollapsed("%cDATA_SOCKET","color: green; font-weight: bold;"),console.log(JSON.stringify(t)),console.groupEnd()}catch(t){}if("console"!==e)if("redux"==e&&o)!function(t,e={}){const o=Object.assign({},a,e),{logger:n,stateTransformer:r,errorTransformer:i,predicate:c,logErrors:s,diffPredicate:f}=o,u=o.diff&&"function"==typeof f?f(getState,action):o.diff;l(t,Object.assign({},o,{diff:u}))}(o,{collapsed:!0,duration:!0});else if("socket"!=e){if("call_api"==e){const{method:e,payload:o}=t;if(!e||!o)return;const{url:n,data:r,token:i,language:c,timeout:s,headers:l,time:a}=o;return p(`${e}`,n,r,i,c,s,l),void(d&&console.log("TIME_CALL_API::",a))}if("call_api_response"==e){const{payload:e}=t;if(e)return void console.log(e)}if("local_data"!=e)console.log(t);else{const{payload:e}=t;console.log(e)}}else{const{title:e}=t.data;if(!e)return;t.data.data?console.log(`${e}`,t.data.data):console.log(e)}else console.log(...n)})),f.on("server_send_list_user",(function(t){$(".boxContent").html(""),t.forEach((function(t){$(".boxContent").append(`<li class='userOnline'><span>Gamifa</span><button socketId="${t.socket_id}" id="btn_disconnection" class="btn_disconnection">disconnection</button></li>`)}))})),$((function(){const t=u?"HideJSON":"ShowJSON";$("#btn_showJson").html(t);const e=d?"Hide Time":"Show Time";$("#btn_showTime").html(e),$("#btn_disconnect").on("click",(function(){console.log("Sending disable connection to app"),f.emit("event_from_web_disconnect")})),$("#btn_showJson").on("click",(function(){u=!u,console.log((u?"SHOW":"HIDE")+" JSON");const t=u?"HideJSON":"ShowJSON";$("#btn_showJson").html(t)})),$("#btn_showTime").on("click",(function(){d=!d,console.log((d?"SHOW":"HIDE")+" TIME");const t=d?"Hide Time":"Show Time";$("#btn_showTime").html(t)}))})),$(document).on("click","#btn_disconnection",(function(t){let e=t.target.getAttribute("socketId");console.log("Sending disable socket to app",e),f.emit("event_from_web_disconnect_user",{socket_id:e})}));const p=(t,e,o,n,r,i,c)=>{console.groupCollapsed(`%cAPI::${t} ${e}`,"color: green; font-weight: bold;"),console.log("DATA::",JSON.stringify(o)),console.groupCollapsed("TOKEN::"),console.log(n),console.log("HEADER::",c),console.groupEnd(),console.log("LANGUAGE::",r),console.log("TIMEOUT::",i),console.groupEnd()}})()})();