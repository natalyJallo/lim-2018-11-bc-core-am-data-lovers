require('../src/data.js');
const input = [{ Aatrox: { version: '6.24.1', id: 'Aatrox', key: '266', name: 'Aatrox', title: 'the Darkin Blade' } },
  { Ahri: { version: '6.24.1', id: 'Ahri', key: '103', name: 'Ahri', title: 'the Nine-Tailed Fox' } },
  { Akali: { version: '6.24.1', id: 'Akali', key: '84', name: 'Akali', title: 'the Fist of Shadow' } }
];
const output = [{ Aatrox: { version: '6.24.1', id: 'Aatrox', key: '266', name: 'Aatrox', title: 'the Darkin Blade' } },
  { Ahri: { version: '6.24.1', id: 'Ahri', key: '103', name: 'Ahri', title: 'the Nine-Tailed Fox' } },
  { Akali: { version: '6.24.1', id: 'Akali', key: '84', name: 'Akali', title: 'the Fist of Shadow' } }
];

const input2 = [
  { name: 'Ahri', stats: { attackdamage: 53.04 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { name: 'Akali', stats: { attackdamage: 58.376 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'},
  { name: 'Alistar', stats: { attackdamage: 61.1116 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png' },
  { name: 'Amumu', stats: { attackdamage: 53.384 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png' },
  { name: 'Anivia', stats: { attackdamage: 51.376 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png' },
  { name: 'Annie', stats: { attackdamage: 50.41 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Annie.png' },
  { name: 'Ashe', stats: { attackdamage: 56.508 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png' },
  { name: 'Aurelion Sol', stats: { attackdamage: 57 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png' },
  { name: 'Maokai', stats: { attackdamage: 63.544 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png'},
  { name: 'Kalista', stats: { attackdamage: 63 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Kalista.png' },
  { name: 'Warwick', stats: { attackdamage: 62.43 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png'},
  { name: 'Singed', stats: { attackdamage: 62.32 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png' },
  { name: 'Camille', stats: { attackdamage: 62 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png' },
  { name: 'Malphite', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png'},
  { name: 'Jax', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png' },
  { name: 'Galio', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png' },
  { name: 'Irelia', stats: { attackdamage: 61.544 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png' },
  { name: 'Blitzcrank', stats: { attackdamage: 61.54 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png' } 
];
const output2 = [{ name: 'Maokai', attackdamage: 63.544, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png' },
  { name: 'Kalista', attackdamage: 63, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Kalista.png' },
  { name: 'Warwick', attackdamage: 62.43, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png' },
  { name: 'Singed', attackdamage: 62.32, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png' },
  { name: 'Camille', attackdamage: 62, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png' },
  { name: 'Malphite', attackdamage: 61.97, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png' },
  { name: 'Jax', attackdamage: 61.97, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png' },
  { name: 'Galio', attackdamage: 61.97, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png' },
  { name: 'Irelia', attackdamage: 61.544, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png' },
  { name: 'Blitzcrank', attackdamage: 61.54, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png' }
];

const input3 = [{ name: 'Aatrox', tags: ['Fighter', 'Tank'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png' },
  { name: 'Kalista', tags: ['Marksman'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Kalista.png' },
  { name: 'Warwick', tags: ['Fighter', 'Tank'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png' },
  { name: 'Singed', tags: ['Tank', 'Fighter'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png' },
  { name: 'Camille', tags: ['Fighter', 'Tank'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png' },
  { name: 'Malphite', tags: ['Tank', 'Fighter'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png' },
  { name: 'Jax', tags: ['Fighter', 'Assassin'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png' },
  { name: 'Galio', tags: ['Tank', 'Mage'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png' },
  { name: 'Irelia', tags: ['Fighter', 'Assassin'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png' },
  { name: 'Blitzcrank', tags: ['Tank', 'Fighter'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png' }
];

const output3 = [{ name: 'Aatrox', tags: ['Fighter', 'Tank'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png' },
  { name: 'Warwick', tags: ['Fighter', 'Tank'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png' },
  { name: 'Singed', tags: ['Tank', 'Fighter'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png' },
  { name: 'Camille', tags: ['Fighter', 'Tank'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png' },
  { name: 'Malphite', tags: ['Tank', 'Fighter'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png' },
  { name: 'Galio', tags: ['Tank', 'Mage'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png' },
  { name: 'Blitzcrank', tags: ['Tank', 'Fighter'], img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png' }
];

describe('lol', () => {
  it('debería ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
  describe('lol.filterType', () => {
    it('is a function', () => {
      expect(typeof lol.filterType).toBe('function');
    });
    it('deberia retornar un array de objetos de un mismo tipo', () => {
      expect(lol.filterType(input3, 'Tank')).toEqual(output3);
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
  describe('lol.getTopTen', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.getTopTen).toBe('function');
    });
    it('Debería retornar un array con 10 objetos con mayor numero de ataque', () => {
      expect(lol.getTopTen(input2)).toEqual(output2);
    });
  });
});


