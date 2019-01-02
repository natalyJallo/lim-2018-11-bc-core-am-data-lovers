
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
    newArray.push(Object.assign({}, {name: data[i].name, attackdamage: data[i].stats.attackdamage, img: data[i].img }));
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

const filterType = (data, type) => {
  const newData = data.map(copyData => Object.assign({}, { name: copyData.name, tags: copyData.tags, img: copyData.img, title: copyData.title }));
  const filterTank = newData.filter((champion) => {
    return champion.tags.includes(type);
  });
  return filterTank;
};
window.lol = {
  sortData,
  getTopTen,
  filterType,
};
