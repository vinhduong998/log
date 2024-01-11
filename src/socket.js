import { logger } from './logger/loger';

//Đổi link này
const socket = io("https://log-ashy.vercel.app/", { transports: ['websocket'] });
console.log('Connecting to server')

let showJson = false;
let showTime = false;

socket.on("event_from_app_to_web", function (dataSocket) {
  if (!dataSocket) return;
  const { type, logBuffer, data } = dataSocket;

  // Show socket JSON
  if (showJson) {
    try {
      console.groupCollapsed(`%cDATA_SOCKET`, 'color: green; font-weight: bold;')
      console.log(JSON.stringify(dataSocket));
      console.groupEnd();
    } catch (error) {

    }
  }

  if (type === 'console') {
    console.log(...data);
    return;
  }

  if (type == 'redux' && !!logBuffer) {
    logger(logBuffer, {
      collapsed: true,
      duration: true
    });

    return;
  }

  if (type == 'socket') {
    const { title } = dataSocket.data;
    if (!title) return;

    if (dataSocket.data.data) {
      console.log(`${title}`, dataSocket.data.data)
    } else {
      console.log(title)
    }

    return;
  }

  if (type == 'call_api') {
    const { method, payload } = dataSocket;

    if (!method || !payload) return;

    const { url, data, token, language, timeout, headers, time } = payload;

    consoleCustom(`${method}`, url, data, token, language, timeout, headers);
    showTime && console.log('TIME_CALL_API::', time)

    return;
  }

  if (type == 'call_api_response') {
    const { payload } = dataSocket;

    if (!!payload) {
      console.log(payload)

      return;
    }
  }

  if (type == 'local_data') {
    const { payload } = dataSocket;
    console.log(payload)
    return;
  }

  console.log(dataSocket)
})

socket.on("server_send_list_user", function (data) {
  $(".boxContent").html("");
  data.forEach(function (user) {
    $(".boxContent").append(`<li class='userOnline'><span>Gamifa</span><button socketId="${user.socket_id}" id="btn_disconnection" class="btn_disconnection">disconnection</button></li>`);
  })
})

$(function () {
  const labelShowHideJson = showJson ? "HideJSON" : "ShowJSON";
  $("#btn_showJson").html(labelShowHideJson)
  const labelShowHideTime = showTime ? "Hide Time" : "Show Time";
  $("#btn_showTime").html(labelShowHideTime)

  $("#btn_disconnect").on("click", function () {
    console.log('Sending disable connection to app')
    socket.emit("event_from_web_disconnect")
  })

  $("#btn_showJson").on("click", function () {
    showJson = !showJson;
    console.log(`${showJson ? 'SHOW' : 'HIDE'} JSON`);
    const labelShowHideJson = showJson ? "HideJSON" : "ShowJSON";
    $("#btn_showJson").html(labelShowHideJson);
  })

  $("#btn_showTime").on("click", function () {
    showTime = !showTime;
    console.log(`${showTime ? 'SHOW' : 'HIDE'} TIME`);
    const labelShowHideTime = showTime ? "Hide Time" : "Show Time";
    $("#btn_showTime").html(labelShowHideTime)
  })
});

$(document).on('click', '#btn_disconnection', function (event) {
  let socketId = event.target.getAttribute('socketId');
  console.log('Sending disable socket to app', socketId)
  socket.emit("event_from_web_disconnect_user", { socket_id: socketId })
});

export const consoleCustom = (type, url, data, token, language, timeout, headers) => {
  console.groupCollapsed(`%cAPI::${type} ${url}`, 'color: green; font-weight: bold;')
  console.log('DATA::', JSON.stringify(data));
  console.groupCollapsed('TOKEN::')
  console.log(token)
  console.log("HEADER::", headers)
  console.groupEnd();
  console.log('LANGUAGE::', language)
  console.log('TIMEOUT::', timeout)
  console.groupEnd();
}
