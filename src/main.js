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
