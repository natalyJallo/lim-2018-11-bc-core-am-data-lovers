//  aqui obtengo 134 datos para iniciar el for
let array = Object.values(LOL.data);

//  declarando los arrays
const menuLeft=document.getElementById("menu-left");
function hideMenuLeft() {
  menuLeft.style.display="none";
}
let templateList='';
const attackOption = document.getElementById("attack-option");
attackOption.addEventListener("click", () => {
  hideMenuLeft();
  const arrayData = Object.values(LOL.data);
  const functionFilter = window.example.filterAttack(arrayData);
  const resultsConteiner = document.getElementById("data-filter");
  resultsConteiner.innerHTML = templateList; 
});


console.log(funcion());
 function funcion() {
    const filterAssassin = array.filter((data) => {
        return data.tags.includes('Assassin') === true;
    });
    console.log(filterAssassin.name);
 };

// const showTag = array.forEach((element) => {
//   const tag = element.tags;
//   if(tag[0]==="Tank" || tag[1]==="Tank"){
//     console.log(element.name);
//   }
// });

// var jediPersonnel = personnel.filter(function (person) {
//   return person.isForceUser;
// });
