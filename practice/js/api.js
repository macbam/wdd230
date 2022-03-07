const url = 'https://learnwebcode.github.io/json-example/animals-1.json';
// const url = 'https://dogcode.com'

// const results = fetch(url);


// console.log(results);

// function convertToJs(results) {
//     if(results.ok) {
//         return results.json();
//     }
// }

// const results = fetch(url).then(convertToJs);

// console.log(results);


fetch(url)
    .then((result) => {
        if(result.ok) {
            return result.json();
        }
        else {
            alert('Data not available!')
        }
    })
    .then((data) => {
        console.log(data);
        console.log(data[0].name);
    });