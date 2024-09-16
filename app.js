'use strict'
const switcher = document.querySelector(".btn");

switcher.addEventListener('click', function() {
    document.body.classList.toggle('lightTheme');
    document.body.classList.toggle('darkTheme');

    const className = document.className;
    if(className == 'lightTheme'){
        this.textContent = "Dark Theme";
    }
    else if(className == 'darkTheme'){
        this.textContent = "Light Theme";
    }
});