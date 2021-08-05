function myShow() {
    menuBtn.classList.toggle("showMenu");
}



// Rewards page js
const accordionButton = document.getElementsByClassName('accordionTitle');

for (var i = 0; i < accordionButton.length; i++) {


    accordionButton[i].addEventListener("click", function () {
        var accordionContent = this.nextElementSibling;
        this.parentElement.classList.toggle('visible')
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null
        } else {
            accordionContent.style.maxHeight = prizeList.scrollHeight + 'px';
        }
    })
}
