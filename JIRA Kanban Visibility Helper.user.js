// ==UserScript==
// @name         JIRA Kanban Visibility Helper
// @namespace    none
// @version      0.1
// @description  Make tickets more visible on Kanban board
// @author       Amanda Cox
// @match        YOUR JIRA URL HERE
// @grant        none
// ==/UserScript==

/*
BEFORE YOU USE:
1. Navigate to your JIRA Kanban board
2. Open the board configuration view
3. Go to Card Colours
4. Create a query/whatever to show a specific card color for certain cards
5. Take note of the color you've chosen and paste it as the string value of jiraCardColor.
6. Pick a complementary color that you want to be the card background. Paste that as the value of backgroundCardColor.

OPTIONAL: 
If you want to have more than 1 card color on your board...
1. Repeat the steps above for each color.
2. Insert the color values into the variables for card #2.
3. Umcomment out the code where it says to uncomment.
*/


var jiraCardColor = 'rgb(189, 30, 75)'; // Replace value with the rgb value of your chosen card color.
var backgroundCardColor = '#ffe8e8'; // Replace value with the chosen background color for your card. Can be rgb or hex.

// OPTIONAL - If you'd like to use multiple colors, uncomment out these variables and enter values.
/* var jiraCardColor2 = '';
var backgroundCardColor2 = ''; */
// Add more variables if you wish to add additional colors


// Looks for the JIRA color stripe on the cards and changes the card's background color
function fillBackgrounds() {
    var allCards = document.querySelectorAll('.ghx-issue');
    var colorStripes = document.querySelectorAll('.ghx-grabber');
    for (var i=0; i < allCards.length; i++) {
        if (colorStripes[i].style.backgroundColor == jiraCardColor) {
            allCards[i].style.backgroundColor = backgroundCardColor;
        }
        // If you have multiple colors, uncomment this part below
        /* else if (colorStripes[i].style.backgroundColor == jiraCardColor2) {
            allCards[i].style.backgroundColor = backgroundCardColor2;
        }*/
        // Add more else ifs for additional colors
    }
}


// OPTIONAL - If you're uing multiple colors, use this to add a color legend to top of board.
/*var legendDiv = document.createElement('div');
legendDiv.style.textAlign = 'center';
// Edit the HTML below with your own legend content
legendDiv.innerHTML = '<span style="color:#bd1e4b;font-weight:bold;">Red</span> = Ticket has open dependencies<br /><span style="color:#288012;font-weight:bold;">Green</span> = No QA Ticket';
document.getElementById('ghx-controls-work').appendChild(legendDiv);*/


// Looks for cards on initial page load then executes the background function
var checkPageLoaded = setInterval(function() {
    var allCards = document.querySelectorAll('.ghx-issue');
    if (allCards.length) {
       fillBackgrounds();
       clearInterval(checkPageLoaded);
   }
}, 200);


// Looks for changes to board and ensures script is run again on reload
var targetNode = document.getElementById('jira');
var observer = new MutationObserver(fillBackgrounds);
observer.observe(targetNode, { attributes: true, childList: false, subtree: false });
