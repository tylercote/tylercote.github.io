let current = location.pathname;
console.log(current);
let links = document.getElementsByClassName('nav-link header-nav-link');
console.log(links);
var i;
setTimeout(() => {
    for (let i = 0; i < links.length; i++) {
        // if the current path is like this link, make it active
        if(links[i].href.indexOf(current) !== -1){
            links[i].classList.add("active");
        }
    }

}, 100);
