$('#banner-top').css('height', $(window).height());

const banners = [
    "https://silver.tekapo.space/img/cms/silver/banner1.jpg",
    "https://silver.tekapo.space/img/cms/silver/banner2.jpg"
]

const node = document.getElementById("banner-top");
const cycleImages = (images, container, step) => {
    images.forEach((image, index) => (
        setTimeout(() => {
            container.style.backgroundImage = `url(${image})`
}, step * index + 1)
))
    setTimeout(() => cycleImages(images, container, step), step * (images.length))
}

cycleImages(banners, node, 3000);

if (document.getElementsByTagName("body")[0].id !== 'index') {
    window.scrollTo(0, $(window).height() - 30);
}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("very-top");
var stickyPos = $(window).height();
function myFunction() {
    if (window.pageYOffset >= stickyPos) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


