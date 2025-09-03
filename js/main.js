$(document).ready(function(){

  $('.nav-link').click(function() {
    // Remove 'active-btn' from all buttons
    $('.nav-link').removeClass('active-btn');
    
    // Add 'active-btn' to the clicked button
    $(this).addClass('active-btn');
  });

  // Put your JSON inside a variable
  let tools = [
    {"logo":"images/logo-devlens.svg","name":"DevLens","description":"Quickly inspect page layouts and visualize element boundaries.","isActive":true},
    {"logo":"images/logo-style-spy.svg","name":"StyleSpy","description":"Instantly analyze and copy CSS from any webpage element.","isActive":true},
    {"logo":"images/logo-speed-boost.svg","name":"SpeedBoost","description":"Optimizes browser resource usage to accelerate page loading.","isActive":false},
    {"logo":"images/logo-json-wizard.svg","name":"JSONWizard","description":"Formats, validates, and prettifies JSON responses in-browser.","isActive":true},
    {"logo":"images/logo-tab-master-pro.svg","name":"TabMaster Pro","description":"Organizes browser tabs into groups and sessions.","isActive":true},
    {"logo":"images/logo-viewport-buddy.svg","name":"ViewportBuddy","description":"Simulates various screen resolutions directly within the browser.","isActive":false},
    {"logo":"images/logo-markup-notes.svg","name":"Markup Notes","description":"Enables annotation and notes directly onto webpages for collaborative debugging.","isActive":true},
    {"logo":"images/logo-grid-guides.svg","name":"GridGuides","description":"Overlay customizable grids and alignment guides on any webpage.","isActive":false},
    {"logo":"images/logo-palette-picker.svg","name":"Palette Picker","description":"Instantly extracts color palettes from any webpage.","isActive":true},
    {"logo":"images/logo-link-checker.svg","name":"LinkChecker","description":"Scans and highlights broken links on any page.","isActive":true},
    {"logo":"images/logo-dom-snapshot.svg","name":"DOM Snapshot","description":"Capture and export DOM structures quickly.","isActive":false},
    {"logo":"images/logo-console-plus.svg","name":"ConsolePlus","description":"Enhanced developer console with advanced filtering and logging.","isActive":true}
  ];

  // Loop through JSON and create cards
  tools.forEach(function(item){
    let card = `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="p-4 border rounded-4 h-100 bg-light parent">
          <div class="d-flex align-items-start">
            <img src="${item.logo}" class="img-fluid" alt="${item.name}">
            <div class="px-3">
              <h4 class="fw-bold color">${item.name}</h4>
              <p class="text-color">${item.description}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-3">
            <span class="py-2 px-4 border rounded-pill color">Remove</span>
            <div class="form-check form-switch d-flex align-items-center">
              <input class="form-check-input" type="checkbox" ${item.isActive ? 'checked' : ''}>
            </div>
          </div>
        </div>
      </div>
    `;
    $("#extensions-row").append(card);
  });

  let clickCount = 0;

$(".icon").on("click", function () {
  if ($(this).hasClass("open")) {
    clickCount++;

    if (clickCount === 1) {
      $("body").removeClass("light-bg").addClass("dark-bg");
      $(".parent").removeClass("bg-light").addClass("bg-dark");
      $(".header").removeClass("bg-light").addClass("navbg");
      
    } else if (clickCount === 2) {
      $("body").removeClass("dark-bg").addClass("light-bg");
      $(".parent").removeClass("bg-dark").addClass("bg-light")
      $(".header").removeClass("navbg").addClass("bg-light");


      clickCount = 0; // reset if you want to repeat
    }
    
  }
});

$(".open").on("click", function () {
  $(".color").toggleClass("light");
});



});