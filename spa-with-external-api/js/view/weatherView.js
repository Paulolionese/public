function render(weatherData) {
  const container = document.querySelector('#container');
  container.innerHTML = ''; // Remove os elementos anteriores

  const previsaoDiv = document.createElement('div');
  previsaoDiv.id = 'previsao';
  previsaoDiv.style = 'display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;';

  weatherData.forEach(dia => {
      if (!dia) return; // Verifica se 'dia' está definido
      const diaDiv = document.createElement('div');
      diaDiv.className = "prevDia";
      diaDiv.innerHTML = `<p>Data: ${dia.forecastDate}</p>
                          <p>Região: Lisboa</p>
                          <p>Probabilidade de Precipitação: ${dia.precipitaProb}%</p>
                          <p>Temperatura Máxima: ${dia.tMax}°C</p>
                          <p>Temperatura Mínima: ${dia.tMin}°C</p>
                          <p>Direção do Vento: ${dia.predWindDir}</p>
                          <p>Velocidade do Vento: Classe ${dia.classWindSpeed}</p>                      
                          <p>Intensidade da Precipitação: Classe ${dia.classPrecInt}</p>
                          <p>Tipo de Tempo: ${dia.idWeatherType}</p>
                          <div><img src="icons_ipma_weather/w_ic_d_${dia.idWeatherType}anim.svg" alt="Ícone do tempo" width="50%" height="50%"></div>`;
      previsaoDiv.appendChild(diaDiv);
  });

  container.appendChild(previsaoDiv);
}

export default { render };