/* globals describe it expect */
const Port = require('../src/Port.js')

describe ('Port', () => {
describe ('with an itinerary', () => {
    let port;
});
beforeEach(() =>{
    const port = new Port('Cadiz');
});
it('can be instantiated', () => {
expect(new Port()).toBeInstanceOf(Object);
});
it('has a name', () => {
const port = new Port('Cadiz');    
expect(port.name).toBe('Cadiz');
});
it('can add a ship',() => {
const port = new Port('Cadiz');
const ship = jest.fn();
port.addShip(ship);
expect(port.ships).toContain(ship);    
});
it('can remove a ship', () => {
const port = new Port('Cadiz');
const titanic = jest.fn();
const queenMary = jest.fn();

port.addShip(titanic);
port.addShip(queenMary);
port.removeShip(queenMary);

expect(port.ships).toEqual([titanic]);

});

});
