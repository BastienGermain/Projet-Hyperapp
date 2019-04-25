const actions = {
  getCities: (value) => (state) => {
    return new Promise((resolve, reject) => {

      const settings = {
        mode: 'cors',
        method: 'GET'
      }

      const urlAdresse = 'https://api-adresse.data.gouv.fr/search/?q='
      const urlParameters = '&limit=5&type=municipality'

      fetch(urlAdresse + value + urlParameters, settings).then(function(response) {
        if(response.ok) {
          response.json().then(json => {
              console.log(json.features)
              resolve(json.features)
          })
        } else {
          console.log('Mauvaise réponse du réseau');
        }
      })
      .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
    })
  },
  addSearchToState: (cities) => (state) => ({
    ...state,
    searchCities: cities
  }),
  getWeatherData: (coordinates) => {
    return new Promise((resolve, reject) => {
      const longitude = coordinates[0]
      const latitude = coordinates[1]

      const proxy = 'https://thingproxy.freeboard.io/fetch/'
      const url = 'https://api.darksky.net/forecast/4be7a39d36c8c138d23fd8c2bd29bd0a/'
      const urlParam = '?units=ca&lang=fr'

      const settings = {
        mode: 'cors',
        method: 'GET'
      }

      fetch(proxy + url + latitude + ',' + longitude + urlParam, settings).then(function(response) {
        if(response.ok) {
          response.json().then(json => {
              console.log(json)
              resolve(json)
          })
        } else {
          console.log('Mauvaise réponse du réseau');
        }
      })
      .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
    })
  },
  createCity: (name, data) => (state) => ({
    ...state,
    savedCities: [...state.savedCities, {id: Date.now(), name: name}]
  })
}

export default actions
