// Your code goes here
//Use mouseover to change image
const busImg = document.querySelectorAll('img');
busImg[0].addEventListener('mouseover', (event) => {
    event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXj39-07lPIzTSIDPwuz2tlW6p5UXK9SBUQ&usqp=CAU';
});


//keyup
document.addEventListener('keypress', (event) => {
    window.alert('No no no!');
    event.stopPropagation();
});

//Use wheel to change font size
const bigText = document.querySelectorAll('h2');
bigText[1].addEventListener('wheel', (event) => {
    event.target.style.fontSize = '90px';
});

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
window.addEventListener('scroll', (event) => {
    alert("Keep going");
    event.stopPropagation();
});

//Use select, in progress
window.addEventListener('select', (event) => {
    alert('Selected!');
    event.stopPropagation();
});
