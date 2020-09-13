const particles = [];

function setup() {
    var cnv = createCanvas(window.innerWidth - 17, window.innerHeight);
    // console.log(window.innerWidth, window.innerHeight);


    cnv.parent('sketch');
    const particlesLength = Math.floor(window.innerWidth / 10)

    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle())
    }
}

function draw() {
    background(30, 30, 30)
    particles.forEach((p, index) => {
        p.update()
        p.draw()
        p.checkParticles(particles.slice(index))
    })

}

class Particle {
    constructor() {
            this.pos = createVector(random(width), random(height));
            this.size = 10;
            this.vel = createVector(random(-1, 1), random(-1, 1))

        }
        //update movements by adding velocity
    update() {
            this.pos.add(this.vel)
            this.edges()
        }
        //draw single particle
    draw() {
            noStroke();
            fill('rgba(51, 105, 154,1)')
            circle(this.pos.x, this.pos.y, this.size)
        }
        //detect edges
    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1
        }
        if (this.pos.y < 0 || this.pos.x > height) {
            this.vel.y *= -1
        }
    }

    //connecting lines
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)

            if (d < 120) {
                stroke('rgba(255,255,255,0.1)')
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        })

    }
}


var string = "CSI VESIT"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 180); /* change 70 for speed */

}
frameLooper();

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function() {
        checkScroll();
    });
}

;
(function() {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        });

        $(".owl-carousel2").owlCarousel({
            loop: true,
            center: false,
            margin: 0,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }
        });
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}

AOS.init({
    duration: 1200,
})