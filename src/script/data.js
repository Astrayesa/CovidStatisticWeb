import $ from 'jquery'
fetch('https://covid19.mathdro.id/api')
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    $('#global-confrimed').text(responseJson.confirmed.value)
    $('#global-recovered').text(responseJson.recovered.value)
    $('#global-deaths').text(responseJson.deaths.value)
  }
  )

fetch('https://covid19.mathdro.id/api/countries/ID')
  .then(response => {
    return response.json()
  })
  .then(responseJson => {
    $('#indo-confrimed').text(responseJson.confirmed.value)
    $('#indo-recovered').text(responseJson.recovered.value)
    $('#indo-deaths').text(responseJson.deaths.value)
  }
  )
