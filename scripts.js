document.addEventListener("DOMContentLoaded", function () {
    var lastScrollTop = 0;
    var sidebar = document.getElementById("sidebar");
    var screenWidth = window.screen.width;

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            if (screenWidth < 768) {
                sidebar.style.marginBottom = "-" + sidebar.offsetHeight + "px";
                sidebar.classList.add("active")
            }
        } else {
            if (screenWidth < 768) {
                sidebar.style.marginBottom = "0";
                sidebar.classList.remove("active")
            }
        }

        lastScrollTop = scrollTop;
    });

    new WOW().init();
});

var skills = document.querySelectorAll('.images-skill')


skills.forEach(skill =>{
    skill.addEventListener('click', ()=>{
        removeActiveclass()
        skill.classList.add('active')
    })
})

function removeActiveclass(){
    skills.forEach(skill =>{
        skill.classList.remove("active")
    })
}

$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1
});

if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}