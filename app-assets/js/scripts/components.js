/*=========================================================================================
  File Name: Components.js
  Description: For Generic Components.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

(function (window, document, $) {
  /***** Component Variables *****/
  var alertValidationInput = $(".alert-validation"),
    alertRegex = /^[0-9]+$/,
    alertValidationMsg = $(".alert-validation-msg"),
    accordion = $(".accordion"),
    collapseTitle = $(".collapse-title"),
    collapseHoverTitle = $(".collapse-hover-title"),
    dropdownMenuIcon = $(".dropdown-icon-wrapper .dropdown-item");

  /***** Alerts *****/
  /* validation with alert */
  alertValidationInput.on('input', function () {
    if (alertValidationInput.val().match(alertRegex)) {
      alertValidationMsg.css("display", "none");
    } else {
      alertValidationMsg.css("display", "block");
    }
  });

  /***** Carousel *****/
  // For Carousel With Enabled Keyboard Controls
  $(document).on("keyup", function (e) {
    if (e.which == 39) {
      $('.carousel[data-keyboard="true"]').carousel('next');
    } else if (e.which == 37) {
      $('.carousel[data-keyboard="true"]').carousel('prev');
    }
  })

  // To open Collapse on hover
  if (accordion.attr("data-toggle-hover", "true")) {
    collapseHoverTitle.closest(".card").on("mouseenter", function () {
      $(this).children(".collapse").collapse("show");
    });
  }
  // Accordion with Shadow - When Collapse open
  $('.accordion-shadow .collapse-header .card-header').on("click", function () {
    var $this = $(this);
    $this.parent().siblings(".collapse-header.open").removeClass("open");
    $this.parent(".collapse-header").toggleClass("open");
  });

  /***** Dropdown *****/
  // For Dropdown With Icons
  dropdownMenuIcon.on("click", function () {
    $(".dropdown-icon-wrapper .dropdown-toggle i").remove();
    $(this).find("i").clone().appendTo(".dropdown-icon-wrapper .dropdown-toggle");
    $(".dropdown-icon-wrapper .dropdown-toggle .dropdown-item").removeClass("dropdown-item");
  });
+


  /***** Chips *****/
  // To close chips
  $('.chip-closeable').on('click', function () {
    $(this).closest('.chip').remove();
  })
})(window, document, jQuery);





function hideAllBlock() {
  document.getElementById("form1").style.display = "none";
  document.getElementById("form2").style.display = "none";
}

function Selected(a) {
  hideAllBlock();
  document.getElementById(a.value).style.display = "block";
}

// $(".phone").mask("+38(999)999-99-99");


// var $new_template_add = $(".template_clone").clone(true);
// $(".button_template_new").click(function () {
//   $(this).before($new_template_add.clone(true));
// });
// $(document).on("click", ".but_hover_remove", function () {
//   $(this).closest(".template_clone, .template_clone").remove();
// });



// определение кнопки добавления
// var button_add = document.querySelector( '.dynamic_fields .js-add' );

// ожидание клика на кнопку .add
// button_add.addEventListener( 'click', function () {

//   var students = document.querySelector( '.dynamic_fields .link-internet-platform' );

//   var element = document.querySelector( '.box-link-internet-platform' ).cloneNode( true );

//   element.classList.add( 'link-internet-platform-add' );

//   element.classList.remove("box-link-internet-platform");

//   students.appendChild( element );
  
// } );

// ожидание клика по документу
document.addEventListener( 'click', function ( el ) {
  if ( el.target && el.target.classList.contains( 'js-remove' ) ) {
    var child = el.target.closest( '.table' );
    child.parentNode.removeChild(child);
  }
} );


