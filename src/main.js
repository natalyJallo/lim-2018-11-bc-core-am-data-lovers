
/*//aqui obtengo 134 datos para iniciar el for
let array=Object.values(LOL.data);
//aqui los nombres de todos los campeones
const showChampions = document.getElementById("order-champions");
showChampions.addEventListener("click", () => {
let array = Object.values(LOL.data);
let newArrayNameAttack=[];
let templateList='';
for (let i = 0; i < array.length ; i++) {
  const nameArray = array[i];
  const championImage = (nameArray.img);
  const name=(nameArray.name);
  newArrayNameAttack= name;
  const li =`
  <div class="blog-card">
  <img src="${championImage}"><br>
  <label>${name}</label><br>
  </div>`
  templateList +=li;
  }
const resultsConteiner = document.getElementById("list-champions");
 resultsConteiner.innerHTML = templateList;
})*/

/*FUNCION DE ORDENAR LA DATA DE MANERA ASC Y DESC*/
const orderChampions = document.getElementById('order-champions');
orderChampions.addEventListener('change', () =>  {
  let array = Object.values(LOL.data);
  const orderPokemonValue = orderChampions.value;
  const orderPokemonName = sortData(arrPokemon,'name',orderPokemonValue);
  let showPokemonOrder = '';
  for(let i = 0;  i < orderPokemonName.length;  i++){
   showPokemonOrder += '<article class="col-md-3 col-sm-4 col-xs-6">' +
   '<div class="pokemon col-md-12 col-sm-12 col-xs-12">'+
   '<img src="'+orderPokemonName[i].img+'" border="1">'+'<h3>'+orderPokemonName[i].name+'</h3>' +
   '</div>'+ '</article>';
  }
  document.getElementById('pokemon-list').innerHTML = showPokemonOrder;
});
