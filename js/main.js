//after breeds the data will change to whatever I want
//https://dog.ceo/api/breeds/list/all

// function playWithApi() {
//     const url = 'https://api.adviceslip.com/advice';
//     fetch(url);
//     console.log(url);
// }

// playWithApi();

let h1Test = document.createElement("h1");
const body = document.getElementsByTagName("body")[0];
body.appendChild(h1Test);

function queryRandomUserAPI() {
    var url = 'http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe';
    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then(function(resp){
        return resp.json()// Transform the data into json
      })
      .then(function(data) {
        h1Test.innerHTML = data.value.joke;
        console.log(data);
        //How can we display this data?
      })
      .catch(function() {
          // This is where you run code if the server returns any errors
      });
  };


queryRandomUserAPI();


//Play with testing JSON:
const exampleJson = ' {"name": "Roxy", "aga": 31} ';
const exampleJsonTwo = ' {"Hobby": "Puzzles", "Favorite Cartoon": "Looney Tunes"} ';
const exampleParse = JSON.parse(exampleJsonTwo);
//wrapper.innerText = exampleParse.age;

const exampleStringfy = JSON.stringify(exampleJsonTwo);
//wrapper.innerText = exampleStringfy;

console.log(exampleJson);
console.log(exampleJsonTwo);

//Closure - acts like "let"...is when you call something within a scope...your are calling a parent of a scope and calling it outside....still has its own scope but now its also global
function practiceScope() {
    let random = 'Inside scope';

    const phrase = function () {
        console.log('This is super cool!');
    }
    return phrase();
}

let practiceOutside = practiceScope;

//callbacks
const example = [1,2,3];
const exampleBreakdown = example.forEach( (val) => {
    return val + 5;
});

console.log(exampleBreakdown);

//API practice

//   class AboutMe {
//       constructor(name, age, petName, petBreed) {
//           this.name = name;
//           this.age = age;
//           this.petName = petName;
//           this.petBreed = petBreed
//       }
//   }

//   const Roxy = new AboutMe('Roxy', 31, 'Teegan');
//   console.log(Roxy);

class mathTrivia {
    constructor(breed) {
        // this.number = number;
        // this.number = number;
        this.breed = breed;
    }

// const Six = new mathTrivia('6', 'trivia');
// console.log(Six);

queryWithParams() {
    //How can we dynamically get queryCategory and query?
    
    const url =`https://dog.ceo/api/breed/${this.breed}/images/random`;
    fetch(url)
    .then(function(resp){
      return resp.json()// Transform the data into json
    })
    .then(function(data) {
        const dogPic = document.createElement("img");
        dogPic.setAttribute("src", data.message);

        body.appendChild(dogPic);
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
}

//   const mathH2 = document.createElement("h2");
//   mathTrivia.innerHTML

let myNumbers = new mathTrivia("african");
myNumbers.queryWithParams();


//creating API for our grocery store
class Produce {
    constructor(name, price, organic) {
        this.name = name;
        this.price = price;
        this.organic = organic;
    }
}
const cherry = new Produce('Cherry', 2.99, false);
console.log(cherry);

const produce = ' { "Cherry": { "price": 2.99, "organic": false}, "Orange": { "price": 1.99, "organic": true }} ';
const parsed = JSON.parse(produce);
console.log(parsed.Cherry);