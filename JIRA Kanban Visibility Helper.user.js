// ==UserScript==
// @name         JIRA Kanban Visibility Helper
// @namespace    none
// @version      0.1
// @description  Make tickets more visible on Kanban board by highlighting entire card instead of just side bar
// @author       Amanda Cox
// @match        YOUR JIRA URL HERE
// @grant        none
// ==/UserScript==

var jiraCardColor = 'rgb(189, 30, 75)'; // Replace value with the rgb value of your chosen card color (https://htmlcolorcodes.com/)
var newBgCardColor = '#ffe8e8'; // Replace value with the chosen background color for your card. Can be rgb or hex

function fillCardBackgrounds() {
    var allCards = document.querySelectorAll('.ghx-issue');
    var colorStripes = document.querySelectorAll('.ghx-grabber');
    for (var i=0; i < allCards.length; i++) {
        if (colorStripes[i].style.backgroundColor == jiraCardColor) {
            allCards[i].style.backgroundColor = newBgCardColor;
        }
    }
}


// Checks if board has loaded. When it does, the script is executed.
var checkPageLoaded = setInterval(function() {
    var allCards = document.querySelectorAll('.ghx-issue');
    if (allCards.length) {
       fillCardBackgrounds();
       clearInterval(checkPageLoaded);
   }
}, 200);


// Checks for any triggered events and ensures script is run again on refresh
var targetNode = document.getElementById('jira');
var observer = new MutationObserver(fillCardBackgrounds);
observer.observe(targetNode, { attributes: true, childList: false, subtree: false });


// Code below is an optional legend that is added to top of board. To remove, comment out or delete the code below.
var legendDiv = document.createElement('div');
legendDiv.style.textAlign = 'center';
legendDiv.innerHTML = '<span style="color:#bd1e4b;font-weight:bold;">Red</span> = Ticket has open dependencies';
document.getElementById('ghx-controls-work').appendChild(legendDiv);
