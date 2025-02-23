import weatherService from '../service/weatherService.js';
import weatherView from '../view/weatherView.js';

export async function init() {
    const nextFiveDaysWeather = await weatherService.getWeather(); 
    weatherView.render(nextFiveDaysWeather);
}