let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
const projectsTitle = document.querySelector(".projectsTitle")
const laptops = document.querySelectorAll(".laptop");
const boxContainer = document.querySelector(".boxContainer");
const glassCard = document.querySelector('.glass-card');
const aboutSection = document.getElementById('about');
const leafAbout = document.getElementById('leaf');



for(let i = 0; i<365; i++){

  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];
  const el = document.createElement("div")
  el.classList = list.includes(i) ? "box active" : "box"
  boxContainer.appendChild(el)
}

window.addEventListener('scroll', () => {
    let val = window.scrollY; 
    let sectionOffset = aboutSection.offsetTop;
    let viewHeight = window.innerHeight;
    if (!aboutSection || !leaf) return;

    text.style.transform = `translateY(${val * 0.4}px)`;
    hill5.style.left = val * 1.5 + 'px';
    hill4.style.left = val * -1.5 + 'px';
    hill1.style.top = val * 1 + 'px';
    projectsTitle.style.transform = `translateY(${1500 - val * .94}px)`
    laptops[0].style.transform = `translateX(${1600 - val * 0.856}px)`
    laptops[1].style.transform = `translateX(${-1800 + val * 0.66}px)`
    laptops[2].style.transform = `translateX(${2000 - val * 0.56}px)`
    let cardPos = glassCard.getBoundingClientRect().top;
    if(cardPos < window.innerHeight - 100) {
        glassCard.style.opacity = "1";
        glassCard.style.transform = "translateY(0)";
    }

    if (val > sectionOffset - viewHeight && val < sectionOffset + aboutSection.offsetHeight) {
        
        // progress starts at 0 when the section hits the bottom of the screen
        let progress = val - (sectionOffset - viewHeight);
        
        // --- SETTINGS ---
        let maxInward = 10;    /* How far it travels into the screen (px from right) */
        let startPos = -900;   /* Matches CSS 'right' value */
        let peakScroll = 800;  /* At what scroll distance it reaches its peak position */
        
        let currentRight;

        if (progress <= peakScroll) {
            // PHASE 1: Coming in from right to left
            // We move from -400 toward 100
            let ratio = progress / peakScroll;
            currentRight = startPos + ( (maxInward - startPos) * ratio );
        } else {
            // PHASE 2: Going back from left to right
            // We start subtracting as we scroll further
            let exitRatio = (progress - peakScroll) / peakScroll;
            currentRight = maxInward - ( (maxInward - startPos) * exitRatio );
        }

        // Apply the calculation to the 'right' property
        // Clamp it so it doesn't go further than the start position
        if (currentRight < startPos) currentRight = startPos;
        
        leaf.style.right = currentRight + 'px';
        
    }

})
