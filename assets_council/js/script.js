const particles = [];

function setup() {
    var cnv = createCanvas(window.innerWidth - 17, 1000);
    // console.log(window.innerWidth, window.innerHeight);


    cnv.parent('sketch');
    const particlesLength = Math.floor(window.innerWidth / 9)

    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle())
    }
}

function draw() {
    background(255, 255, 255)
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
                stroke('rgba(0,0,0,0.1)')
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        })

    }
}

const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

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