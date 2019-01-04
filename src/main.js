// Array de la data de Lol//
const array = Object.values(LOL.data);
// funcion de top ten de campeones
const arrayOfChampionTop = lol.getTopTen(array);
templateTopChampions(arrayOfChampionTop);
const templateTopChampions = (list) => {
  let championsList = '';
  list.forEach((array) => {
    const templateList =
      `<div class='blog-card'>
          <img src='${array.img}'><br>
          <h2>${array.name}</h2><br>
          <h3>${array.attackdamage}</h3><br>
          </div>`;
    championsList += templateList;
  });
  document.getElementById('list-top-ten').innerHTML = championsList;
};
