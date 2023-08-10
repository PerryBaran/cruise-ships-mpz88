(function exportItinerary(){
function Itinerary(ports) {
  this.ports = ports || [];}
  
  Itinerary.prototype.addPort = function (port) {
    this.ports.push(port);
  };

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }

}());