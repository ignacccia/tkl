$(document).ready(function() {
    // Get the current URL
    var currentUrl = window.location.href;
  
    // Get all the navigation links
    var navLinks = $(".nav-link");
  
    // Loop through the navigation links
    navLinks.each(function() {
      var href = $(this).attr("href");
  
      // Check if the current URL matches the link's href
      if (currentUrl.includes(href)) {
        $(this).addClass("active"); // Add "active" class to the matching link
        return false; // Exit the loop early
      }
    });
  });
  