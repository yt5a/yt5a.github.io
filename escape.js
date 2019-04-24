


eventpoint = 6;
event = [];
event.length = 1 + eventpoint;
eventaverage = 0
//上書き　key


for (var i = 0; i < 1 + eventpoint; i++) {
if (i == 0) {
event[0] = 2
}
else {
event[i-1] = Math.floor(Math.random() * 2)


if (event[i-1] == 1) {
eventaverage += 1;
 }
else {
eventaverage -= 1;
 }

event[i] = 2;
 }
}

if (!Math.sign(eventaverage) == 0) {

while () {
var check = event[Math.floor(Math.random() * (array.length - 1))];
if (check = ) {

  }
 }
}


document.getElementById('deepmove').innerHTML = event;


//eventlist = ['ハサミ','カーテン','積み木','模型','机','窓'];event = [];eventlength = eventlist.length;for (var i = 1; i < eventlength + 1; i++) {eventup = Math.floor(Math.random() * (eventlength + 1 - i))setup =  eventlist[eventup];eventlist.splice(eventup,1)event.push(setup)}
console.log(eventaverage);
