(function($) {
  "use strict"; // Start of use strict

  // FullPage.js
  $(document).ready(function() {
    /*
    $("#fullpage").fullpage({
      paddingTop: "20px",
      recordHistory: "false",
      anchors: ['home', 'intro', 'explore'],
      normalScrollElements: ['#instagram, #le1, #le2, #le3, #le'],
      //Navigation
      menu: "menu",
      //Design
      controlArrows: true,
      verticalCentered: true
    });*/
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 54
  });

  // Email
  var usernme = "team";
  var hostnme = "nashvillesoundpanels.com";
  var linktext = "mailto:" + usernme + "@" + hostnme;
  $("#eml").attr("href", linktext);
})(jQuery); // End of use strict
