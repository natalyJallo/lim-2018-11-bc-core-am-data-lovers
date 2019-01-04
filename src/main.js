// Array de la data de Lol//
const array = Object.values(LOL.data);

//  ----------------------MOSTRAR EL TOPTEN---------------------------------------------
// liShowTen.addEventListener('click', () => {
  
// });
const templateListChampions = (list) => {
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
const arrayOfChampionTop = lol.getTopTen(array);
templateListChampions(arrayOfChampionTop);
 