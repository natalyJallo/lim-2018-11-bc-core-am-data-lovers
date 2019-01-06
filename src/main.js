// array de la data de Lol//
const array = Object.values(LOL.data);
const topTen =lol.getTopTen(array);
// Funcion de tenplates para mi campeones
const templateListChampionsTop = (list) => {
  let championsList = '';
  list.forEach((array) => {
    const templateList =
      `
          <div class="card-link">
        <article class="info-card">
          <img class="post-image" src="anima/${array.name}.gif" />
          <div class="article-details">
           <h3 class="post-title">${ array.name }</h3>
            <p class="post-description">
              Ataque : ${ array.attackdamage}
              <p>info :
              <p> defensa : ${ array.info.defense}</p>
              <p>magia : ${ array.info.magic}</p>
              <p> dificultad : ${ array.info.difficulty}</p>
              </p>
          </div>
        </article>
      </div>`;
    championsList += templateList;
  });
  document.getElementById('list-top-ten').innerHTML = championsList;
};
templateListChampionsTop(topTen);

