
//aqui obtengo 134 datos para iniciar el for
let array=Object.values(LOL.data);
//aqui los nombres de todos los campeones
let names=Object.keys(LOL.data);
//declarando los arrays
const menuLeft=document.getElementById("menu-left");
function hideMenuLeft() {
  menuLeft.style.display="none";
}
let templateList='';
const attackOption = document.getElementById("attack-option");
attackOption.addEventListener("click", () => {
    hideMenuLeft();
   // const arrayData = Object.values(LOL.data);
   // const functionFilter = window.example.filterAttack(arrayData);
   // const resultsConteiner = document.getElementById("data-filter");
   // resultsConteiner.innerHTML = templateList;
   functionTags();
 })

function functionTags() {
  const filterAssassin = array.filter((data) => {
    templateList='';
        if(data.tags.includes('Tank') === true){
          const li =`
          <div class="blog-card">
          <img src="${data.img}"><br>
          <label>${data.data}</label><br>
          </div>`
          templateList +=li;
        };

    });
  }
    functionTags();

// const showTag = array.forEach((element) => {
//   const tag = element.tags;
//   if(tag[0]==="Tank" || tag[1]==="Tank"){
//     console.log(element.name);
//   }
// });

 // var jediPersonnel = personnel.filter(function (person) {
 //   return person.isForceUser;
 // });
