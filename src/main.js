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

// Funcion de ordenar data de ascendente y descente
const sortBy = document.getElementById('order-champions');
sortBy.addEventListener('change', () => {
  const listenSortBy = sortBy.options[sortBy.selectedIndex].value;
  templateListChampions(window.data.sortData(array, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
});

const valuesCheckBox = document.getElementsByClassName('checkbox');
const checkbox = Object.values(valuesCheckBox);
const tagChoices = [];
checkbox.forEach(tag => {
  tag.addEventListener('change', () => {
    if (tag.checked === true) {
      tagChoices.push(tag.value)
    }
    else {
      let element = tagChoices.indexOf(tag.value);
      tagChoices.splice(element,1);
      templateListChampions(array);
    }
    const fuctionFilter = lol.filterType(array, tagChoices);
    document.getElementById('champions').innerHTML = fuctionFilter;
  })
})

