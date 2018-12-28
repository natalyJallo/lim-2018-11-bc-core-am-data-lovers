require('../src/data.js');
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
  });

});

});
