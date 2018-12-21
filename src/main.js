const data=Object.values(LOL.data);
const j = lol.getTopTen(data);
let templateList='';
j.forEach((element) => {
    const li=`
    <div class = 'blog-card'>
    <label>${element.name}</label>
    <label>${element.attackdamage}</label>
    <img src="${element.img}"/>
    </div>`;
    
    templateList+=li;
});
const ulContainer = document.getElementById('container-list');
ulContainer.innerHTML = templateList;

