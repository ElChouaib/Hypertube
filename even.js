 var events = require('events');  
 var util = require('util');


var Person = function(name){
    this.name = name;
}
util.inherits(Person, events.EventEmitter);
var james = new Person('James');
var mary = new Person('mary');
var chouaib = new Person('Chouaib');

var people = [james, mary, chouaib];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ':' + msg);
    });
});

james.emit('speak','hey dudes');
chouaib.emit('speak','hey how ru?');
mary.emit('speak','join me tonight');
james.emit('speak','sure');
chouaib.emit('speak','she talks to me fucker');