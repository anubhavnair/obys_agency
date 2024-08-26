
var h5timer = document.querySelector(".line1-part1 h5");
var grow = 0

var tl = gsap.timeline();
tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    overflow: "hidden",
    duration: 0.6,
    delay: 0.5

})
tl.from(".line1-part1", {
    opacity: 0,
    onStart: function () {
        setInterval(function () {

            if (grow < 100) {

                h5timer.innerHTML = grow++
            } else {
                h5timer.innerHTML = grow;

            }

        }, 25)
    }


})
tl.to(".line h2", {
    animationName: "anime",
    opacity: 1
})

tl.to("#loader", {
    opacity: 0,
    delay: 3,
    duration: 0.4,
},)
tl.from("#page1", {
    y: 1600,
    opacity: 0,
    ease: "power4",
    duration: 0.5
})
tl.to("#loader", {
    display: "none"
})