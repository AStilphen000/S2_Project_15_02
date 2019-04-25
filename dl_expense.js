"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Angelina Stilphen
   Date:   4.19.19
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/

// adds event listener to load the functions onto the web page
window.addEventListener("load", function() {
      // macthes all input elements in the travlExp table that belong to the sum class
      var changingCells = document.querySelectorAll('input[class="sum"]');
      // the for loop runs every item in the changingCells collection and adds an onchange event handlerthat runs the calcExp function
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      // submits summary once the button is clicked and runs you to the validateSummary function
      document.getElementById("submitButton").onclick = validateSummary;
}); 

function validateSummary() {
      // runs the validateSummary function and grabs the element summary by id
      var validateSummary = document.getElementById("summary");
      // if the validation state of the summary field value is missing it displays the message below 
      if (validateSummary.validity.valueMissing) {
            validateSummary.setCustomValidity("You must include a summary of thr trip in your report");
      } else {
            validateSummary.setCustomValidity("");
      }
}

function calcClass(sumClass) {
      // the sumFields variable grabs the class name sumClass from the document 
      var sumfiels = document.getElementsByClassName(sumClass);
      // variable subTotal is used to keep a running total of the total values in the input elements in the sumFields object collection 
      var subTotal = 0;
      //  createf for loop to loop through the items in the sumFields object collection 
      for (var i = 0; i < sumfiels.length; i++) {
            // created a variable named itemValue to be equal to the numeric value of the current input element in the sumFields array.
            var itemValue = parseFloat(sumfiels[i].value);
            //  the itemValue is a numeric value and it needs to be added to itemValue
            if (!isNaN(itemValue)) {

            } else {
                  
            }
            return sumTotal; 
      }
} 

// the purpose of this function is to calculate the the row and column totals from the travelExp table 
function calcExp() {
      // the expTable variable grabs all the table rows in the body of the tr elements 
      var expTable = document.querySelectorAll(tr);
      // loops through the the rows in the expTable collection 
      for (var i = 0; i < expTotal.length; i++) {
            // grabs the id subTotal value in the index and returned by the calcClass function using the parameters date and index, then added 2 decimals
            document.getElementById(subTotal + i).value = formatNumber(calcClass("date" + i), 2);
      } 
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge" + i), 2);
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal" + i), 2);
      document.getElementById("otherTotal").value = formatNumber(calcClass("other" + i), 2);
}



function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}