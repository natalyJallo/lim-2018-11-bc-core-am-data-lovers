const getTopTen = (data) => {
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    newArray.push({ name: data[i].name, attackdamage: data[i].stats.attackdamage, img: data[i].img });
  }
  let newArrayOrder = newArray.sort((higher, lessHiger) => {
    if (higher.attackdamage < lessHiger.attackdamage) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArrayOrder.slice(0, 10);
};

const filterType = (data, type) => {
  const newData = data.map(copyData => Object.assign({}, { name: copyData.name, tags: copyData.tags, img: copyData.img}));
  const filterTank = newData.filter((data) => {
    return data.tags.includes(type) === true;
  });
  return filterTank;
};

window.lol = {
  getTopTen,
  filterType,
};
