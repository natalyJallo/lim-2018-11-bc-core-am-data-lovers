// Array de la data de Lol
let array = Object.values(LOL.data);
//  Funcion de tenplates para mi campeones
const templateListChampions = (list) => {
  let championsList = '';
  list.forEach((array) => {
    const templateList =
          `<div class="blog-card">
          <img src="${array.img}"><br>
          <h2>${array.name}</h2><br>
          <h3>${array.title}</h3><br>
          </div> `;
    championsList += templateList;
  });
  document.getElementById('list-champions').innerHTML = championsList;
};
templateListChampions(array);

// Funcion de ordenar data de ascendente y descente
const sortBy = document.getElementById('order-champions');
sortBy.addEventListener('change', () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  templateListChampions(data.sortData(array, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
  return 1;
});


const anchor = document.getElementById('rol-filter');
anchor.addEventListener('click', (array) => {
  let championsList2 = '';
  array.forEach((array) => {
    const templateList2 =
          `<div class="">
          <img src="${array.img}"><br>
          <h2>${array.name}</h2><br>
          <h3>${array.title}</h3><br>
          </div> `;
    championsList2 += templateList2;
  });
  document.getElementById('champions').innerHTML = championsList2;
});
const data = Object.values(LOL.data);
const ChampionsTopTen = lol.getTopTen(data);

let templateList = '';
ChampionsTopTen.forEach((element) => {
  const li = `
    <div class = 'blog-card'>
    <label>${element.name}</label>
    <div class = 'container-list'>
    <img src="${element.img}"/><br>
    <label>${element.attackdamage}</label>
    </div>
    </div>`;
  templateList += li;
}
);
const container = document.getElementById('container-list');
container.innerHTML = templateList;
console.log(lol.filterType(data, 'Tank'));
