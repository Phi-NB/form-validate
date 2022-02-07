
// HTML DOM

// 1. Element: ID, class, tag, CSS selector, HTML colletion
// 2. Atribute
// 3.Text


// var boxElement = document.querySelector('.box');

// boxElement.classList.add('red');


// setTimeout(function(){
//     boxElement.classList.toggle('red');
// }, 2000)

// DOM event
// dùng DOM event khi thực hiện 1 công việc khi 1 event xảy ra và không có nhu cầu gỡ bỏ event
/**
    1.Atribute events
    2.Assign events using the element node // la dung callback 
 */

// var h1Element = document.querySelector('h1');
// h1Element.onclick = function(event){
//     console.log(event);
// }

/**
    1.input, select // lay du lieu tu input, select
    2.key up, key down // bat su kien tu ban phim
 */
// var inputValue;
// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e){
//     inputValue = e.target.value;
//     console.log(inputValue);
// }

/**
    1.PreventDefault // ngăn chặn một hành vi mặc định của hành động
    2.StopPropagation  // ngăm chặn một hình vi lan truyền :) (nổi bọt)
 */


// 1.PreventDefault
var aElement = document.querySelectorAll('a');
// aElement.onclick = function(e){
//     if(!e.target.href.startsWith('https://google.com')){
//         e.preventDefault();
//     }
// }

for(var i = 0; i < aElement.length; ++i) {
    aElement[i].onclick = function(e){
        if(!e.target.href.startsWith('https://google.com')){
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e){
    e.preventDefault();
    console.log(e.target);
}

// 2.StopPropagation

var divElement = document.querySelector('div');
divElement.onclick = function(e){
    console.log('Div');
}

var buttonElement = document.querySelector('button');
buttonElement.onclick = function(e){
    e.stopPropagation();
    console.log('Text me');
}

// Event listener
// Dùng event listener khi mà thực hiện nhiều công việc khi một sự kiện xảy ra và muốn hủy bỏ event đó trong một trường hợp cụ thể

var pElement = document.querySelector('.content');
function viec1(){
    console.log('Viec 1');
}

pElement.addEventListener('click', viec1);

setTimeout(function(){
    pElement.removeEventListener('click', viec1);
}, 3000);