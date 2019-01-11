// array de la data de Lol//
/* global array */
const array = Object.values(LOL.data);

// Segundo diseño de templates
const arrayTopTen = lol.getTopTen(array);
// templatepara el top ten
const templateListChampionTop = (list) => {
  let championsList = [];
  list.forEach((array) => {
    const templateList =
      `<div class='blog-card-2'>
      <video  class = "video" src="anima/${array.name}.webm" autoplay loop preload="auto" muted ></video>
      <h2class='text-9>${array.name}</h2>
          <h3>Ataque : ${array.attackdamage}</h3>
          </div>`;
    championsList += templateList;
  });
  document.getElementById('list-champion-top').innerHTML = championsList;
};
templateListChampionTop(arrayTopTen);