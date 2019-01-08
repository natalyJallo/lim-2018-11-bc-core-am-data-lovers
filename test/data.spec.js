require('../src/data.js');
const input = [
  { id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png' },
  { id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' }
];
const output = [
  { id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png' },
  { id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' }
];
const output2 = [
  { id: 'Akali', name: 'Akali', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { id: 'Ahri', name: 'Ahri', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { id: 'Aatrox', name: 'Aatrox', img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png' }
];
const input2 = [
  { name: 'Ahri', stats: { attackdamage: 53.04 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png' },
  { name: 'Akali', stats: { attackdamage: 58.376 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png' },
  { name: 'Alistar', stats: { attackdamage: 61.1116 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png' },
  { name: 'Amumu', stats: { attackdamage: 53.384 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png' },
  { name: 'Anivia', stats: { attackdamage: 51.376 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png' },
  { name: 'Annie', stats: { attackdamage: 50.41 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Annie.png' },
  { name: 'Ashe', stats: { attackdamage: 56.508 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png' },
  { name: 'Aurelion Sol', stats: { attackdamage: 57 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png' },
  { name: 'Maokai', stats: { attackdamage: 63.544 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png' },
  { name: 'Kalista', stats: { attackdamage: 63 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Kalista.png' },
  { name: 'Warwick', stats: { attackdamage: 62.43 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png' },
  { name: 'Singed', stats: { attackdamage: 62.32 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png' },
  { name: 'Camille', stats: { attackdamage: 62 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png' },
  { name: 'Malphite', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png' },
  { name: 'Jax', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png' },
  { name: 'Galio', stats: { attackdamage: 61.97 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png' },
  { name: 'Irelia', stats: { attackdamage: 61.544 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png' },
  { name: 'Blitzcrank', stats: { attackdamage: 61.54 }, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png' }
];

const output3 =
  [{ name: 'Maokai', attackdamage: 63.544, img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png' },
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
const inputStat = [
  {
    blurb: "''All around me are empty husks, soulless and unafraid... but I will bring them fear.''<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...",
    id: "Maokai",
    image: { full: "Maokai.png", sprite: "champion2.png" },
    img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png",
    info: { attack: 3, defense: 8, magic: 6, difficulty: 3 },
    key: "57",
    name: "Maokai",
    partype: "MP",
    splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
    stats: {
      armor: 28.72,
      armorperlevel: 4,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackrange: 125,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125,
      crit: 0,
      critperlevel: 0,
      hp: 572.2,
      hpperlevel: 90,
      hpregen: 7,
      hpregenperlevel: 0.75,
      movespeed: 335,
      mp: 377.28,
      mpperlevel: 43,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
    },
    tags: ["Tank", "Mage"],
    title: "the Twisted Treant",
    version: "6.24.1",
  }
];
const input3 = [{
  id: 'Aatrox',
  name: 'Aatrox',
  title: 'the Darkin Blade',
  img:
    'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
  tags: ['Fighter', 'Tank']
},
{
  id: 'Ahri',
  name: 'Ahri',
  title: 'the Nine-Tailed Fox',
  img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
  tags: ['Mage', 'Assassin']
}
];

const input3choice = ['Mage'];
const outputFilter = [
  {
    id: 'Ahri',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    tags: ['Mage', 'Assassin']
  }];

const output4 = [1047.80];

describe('lol', () => {
  it('debería ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
  describe('lol.sortData', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.sortData).toBe('function');
    });
    it('Deberia retornar un array de objetos ordenados de la A hasta la Z, con el valor de la propiedad ', () => {
      expect(lol.sortData(input, 0, 0)).toEqual(output);
    });
    it('Deberia retornar un array de objetos ordenados de la Z hasta la A, con el valor de la propiedad ', () => {
      expect(lol.sortData(input, 0, 1)).toEqual(output2);
    });
  });
  describe('lol.getTopTen', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.getTopTen).toBe('function');
    });
    it('Debería retornar un array con 10 objetos con mayor numero de ataque', () => {
      expect(lol.getTopTen(input2)).toEqual(output3);
    });
  });
  describe('lol.statFunction', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof lol.statFunction).toBe('function');
    });
    it('Debería retornar  ', () => {
      expect(lol.statFunction(6, inputStat, 1)).toEqual(output4);
    });
  });
  describe('lol.dataFilter', () => {
    it('debería ser una función ', () => {
      expect(typeof lol.dataFilter).toBe('function');
    });
    it('deberia de retornar los de tipo Mage', () => {
      expect(lol.dataFilter(input3, input3choice)).toEqual(outputFilter);
    });
  });
});