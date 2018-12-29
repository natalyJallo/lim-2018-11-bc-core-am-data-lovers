require('../src/data.js');
const input = [{Aatrox: { version: '6.24.1', id: 'Aatrox', key: '266', name: 'Aatrox', title: 'the Darkin Blade' }},
  {Ahri: { version: '6.24.1', id: 'Ahri', key: '103', name: 'Ahri', title: 'the Nine-Tailed Fox'}},
  {Akali: { version: '6.24.1', id: 'Akali', key: '84', name: 'Akali', title: 'the Fist of Shadow'}}
];
const output = [{Aatrox: { version: '6.24.1', id: 'Aatrox', key: '266', name: 'Aatrox', title: 'the Darkin Blade' }},
  {Ahri: { version: '6.24.1', id: 'Ahri', key: '103', name: 'Ahri', title: 'the Nine-Tailed Fox'}},
  {Akali: { version: '6.24.1', id: 'Akali', key: '84', name: 'Akali', title: 'the Fist of Shadow'}}
];
describe('lol', () => {
  it('debería ser un objeto', () => {
    expect(typeof lol).toBe('object') ;
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
  describe('lol.sortData', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.sortData).toBe('function');
    });
    it('Deberia retornar un array de objetos ordenados de la A hasta la Z, con el valor de la propiedad ', () => {
      expect(lol.sortData(input, 0, 0)).toEqual(output);
    });
  });
});
