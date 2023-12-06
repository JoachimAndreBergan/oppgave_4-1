let acc = document.getElementsByClassName("accordion");
let i;

for (i=0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

let mbtn = document.getElementsByClassName("menu_button");
let ii;

for (ii=0; ii < mbtn.length; ii++) {
    mbtn[ii].addEventListener("click", function(){
    this.classList.toggle("active2");

    let menu_panel = this.nextElementSibling;
    if (menu_panel.style.maxHeight) {
        menu_panel.style.maxHeight = null;
    } else {
        menu_panel.style.maxHeight = menu_panel.scrollHeight + "px";
    }
    });
}