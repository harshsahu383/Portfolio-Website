const dynamicText = document.getElementById('dynamic-text');
    const cursor = document.getElementById('cursor');
    const line = document.getElementById('line');

    const roles = ['Web Designer', 'Web Developer', 'Photographer'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[currentIndex];

      if (isDeleting) {
       
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
       
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      
      const textWidth = dynamicText.offsetWidth;
      line.style.width = textWidth + 'px';

      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); 
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % roles.length; 
      }

     
      const typingSpeed = isDeleting ? 100 : 150; 
      setTimeout(typeEffect, typingSpeed);
    }

    
    typeEffect();
  
    async function scroll(param = 100) {
      let position = await new Promise((resolve, reject) => {
        setTimeout(()=> {
          resolve(param+150)
        },1000)

      })
      window.scrollTo({
        top : position,
        behavior : "smooth"
      })
      if(position<=1000){
        scroll(position)
      }
      else
      return 0;
    }
    // Add smooth scrolling with a slower speed
document.getElementById("slowScrollLink").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const targetId = this.getAttribute("href"); // Get the target section (e.g., #about)
  const targetElement = document.querySelector(targetId);

  const targetPosition = targetElement.offsetTop; // Get the position of the target
  const startPosition = window.pageYOffset; // Current scroll position
  const distance = targetPosition - startPosition; // Distance to scroll
  const duration = 1000; // Duration in milliseconds
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Easing function for smooth effect (ease-in-out)
    const ease = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const run = ease(Math.min(timeElapsed / duration, 1)) * distance + startPosition;
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  requestAnimationFrame(animationScroll);
});

