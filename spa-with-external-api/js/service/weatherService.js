let forecastData = [];

async function getData() {
  try {
    const response = await fetch('https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json');
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    const responseData = await response.json();
    forecastData = responseData.data;
  } catch (error) {
    console.error('Erro:', error);
  }
}

async function getWeatherByDay(day) {
  if (forecastData.length === 0) {
    await getData();
  }
  return forecastData[day];
}

async function getWeather() {
  if (forecastData.length === 0) {
    await getData();
  }
  return forecastData;
}

export default { getWeatherByDay, getWeather };
  