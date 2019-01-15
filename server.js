// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
const obj_file = require('./db')
var db_file = obj_file.v1

function mostActiveDay() {
    var date = db_file[0].timestamp;
    var date_temp = new Date(date.split("T")[0]);
    date = date.split("T")[0];
    date_temp.setDate(date_temp.getDate() - 7);
    var finalDate = date_temp.getDate()+'/'+ (date_temp.getMonth()+1) +'/'+date_temp.getFullYear();

    return (date);
}

server.use(middlewares)


// GET /v1/user/:userid
server.get('/v1/user/:user_id', (req, res) => {
    
    var i;
    var temp = [];
    var tab;

    for(i = 0; i < db_file.length; ++i)
    {
        if (req.params.user_id === db_file[i].user_id) {
            
            var dates = mostActiveDay()
        }
    }
    tab = temp.filter(Boolean)
    //tab.length
    res.jsonp(dates)
  })

//POST /v1/app
server.post('/v1/app', (req, res) => {
    res.jsonp(console.log("POST Method"))
  })

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
  

