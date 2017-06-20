Zomato.init({key: '49191624e67724737d4335d7214e5ffc'})
Zomato.restaurant('16774318', function(restaurant) {
  document.getElementById('restaurant-info').innerHTML = 'Search Results: ' + restaurant['name']
  console.log(restaurant)
}, function (error) {
  alert(error)
})
