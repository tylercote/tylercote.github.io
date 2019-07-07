var coll = document.getElementsByClassName("class-dropdown");
console.log(coll.length);
var i;
setTimeout(() => {
    for (i = 0; i < coll.length; i++) {
        console.log('BEFORE ADD EVENT LISTENTER');
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var caret = this.getElementsByClassName("right-caret");
            for (i = 0; i < caret.length; i++) {
                caret[i].classList.toggle("open-caret");
            }
            var content = this.nextElementSibling;
            console.log('CONTENT', content);
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
        console.log('AFTER ADD EVENT LISTENTER');
    }
}, 1000);
