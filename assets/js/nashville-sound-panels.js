(function($) {
  "use strict"; // Start of use strict

  // FullPage.js
  $(document).ready(function() {
    $("#fullpage").fullpage({
      recordHistory: "false",
      //Navigation
      menu: "menu",
      anchors: [],
      //Design
      controlArrows: true,
      verticalCentered: true
    });
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

var feed = new Instafeed({
  get: 'user',
  accessToken: '4597544082.55598cd.6415a38a96fd47a1a541e8d9da76d7e2',
  resolution: 'standard_resolution',
  template: '<a class="grid-item" href="{{link}}"><img src="{{image}}" /></a>',
  limit: 30,
  sortBy: 'most-recent',
  after: function() {
    var elem = document.querySelector('.grid');
    imagesLoaded(elem, function(instance) {
      var msnry = new Masonry(elem, {
        // options
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
      });
    });
  }
});
// grab out load more button
var loadButton = document.getElementById('load-more');
var feed = new Instafeed({
  // every time we load more, run this function
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      loadButton.setAttribute('disabled', 'disabled');
    }
  },
});

// bind the load more button
loadButton.addEventListener('click', function() {
  feed.next();
});
feed.run();
