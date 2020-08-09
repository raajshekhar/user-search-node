const axios = require('axios');
const envConfig = require('dotenv').config().parsed;

async function getUsersList(req, res) {
    const { URL, POSTS_PATH } = envConfig;
    try {
        const postsList = await axios.get(`${URL}${POSTS_PATH}`);
        return res.json({ status: true, code: 200, message: 'List Found', userList: postsList.data})
    } catch (error) {
        return res.json({ status: false, code: 404, message: 'List Not Found', userList: []})
    }
}

module.exports = getUsersList;