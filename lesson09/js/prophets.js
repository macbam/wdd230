const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });


  function displayProphets(prophet) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    let pimg = document.createElement("img");
    pimg.setAttribute('src', prophet.imageurl);
    let birth = document.createElement("p");
    birth.textContent = 'Date of birth: ' + prophet.birthdate;
    let place = document.createElement("p");
    place.textContent = 'Place of Birth: ' + prophet.birthplace;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(place);
    card.appendChild(pimg);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }