(function($) {
  "use strict"; // Start of use strict
  
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });
  
// Lightbox Logic
const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');
const captionElement = document.createElement('div'); // Create a caption element
captionElement.classList.add('caption');

// Event listeners to open the lightbox
images.forEach(image => {
  image.addEventListener('click', function () {
      lightbox.style.display = 'flex';  // Show the lightbox
      lightboxImage.src = image.src;  // Set the lightbox image to the clicked image
      captionElement.textContent = image.getAttribute('data-caption');  // Set the caption
      lightbox.appendChild(captionElement); // Add caption to the lightbox

      // Create and append the close button dynamically to the image
      const closeBtn = document.createElement('span');
      closeBtn.textContent = '×';  // The "x" character
      closeBtn.classList.add('close');
      closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';  // Hide the lightbox
        captionElement.textContent = '';  // Clear the caption
      });
      
      // Append the close button directly to the lightbox
      lightbox.appendChild(closeBtn);  // Append the close button to the lightbox
  });
});

// Close the lightbox when clicking outside the image (background click)
lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';  // Hide the lightbox when clicking on background
    captionElement.textContent = '';  // Remove the caption
  }
});

})(jQuery); // End of use strict

