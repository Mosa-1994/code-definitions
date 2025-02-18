export const definitions = [
    {
      id: 1,
      term: "Closure",
      definition: "Een functie die toegang heeft tot variabelen in zijn buitenste scope, zelfs nadat de buitenste functie is uitgevoerd.",
      category: "functions",
      example: `function outerFunction(x) {
    return function(y) {
      return x + y;  // 'x' is toegankelijk vanuit de buitenste scope
    };
  }
  const addFive = outerFunction(5);
  console.log(addFive(3)); // Output: 8`,
      relatedTerms: ["Scope", "Lexical Scope", "Higher-order Functions"]
    },
    {
      id: 2,
      term: "Hoisting",
      definition: "Het gedrag waarbij variabele en functie declaraties naar boven worden 'getild' in hun scope voordat de code wordt uitgevoerd.",
      category: "concepts",
      example: `console.log(myVar); // Output: undefined
  var myVar = 5;
  
  // Bovenstaande code wordt intern behandeld als:
  var myVar;
  console.log(myVar);
  myVar = 5;`,
      relatedTerms: ["Variable Declaration", "Function Declaration", "Temporal Dead Zone"]
    }
  ];
  
  export const categories = {
    functions: "Functies en Scope",
    concepts: "JavaScript Concepten",
    arrays: "Arrays en Methoden",
    objects: "Objecten en Prototypes",
    async: "Asynchrone JavaScript"
  }