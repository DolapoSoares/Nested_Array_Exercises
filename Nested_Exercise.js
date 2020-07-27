var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

  for(let i = 0 ; i < nestedData.innerData.numberData.primeNumbers.length ; i++){
      console.log(nestedData.innerData.numberData.primeNumbers[i]);
  }

  let fibNacii = nestedData.innerData.numberData.fibonnaci;
  for(let i = 0 ; i < nestedData.innerData.numberData.fibonnaci.length; i++ ){
      
      if(fibNacii[i] % 2 === 0){
        console.log(fibNacii[i]);
         
      }
  } 
  console.log(nestedData.innerData.order[1]);

  console.log(nestedData.innerData.addSnack('chocolate'));

  // this refers to the innerData;

  var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
  
function addSpeaker(newSpeaker){
   
        nestedObject.speakers.push({name: newSpeaker});
    
}
console.log(addSpeaker("Soares"))
console.log(nestedObject);

function addLanguage(language, meaningInLanguage ){
    nestedObject.data.languages[language] = {
        hello: meaningInLanguage
      }
}
addLanguage("Japanese" , "Kon'nichiwa");
console.log(nestedObject);

function addCountry(name, capital, population){
    nestedObject.data.continents.europe.countries[name] = {
      capital: capital,
      population: population
    }
  }
addCountry("Nigeria", "Lagos", "18,000,000")  ;
console.log(nestedObject);

function rotate(arr, num){
    let total = num % arr.length;
    for(let i = 0 ; i < total ; i++){
       
        arr.unshift(arr.pop());
        
    }
return arr;
}
console.log(rotate([1,2,3] , 3));

function makeXOGrid(rows, columns){
    var finalArr = []
    var withX = true;
    for(var i=0; i<rows; i++){
        var newRow = []
        for(var j=0; j<columns; j++){
            if(withX){
                newRow.push("X")
            }
            else {
                newRow.push("O")
            }
           withX = !withX;
        }
        finalArr.push(newRow)
    }
    return finalArr;
}
console.log(makeXOGrid(1, 4));
console.log(makeXOGrid(3, 2));
console.log(makeXOGrid(3, 3));