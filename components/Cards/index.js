// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



function createCard(obj){
    //create elements
    let card=document.createElement('div'),
        headline=document.createElement('div'),
        author=document.createElement('div'),
        imgContainer=document.createElement('div'),
        src=document.createElement('img'),
        by=document.createElement('span');

    //append elements
    card.append(headline,author);
    author.append(imgContainer,by);
    imgContainer.append(src)
    //set classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    //set text content
    // debugger;
    let vals=Object.values(obj);
    console.log(vals);
    console.log(vals[0][0].headline)
    for (let i=0; i<vals.length-1; i++){
        for (let j=0; vals[i].length; j++){
            headline.textContent=vals[i][j].headline;
            imgContainer.src=vals[i][j].authorPhoto;
            by.textContent=vals[i][j].authorName;
        }        
    } 


    return card
};
let cardsContainer=document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(a=>cardsContainer.append(createCard(a.data.articles)))
    .catch(err=>console.log(err));
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(
//         a=>{
//             console.log(a.data.articles)
//         })
//     .catch(err=>console.log(err));