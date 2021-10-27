import axios from 'axios'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '135ce57dc4cf278163cbf8c8d429f064'

export const getWeather = (city) => {
	return axios({
		method: 'GET',
		url: apiUrl + city + '&units=imperial&APPID=' + apiKey
	})
}
