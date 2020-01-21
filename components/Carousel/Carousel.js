/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>*/

function createCarousel(){
    //create elements
    let imgContainer=document.createElement('div'),
    img1=document.createElement('img'),
    img2=document.createElement('img'),
    img3=document.createElement('img'),
    img4=document.createElement('img'),
    leftButton=document.createElement('div'),
    rightButton=document.createElement('div');
    //add classes
    imgContainer.classList.add('carousel');
    img1.classList.add('visible');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');
    //add src's
    img1.src='assets/carousel/computer.jpeg';
    img2.src='assets/carousel/mountains.jpeg';
    img3.src='assets/carousel/trees.jpeg';
    img4.src='assets/carousel/turntable.jpeg';
    //add buttons
    leftButton.textContent='<';
    rightButton.textContent='>';
    //append
    imgContainer.append(img1,img2,img3,img4,leftButton,rightButton);  

    //carousel function
    var index=0;
    function carousel(click){
        let arr=[img1,img2,img3,img4];
        console.log(arr)
        
        arr[index].classList.toggle("visible")
      
        index += click
      
        if (index < 0) {
          index += 4
        }
        else if (index >3) {
          index -= 4
        }
      
      
      
        arr[index].classList.toggle("visible")
      } 
    
    //add event listeners
    leftButton.addEventListener('click', ()=>carousel(1));
    rightButton.addEventListener('click', ()=>carousel(-1));
    let carouselContainer=document.querySelector('.carousel-container');
    carouselContainer.append(imgContainer);
    setInterval(()=>carousel(1),7000);
}

createCarousel();
