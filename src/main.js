// array de la data de Lol//
/* global array, arrayKeys*/
const array = Object.values(LOL.data);
const arrayKeys = Object.values(array[0]);
const newArrayKeys = Object.keys(arrayKeys[12]);

// Funcion de tenplates para mi campeones
const templateListChampions = (list) => {
  let championsList = [];
  list.forEach((array) => {
    const templateList =
      `<div class='blog-card'>
          <a class='card' id='${array.id}' href='#modal'>
          <img src='${array.img}'><br>
          <h2>${array.name}</h2><br>
          <h3>${array.title}</h3><br>
          </a>
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
  templateListChampions(window.lol.sortData(array, parseInt(listenSortBy[0]), parseInt(listenSortBy[1])));
});

// Ventana Modal
const windowModal = document.getElementById('modal');
const createdWindowModal = (modal) => {
  let windowFinal = '';
  modal.forEach((array) => {
    let cardChampions = `
     <div class='modal-champions' id='${array.id}'> 
     <a href='#' title='Close' class='modal-close'>X</a>
     <img class="post-image" src="" />
     <h1> <img src="${ array.img}"/>${array.name}</h1>
     <h3>${ array.title}</h3>
     <p>${ array.blurb}</p>
     <p>${ array.tags}</p>
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
         <td>${ array.stats.hpperlevel}</td>
         <td>${ array.stats.hp}</td>
         <td>${window.lol.statFunction(6, array, 1)}</td>
         <td>${window.lol.statFunction(12, array, 1)}</td>
         <td>${window.lol.statFunction(18, array, 1)}</td>
       </tr>
       <tr>
         <td>${ newArrayKeys[2]}</td>
         <td>${ array.stats.mpperlevel}</td>
         <td>${ array.stats.mp}</td>
         <td>${window.lol.statFunction(6, array, 2)}</td>
         <td>${window.lol.statFunction(12, array, 2)}</td>
         <td>${window.lol.statFunction(18, array, 2)}</td>
       </tr>
       <tr>
         <td>${ newArrayKeys[5]}</td>
         <td>${ array.stats.armorperlevel}</td>
         <td>${ array.stats.armor}</td>
         <td>${window.lol.statFunction(6, array, 3)}</td>
         <td>${window.lol.statFunction(12, array, 3)}</td>
         <td>${window.lol.statFunction(18, array, 3)}</td>
       </tr>
       <tr>
         <td>${ newArrayKeys[7]}</td>
         <td>${ array.stats.spellblockperlevel}</td>
         <td>${ array.stats.spellblock}</td>
         <td>${window.lol.statFunction(6, array, 4)}</td>
         <td>${window.lol.statFunction(12, array, 4)}</td>
         <td>${window.lol.statFunction(18, array, 4)}</td>
       </tr>
       <tr>
         <td>${ newArrayKeys[10]}</td>
         <td>${ array.stats.hpregenperlevel}</td>
         <td>${ array.stats.hpregen}</td>
         <td>${window.lol.statFunction(6, array, 5)}</td>
         <td>${window.lol.statFunction(12, array, 5)}</td>
         <td>${window.lol.statFunction(18, array, 5)}</td>
       </tr>
     </table>
   </div>`;
    windowFinal += cardChampions;
  });
  windowModal.innerHTML = windowFinal;
};


const collecctionModal = document.querySelectorAll('.modal-champions');
const arrayModal = Array.from(collecctionModal);
const collectionCard = document.querySelectorAll('.blog-card');
const arrayCard = Array.from(collectionCard);
arrayCard.forEach((modal, index) => {
  modal.addEventListener('click', () => {
    arrayModal[index].style.display = 'block';
  });
  createdWindowModal(array);
});

