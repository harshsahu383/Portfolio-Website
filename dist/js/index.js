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
    // skills
   