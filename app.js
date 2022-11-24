'use strict';

const io = require('socket.io')
const { networkInterfaces } = require('os');
const path = require('path')
const fs = require('fs')
const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 5000
const hostname = '127.0.0.1'
var bodyParser = require('body-parser');
const session = require('express-session');
const ejs = require('ejs')

app.set("view engine", "ejs")
app.set('site' , path.join(__dirname + '/site'));


// class MyConfig{
//   ipAddress;
//   a;
//   B;
// }
// app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// app.get('getMyIpBySocket',(req,res) => {
//   const socket  = io("http://localhost:3000")
//   io.socket.on('connection'), (socket) => {
//     var address = socket.
//     console.log('New connection from ' + address.address + ':' + address.port)
//   }

// } )

app.get('/getMyIp1', (req,res) => {
  const nets = networkInterfaces();
  const results = Object.create(null); // Or just '{}', an empty object
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }  
  res.send(results);
})

app.get('/login', function(req, res) {
	// Render login template
	res.sendFile(path.join(__dirname + '/site/login.html'));
});

app.post('/login',(req,res)=>{
    const userName = req.body.userName
    const password = req.body.password
    if (userName && password) {
        if(userName==="Medr0n.Admin" && password==='123'){
            req.session.loggedin = true;
            req.session.username = userName;
            res.redirect('/')
        }else{
            res.send('Incorrect username or password')
        }
	} 
    else {
		res.sendFile(path.join(__dirname + '/site/login.html'));
	}
})
app.get('/',(req,res)=>{
    if (req.session.loggedin) {
		// Output username
        res.render(path.join(__dirname+'/site/index.ejs'))
	} else {
		// Not logged in
        res.sendFile(path.join(__dirname+'/site/login.html'))
	}
   
})

// app.post('/', (req,res) => {
//   // var ipAddress=req.socket.remoteAddress;
//   // //req.headers['x-forwarded-for'];
//   // req.body.ipAddress = ipAddress;
  
//   // fs.writeFile(path.join(__dirname, 'data1.txt'),
//   // (req.body.destinationIp + "\n" + req.body.portNumber),
  
//   // (err) => {
//   //   if (err) throw err;
//   //   console.log('The data were written the text file.');
//   // })


//   console.log(req)

//   res.redirect('/');
// })






app.post('/serial-config-form', (req,res) => {
 
  var portNo;

  if(req.body.defaultPort === 'PORT0'){
  fs.writeFile(path.join(__dirname,'PORT0.txt'),
  (`${req.body.defaultPort}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
  (err) => {
    if (err) throw err;
    console.log('The data were written the text file.');
  })
  };
  // var jsonData = {    //TODO burada json data tanımlayıp text dosyalrına da json veri yazdırma olayına bakıcaz. Fatih abi bunu kndi tarafında yaptı. aşağıda req.body de çağırdığım property value leri yerine jsonData isimli değişkeni koyacağım. 
  //   ipAddress:req.body.IP,
  //   port:req.body.defaultPort,
  //   cihazAdi: portNo
  // };
  if(req.body.defaultPort === 'PORT1'){
    portNo =1;
    fs.writeFile(path.join(__dirname,'PORT1.txt'),
    (`${req.body.defaultPort}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
    (err) => {
      if (err) throw err;
      console.log('The data were written the text file.');
    })
    };
    if(req.body.defaultPort === 'PORT2'){
      fs.writeFile(path.join(__dirname,'PORT2.txt'),
      (`${req.body.defaultPort}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
      (err) => {
        if (err) throw err;
        console.log('The data were written the text file.');
      })
      };
      if(req.body.defaultPort === 'PORT3'){
        fs.writeFile(path.join(__dirname,'PORT3.txt'),
        (`${req.body.defaultPort}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
        (err) => {
          if (err) throw err;
          console.log('The data were written the text file.');
        })
        };
  console.log(req.body)
  
  // console.log(jsonData);
  // fs.writeFile(path.join(__dirname,jsonData),

  res.redirect('/');
})

// export class Config 
// {
//   IPAddress: ;
// }

app.post('/lan-config-form', (req,res) => {

  if(req.body.defaultLan === 'LAN0'){
  fs.writeFile(path.join(__dirname,'LAN0.txt'),
  (`${req.body.defaultLan}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
  (err) => {
    if (err) throw err;
    console.log('The data were written the text file.');
  })
};
if(req.body.defaultLan === 'LAN1'){
  fs.writeFile(path.join(__dirname,'LAN1.txt'),
  (`${req.body.defaultLan}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
  (err) => {
    if (err) throw err;
    console.log('The data were written the text file.');
  })
};
if(req.body.defaultLan === 'LAN2'){
  fs.writeFile(path.join(__dirname,'LAN2.txt'),
  (`${req.body.defaultLan}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
  (err) => {
        if (err) throw err;
        console.log('The data were written the text file.');
      })
    };
    if(req.body.defaultLan === 'LAN3'){
      fs.writeFile(path.join(__dirname,'LAN3.txt'),
      (`${req.body.defaultLan}\nCihaz Adı : ${req.body.deviceName}\nYatak ID : ${req.body.bedID}\nIP : ${req.body.IP}\nPort : ${req.body.port}`),
      (err) => {
        if (err) throw err;
        console.log('The data were written the text file.');
      })
    };
    fs.readFile(__dirname + "/LAN0.txt", (error, data) => { //! burada text dosyalarından okumayı başardık. Bunun entegresini tüm projeye yap. Şu an sadece LAN0 için yapıyoruz.
      console.log(data.toString());
      if(error) {
          throw error;
      }
      // console.log(data.toString());
  });
    // console.log(req.body)
    
    res.redirect('/');
  });
  


app.post('/server-config-form', (req,res) => {
  // var ipAddress=req.socket.remoteAddress;
  // //req.headers['x-forwarded-for'];
  // req.body.ipAddress = ipAddress;
  
  fs.writeFile(path.join(__dirname, 'serverConfig.txt'),
  (`Hastane ID : ${req.body.serverIP}\nPort : ${req.body.serverPort}`),
  
  (err) => {
    if (err) throw err;
    console.log('The server data were written the text file.');
  })

  console.log(req)

  res.redirect('/');
})

app.listen(port,hostname, () => {
  console.log(`Sunucu çalışıyor, http://${hostname}:${port}/`)
})
