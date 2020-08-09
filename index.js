const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

const userListMethods = require('./api/controllers/UsersList');

app.get('/', userListMethods.getUsersList)
 
app.listen(5000)