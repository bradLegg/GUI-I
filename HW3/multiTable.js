/*
  Author: Bradley R. Legg, UMass Lowell Computer Science, bradley_legg@student.uml.edu
  a. Bradley R. Legg
  b. 31 July 2021
  c. Webpage used to show a dynamic multipliation table written in JS
     with error handling.
*/

function generateTable() {
  // empty string used for placeholder values to clear on invalid inputs
  var generateTable = "";
  var error = "";
  // var generate = true;

  // attach variables to the elements ids for display & taking input from user
  /* using + unary operator to convert to an integer, to aid in preventing decimal
  inputs and character inputs */
  var minRows = +document.getElementById("minRows").value;
  var maxRows = +document.getElementById("maxRows").value;
  var minCols = +document.getElementById("minCols").value;
  var maxCols = +document.getElementById("maxCols").value;

  document.getElementById("errorMsg").innerHTML = error;
  document.getElementById("multiTable").innerHTML = generateTable;

  /*
  // error handling on user input
  if ((isNaN(minRows)) || (isNaN(maxRows)) || (isNaN(minCols)) || (isNaN(maxCols))) {
    var errorNaN = "The input is not a number. "
    error += errorNan;
  }
  */
  // cheking if the input is an integer and is within the -50,50 bounds
  if (!Number.isInteger(minRows) || !Number.isInteger(maxRows) ||
      !Number.isInteger(minCols) || !Number.isInteger(maxCols)) {
    var error1 = "The input(s) must be of type integer. "
    error += error1;
  } else if (minRows < -50 || minCols < -50 ||
    maxRows > 50 || maxCols > 50) { // Bounds
    var error2 = "The input(s) must be between -50 to 50. ";
    error += error2;
  }
  // checking if the min-input is less than or equal to the max-input
  if (minRows > maxRows && minCols > maxCols) {
    var error3 = "The minimum row value must be less than or equal to the maximum row value"
    + " and the minimum column value must be less than or equal to the maximum column value. ";
    error += error3;
  } else if (minRows > maxRows) {
    var error4 = "The minimum row value must be less than or equal to the maximum row value. ";
    error += error4;
  } else if (minCols > maxCols) {
    var error5 = "The minimum column value must be less than or equal to the maximum column value. ";
    error += error5;
  }

  /* if invalid input is detected, display the error and exit function
  execution prior to generating the table */
  if (error != "") {
    document.getElementById("errorMsg").innerHTML = error;
    return;
  }

  /* removes right border to improve the look of the generated table when
     input is large,  reverses the style effect when no longer necessary
     - avoids overlapping the border on any resolution */
  if (maxCols - minCols >= 24) {
    document.body.style.borderRight = "none";
  } else {
    document.body.style.borderRight = "1.5em ridge rgba(0,173,181,255)";
  }

  generateTable += "<tr>";
  // create blankspace in upper left
  generateTable += "<th>" + " " + "</th>";
  // rows
  for (var rows = minRows; rows <= maxRows; rows++) {
  generateTable += "<td>" + rows + "</td>";
  }
  generateTable += "</tr>";
  // cols
  for (cols = minCols; cols <= maxCols; cols++) {
    generateTable += "<tr>";
    generateTable += "<td>" + cols + "</td>";
  // fill in primary cells
  for (let j = minRows; j <= maxRows; j++){
  if (j * cols === cols * cols) {
      generateTable += "<td>" + j * cols + "</td>";
  } else {
    generateTable += "<td>" + j * cols + "</td>";
    }
  }
   generateTable += "</tr>";
  }


  // displays the generated table
  document.getElementById("multiTable").innerHTML = generateTable;
}
