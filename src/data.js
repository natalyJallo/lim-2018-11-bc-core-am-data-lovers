
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
    newArray.push({ name: data[i].name, attackdamage: data[i].stats.attackdamage, img: data[i].img });
  }
  let newArrayOrder = newArray.sort((higher, lessHigher) => {
    if (higher.attackdamage < lessHigher.attackdamage) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 10);
};

window.data = {
  sortData,
  getTopTen,
};

// const dateStadistic = (data) => {
//   const newArray = [];
//   for (let i = 0; i < data.length; i++) {
//     newArray.push(Object.assign({}, { name: data[i].name, hp: data[i].stats.hp, img: data[i].img }));
  
  
//   }
