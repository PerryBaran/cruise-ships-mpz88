/* globals describe it expect */
const Port = require('../src/Port.js')

describe ('Port', () => {
it('can be instatiated', () => {
expect(new Port()).toBeInstanceOf(Object);
});
it('has a name', () => {
const port = new Port ('Cadiz');    
expect(port.name).toBe('Cadiz');
});
});
