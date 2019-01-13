// Funcion de tenplates para mi campeones
/* global array, arrayKeys, newArrayKeys*/
const array = Object.values(LOL.data);
const arrayKeys = Object.values(array[0]);
const newArrayKeys = Object.keys(arrayKeys[12]);
const newStats = Object.values(array);
newStats;
const conteinerChampions = document.getElementById('list-champions');
const templateListChampions = (array) => {
  let championsList = [];
  console.log(championsList);
  let newchampionList = [];
  conteinerChampions.value = '';
  for (let i = 0; i < array.length; i++) 
    championsList.push(Object.assign({}, array[i]));

  for (let i = 0; i < championsList.length; i++) {
    newchampionList.push(

      `<div class='blog-card'>   
            <a class='card' id='${championsList[i].id}' href='#modal${i}'>
            <img class='img-1'src='campeones/${championsList[i].name}.PNG'><br>
            <div class='layer'>
            <img class='img-2' src='imagenes/escudo.PNG'>
            <h2 class='txt-1'>${championsList[i].name}</h2><br>
            <h3 class='txt-2'>"${championsList[i].title}"</h3><br>
            </div></a>
            </div>

        <section class='modal-window' id='modal${i}'>
            <div class='modal-champions' id='${championsList[i].id}'> 
            <a href='#' title='Close' class='modal-close'>X</a>
            <img class="post-image" src="" />
            <h1> <img src="${ championsList[i].img}"/>${championsList[i].name}</h1>
            <h3>${ championsList[i].title}</h3>
            <p>${ championsList[i].blurb}</p>
            <p>${ championsList[i].tags}</p>
            <table>
              <tr>
                <th> Stats </th>
                <th> Per Level </th>
                <th> Level. 1 </th>
                <th> Level. 6 </th>
                <th> Level. 12 </th>
                <th> Level. 18 </th>
              </tr>
              <tr>
                <td>${ newArrayKeys[0]}</td>
                <td>${ championsList[i].stats.hpperlevel}</td>
                <td>${ championsList[i].stats.hp}</td>
                <td>${window.lol.statFunction(6, array, 1)}</td>
                <td>${window.lol.statFunction(12, array, 1)}</td>
                <td>${window.lol.statFunction(18, array, 1)}</td>
              </tr>
              <tr>
                <td>${ newArrayKeys[2]}</td>
                <td>${ championsList[i].stats.mpperlevel}</td>
                <td>${ championsList[i].stats.mp}</td>
                <td>${window.lol.statFunction(6, array, 2)}</td>
                <td>${window.lol.statFunction(12, array, 2)}</td>
                <td>${window.lol.statFunction(18, array, 2)}</td>
              </tr>
              <tr>
                <td>${ newArrayKeys[5]}</td>
                <td>${ championsList[i].stats.armorperlevel}</td>
                <td>${ championsList[i].stats.armor}</td>
                <td>${window.lol.statFunction(6, array, 3)}</td>
                <td>${window.lol.statFunction(12, array, 3)}</td>
                <td>${window.lol.statFunction(18, array, 3)}</td>
              </tr>
              <tr>
                <td>${ newArrayKeys[7]}</td>
                <td>${ championsList[i].stats.spellblockperlevel}</td>
                <td>${ championsList[i].stats.spellblock}</td>
                <td>${window.lol.statFunction(6, array, 4)}</td>
                <td>${window.lol.statFunction(12, array, 4)}</td>
                <td>${window.lol.statFunction(18, array, 4)}</td>
              </tr>
              <tr>
                <td>${ newArrayKeys[10]}</td>
                <td>${ championsList[i].stats.hpregenperlevel}</td>
                <td>${ championsList[i].stats.hpregen}</td>
                <td>${window.lol.statFunction(6, array, 5)}</td>
                <td>${window.lol.statFunction(12, array, 5)}</td>
                <td>${window.lol.statFunction(18, array, 5)}</td>
              </tr>
            </table>
          </div>
        </section>`
    );
  }
  conteinerChampions.innerHTML = newchampionList.join('');
};

templateListChampions(array);

// filtrado
const valuesCheckBox = document.getElementsByClassName('checkbox');
const checkbox = Object.values(valuesCheckBox);
const filter = (arrayTag) => {
  let tagChoices = [];
  arrayTag.forEach(tag => {
    tag.addEventListener('change', () => {
      if (tag.checked === true) {
        tagChoices.push(tag.value);
      } else {
        let element = tagChoices.indexOf(tag.value);
        tagChoices.splice(element, 1);
        templateListChampions(array);
      }
      templateListChampions(window.lol.dataFilter(array, tagChoices));
    });
  });
};

filter(checkbox);

// Funcion de ordenar data de ascendente y descente
const sortBy = document.getElementById('order-champions');
sortBy.addEventListener('change', () => {
  const listenSortBy = sortBy.value;
  templateListChampions(window.lol.sortData(array, listenSortBy));
});
