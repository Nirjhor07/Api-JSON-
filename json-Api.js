console.log("Im json.api.js and am connectted with the index file ");

// Lets declare a objects first
const product = {
  name: "iPhone",
  color: "white",
  price: 20000,
  isExpensive: true,
  isWorthy: false,
};
console.log(product);
//output: {name: 'iPhone', color: 'white', price: 20000, isExpensive: true, isWorthy: false}

//JSON file a convbert korte hoy jeno jekono ip theke khub sohojeii code read and use kora jay
//JSON use korle facebook theke pathano req Youtube khub sohojei read korte pare and use korteh pare
//no matter kon language e website ta build kora hoise

//product object ta jei format e ase oi format eii JSON data convert kore but main difference hoto keys
//gulake "" etar vitore rakhe
//Lets convert our object to JSON

// js object ke jSON e convert kore -> JSON.stringify ei function use kore
const converttedJSON = JSON.stringify(product);
console.log(converttedJSON);
// output: {"name":"iPhone","color":"white","price":20000,"isExpensive":true,"isWorthy":false}
