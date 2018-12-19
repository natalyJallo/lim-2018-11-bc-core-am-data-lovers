require('../src/data.js');
const input={id: 'Aatrox', stats: {attackdamage: 60.376} }
const output=['Aatrox'];
describe('lol', () => {
  it('debería ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
describe('lol.topFive', () => {
  it('debería ser una función', () => {
    expect(typeof lol.topFive).toBe('function');
  }); 

describe('lol.topFive', () => {
  it('debería retornar los nombres de los campeones'), () => {
    expect(lol.topFive(input)).toEqual(output);

 });
