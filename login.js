 // Create floating particles
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100 + 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particlesContainer.appendChild(particle);
      }
    }
    
    // Initialize particles
    createParticles();
    
    // Ripple effect for button
    document.getElementById('login-button').addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
    
    // Form submission with success animation
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Show loading state
      const button = document.getElementById('login-button');
      button.innerHTML = '<span><i class="fas fa-spinner fa-spin"></i> AUTHENTICATING...</span>';
      button.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        // Hide form and show success animation
        this.style.display = 'none';
        document.getElementById('success-checkmark').style.display = 'block';
        
        // Reset after showing success
        setTimeout(() => {
          button.innerHTML = '<span>LOGIN</span>';
          button.disabled = false;
          this.style.display = 'block';
          document.getElementById('success-checkmark').style.display = 'none';
          
          // This would be replaced with actual login logic
          alert('Login successful! Redirecting to dashboard...');
        }, 2500);
      }, 2000);
    });
    
    // Forgot password animation
    document.getElementById('forgot-password').addEventListener('click', function(e) {
      e.preventDefault();
      this.innerHTML = '<i class="fas fa-envelope"></i> Email sent!';
      this.style.color = 'var(--success-color)';
      
      setTimeout(() => {
        this.innerHTML = 'Forgot password?';
        this.style.color = '';
      }, 3000);
    });
    
    // Add bounce animation to sports icons on hover
    const sportIcons = document.querySelectorAll('.sport-icon');
    sportIcons.forEach(icon => {
      icon.addEventListener('mouseenter', function() {
        this.classList.add('animate__animated', 'animate__bounce');
      });
      
      icon.addEventListener('animationend', function() {
        this.classList.remove('animate__animated', 'animate__bounce');
      });
    });
    
    // Add shake animation to form on error (demo)
    setTimeout(() => {
      const form = document.getElementById('login-form');
      form.classList.add('animate__animated', 'animate__shakeX');
      
      setTimeout(() => {
        form.classList.remove('animate__animated', 'animate__shakeX');
      }, 1000);
    }, 5000);