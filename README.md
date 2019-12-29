# JIRA Kanban Ticket Visibility - Helper Script

### Description
This javascript file manipulates the DOM to make specific tickets more visibile on your JIRA Kanban board. JIRA's Kanban board allows you to add a color strip to cards that meet the criteria mandated by the filter added to it. However, the color strip is often not seen. This script changes the color of the entire card, so the ticket is more visible.

**For Example**:
Want to highlight tickets with open dependencies?
1. Add a card color via JIRA (Board > Configure > Card Colours)
2. Enter a JQL query that will populate all tickets on your board with open dependencies:
`issueFunction in linkedIssuesOf("status!=Closed", "is depended on by")`
3. Follow the How To Use instructions below and all tickets with open dependencies will now be highlighted in the Kanban view without any extra clicks/loads

### Screenshots
![Screenshot from repo](https://github.com/amandamcox/JIRA-helper-scripts/blob/master/JIRA%20Kanban%20Visibility%20Helper%20-%20Example.png)

### How to Use
1. Install the Tampermonkey / Greasemonkey extension for your browser
2. Navigate to your JIRA Kanban board and add a card color query (Board > Configure > Card Colours). Make note of the color you assigned to the JQL query
3. Download the files in this repo
4. Customize the .js file with the specifics of your board:
    * Add the main path for your JIRA instance next to '@match' (ex: https://jira.yourcompany.com)
    * Add the rgb value of the color chosen for your card color query to the variable named 'jiraCardColor'
    * Pick a background color for the entire card. Add that value (rgb, hex) to the variable named 'newBgCardColor'
5. Add the customized .js file to your Tampermonkey/Greasemonkey extension
*Your script should now automatically run when visiting your JIRA instance*
