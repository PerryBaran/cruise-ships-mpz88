/* globals describe it expect */
const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary.js');

describe ('Ship', () => {
describe('with ports and an itinerary', () => {
  let ship;
  let cadiz;
  let barcelona;
  let itinerary;
});

  beforeEach(() => {
    cadiz = new Port('Cadiz');
    barcelona = new Port('Barcelona');
    itinerary = new Itinerary([cadiz, barcelona]);
    ship = new Ship(itinerary);
});
it('can be instantiated',() => {
const port = new Port('Dover');
const itinerary = new Itinerary([port]);
const ship = new Ship(itinerary);

expect(ship).toBeInstanceOf(Object);
});

it('has a starting port', () => {
const port = new Port('Dover');
const itinerary = new Itinerary([port]);
const ship = new Ship(itinerary);
expect(ship.currentPort).toBe(port);
});

it('can set sail', () => {
    const cadiz = new Port('Cadiz');
    const barcelona = new Port('Barcelona');
    const itinerary = new Itinerary([cadiz, barcelona]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
  
    expect(ship.currentPort).toBeFalsy();
    expect(cadiz.ships).not.toContain(ship);

  });
it('can dock a different port', () => {
const cadiz = new Port('Cadiz');
const barcelona = new Port('Barcelona');
const itinerary = new Itinerary([cadiz, barcelona])
const ship = new Ship(itinerary);
 
ship.setSail();
ship.dock();

expect(ship.currentPort).toBe(barcelona);
expect(barcelona.ships).toContain(ship);

});
it('can\'t sail further than its itinerary', () => {
    const cadiz = new Port('Cadiz');
    const barcelona = new Port('Barcelona');
    const itinerary = new Itinerary([cadiz, barcelona]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
  it('gets added to port on instantiation', () => {
    const cadiz = new Port('Cadiz');
    const itinerary = new Itinerary([cadiz]);
    const ship = new Ship(itinerary);
  
    expect(cadiz.ships).toContain(ship);
  }); 
});
