/*function render(onClick) {
    const container = document.querySelector('#container');
    const button = document.createElement('button');
    const div = document.createElement('div');

    div.className = `text-center`;
    button.className = `btn btn-primary`;
    button.type = `button`;
    button.style = `margin-top: 10%; margin-bottom: 10%`;

    div.appendChild(button);

    container.innerHTML = ''; //removes the previous elements
    button.innerText = `CLICK ME FOR RANDOM WEATHER DAY`;

    button.addEventListener('click', async e => {
        e.preventDefault();

        const {
            dia.forecastDate,
            dia.tMin,
            dia.tMax,
            dia.precipitaProb,
            dia.idWeatherType
        } = await onClick(parseInt(Math.random() * 5));

        const elem = document.createElement('div');
        elem.className = `text-center`;

        elem.innerHTML = `<h1><p>Data: ${dia.forecastDate}</p></h1>
        <h3><p>Temperatura Mínima: ${dia.tMin}°C</p></h3>
        <h3><p>Temperatura Máxima: ${dia.tMax}°C</p></h3>
        <h3><p>Probabilidade de Precipitação: ${dia.precipitaProb}%</p</h3>
        <div><img src="icons_ipma_weather/w_ic_d_${dia.idWeatherType}anim.svg" alt="Ícone do tempo" width=50% height=50%></div>`;

        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }

        container.appendChild(elem);
    });

    container.appendChild(div);
}*/

function render(weather) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; 

    const elem = document.createElement('div');
    elem.className = `text-center`;
    

    elem.innerHTML = `<h1><p>Data: ${weather.forecastDate}</p></h1>
                      <h3><p>Temperatura Mínima: ${weather.tMin}°C</p></h3>
                      <h3><p>Temperatura Máxima: ${weather.tMax}°C</p></h3>
                      <h3><p>Probabilidade de Precipitação: ${weather.precipitaProb}%</p></h3>
                      <div><img src="icons_ipma_weather/w_ic_d_${weather.idWeatherType}anim.svg" alt="Ícone do tempo" width=20% height=20%></div>`;

    container.appendChild(elem);
}

export default { render };
