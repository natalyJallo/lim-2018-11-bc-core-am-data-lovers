//aqui obtengo 134 datos para iniciar el for
let array=Object.values(LOL.data);
//aqui los nombres de todos los campeones
const names=Object.keys(LOL.data);
//declarando los arrays
let newArrayNameAttack=[];
let arrayPower = [];
const arr=[];
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
const ulContainer = document.getElementById('container-list');
 ulContainer.innerHTML = templateList;
