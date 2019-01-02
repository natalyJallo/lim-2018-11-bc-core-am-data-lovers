// Array de la data de Lol//
const array = Object.values(LOL.data);
// Funcion de tenplates para mi campeones
const templateListChampions = (list) => {
  let championsList = '';
  list.forEach((array) => {
    const templateList =
          `<div class='blog-card'>
          <img src='${array.img}'><br>
          <h2>${array.name}</h2><br>
          <h3>${array.title}</h3><br>
          </div>`;
    championsList += templateList;
  });
  document.getElementById('list-champions').innerHTML = championsList;
};
templateListChampions(array);

// Funcion de ordenar data de ascendente y descente
const sortBy = document.getElementById('order-champions');
sortBy.addEventListener('change', () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  templateListChampions(window.data.sortData(array, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
});

// Funcion de evento de mostrar el top ten de campeones mas fuertes
const showTopTen = document.getElementById('top-ten');
showTopTen.addEventListener('click', () => {
  topTenList = [];
  const functionShowTopten = lol.getTopTen(array);
  functionShowTopten.forEach((array) => {
    const templateList =
          `<div class='blog-card'>
          <img src='${array.img}'><br>
          <h2>${array.name}</h2><br>
          <h3>${array.attackdamage}</h3><br>
          </div>`;
    topTenList += templateList;
    document.getElementById('show-topten').innerHTML = topTenList;
})
});