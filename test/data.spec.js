require('../src/data.js');
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
  });
});

// describe('lol.getTopTen', () => {
//   it('debería retornar los nombres con los ataques  más la imagen', () => {
//     expect(lol.getTopTen(input)).toBe(output);
//   });
// });

