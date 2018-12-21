require('../src/data.js');
//aqui pones solo todos los elementos coomo objeto
const input="{version: '6.24.1', id: 'Aatrox', key:'266', name:'Aatrox', title: 'the Darkin Blade'}";
// aui poner tu objetopero con lo que quieres que se muetres algo asi
const output=['name:Aatrox,img:url,attackdamage:60.376','',''];

describe ('lol' , () => {
  it('debería ser un objeto', () =>{
    expect(typeof lol).toBe('object');
  });
});
describe('lol.getTopFive', () => {
  it('is a function', () => {
    expect(typeof lol.getTopFive).toBe('function');
  });
});

describe('lol.getTopFive', () => {
  it('ideberia retornar los nombres con los ataques  más la imagen', () => {
    expect( lol.getTopFive(input)).toBe(output);
  });
});

// 0: 63.544
// 1: 63
// 2: 62.43
// 3: 62.32
// 4: 62
// 5: 61.97
// 6: 61.97
// 7: 61.97
// 8: 61.544
// 9: 61.54
// 10: 61.38