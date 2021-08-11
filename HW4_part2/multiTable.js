/*
  Author: Bradley R. Legg, UMass Lowell Computer Science, bradley_legg@student.uml.edu
  a. Bradley R. Legg
  b. 9 August 2021
  c. Webpage used to show a dynamic multipliation table written in JS
     with error handling. Improved version.
*/

// used to generate a table (row|col) using HTML <th> <tr> <td> elements
function generateTable(minRows, maxRows, minCols, maxCols) {
  // tells the variable to store as a string; without specification code would
  // be shown instead
  var generateTable = "";

  generateTable += "<tr>";
  // create blankspace in upper left
  generateTable += "<th>" + " " + "</th>";
  // cols
  for (var cols = minCols; cols <= maxCols; cols++) {
  generateTable += "<td>" + cols + "</td>";
  }
  generateTable += "</tr>";
  // rows
  for (rows = minRows; rows <= maxRows; rows++) {
    generateTable += "<tr>";
    generateTable += "<td>" + rows + "</td>";
  // fill in primary cells
  for (let j = minCols; j <= maxCols; j++){
  if (j * rows === rows * rows) {
      generateTable += "<td>" + j * rows + "</td>";
  } else {
    generateTable += "<td>" + j * rows + "</td>";
    }
  }
  generateTable += "</tr>";
  }
  // return to display the generated table
  return generateTable;
}

// used to display a desired table
function createTable() {
  // attach variables to the elements ids for display & taking input from user
  /* using + unary operator to convert to an integer, to aid in preventing decimal
  inputs and character inputs */
  var minRows = parseInt(document.getElementById("minRows").value);
  var maxRows = parseInt(document.getElementById("maxRows").value);
  var minCols = parseInt(document.getElementById("minCols").value);
  var maxCols = parseInt(document.getElementById("maxCols").value);

  var generatedTable = generateTable(minRows, maxRows, minCols, maxCols);
  document.getElementById("multiTable").innerHTML = generatedTable;
  // displays the table
  return generatedTable;
}

// jQuery Validation for inputs
$(document).ready(function () {

    // Make sure the max >= min for cols
    $.validator.addMethod("rowValidate", function (value, param) {
        if (parseInt($("#maxRows").val()) < parseInt($("#minRows").val())) {
            return false;
        }
        else {
            return true;
        }
    });

    // Make sure the max >= min for cols
    $.validator.addMethod("colValidate", function (value, param) {
        if (parseInt($("#maxCols").val()) < parseInt($("#minCols").val())) {
            return false;
        }
        else {
            return true;
        }
    });


    // invalidate on decimal input
    $.validator.addMethod("noDec", function (value, element) {
      return !(value % 1);
    }, " Please use integer inputs only");

    $("#form-validate").validate({
        /*
        Validation rules:
        - number: has to be a number
        - noDec: decimals invalid
        - min: minimum number
        - max: maximum number
        - (row/col)Validate: make sure min-value < max-value
        - required: field must be filled out (caused errors to not show without)
        */
        rules: {
            minRows: {
                number: true,
                noDec: true,
                min: -50,
                max: 50,
                required: true
            },
            maxRows: {
                number: true,
                noDec: true,
                min: -50,
                max: 50,
                required: true,
                rowValidate: "#minRows"
            },
            minCols: {
                number: true,
                noDec: true,
                min: -50,
                max: 50,
                required: true
            },
            maxCols: {
                number: true,
                noDec: true,
                min: -50,
                max: 50,
                required: true,
                colValidate: "#minCols"
            }
        },
        // error messages for methods
        messages: {
            maxRows: {
                rowValidate: " The max-row must be larger than min-row"
            },
            maxCols: {
                colValidate: " The max-col must be larger than min-col"
            }
        },
        // show errors with error css-style
        highlight: function (element) {
            $(element).addClass('errorMsg');
        },
        unhighlight: function (element) {
            $(element).removeClass('errorMsg');
        }
    })
});

// update slider based on form value input, generate the table as such
$("#minRows").change(function () {
    var val = this.value;
    $("#minRowsSlider").slider("value", parseInt(val));
    createTable();
});

$("#maxRows").change(function () {
    var val = this.value;
    $("#maxRowsSlider").slider("value", parseInt(val));
    createTable();
});

$("#minCols").change(function () {
    var val = this.value;
    $("#mixColsSlider").slider("value", parseInt(val));
    createTable();
});

$("#maxCols").change(function () {
    var val = this.value;
    $("#maxColsSlider").slider("value", parseInt(val));
    createTable();
});

// updating with createTable() upon moving slider + only generate when valid
$(function () {
    $("#minRowsSlider").slider({
        value: 0,
        min: -50,
        max: 50,
        range: [-50, 50],
        slide: function (event, ui) {
            $("#minRows").val(ui.value);
            if ($("#form-validate").valid()) {
                createTable();
            }
        }
    });
    $("#minRows").val($("#minRowsSlider").slider("value"));
});

$(function () {
    $("#maxRowsSlider").slider({
        value: 0,
        min: -50,
        max: 50,
        range: [-50, 50],
        slide: function (event, ui) {
            $("#maxRows").val(ui.value);
            if ($("#form-validate").valid()) {
                createTable();
            }
        }
    });
    $("#maxRows").val($("#maxRowsSlider").slider("value"));
});
$(function () {
    $("#minColsSlider").slider({
        value: 0,
        min: -50,
        max: 50,
        range: [-50, 50],
        slide: function (event, ui) {
            $("#minCols").val(ui.value);
            if ($("#form-validate").valid()) {
                createTable();
            }
        }
    });
    $("#minCols").val($("#minColsSlider").slider("value"));
});
$(function () {
    $("#maxColsSlider").slider({
        value: 0,
        min: -50,
        max: 50,
        range: [-50, 50],
        slide: function (event, ui) {
            $("#maxCols").val(ui.value);
            if ($("#form-validate").valid()) {
                createTable();
            }
        }
    });
    $("#maxCols").val($("#maxColsSlider").slider("value"));
});

// jQuery for tabs (used to store separate generated tables)
$(function () {
    $("#tabs").tabs();
});

// save table into tab
function addTab() {
  if ($("#form-validate").valid()) {

    var minRows = parseInt(document.getElementById("minRows").value);
    var maxRows = parseInt(document.getElementById("maxRows").value);
    var minCols = parseInt(document.getElementById("minCols").value);
    var maxCols = parseInt(document.getElementById("maxCols").value);

    var count = $("#tabs li").length + 1;

    // credit: jQuery Tabs documentation
    var list = `<li><a href='#tab${count}'</a>Rows: ${minRows} to ${maxRows} <br> Columns: ${minCols} to ${maxCols}<br><br><span class='ui-icon ui-icon-close'role='presentation'>Remove Tab</span></li>`;
    $("div#tabs ul").append(list);
    $("div#tabs").append('<div id="tab' + count + '">' + "<table>" + createTable() + "</table" + '</div>');
    $("#tabs").tabs("refresh");
    $("#tabs").tabs("option", "active", -1);

    // remove tabs individually by clicking the "x"
    $("#tabs").delegate("span.ui-icon-close", "click", function () {
      var id = $(this).closest("li").remove().attr("aria-controls");
      $("#" + id).remove();
      $("#tabs").tabs("refresh");
    });
  }
}

// removes tabs
function removeTabs() {
    $("#tabs ul li").each(function () {
        var id = $(this).attr("aria-controls");
        $(this).remove()
        $("#" + id).remove();
        $("#tabs").tabs("refresh");
    });
}
