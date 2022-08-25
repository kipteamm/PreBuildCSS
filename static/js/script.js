function generateFunnyName() {
    const colors = ["red","blue","green","yellow"];
    return colors[Math.floor(Math.random()*colors.length)];

    /* LOCALHOST MOMENT
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://www.jalpa-api.ga/api/v1/name", false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
    */
}

document.addEventListener("DOMContentLoaded", function(e) {
    const burger_menus = document.getElementsByClassName("burger-menu");

    for(var i = 0; i < burger_menus.length; i++) {
        const icon = document.createElement("a");
        icon.classList.add("burger-menu-mobile")
        icon.setAttribute('onclick', 'openMenu(this.id)')
        icon.id = generateFunnyName()

        const close = document.createElement("a");
        close.classList.add("burger-menu-mobile-close")
        close.setAttribute('onclick', 'closeMenu(this.id)')
        close.id = generateFunnyName()

        burger_menus[i].appendChild(close)
        burger_menus[i].parentElement.appendChild(icon)

        for (var i = 0; i < 3; i++) {
            const  icon_line = document.createElement("div");
            icon_line.classList.add("burger-menu-icon-line");
    
            icon.appendChild(icon_line);
        };
    }
});

function openMenu(id) {
    const element = document.getElementById(id);
    const menu_content = element.parentElement.firstElementChild;

    element.style.display = "none";
    menu_content.style.display = "block";
}

function closeMenu(id) {
    const menu_content = document.getElementById(id).parentElement;
    const burger_menu = menu_content.parentElement.lastChild;

    menu_content.style.display = "none";
    burger_menu.style.display = "inline-block";
}