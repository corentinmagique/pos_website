let nav_list_element = document.querySelectorAll('.nav li');

function hoveredLi(){
    nav_list_element.forEach((item) =>
        item.classList.remove('hovered')
    );
    this.classList.add('hovered');
}

nav_list_element.forEach((item) =>
    item.addEventListener('mouseover', hoveredLi)
);