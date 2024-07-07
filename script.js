document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal img');
    const closeBtn = document.querySelector('.modal .close');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        if (name === '') {
            showError('#name', 'Name is required');
        }
        if (!validateEmail(email)) {
            showError('#email', 'Invalid email address');
        }
        if (message === '') {
            showError('#message', 'Message is required');
        }
        if (document.querySelectorAll('.error').length === 0) {
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const element = document.querySelector(input);
        const error = document.createElement('div');
        error.className = 'error';
        error.innerText = message;
        element.parentElement.appendChild(error);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }

    // Collapsible Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Load Events Dynamically (example with static data)
    const eventsSection = document.querySelector('#events');
    const events = [
        { title: 'Thaipusam', date: 'January 28', description: 'Thaipusam is a festival celebrated by the Tamil community on the full moon in the Tamil month of Thai.' },
        { title: 'Panguni Uthiram', date: 'March 23', description: 'Panguni Uthiram is celebrated in the Tamil month of Panguni, which coincides with the Uthiram star.' }
        // Add more events as needed
    ];

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p>${event.description}</p>
        `;
        eventsSection.appendChild(eventDiv);
    });
});

// JavaScript for lightbox functionality

// Get the modal
var lightbox = document.getElementById('lightbox');

// Get the <span> element that closes the lightbox
var closeBtn = document.getElementById('close-btn');

// Get all images in the gallery
var images = document.querySelectorAll('.image-gallery img');

// Get the image displayed in the lightbox
var lightboxImg = document.getElementById('lightbox-img');

// Function to open the lightbox
function openLightbox(imgSrc) {
    lightbox.style.display = 'block';
    lightboxImg.src = imgSrc;
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add click event listeners to each image in the gallery
images.forEach(function(img) {
    img.addEventListener('click', function() {
        var imgSrc = this.getAttribute('data-src');
        openLightbox(imgSrc);
    });
});

// Add click event listener to close button
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
