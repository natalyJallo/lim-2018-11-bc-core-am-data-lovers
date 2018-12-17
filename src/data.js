// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
window.example = {
  filterAttack : (array) => {
    let newArrayNameAttack=[];
    let templateList='';
    for (let i = 0; i < array.length; i++) {
      const nameArray = array[i];
      const championAttack = (nameArray.stats.attackdamage);
      const championImage = (nameArray.img);
      const name=(nameArray.name);
      newArrayNameAttack= name;
      function listar(name,championAttack,championImage) {
          this.name = name;
          this.championAttack = championAttack;
          this.championImage = championImage;
        }
      listar(name,championAttack,championImage);
      const li =`
      <li>${name}</li>
      <li>${championAttack}</li>
      <img src="${championImage}">`
      templateList +=li;
    }
};
