// Your code goes here
//Use mouseover to change image
const busImg = document.querySelectorAll('img');
busImg[0].addEventListener('mouseover', (event) => {
    event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXj39-07lPIzTSIDPwuz2tlW6p5UXK9SBUQ&usqp=CAU';
});

//Use click to add border
busImg[0].addEventListener('click', (event) => {
    event.target.style.border = '1px solid blue';
});

//keyup
document.addEventListener('keypress', (event) => {
    window.alert('No no no!');
    event.stopPropagation();
});

//Use wheel to change font size
// const bigText = document.querySelectorAll('h2');
// bigText[1].addEventListener('wheel', (event) => {
//     event.target.style.fontSize = '90px';
// });

//Use dblclick
bigText[2].addEventListener('dblclick', (event) => {
    event.target.style.color = 'white';
})

//Use load
window.addEventListener('load', (event) => {
    alert('Boo! Did I scare you?');
    event.stopPropagation();
});

//Use focus
const focus = document.querySelector("a");
focus.addEventListener("focus", (event) => {
  event.target.style.color = "blue";
});

//Use resize
window.addEventListener('resize', (event) => {
    alert('Dont change me!');
    event.stopPropagation();
});

//Use scroll
// window.addEventListener('scroll', (event) => {
//     alert("Keep going");
//     event.stopPropagation();
// });

//Use click
bigText[3].addEventListener('click', (event) => {
    event.target.style.color = 'green';
});

//* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
const top = document.getElementsByClassName('content-pick');
top[0].addEventListener('click', (event) => {
  top[0].style.border = '10px dotted black';
   event.stopPropagation();
});

const navClick = document.getElementsByClassName("destination");
navClick[2].addEventListener('click', (event) => {
  navClick[2].style.border = '10px dashed purple';
  event.stopPropagation();
})



//* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
const nav = document.getElementsByClassName('.nav');
nav.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
});


