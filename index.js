var odata = require('node-odata');

var server = odata(process.env.MONGO_URI);

/*
server.resource('book', {
  // Resource aata structure definitions
  // Optional types: String, Number, Date, Boolean, Array
  author: String,
  description: String,
  genre: String,
  id: String,
  price: Number,
  publish_date: Date,
  title: String
})*/

server.resource('entries', { device: String, sgv: Number, delta: Number, direction: String, type: String, sysTime: Date, utcOffset: Number, dateString: Date });
server.resource('treatments', { eventType: String, duration: Number, absolute: Number, rate: Number, insulin: Number, carbs:Number, glucose: Number, glucoseType: String, units: String, notes:String, reason:String, targetBottom:Number, targetTop:Number, created_at: Date, date: Date, enteredBy: String, NSCLIENT_ID: String});

server.listen(3000);