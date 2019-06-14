

let event = function(id, name, priority) {
  this.id = id;
  this.name = name;
  this.priority = priority;
};

let eventControlSystem = function() {
  this.events = {};
  let defaultEvent = new event(1, 'No priority event rn', 0);
  this.topPriorityEvent = defaultEvent;

  this.addEvent = function(event) {
    this.events[event.id] = event;

    if (event.priority > this.topPriorityEvent.priority) {
      this.topPriorityEvent = event;
    }
  };

  this.removeEvent = function(event) {
    console.log('removeEvent');
    delete this.events[event.id];

    if (this.topPriorityEvent.id == event.id) {
      this.topPriorityEvent = defaultEvent;
      Object.keys(this.events).map(key => {
        if (this.events[key].priority > this.topPriorityEvent.priority)
          this.topPriorityEvent = this.events[key];
      });
    }
  };
};

let earthquakeEvent = new event(123456, 'Earthquake', 100);
let wildfireEvent = new event(123457, 'Wildfire', 20);
let trafficEvent = new event(123458, 'Traffic', 10);
var controlSystem = new eventControlSystem();
controlSystem.addEvent(earthquakeEvent);
controlSystem.addEvent(wildfireEvent);
controlSystem.addEvent(trafficEvent);
console.log('000 controlSystem', controlSystem);
controlSystem.removeEvent(earthquakeEvent);
console.log('111 controlSystem', controlSystem);
controlSystem.removeEvent(wildfireEvent);
console.log('222 controlSystem', controlSystem);
