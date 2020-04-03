const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io");
const mongoose = require('mongoose');
const Restaurant = require ("./model/Restaurant");
const Order = require ("./model/Order");

const connectionString = "mongodb://userNas:userNas@cluster0-shard-00-00-jzbyc.gcp.mongodb.net:27017,cluster0-shard-00-01-jzbyc.gcp.mongodb.net:27017,cluster0-shard-00-02-jzbyc.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
.connect(connectionString);
  
const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function(res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function() {
    console.log("Disconnected...");
  });

//get-restaurants
  socket.on("get-restaurants", () => {
    console.log("server - get-restaurants called");
    //socket.emit("restaurants-data", ["pizza", "chicken sandwiches"]);
    //MyModel.find({ name: 'john', age: { $gte: 18 }});
  Restaurant.find({ city: 'Queens', cuisine: 'Delicatessen'}, 'name cuisine',  (error, documents) => {
    if (error) console.log (`Error occured on Restaurant.find (): ${error}`);
    else {
      console.log(`Restaurant.find() returned documents: ${documents}`);
      
       let data = JSON.stringify(documents, ['name', 'cuisine']);
       console.log(data);
      //const data = documents.map( x => x.name);
      socket.emit("restaurants-data", data);
    }

  });
  });

  //get-orders
  socket.on("get-orders", () => {
    console.log("server - get-orders called");
    
  Order.find((error, documents) => {
    if (error) console.log (`Error occured on Order.find (): ${error}`);
    else {
      console.log(`Order.find() returned documents: ${documents}`);
      let data = JSON.stringify(documents, ['customer_name', 'item']);
       console.log(data);
      //const data = documents.map( y => y.customer_name);
      socket.emit("orders-data", data);
    }

  });
  });

  //add-orders
  socket.on("add-orders", () => {
    console.log("server - add-orders called");
  const order = new Order({ "item" : "Liver and Onion",
  "customer_name" : "Tick Tock",
  "orderId" : "20001"})

  order.save().then(() => socket.emit("order-data-added"));
      
  // order.save((error, documents) => {
  //     if (error) console.log (`Error occured on Order.save (): ${error}`);
  //     else {
  //       // console.log(`Order.save() returned documents: ${documents}`);
  //       // const data = documents.map( z => z.customer_name);
  //       socket.emit("order-data-added", data);
  //     }
  
  //   });
    });

});