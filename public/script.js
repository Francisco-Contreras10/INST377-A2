
const restaurant = [];

fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
  .then(response => response.json())
  .then(data => restaurant.push(...data));
 

  function findMatches(wordToMatch, restaurant){
    return restaurant.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.city.match(regex);
    })

}

function displayArray() {
    return restaurant;
}

function displayMatches() {
    const matchArray = findMatches(this.value, restaurant);
    const html = matchArray.map(place => {
        return `
            <li>
                <span class="name">${place.name}</span>
                <span class="address">${place.address}</span>
                <span class="category">${place.category}</span>
            </li>
            `
    }).join('');
    suggestions.innerHTML = html;
    console.log(matchArray);
}

const searchInput = document.querySelector('.textentry');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

