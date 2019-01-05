
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

// const filterType = (data) => {
//   const newData = data.filter((champion) => {
//     return champion;
//   });
//   return newData;
// };
const statFunction = (num, array, stats) => {
  switch (stats) {
  case 'hp':
    return (parseFloat(array.stats.hp) + (parseFloat(array.stats.hpperlevel) * num)).toFixed(2);
  case 'mp':
    return (parseFloat(array.stats.mp) + (parseFloat(array.stats.mpperlevel) * num)).toFixed(2);
  case 'armor':
    return (parseFloat(array.stats.armor) + (parseFloat(array.stats.armorperlevel) * num)).toFixed(2);
  case 'spellblock':
    return (parseFloat(array.stats.spellblock) + (parseFloat(array.stats.spellblockperlevel) * num)).toFixed(2);
  case 'hpregen':
    return (parseFloat(array.stats.hpregen) + (parseFloat(array.stats.hpregenperlevel) * num)).toFixed(2);
  }
};
window.lol = {
  sortData,
  getTopTen,
  statFunction,
  // filterType,
};