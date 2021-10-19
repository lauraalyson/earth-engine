import axios from 'axios'

export const getWeather = (lat, lon, part, API) => {
	return axios({
		method: 'GET',
		url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API}`,
	})
}
