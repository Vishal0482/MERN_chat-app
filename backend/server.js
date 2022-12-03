const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { chats } = require('./data');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoute");
const chatRoutes = require("./routes/chatRoute");
const messageRoutes = require("./routes/messageRoute");
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config(); 
connectDB();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("hello world");
})

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, console.log("Server running on port ", port));