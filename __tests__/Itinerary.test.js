/* globals describe it expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js')

describe('Itinerary', () => {
it('can be instantiated', () => {
expect(new Itinerary()).toBeInstanceOf(Object);
  });
it('can have ports',() => {
 const cadiz = new Port('Cadiz');
 const barcelona = new Port('Barcelona');
 
 const itinerary = new Itinerary([cadiz,barcelona]);
 expect(itinerary.ports).toEqual([cadiz,barcelona]);
});  
 });