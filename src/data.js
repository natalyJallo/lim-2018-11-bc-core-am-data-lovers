// Funcion de filtrado
/* global array, templateListChampions*/
const valuesCheckBox = document.getElementsByClassName('checkbox');
const checkbox = Object.values(valuesCheckBox);
let tagChoices = [];
checkbox.forEach(tag => {
  tag.addEventListener('change', () => {
    if (tag.checked === true) {
      tagChoices.push(tag.value);
    } else {
      let element = tagChoices.indexOf(tag.value);
      tagChoices.splice(element, 1);
      templateListChampions(array);
    }
    const dataFilter = (data) => {
      const newDataarray = [];
      tagChoices.forEach(options => {
        if (data.tags.includes(options)) {
          newDataarray.push(true);
        } else {
          newDataarray.push(false);
        }
      });
      if (newDataarray.includes(false)) {
        return false;
      } else {
        return data;
      }
    };
    const fuctionFilter = array.filter(dataFilter);
    templateListChampions(fuctionFilter);
  });
});

// Funcion de ordenar asc y desc
const sortData = (data, sortBy, sortOrder) => {
  let newArrayFilter = [];
  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));
  if (sortBy === 0) {
    newArrayFilter.sort(
      function(a1, b1) {
        if (sortOrder === 0) {
          if (a1.name > b1.name) return 1;
          else return -1;
        } else {
          if (a1.name < b1.name) return 1;
          else return -1;
        }
      }
    );
  }
  return newArrayFilter;
};

// Funcion de de los 10 mejores campeones
const getTopTen = (data) => {
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    newArray.push(Object.assign({}, { name: data[i].name, attackdamage: data[i].stats.attackdamage, img: data[i].img }));
  }
  let newArrayOrder = newArray.sort((higher, lessHiger) => {
    if (higher.attackdamage <= lessHiger.attackdamage) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 10);
};

// Funcion de operacion de las estadisticas  por cada nivel de cada campeon
const statFunction = (num, array, stats) => {
  switch (stats) {
  case 1:
    return (parseFloat(array.stats.hp) + (parseFloat(array.stats.hpperlevel) * num)).toFixed(2);
  case 2:
    return (parseFloat(array.stats.mp) + (parseFloat(array.stats.mpperlevel) * num)).toFixed(2);
  case 3:
    return (parseFloat(array.stats.armor) + (parseFloat(array.stats.armorperlevel) * num)).toFixed(2);
  case 4:
    return (parseFloat(array.stats.spellblock) + (parseFloat(array.stats.spellblockperlevel) * num)).toFixed(2);
  case 5:
    return (parseFloat(array.stats.hpregen) + (parseFloat(array.stats.hpregenperlevel) * num)).toFixed(2);
  }
};
window.lol = {
  sortData,
  getTopTen,
  statFunction
};