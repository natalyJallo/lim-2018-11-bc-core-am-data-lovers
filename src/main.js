
//aqui obtengo 134 datos para iniciar el for
let array=Object.values(LOL.data);
//aqui los nombres de todos los campeones
let names=Object.keys(LOL.data);
//declarando los arrays
let templateList='';
 const attackOption = document.getElementById("order-champions");
 attackOption.addEventListener("click", () => {
 if (attackOption.selectIndex === 0) {
   const arrayData = Object.values(LOL.data);
   const functionFilter = window.example.filterAttack(arrayData);
   const resultsConteiner = document.getElementById("list-champions");
   resultsConteiner.innerHTML = templateList;
 })
