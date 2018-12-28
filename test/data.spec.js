require('../src/data.js');
<<<<<<< HEAD
// const input = [{Aatrox: {version: '6.24.1', id: 'Aatrox', key: '266', name: 'Aatrox', title: 'the Darkin Blade', stats: {attackdamage: 60.376}}}];
// const output = [{name: 'Maokai', attackdamage: 63.544, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png'}];

describe('lol', () => {
  it('debería ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
});
describe('lol.getTopTen', () => {
  it('is a function', () => {
    expect(typeof lol.getTopTen).toBe('function');
  });
});
describe('lol.filterType', () => {
  it('is a fuction', () => {
    expect(typeof lol.filterType).toBe('function');
=======
const input = {
  data: {
    Aatrox: { version: "6.24.1", id: "Aatrox", key: "266", name: "Aatrox", title: "the Darkin Blade"},
    Ahri: { version: "6.24.1", id: "Ahri", key: "103", name: "Ahri", title: "the Nine-Tailed Fox"},
    Akali: { version: "6.24.1", id: "Akali", key: "84", name: "Akali", title: "the Fist of Shadow"}
}};

const output = {
  data: {
    Aatrox: { version: "6.24.1", id: "Aatrox", key: "266", name: "Aatrox", title: "the Darkin Blade"},
    Ahri: { version: "6.24.1", id: "Ahri", key: "103", name: "Ahri", title: "the Nine-Tailed Fox"},
    Akali: { version: "6.24.1", id: "Akali", key: "84", name: "Akali", title: "the Fist of Shadow"}
}};


describe('data', () => {
  it('is a function', () => {
    expect(typeof data).toBe('object');
  });
  describe('data.sortData', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof data.sortData).toBe('function');
    });
  it('Deberia retornar un array de objetos ordenados de la A hasta la Z, con el valor de la propiedad ', () => {
      expect(sortData(input,0,0).toEqual('output');
>>>>>>> 2bfe24525c64324cd555c7f6e520a0ca512e7625
  });

});

});

// describe('lol.getTopTen', () => {
//   it('debería retornar los nombres con los ataques  más la imagen', () => {
//     expect(lol.getTopTen(input)).toBe(output);
//   });
// });

