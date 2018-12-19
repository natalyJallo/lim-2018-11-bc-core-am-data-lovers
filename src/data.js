
// const cambiarPropiedad = (data) => {
//   return data.map(obj => Object.assign({}, obj, {name: obj.name.toUpperCase()}));
// // }; 


const topFive = (data) => {
  data.forEach(element => {
    return element.name;
  });
};

window.lol = {
  topFive,
};
