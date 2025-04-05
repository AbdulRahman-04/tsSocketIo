// ❌ Not needed, isko hata diya gaya hai
// import { Socket } from "dgram"

import express, { Request, Response } from "express"

// 1 make http module/server first
import http from "http"

// 5 import path module to give path of our html file and public folder
import path from "path"

// 6 import socket server from socket io
import { Server, Socket } from "socket.io"

const app = express()
// 2 make http server
const server = http.createServer(app)
const PORT = 5013;

// 7 create socket io server
// the io variable will handle my socket connections
// ✅ Sahi: new Server(server)
const io = new Server(server)

// 8 Socket io connecction mtlb jb bhi ui se request ayi toh ine handle krta
// socket variable is where all user info is stored, basically a user is called
// a socket param here
io.on("connection", (socket: Socket) => { //socket type is Socket
    // socket.on jb bhi client se msg emit hoke aata idhr toh wo
    // message 
    socket.on("usermessage", (message: string) => { // message is string
        console.log("New User Message: ", message);
        // send the message from user to all other users
        io.emit("message", message)
    })
})

// 4 give file path where your html file is
// app.use(express.static(path.resolve("./src/public")))
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req: Request, res: Response) => { 
  try {
    // giving path of our route to html file
    // ✅ Sahi: Absolute path dena hota hai
    // return res.sendFile(path.resolve("./public/index.html"))
    return res.sendFile(path.join(__dirname, "public", "index.html"));

  } catch (error: any) { // ✅ error type: any (for now)
    console.log(error);
    res.status(500).json({ msg: error.message }) // ✅ error.message typed
  }
})

// 3 sever ko listen kro, not app
server.listen(PORT, () => {
  console.log(`YOUR APP IS RUNNING LIVE AT ${PORT}`);
})
