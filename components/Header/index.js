// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create elements
    let header=document.createElement('div'),
        date=document.createElement('span'),
        h1=document.createElement('h1'),
        temp=document.createElement('span');
    //append elements
    header.append(date,h1,temp);
    //add classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //add text content
    date.textContent='MARCH 26, 2019';
    h1.textContent='Lambda Times';
    temp.textContent='98°';
    return header;
}

let headerContainer=document.querySelector('.header-container');
headerContainer.append(Header());
