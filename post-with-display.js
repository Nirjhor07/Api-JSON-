// console.log("post with display div");

const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => response.json())
  .then((data) => displayDataDiv(data));

const displayDataDiv = (dataFromFetch) => {
  //   console.log(dataFromFetch);

  //1. get the parent div
  const divParent = document.getElementById("parent-post-div");
  console.log(divParent);

  dataFromFetch.forEach((element) => {
    // console.log(element);
    //crete a div for each object
    const card = document.createElement("div");

    // set inner HTML for each card
    card.innerHTML = `   <div class="border gap-3 bg-amber-100/10 p-4 shadow rounded-2xl h-full">
        <h1 class="text-2xl text-neutral font-extrabold">${element.title}</h1>
        <p>
          ${element.body}
        </p>
      </div>
    
    `;

    // append the card to the div
    divParent.append(card);
  });
};
