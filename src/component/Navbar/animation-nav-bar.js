
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() }

function scrollFunction () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('navbarComplete').style.padding = '0px 0px'
        document.getElementById('navbarComplete').style.fontSize = '2em'
        document.getElementById('divLogo').style.fontSize = '45px'
    } else {
        document.getElementById('navbarComplete').style.padding = '30px 0px'
        document.getElementById('navbarComplete').style.fontSize = '2.5em'
        document.getElementById('divLogo').style.fontSize = '48px'

        // document.getElementById("formRecherche").style.marginLeft = "200px";
    }
}
