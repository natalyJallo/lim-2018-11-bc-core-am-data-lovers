// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

  
const getTopTen= (data) => {

  const newArray=[];
  for(let i = 0 ; i<data.length;i++){
      newArray.push({name:data[i].name,attackdamage:data[i].stats.attackdamage,img:data[i].img});
  }    let newArrayOrder = newArray.sort((higher,lessHiger) => {
  if(higher.attackdamage<lessHiger.attackdamage){
      return 1;
  }
  else{
      return -1;
  }
  });
  return newArrayOrder.slice(0,10); 
};  
window.lol = {
  getTopTen,
} 
