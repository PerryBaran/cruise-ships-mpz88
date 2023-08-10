/* globals describe it expect */
const Ship = require('../src/Ship.js')
const Port = require('../src/Port.js')
const Itinerary = require('../src/Itinerary.js');

describe ('Ship', () => {
describe('with ports and an itinerary', () => {
  let ship;
  let cadiz;
  let itinerary;
  let barcelona;

});

  beforeEach(() => {
    cadiz = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: 'Cadiz',
      ships: []
    }
    barcelona = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: 'Barcelona',
      ships: []
    };
    itinerary = {
      ports : [cadiz, barcelona]
    };
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
    
    const removeShipMock = jest.fn();
    cadiz.removeShip = removeShipMock;

    const ship = new Ship(itinerary);
    ship.setSail();
    removeShipMock(ship);

    expect(ship.currentPort).toBeFalsy();
    expect(cadiz.removeShip).toHaveBeenCalledWith(ship);
  });
it('can dock a different port', () => {
const cadiz = new Port('Cadiz');
const barcelona = new Port('Barcelona');

const itinerary = {
  ports : [cadiz, barcelona]
};
const ship = new Ship(itinerary);

const dockShipMock = jest.fn();
barcelona.dockShip = dockShipMock;
 
ship.setSail();
ship.dock();
dockShipMock(ship);
expect(ship.currentPort).toBe(barcelona);
expect(dockShipMock).toHaveBeenCalledWith(ship);

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
    const addShipMock = jest.fn();
    cadiz.addShip = addShipMock;
    addShipMock(ship);
    expect(cadiz.addShip).toHaveBeenCalledWith(ship);
  }); 
});
