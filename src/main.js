const data = Object.values(LOL.data);
const ChampionsTopTen = lol.getTopTen(data);

let templateList = '';
ChampionsTopTen.forEach((element) => {
  const li = `
    <div class = 'blog-card'>
    <label>${element.name}</label>
    <div class = 'container-list'>
    <img src="${element.img}"/><br>
    <label>${element.attackdamage}</label>
    </div>
    </div>`;
  templateList += li;
}
);
const container = document.getElementById('container-list');
container.innerHTML = templateList;
console.log(lol.filterType(data, 'Tank'));
