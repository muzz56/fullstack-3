const event = require('events');
const eventEmitter = new event.EventEmitter();

var fn = function(){
    console.log('call me. ');
}

//second event
var alarm = () => {
    console.log('Alarm has been triggered!');
}
var phone = () => {
    console.log('Call 911!');
}

eventEmitter
    .on('call', alarm)
    .on('call2', phone);
eventEmitter.emit('call');
eventEmitter.emit('call2');
