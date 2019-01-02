require('../src/data.js');
const input = [{Aatrox: { version: '6.24.1', id: 'Aatrox', key: '266', name: 'Aatrox', title: 'the Darkin Blade' }},
  {Ahri: { version: '6.24.1', id: 'Ahri', key: '103', name: 'Ahri', title: 'the Nine-Tailed Fox'}},
  {Akali: { version: '6.24.1', id: 'Akali', key: '84', name: 'Akali', title: 'the Fist of Shadow'}}
];
const output = [{Aatrox: { version: '6.24.1', id: 'Aatrox', key: '266', name: 'Aatrox', title: 'the Darkin Blade' }},
  {Ahri: { version: '6.24.1', id: 'Ahri', key: '103', name: 'Ahri', title: 'the Nine-Tailed Fox'}},
  {Akali: { version: '6.24.1', id: 'Akali', key: '84', name: 'Akali', title: 'the Fist of Shadow'}}
];
const output2 = [{Zyra: {version: '6.24.1', id: 'Zyra', key: '143', name: 'Zyra', title: 'Rise of the Thorns'}},
  {Zilean: {version: '6.24.1', id: 'Zilean', key: '26', name: 'Zilean', title: 'the Chronokeeper'}},
  {Ziggs: {version: '6.24.1', id: 'Ziggs', key: '115', name: 'Ziggs', title: 'the Hexplosives Expert'}}
];

describe('lol', () => {
  it('is a object', () => {
    expect(typeof lol).toBe('object');
  });
  describe('lol.getTopTen', () => {
    it('is a function', () => {
      expect(typeof lol.getTopTen).toBe('function');
    });
  });
  describe('lol.sortData', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.sortData).toBe('function');
    });
    it('Deberia retornar un array de objetos ordenados de la A hasta la Z, con el valor de la propiedad ', () => {
      expect(lol.sortData(input, 0, 0)).toEqual(output);
    });
    it('Deberia retornar un array de objetos ordenados de la Z a la A ,con el valor de la propiedad', () => {
      expect(lol.sortData(input, 1, 0)).toEqual(output2);
    });
  }); 
  describe('lol.filterType', () => {
    it('is a fuction', () => {
      expect(typeof lol.filterType).toBe('function');
    });
  });
});
