let toggle_button = document.querySelector('.toggle');
let nav_left_bar = document.querySelector('.nav');
let main = document.querySelector('.main');

toggle_button.onclick = function(){
    nav_left_bar.classList.toggle('active');
    main.classList.toggle('active');
}


