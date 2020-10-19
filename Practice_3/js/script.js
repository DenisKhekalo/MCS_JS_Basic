const Body = document.querySelector('body');
const Page = document.querySelector(".page");

console.log(Body, Page);
console.log(Body.style);
console.log(Page.style);

Body.style.backgroundColor = "#696969";
Page.style.backgroundColor = "ghostwhite";

const name = document.querySelector('.name');
console.log(name.className);
name.className += ' Dj Rashad';

const bio = document.querySelector('.short-bio');
console.log(bio.className);
bio.className += ' animated';

const image = document.querySelector ('img');
console.log(image.getAttribute('src'));
image.setAttribute('src', 'https://i1.sndcdn.com/avatars-000002286578-qhhyhx-t500x500.jpg');
