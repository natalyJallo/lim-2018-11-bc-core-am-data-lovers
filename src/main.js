console.table(LOL.data);
console.log(Object.entries(LOL.data));



let attackPower = (newArr) => {
  const arr = [];
  for (let i = 0; i < newArr.length; i++) {
    const champions = newArr[i];
    const statsChampions = (champions.stats.attackdamage);
    arr[i]=statsChampions;
    arr.sort();
    document.write(arr[i]);
  }
}
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
