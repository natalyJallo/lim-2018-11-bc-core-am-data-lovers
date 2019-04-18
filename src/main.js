
fetch('https://raw.githubusercontent.com/Laboratoria/lim-2018-11-bc-core-am-data-lovers/master/src/data/lol/lol.json')
  .then((res) => {
    return res.json();
  })
  .then((dataOfChampions) => {
    let arrayDataLOL = Object.values(dataOfChampions.data);
    functionGetTopTen(arrayDataLOL);
  })
  .catch((error) => {
    alert('error' + error.messagge);
  });

const functionGetTopTen = (array) => {
  // Segundo diseño de templates
  const arrayTopTen = lol.getTopTen(array);
  // templatepara el top ten  
  
  const templateListChampionTop = (list) => {
    let championsList = [];
    list.forEach((array) => {
      const templateList =
        `<div class='blog-card-2'>
         <a class='card' id='${array.id}' href='#modal2'>
         <video class='video' src='anima/${array.name}.webm' autoplay loop preload="auto" muted ></video>
         <h2 class='text-9'>"${array.name}"</h2>
         <h3 class='text-12'><img class='img-5' src='imagenes/guerra2.PNG'>ATAQUE : ${array.attackdamage}</h3>
         </a>
         </div>

            <section class='modal-window' id='modal2'>
            <div class='modal-champions' id='${array.id}'> 
            <a href='#' title='Close' class='modal-close'>X</a>
            <img class='img-modal'src='anima/${(array.name).toLowerCase()}.jpg'>
            <h1 class='modal-text'><img class='img-modal2'src='imagenes/guerra.PNG'><br>${array.name}</h1>
            <h3 class='modal-text2'>"${ array.title}"</h3>
            <h4 class='modal-text4'>Tabla estadistica por rango de niveles de los atributos mas importantes de los campeones:</h4>
            <canvas id="show-stats" aria-label="Hello ARIA World" role="img">
            var ctx = document.getElementById("show-stats").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Attack", "Defense", "Magic", "Difficulty"],
                    datasets: [{
                        label: '# of Votes',
                        data: [${ array.attack}, ${ array.defense}, ${ array.magic}, ${ array.difficulty}],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
            </canvas>`;

      championsList += templateList;
    });
    document.getElementById('list-champion-top').innerHTML = championsList;
  };
  templateListChampionTop(arrayTopTen);
};

