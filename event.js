const { emit } = require('process');

cont event = require('events')
const emitter = new events.EventEmitter();

emitter.emit("customEvent","Hello World","Computer");
emitter.emit("customEvent","Thats pretty cool huh?","Alex")