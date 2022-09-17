var fs = require('fs');

module.exports = function(req, res) {
    
    var u = req.body.username;
    var p = req.body.pwd;
    var r = req.body.role;
    
    

    fs.readFile('./data/extendedUsers.json', 'utf8', function(err, data) {
        let extendedUserArray = JSON.parse(data);
        i = extendedUserArray.length;
        console.log(extendedUserArray);
        const exuser = {
            "userid": i+1,
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

        const user = {
            "username": u,
            "password": p
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