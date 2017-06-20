Zomato.init({key: '49191624e67724737d4335d7214e5ffc'})

// Zomato.restaurant('16774318', function(restaurant) {
//   document.getElementById('restaurant-info').innerHTML = 'Search Results: ' + restaurant['name']
//   console.log(restaurant)
// }, function (error) {
//   alert(error)
// })

Zomato.searchByRestaurant('chipotle', function(results) {
  document.getElementById('restaurant-info').innerHTML = '<h2>Search Results:</h2>' +
    results.restaurants.map(result => {
      return `<p>${result.restaurant.name} - ${result.restaurant.location.address}</p>`
    }).join('')
  console.log(results)
}, function (error) {
  alert(error)
})
