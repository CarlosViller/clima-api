var container = document.querySelector(".container");
var ciudadHtm = document.getElementById('ciudad');
var temp = document.getElementById('temperatura');
var wicon = document.getElementById('wicon');
var descripcion = document.getElementById('descripcion')

function cargarCiudad(ciudad) {
  $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es.url`
  ,function(data) {
    container.style.visibility = "visible"
    ciudadHtm.textContent = data.name;
    temp.textContent = Math.round(data.main.temp);
    descripcion.textContent = data.weather[0].description;
    wicon.setAttribute('src'
    ,`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    }
  );
}

(function anadirListener(){
  $('button').click(function (e) { 
    e.preventDefault();
    let input = document.querySelector('input');
    cargarCiudad(encodeURI(input.value));
    input.value = '';
  });
  
  $('input').on('keypress', function (e) {
    if(e.which == 13){
      e.preventDefault();
      let input = document.querySelector('input');
      cargarCiudad(encodeURI(input.value));
      input.value = '';
    }
  });
})();
