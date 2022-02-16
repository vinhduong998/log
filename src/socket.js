import { logger } from './logger/loger';

//Đổi link này
var socket = io("https://fjob-dev.herokuapp.com/");
// var socket = io("http://localhost:3000");
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

socket.on("admin_had_login", function () {
  $("#login").hide();
  $("#logout").show();
})

socket.on("server_send_list_user", function (data) {
  $(".boxContent").html("");
  data.forEach(function (user) {
    $(".boxContent").append(`<li class='userOnline'><span>My Lumi</span><button socketId="${user.socket_id}" id="btn_disconnection" class="btn_disconnection">disconnection</button></li>`);
  })
})

socket.on("login_status", function (data) {
  const { success } = data;

  if (success) {
    console.log('Login success')
    $("#login").hide();
    $("#logout").show();
  } else {
    alert("Mật khẩu không đúng")
  }
})

$(document).ready(function () {
  const labelShowHideJson = showJson ? "HideJSON" : "ShowJSON";
  $("#btn_showJson").html(labelShowHideJson)
  const labelShowHideTime = showTime ? "Hide Time" : "Show Time";
  $("#btn_showTime").html(labelShowHideTime)

  $("#btn_disconnect").click(function () {
    console.log('Sending disable connection to app')
    socket.emit("event_from_web_disconnect")
  })

  $("#btn_login").click(function () {
    console.log('onLogin')
    socket.emit("client_login", $("#input_password").val())
    $("#input_password").val("");
  })

  $("#btn_logout").click(function () {
    console.log('logout')
    socket.emit("client_logout")
    $("#login").show();
    $("#logout").hide();
  })

  $("#btn_showJson").click(function () {
    showJson = !showJson;
    console.log(`${showJson ? 'SHOW' : 'HIDE'} JSON`);
    const labelShowHideJson = showJson ? "HideJSON" : "ShowJSON";
    $("#btn_showJson").html(labelShowHideJson);
  })

  $("#btn_showTime").click(function () {
    showTime = !showTime;
    console.log(`${showTime ? 'SHOW' : 'HIDE'} TIME`);
    const labelShowHideTime = showTime ? "Hide Time" : "Show Time";
    $("#btn_showTime").html(labelShowHideTime)
  })
})

$(document).on('click', '#btn_disconnection', function (event) {
  let socketId = event.target.getAttribute('socketId');
  console.log('Sending disable socket to app', socketId)
  socket.emit("event_from_web_disconnect_user", { socket_id: socketId })
});

export const consoleCustom = (type, url, data, token, language, timeout) => {
  console.groupCollapsed(`%cAPI::${type} ${url}`, 'color: green; font-weight: bold;')
  console.log('DATA::', JSON.stringify(data));
  console.groupCollapsed('TOKEN::')
  console.log(token)
  console.groupEnd();
  console.log('LANGUAGE::', language)
  console.log('TIMEOUT::', timeout)
  console.groupEnd();
}
