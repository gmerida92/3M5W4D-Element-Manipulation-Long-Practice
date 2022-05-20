window.addEventListener('DOMContentLoaded', (event) => {

  console.log('DOM fully loaded and parsed');
  const h1 = document.createElement("h1")
  h1.innerText = "Potato Head"
  // h1.id = "potato-head"
  h1.setAttribute("id", "potato-head")
  document.body.appendChild(h1);

  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerText = "Mr. Potato Head. Mr. Potato Head.Mr. Potato Head.Mr. Potato Head.Mr. Potato Head.Mr. Potato Head.Mr. Potato Head.Mr. Potato Head.Mr. Potato Head.Mr. Potato Head."
  div.appendChild(p);
  document.body.appendChild(div);

  const list = document.createElement("ul");
  // list.innerHTML = '<li>Age: 100</li>' + '<li>Location: Los Angeles</li>' + '<li>Occupation: Actor</li>' + '<li>Favorite Companion: Mrs. Potato Head</li>'
  document.body.appendChild(list)


  // make an array with strings to place in list items
  let listItems = ['Age: 100', 'Location: Los Angeles', 'Occupation: Actor', 'Favorite Companion: Mrs. Potato Head', 'Favorite Movie: Toy Story', 'Favorite Ice Cream: Chocolate',"Social-Security: xxx-xx-8989", ]

  // for (let i = 0; i < listItems.length; i++) {
  //   let newListItem = document.createElement("li");
  //   newListItem.innerText = list[i];
  //   document.querySelector("ul").appendChild(newListItem);
  // }


  addToPersonalList(listItems);

  // // length of ul element
  // let ulLength = document.querySelector('ul').childNodes.length
  // console.log(typeof ulLength);

  // // compare number of items in listItems array against the number of items in
  // // the ul element
  // if (listItems.length > ulLength) {
  //   // create a new li element
  //   let newItem = document.createElement("li");
  //   // list.innerHtml += "<li>"+`${listItems[listItems.length - 1]}`+"</li>"

  //   // set innerText
  //   newItem.innerText = listItems[listItems.length - 1];
  //   console.log(newItem)
  //   console.log(list)

  //   // append new item to ul
  //   document.querySelector("ul").appendChild(newItem)

  // Creates list element
  // Passes in the string as the innerText
  // Appends new element to the ul


  h1.setAttribute("class", "person-name");
  list.setAttribute("class", "my-details");
  document.body.querySelectorAll('li').forEach(el => el.setAttribute("class", "detail"));

  let clock = document.createElement('div');
  document.body.appendChild(clock);
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  }
  setInterval(time, 1000);
});


function addToPersonalList(listArray) {
  for (let i = 0; i < listArray.length; i++) {
    let newListItem = document.createElement("li");
    newListItem.innerText = listArray[i];
    document.querySelector("ul").appendChild(newListItem);
  }
}
