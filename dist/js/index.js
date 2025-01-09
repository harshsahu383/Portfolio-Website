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
        // Remove characters
        dynamicText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Add characters
        dynamicText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      // Adjust the horizontal line width
      const textWidth = dynamicText.offsetWidth;
      line.style.width = textWidth + 'px';

      // Handle completion of typing or deleting
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % roles.length; // Move to the next role
      }

      // Adjust typing speed
      const typingSpeed = isDeleting ? 100 : 150; // Faster when deleting
      setTimeout(typeEffect, typingSpeed);
    }

    // Start the typing effect
    typeEffect();