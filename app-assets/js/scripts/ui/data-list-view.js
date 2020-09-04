/*=========================================================================================
    File Name: data-list-view.js
    Description: List View
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {
  "use strict"

$(".data-list-view").each(function () {
  var table = $(this).DataTable({
    responsive: false,
    columnDefs: [
      {
        orderable: true,
        targets: 0,
        // checkboxes: { selectRow: true }
      },
    ],

    dom:
      '<"top page-analitics" <"actions action-btns"B>   <"button-right-table" l<"btn-calendar"><"btn-select">f> >             <"clear">rt<"bottom" <"actions"> p>',

    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: "",
    },
    aLengthMenu: [
      [6, 10, 15, 20],
      [6, 10, 15, 20],
    ],
    select: {
      style: "multi",
    },
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 6,
    buttons: [
      {
        text: "Добавить <i class='feather icon-plus'></i>  ",
        action: function () {
          $(this).removeClass("btn-secondary");
          $(".add-new-data").addClass("show");
          $(".overlay-bg").addClass("show");
          $("#data-name, #data-price").val("");
          $("#data-category, #data-status").prop("selectedIndex", 0);
        },
        className: "btn-outline-primary",
      },
    ],
    initComplete: function (settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary");
    },
  });
  $(this).data("dataTableObject", table);
});

$(".data-list-view tbody").on("click", "td.toggle-data-ttn", function () {
    var table = $(this).closest("table").data("dataTableObject");
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      row.child.hide();
      tr.removeClass("shown");
    } else {
      row.child(forma()).show();
      tr.addClass("shown");
    }
  }
);
function forma() {
  return (
      "<tr>" +
      "<td>Фомин Евгений Александрович</td>" +
      "<td>+380931233322</td>" +
      "<td>Город</td>" +
      "<td>123 отделение</td>" +
      "</tr>" 
  );
}



$(".data-list-view tbody").on("click", "td.toggle-product-data-list", function () {
  var table = $(this).closest("table").data("dataTableObject");
  var tr = $(this).closest("tr");
  var row = table.row(tr);

  if (row.child.isShown()) {
    row.child.hide();
    tr.removeClass("shown");
  } else {
    row.child(format()).show();
    tr.addClass("shown");
  }
});
function format() {
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr>" +
    "<td>1500</td>" +
    "<td>" +
    '<div class="photo-table">\
              <img class="" src="../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="50" width="50">\
          </div>' +
    "</td>" +
    "<td>Тапочки</td>" +
    "<td>37 размер</td>" +
    "<td>750 грн.</td>" +
    "<td>500 грн.</td>" +
    "<td>250 грн.</td>" +
    "</tr>" +
    "<tr>" +
    "<td>1500</td>" +
    "<td>" +
    '<div class="photo-table">\
              <img class="" src="../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="50" width="50">\
          </div>' +
    "</td>" +
    "<td>Тапочки</td>" +
    "<td>37 размер</td>" +
    "<td>750 грн.</td>" +
    "<td>500 грн.</td>" +
    "<td>250 грн.</td>" +
    "</tr>" +
    "<tr>" +
    "<td>1500</td>" +
    "<td>" +
    '<div class="photo-table">\
              <img class="" src="../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="50" width="50">\
          </div>' +
    "</td>" +
    "<td>Тапочки</td>" +
    "<td>37 размер</td>" +
    "<td>750 грн.</td>" +
    "<td>500 грн.</td>" +
    "<td>250 грн.</td>" +
    "</tr>" +
    "</table>"
  );
}



// function format() {
//   // `d` is the original data object for the row
//   return (
//     '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
//     "<tr>" +
//     "<td>Full name:</td>" +
//     "<td>Something</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>Extension number:</td>" +
//     "<td>Something</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>Extra info:</td>" +
//     "<td>And any further details here (images etc)...</td>" +
//     "</tr>" +
//     "</table>"
//   );
// }

















  // init list view datatable
  var dataListView = $(".data-list-dispatch").DataTable({
    responsive: false,
    columnDefs: [
      {
        orderable: true,
        targets: 0,
        checkboxes: { selectRow: true }
      },
    ],
    dom:
      '<"top page-analitics"<"actions action-btns"B><"button-right-table" l<"btn-calendar"><"btn-select">f>>    <"clear">rt<"bottom"<"actions">p>',

    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: "",
    },
    aLengthMenu: [
      [6, 10, 15, 20],
      [6, 10, 15, 20],
    ],
    select: {
      style: "multi",
    },
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 6,
    buttons: [
      {
        text: "Добавить <i class='feather icon-plus'></i>  ",
        action: function () {
          $(this).removeClass("btn-secondary");
          $(".add-new-data").addClass("show");
          $(".overlay-bg").addClass("show");
          $("#data-name, #data-price").val("");
          $("#data-category, #data-status").prop("selectedIndex", 0);
        },
        className: "btn-outline-primary",
      },
    ],
    initComplete: function (settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary");
    },
  });
  $(".btn-calendar").wrap(
    '<div class="filter_wrap">\
      <button class="AccountstatusOption dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
        За <span>41</span> дн. <i class="fa fa-calendar"></i>\
      </button>\
      <div class="dropdown-menu">\
        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">21 апреля</a>\
        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">30 июня</a>\
      </div>\
    </div>'
  );
  $(".btn-select").wrap(
    '<div class="filter_wrap">\
      <select name="Avialbility" class="AvialbilityStatus_users form-control searchFilterAdded">\
        <option value="0">Дропшипер</option>\
        <option value="1">Клиент</option>\
        <option value="2">Заблокирован</option>\
        <option value="3">На подтверждении</option>\
      </select>\
      <select name="Avialbility" class="AvialbilityStatus form-control searchFilterAdded">\
        <option value="0">Статус</option><option value="1">Выполненные</option>\
        <option value="2">В пути</option> <option value="3">В ожидании</option>\
        <option value="4">Отменен</option>\
      </select>\
    </div>'
  );

  dataListView.on('draw.dt', function(){
    setTimeout(function(){
      if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        $(".dt-checkboxes-cell input, .dt-checkboxes").addClass("mac-checkbox")
      }
    }, 50);
  });












  // init thumb view datatable
  var dataThumbView = $(".data-thumb-view").DataTable({
    responsive: false,
    columnDefs: [
      {
        orderable: true,
        targets: 0,
        checkboxes: { selectRow: true }
      }
    ],
    dom:
      '<"top"<"actions action-btns"B><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: ""
    },
    aLengthMenu: [[4, 10, 15, 20], [4, 10, 15, 20]],
    select: {
      style: "multi"
    },
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 4,
    buttons: [
      {
        text: "<i class='feather icon-plus'></i> Add New",
        action: function() {
          $(this).removeClass("btn-secondary")
          $(".add-new-data").addClass("show")
          $(".overlay-bg").addClass("show")
        },
        className: "btn-outline-primary"
      }
    ],
    initComplete: function(settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary")
    }
  })

  dataThumbView.on('draw.dt', function(){
    setTimeout(function(){
      if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        $(".dt-checkboxes-cell input, .dt-checkboxes").addClass("mac-checkbox")
      }
    }, 50);
  });

  // To append actions dropdown before add new button
  var actionDropdown = $(".actions-dropodown")
  actionDropdown.insertBefore($(".top .actions .dt-buttons"))


  // Scrollbar
  if ($(".data-items").length > 0) {
    new PerfectScrollbar(".data-items", { wheelPropagation: false })
  }

  // Close sidebar
  $(".hide-data-sidebar, .cancel-data-btn, .overlay-bg").on("click", function() {
    $(".add-new-data").removeClass("show")
    $(".overlay-bg").removeClass("show")
    $("#data-name, #data-price").val("")
    $("#data-category, #data-status").prop("selectedIndex", 0)
  })

  // On Edit
  $('.action-edit').on("click",function(e){
    e.stopPropagation();
    $('#data-name').val('Altec Lansing - Bluetooth Speaker');
    $('#data-price').val('$99');
    $(".add-new-data").addClass("show");
    $(".overlay-bg").addClass("show");
  });

  // On Delete
  $('.action-delete').on("click", function(e){
    e.stopPropagation();
    $(this).closest('td').parent('tr').fadeOut();
  });

  // dropzone init
  Dropzone.options.dataListUpload = {
    complete: function(files) {
      var _this = this
      // checks files in class dropzone and remove that files
      $(".hide-data-sidebar, .cancel-data-btn, .actions .dt-buttons").on(
        "click",
        function() {
          $(".dropzone")[0].dropzone.files.forEach(function(file) {
            file.previewElement.remove()
          })
          $(".dropzone").removeClass("dz-started")
        }
      )
    }
  }
  Dropzone.options.dataListUpload.complete()

  // mac chrome checkbox fix
  if (navigator.userAgent.indexOf("Mac OS X") != -1) {
    $(".dt-checkboxes-cell input, .dt-checkboxes").addClass("mac-checkbox")
  }
});





new Vue({
  components: {
    demo: FunctionalCalendar,
  },
}).$mount("#app");



const select = document.querySelector('select');
select.onchange = () => {
tabs.querySelector('.tab-balance-active').classList.remove('tab-balance-active');
tabs.querySelectorAll('.tab')[select.options.selectedIndex].classList.add('tab-balance-active');
}





$('.toggle-product-data-list').click(function(){
    $(".table-product-data-list").toggle().toggleClass("active-visible");
});

$('.toggle-data-ttn').click(function(){
    $(".data-ttn").toggle().toggleClass("active-visible");
});
