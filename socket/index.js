import { Server } from "socket.io";

const io = new Server({ 
    cors:{
        origin:"http://localhost:3000"
    }
 })

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};
 
 io.on("connection", (socket) => {
   socket.on("newUser", (userId) => {
     addUser(userId, socket.id);
   });
 
   socket.on("sendNotification", ({ senderId, receiverId, type }) => {
     const receiver = getUser(receiverId);
     io.to(receiver.socketId).emit("getNotification", {
       senderId,
       type,
     });
   });
 
   socket.on("sendText", ({ senderId, receiverId, text }) => {
     const receiver = getUser(receiverId);
     io.to(receiver.socketId).emit("getText", {
       senderId,
       text,
     });
   });
 
   socket.on("disconnect", () => {
     removeUser(socket.id);
   });
 });

io.listen(5000);