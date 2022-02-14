// start scroll to top
let myBtn = document.getElementById("to-top");
window.onscroll = function () {
    if(scrollY >=1000) {
        myBtn.style.display= "block"
    } else {
        myBtn.style.display= "none"
    }
}
console.log(myBtn)
myBtn.onclick = function() {
    window.scrollTo(0,0)
}
// end scroll to top