const axios = require('axios');
const hostname = 'https://api.github.com';
const path = '/users?since=';
const path2 = '/users/';



module.exports = {


    async usersAll(req, res) {
        let since = req.query.since;
        let restg = await axios.get(`${hostname}${path}${since}`);
        console.log(restg.data.length);
        res.send(restg.data);
    },

    async userGet(req, res) {
        const { username } = req.params;
        let user = await axios.get(`${hostname}${path2}${username}`);
        res.send(user.data);

    },
    
    async userRepos(req, res) {
        const { username } = req.params;
        console.log(username);
        let user = await axios.get(`${hostname}${path2}${username}/repos`);
        console.log(user.data);
        res.send(user.data);
    }

}