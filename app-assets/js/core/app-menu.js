$(".button-toggle-open").on("click", function () {
    $(".main-menu, .navbar-header").addClass("expanded");
}) 


$(".button-toggle-exit").on("click", function () {
  $(".main-menu, .navbar-header").removeClass("expanded");
});



// $('.button-toggle-open').on('click', modernMenuExpand);

// function modernMenuExpand() {
//   if ($body.data('menu') == 'vertical-menu-modern') {
//     $('.main-menu, .navbar-header').addClass('expanded');
//     if ($body.hasClass('menu-collapsed')) {
//       if ($('.main-menu li.open').length === 0) {
//         $(".main-menu-content").find('li.active').parents('li').addClass('open');
//       }
//       var $listItem = $('.main-menu li.menu-collapsed-open'),
//         $subList = $listItem.children('ul');

//       $subList.hide().slideDown(200, function () {
//         $(this).css('display', '');
//       });

//       $listItem.addClass('open').removeClass('menu-collapsed-open');
//       // $.app.menu.changeLogo('expand');
//     }
//   }
// }
// $(".button-toggle-exit").on("click", modernMenuExit);
// function modernMenuExit() {
//   if ($body.data("menu") == "vertical-menu-modern") {
//     $(".main-menu, .navbar-header").removeClass("expanded");        
//   }
// }

      // $('.navbar-header, .main-menu').on('mouseenter', modernMenuExpand).on('mouseleave', modernMenuCollapse);

      // function modernMenuExpand() {
      //   if ($body.data('menu') == 'vertical-menu-modern') {
      //     $('.main-menu, .navbar-header').addClass('expanded');
      //     if ($body.hasClass('menu-collapsed')) {
      //       if ($('.main-menu li.open').length === 0) {
      //         $(".main-menu-content").find('li.active').parents('li').addClass('open');
      //       }
      //       var $listItem = $('.main-menu li.menu-collapsed-open'),
      //         $subList = $listItem.children('ul');

      //       $subList.hide().slideDown(200, function () {
      //         $(this).css('display', '');
      //       });

      //       $listItem.addClass('open').removeClass('menu-collapsed-open');
      //       // $.app.menu.changeLogo('expand');
      //     }
      //   }
      // }

     