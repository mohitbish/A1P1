var fs = require('fs');
const { exit } = require('process');

module.exports = function(req, res) {
    
    var u = req.body.username;
    var p = req.body.pwd;
    

    fs.readFile('./data/extendedUsers.json', 'utf8', function(err, data) {
        let extendedUserArray = JSON.parse(data);
        let i = extendedUserArray.findIndex(x => x.username == u);
        extendedUserArray.splice(i,1);
        const exdata = JSON.stringify(extendedUserArray);

        fs.writeFile('./data/extendedUsers.json', exdata, (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is deleted.");
        });

    });

    fs.readFile('./data/users.json', 'utf8', function(err, data) {
        let UserArray = JSON.parse(data);
        let i = UserArray.findIndex(x => x.username == u);
        UserArray.splice(i,1);
        const edata = JSON.stringify(UserArray);

        fs.writeFile('./data/users.json', edata, (err) => {
            if (err) {
                    throw err;
                }
                console.log("JSON data is deleted.");
        });
    }); 

    
}   