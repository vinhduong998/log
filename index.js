const express = require('express');
const path = require("path");


const app = express();

const { Server, Socket } = require("socket.io");
const socket = require('http').createServer(app);

const io = new Server(socket, {
  cors: {
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["X-Total-Count", "X-Authorization"],
    origin: "*",
    credentials: true,
    exposedHeaders: "*",
    optionsSuccessStatus: 200
  },
});

app.use(express.static(path.join(__dirname + '/public')));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
let users = [];
let adminLogin = true;

io.on("connection", function (socket) {
  console.log("Co nguoi vua ket noi id =", socket.id);

  socket.on("client_login", function (data) {
    console.log("client_login =", socket.id);
  })

  // neu chua login disable all connection
  console.log('adminLogin--->', adminLogin)
  if (!adminLogin) {
    io.emit("event_from_web_to_app", { type: 'disconnect' })
    users = [];
    io.emit("server_send_list_user", users);

    return;
  }

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
  console.log("render home");
  res.render("index")
})

socket.listen(3007)

console.log(`NodeJS Server running at port 3007`);