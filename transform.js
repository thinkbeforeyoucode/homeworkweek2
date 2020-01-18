module.exports.groupAdultsByAgeRange = function(persons) {
  // console.log("Start!");
  const connect = persons.reduce((categories, age) => {
    console.log("naam", categories);
    console.log("leeftijd", age.age);

    if(leeftijd.age <= 20){
      console.log("20 and younger");
      if(categories.common === undefined){
        categories.common = [currentPokemon]
      }
    }
    if(leeftijd.age >= 21 && leeftijd.age <= 30){
      console.log("21-30")
      if(categories.common === undefined){
        categories.common = [currentPokemon]
      }
    }
    if(leeftijd.age >= 31 && leeftijd.age <= 40){
      console.log("31-40")
      if(categories.common === undefined){
        categories.common = [currentPokemon]
      }
    }
    if(leeftijd.age >= 41 && leeftijd.age < 50){
      console.log("41-50")
      if(categories.common === undefined){
        categories.common = [currentPokemon]
      }
    }
    if(leeftijd.age > 0.1 && leeftijd.age >= 50){
      console.log("51 and older")
      if(categories.common === undefined){
        categories.common = [currentPokemon]
      }
    }
     
  }, {})
  

    
  
    
const output = {
  "20 and younger": [],
  "21-30": [],
  "31-40": [],
  "41-50": [],
  "51 and older": []
}