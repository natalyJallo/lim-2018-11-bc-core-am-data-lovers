
const listAttack = document.getElementById('btn-attack');
listAttack.addEventListener("click", () => {
  const newArr = Object.values(LOL.data);
  const attackChampions = attackPower(newArr);
  document.write(attackChampions);
});

let magicPowerFilter = (newArr) => {
  const arr3 = [];
  for (var i = 0; i < newArr.length; i++) {
    const magicChampions = newArr[i];
    const filterDataMagic = (magicChampions.info.magic);
    arr3[i] = filterDataMagic;
    document.write(arr3[i]);
  }
}
const btnListMagic = document.getElementById("btn-magic");
btnListMagic.addEventListener("click", () => {
  const newArr3 = Object.values(LOL.data);
  const functionFilterMagic = magicPowerFilter(newArr3);
  document.write(functionFilterMagic);
})

let difficultyPowerFilter = (newArr) => {
  const arr4 = [];
  for (var i = 0; i < newArr.length; i++) {
    const difficultyChampions = newArr[i];
    const filterDataDifficulty = (diffChampions.info.difficulty);
    arr4[i] = filterDataDifficulty;
    document.write(arr4[i]);
  }
}
const btnListDifficulty = document.getElementById("btn-difficulty");
btnListDifficulty.addEventListener("click", () => {
  const newArr4 = Object.values(LOL.data);
  const functionFilterDifficulty = difficultyPowerFilter(newArr4);
  document.write(functionFilterDifficulty);
})
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
