// Hero Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');

function showNextSlide() {
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-rotate slides every 5 seconds
setInterval(showNextSlide, 5000);

// Form Validation
function validateForm() {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('student_age').value;
    const areaOfStudy = document.getElementById('area_of_study').value;
    const countryPreference = document.getElementById('country_preference').value;
    const degreeInterest = document.getElementById('degree_interest').value;
    const zoomAttending = document.getElementById('zoom_attending').value;

    // Check required fields
    if (!firstName || !lastName || !email) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate age (must be 2 digits, between 10-99)
    if (!age || age < 10 || age > 99) {
        alert('Please enter a valid age (10-99).');
        return false;
    }

    // Check all dropdown selections
    if (!areaOfStudy || !countryPreference || !degreeInterest || !zoomAttending) {
        alert('Please complete all dropdown selections.');
        return false;
    }

    return true;
}

// Restrict age input to 2 digits
document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('student_age');
    
    if (ageInput) {
        ageInput.addEventListener('input', function() {
            if (this.value.length > 2) {
                this.value = this.value.slice(0, 2);
            }
        });

        // Prevent non-numeric input
        ageInput.addEventListener('keypress', function(e) {
            if (e.which < 48 || e.which > 57) {
                e.preventDefault();
            }
        });
    }
});

// Analytics Event Tracking (Webinar Registration Only)
function trackWebinarRegistration() {
    // Add your analytics tracking code here
    // Example for Google Analytics:
    if (typeof gtag !== 'undefined') {
        gtag('event', 'webinar_registration', {
            'event_category': 'engagement',
            'event_label': 'webinar_form_submit'
        });
    }
    
    // Example for Facebook Pixel:
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead');
    }
    
    console.log('Webinar registration tracked');
}

// Smooth Scroll for Internal Links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky Form Behavior
window.addEventListener('scroll', function() {
    const formContainer = document.querySelector('.sticky-form');
    if (!formContainer) return;
    
    const scrollPosition = window.pageYOffset;
    const formWrapper = document.querySelector('.form-wrapper');
    
    if (formWrapper) {
        const wrapperBottom = formWrapper.offsetTop + formWrapper.offsetHeight;
        const formHeight = formContainer.offsetHeight;
        
        if (scrollPosition + formHeight > wrapperBottom) {
            formContainer.style.position = 'absolute';
            formContainer.style.top = (formWrapper.offsetHeight - formHeight) + 'px';
        } else if (scrollPosition > formWrapper.offsetTop) {
            formContainer.style.position = 'sticky';
            formContainer.style.top = '20px';
        }
    }
});

// Log script loaded
console.log('Immerse Education scripts loaded successfully');