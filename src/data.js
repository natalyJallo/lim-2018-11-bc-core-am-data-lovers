const sortData = (data, sortBy, sortOrder) => {
  let newArrayFilter = [];
  for (let i = 0; i < data.length; i++)
    newArrayFilter.push(Object.assign({}, data[i]));
  if (sortBy === 0) {
    newArrayFilter.sort(
      function (a1, b1) {
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

const dataFilter = () => {
  const newDataArray = [];
  tagchoices.forEach(options => {
    if (data.tags.includes(options)) {
      newDataArray.push(true);
    } else {
      newDataArray.push(false);
    }
    return newDataArray;
  });

}
const filterType = ((data, type) => {
  data.map(copyData => Object.assign({}, { name: copyData.name, tags: copyData.tags, img: copyData.img, title: copyData.title }));
  const newDataFinal = [];
  const arrayOptions = type;
  data.filter((data) => {
    arrayOptions.forEach(options => {
      if (data.tags.includes(options)) {
        newDataFinal.push(true);
      } else {
        newDataFinal.push(false)
      }
      return newDataFinal;
    })
    if (newDataFinal.includes(false)) {
      return false;
    } else {
      return data;
    }
  })
});

window.lol = {
  sortData,
  getTopTen,
  filterType,
};

// const dateStadistic = (data) => {
//   const newArray = [];
//   for (let i = 0; i < data.length; i++) {
//     newArray.push(Object.assign({}, { name: data[i].name, hp: data[i].stats.hp, img: data[i].img }));


//   }
// const filterType = (data, type) => {
//   const newData = data.map(copyData => Object.assign({}, { name: copyData.name, tags: copyData.tags, img: copyData.img, title: copyData.title }));
//   const filterTank = newData.filter((champion) => {
//     return champion.tags.includes(type);
//   });
//   return filterTank;
// };