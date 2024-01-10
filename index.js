'use strick';

var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(process.env.PORT || 3000, function () {
  console.log("Server's listening....");
});

let users = [];
let adminLogin = false;
let password = "gamifa@";

io.on("connection", function (socket) {
  console.log("Co nguoi vua ket noi id =", socket.id);

  socket.on("client_login", function (data) {
    console.log("client_login =", socket.id);
    if (data === password) {
      adminLogin = true;
      socket.emit("login_status", { success: true })
    } else {
      socket.emit("login_status", { success: false })
    }
  })

  // neu chua login disable all connection
  console.log('adminLogin--->', adminLogin)
  if (!adminLogin) {
    io.emit("event_from_web_to_app", { type: 'disconnect' })
    users = [];
    io.emit("server_send_list_user", users);

    return;
  }

  socket.on("client_logout", function () {
    adminLogin = false;
    io.emit("event_from_web_to_app", { type: 'disconnect' })
    users = [];
    io.emit("server_send_list_user", users);
  })

  socket.emit("event_from_app_to_web", "connected to server")
  if (adminLogin) {
    socket.emit("admin_had_login")
  }

  io.emit("server_send_list_user", users);

  socket.on("disconnect", function (data) {
    console.log("Co nguoi vua mat ket noi id =", data);
  })

  socket.on("event_from_web_disconnect_user", function ({ socket_id }) {
    console.log("disconnect user", socket_id);
    io.to(socket_id).emit("event_from_web_to_app", { type: 'disconnect' })

    users = users.filter(u => u.socket_id != socket_id)
    io.emit("server_send_list_user", users);
  })

  socket.on("user_connect", function (dataHome) {
    console.log('user_connect', dataHome)
    let hasUser = users.find(u => u.socket_id == socket.id)

    if (!hasUser) {
      users.push({ socket_id: socket.id })
    }

    io.emit("server_send_list_user", users);
  })

  socket.on("event_from_app", function (data) {
    // socket.emit("event_from_app_to_app", data)
    io.emit("event_from_app_to_web", data)
  })

  socket.on("event_from_web_disconnect", function (data) {
    console.log('event_from_web_disconnect')
    io.emit("event_from_web_to_app", { type: 'disconnect' })
    users = [];
    io.emit("server_send_list_user", users);
  })
});

app.get("/", function (req, res) {
  res.render("index")
})