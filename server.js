const express = require('express');
const userRouter = require('./routes/customer.routes');
const postRouter = require('./routes/post.routes');

const PORT = 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter, postRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))