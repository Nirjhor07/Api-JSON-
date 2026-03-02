// console.log("Im json.api.js and am connectted with the index file ");

// // Lets declare a objects first
// const product = {
//   name: "iPhone",
//   color: "white",
//   price: 20000,
//   isExpensive: true,
//   isWorthy: false,
// };
// console.log(product, typeof product); // prototype : object
// //output: {name: 'iPhone', color: 'white', price: 20000, isExpensive: true, isWorthy: false}

// //JSON file a convbert korte hoy jeno jekono ip theke khub sohojeii code read and use kora jay
// //JSON use korle facebook theke pathano req Youtube khub sohojei read korte pare and use korteh pare
// //no matter kon language e website ta build kora hoise

// //product object ta jei format e ase oi format eii JSON data convert kore but main difference hoto keys
// //gulake "" etar vitore rakhe
// //Lets convert our object to JSON

// // js object ke jSON e convert kore -> JSON.stringify ei function use kore
// const converttedJSON = JSON.stringify(product);
// console.log(converttedJSON, typeof converttedJSON); // prototype : string
// // output: {"name":"iPhone","color":"white","price":20000,"isExpensive":true,"isWorthy":false}

// // but we can make JSON File object again by parse function
// const ParseJSON = JSON.parse(converttedJSON);
// console.log(ParseJSON, typeof ParseJSON); // prototype : object

// //fetch data and make them JSON File
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//load data when the user click on the click me !!
function loadData() {
  //fetch data and make them JSON File
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

