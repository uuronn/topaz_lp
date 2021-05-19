console.log("test");

window.addEventListener("scroll",function() {
    const headerId = this.document.getElementById('header')

    if (window.scrollY > 50) {
        headerId.classList.remove("display")
        console.log(headerId)
    } else {
        headerId.classList.add("display")
        console.log(headerId)
    }
    console.log(window.scrollY);
});