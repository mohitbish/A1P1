var fs = require('fs');
const { exit } = require('process');

module.exports = function(req, res) {
    
    var u = req.body.username;
    var p = req.body.pwd;
    var r = req.body.role;
    
    

    fs.readFile('./data/extendedUsers.json', 'utf8', function(err, data) {
        let extendedUserArray = JSON.parse(data);
        l = extendedUserArray.length;
        for (let i = 0; i < l; i++) {
            if(extendedUserArray[i].username == u){    
                res.send({
                    "user": "exist"
                });
                alert("username exist");
            }
        }
        const exuser = {
            "userid": l+1,
            "username": u,
            "role": r
        };
        extendedUserArray.push(exuser);
        const exdata = JSON.stringify(extendedUserArray);

        fs.writeFile('./data/extendedUsers.json', exdata, (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });

    });

    fs.readFile('./data/users.json', 'utf8', function(err, data) {
        let UserArray = JSON.parse(data);
        for (let i = 0; i < UserArray; i++) {
            if(UserArray[i].username == u){
                alert("username exist");
                res.send({
                    "user": "exist"
                });
            }
        }
        const user = {
            "username": u,
            "pwd": p
        };
        
        UserArray.push(user);
        const edata = JSON.stringify(UserArray);

        fs.writeFile('./data/users.json', edata, (err) => {
            if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
        });
    }); 

    
}   