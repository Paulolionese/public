import weatherService from '../service/weatherService.js';
import homeView from '../view/homeView.js';

export async function init() {
    const nextDayWeather = await weatherService.getWeatherByDay(1); 
    homeView.render(nextDayWeather);
}