// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// function newTab(item){
//     let tab=document.createElement('div');
//     tab.classList.add('tab');
//     tab.textContent=item;
//     return tab
// }
// let Topics=document.querySelector('.topics')
// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response=>response.data.topics.forEach(data=>Topics.append(newTab(data))))
//     .catch(err=>console.log(err))

function tabComponent (obj){
    // create tab component
    const tabDiv = document.createElement('div');

    //add class of tab
    tabDiv.classList.add('tab');

    //pass obj data to tab
    tabDiv.textContent = obj;

    return tabDiv;

}

// selected class from html that i'm going to append the new component to
const appendNewTab = document.querySelector('.topics');

// axios.get("https://lambda-times-backend.herokuapp.com/topics")
//     .then(response => {
//      const makeNewTab = tabComponent(response.data);
//         appendNewTab.appendChild(makeNewTab);

    // })
    // .catch(error => {
    //     console.log("An error has occurred", error);
    //   })

// this forEach now grabs the data from the API via the Axios call and appends to the main HTML

    axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
      .then(response => {
        response.data.topics.forEach(data => {
        appendNewTab.appendChild(tabComponent(data));
      })})
      .catch (error => {
          console.log("An error has occurred", error);
      })