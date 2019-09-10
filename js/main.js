//prototype practice

//***fat arrow functions - do not hoist, and do not like/use "this"*****//


//Create taco receipt using Prototypes. First to create what will be needed for the recipe itself

function tacoRecipe(meat, seasonings, vegetables, tortilla) {

    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortilla = tortilla;
}

tacoRecipe.prototype.prepIngredients = function () {

    console.log(`Get two pounds of ${this.meat} and add to pan. In a separate bowl collect ${this.seasonings}. Make sure to get your ${this.vegetables} ready to be washed and cut. Then dip the ${this.tortilla} in some oil and ready to fry in pan.`);
}

tacoRecipe.prototype.tacoAssembly = function () {

    console.log(`Get your ${this.tortilla} and scoop some of the ${this.meat} on top. Then get as much as you'd like of the ${this.vegetables} and put on top of your ${this.meat}.`);
}

//Random non prototype function

function Test(phrase) {
    this.phrase = phrase;
}

function exampleTest(phrase) {
    Test.call(this, phrase);
    this.random = 'I am iRobot';
}

console.log(new exampleTest('This finally worked.'))



//TacoRecipe prototype recipes
const alPastorTaco = new tacoRecipe('al pastor', ['salt', ' cumin', ' pineapple', ' onion powder'], ['lettuce', ' cilantro', ' onion', ' tomatoes', ' & radish'], 'corn tortilla');

const alPastorTacoAssembly = new tacoRecipe('al pastor', ['salt', ' cumin', ' pineapple', ' onion powder'], ['lettuce', ' cilantro', ' onion', ' tomatoes', ' & radish'], 'corn tortilla');

alPastorTaco.prepIngredients();
alPastorTacoAssembly.tacoAssembly();