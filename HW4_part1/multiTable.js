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
