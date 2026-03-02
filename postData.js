// console.log("post data");
const loadPostData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPostData(data));
};

const displayPostData = (displayPost) => {
  //console.log(displayPost);
  const parentUl = document.getElementById("ul-section-for-post-data");
  //clearing the inner html so that after each click no repeat of elements
  parentUl.innerHTML = "";
  //   console.log(parentUl);
  displayPost.forEach((element) => {
    //this will display each object in that array displayPost-> comes from data
    // console.log(element);

    //ekhn data gulake store korbo
    //prothome ekta li er vitore tutle gulare rakhi
    //creating li for each title
    const li = document.createElement("li");

    //now title ke li er vitore inner text e rakhtesi
    li.innerText = element.title;
    // console.log(li); //succesfully stored

    // ekhn parent ul e li ke store or append kore dibo
    parentUl.append(li);
  });
};
