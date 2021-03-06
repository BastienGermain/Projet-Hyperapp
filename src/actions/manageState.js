// Toutes les fonctions modifiant le state
// Attention, on ne peut passer qu'un seul paramètre !!!

export const manageState = {
  addSearchToState: (cities) => (state) => ({
    ...state,
    searchCities: cities
  }),
  createCity: (data) => (state) => ({
    ...state,
    input: '',
    searchCities: [],
    savedCities: [...state.savedCities, {
      id: Date.now(),
      selected: false,
      time: manageState.unixToHours(data.currently.time),
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
      temperature: Math.round(data.currently.temperature),
      iconPath: '../../img/' + data.currently.icon + '.png',
      summary: data.currently.summary,
      precipProbability: Math.round(data.currently.precipProbability * 100), // Pour le passer en pourcentage
      humidity: Math.round(data.currently.humidity * 100),
      windSpeed: Math.round(data.currently.windSpeed),
      sunriseTime: manageState.unixToHours(data.daily.data[0].sunriseTime),
      sunsetTime: manageState.unixToHours(data.daily.data[0].sunsetTime),
      hourlyPrecipProbability : [
        Math.round(data.hourly.data[1].precipProbability * 100),
        Math.round(data.hourly.data[2].precipProbability * 100),
        Math.round(data.hourly.data[3].precipProbability * 100),
        Math.round(data.hourly.data[4].precipProbability * 100),
        Math.round(data.hourly.data[5].precipProbability * 100),
        Math.round(data.hourly.data[6].precipProbability * 100),
        Math.round(data.hourly.data[7].precipProbability * 100),
        Math.round(data.hourly.data[8].precipProbability * 100),
        Math.round(data.hourly.data[9].precipProbability * 100),
        Math.round(data.hourly.data[10].precipProbability * 100),
        Math.round(data.hourly.data[11].precipProbability * 100),
        Math.round(data.hourly.data[12].precipProbability * 100)
      ],
    }]
  }),
  unixToHours: (unixTime) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unixTime*1000)
    // Hours part from the timestamp
    const hours = date.getHours()
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes()

    return hours + ':' + minutes.substr(-2)
  },
  changeDisplayedCity: (id) => (state) => ({
    ...state,
    displayedCity: {id: id}
  }),
  updateInput: (value) => (state) => ({
    ...state,
    input: value
  }),
  deleteCity: (id) => (state) => ({
    ...state,
    savedCities: state.savedCities.filter(city => city.id != id)
  }),
  selectCity: (id) => (state) => ({
    ...state,
    savedCities: state.savedCities.map(city => (
      id === city.id ? Object.assign({}, city, { selected: true }) : Object.assign({}, city, { selected: false })
    ))
  }),
  addPreviousForecast: (data) => (state) => ({
    ...state,
    savedCities: state.savedCities.map(city => (
      city.latitude == data.latitude && city.longitude == data.longitude ? { ...city, previousForecast: city.previousForecast ? [data.currently.temperature, ...city.previousForecast] : [data.currently.temperature]}  : {...city}
    ))
    //console.log(data)
  })
}
