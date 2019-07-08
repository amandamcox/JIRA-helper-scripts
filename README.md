# JIRA-helper-scripts
Tampermonkey / Greasemonkey scripts to customize your JIRA views


## Kanban Visibility Helper
This script takes a card color you've added to your board and changes the background color of the entire card. This can make cards that match specific queries more visibile.

**For Example**:
Have tickets with open dependencies and want to highlight those?
1. Add a card color via JIRA (Board > Configure > Card Colours)
2. Enter a query that will populate all tickets on your board with open dependencies:
`issueFunction in linkedIssuesOf("status!=Closed", "is depended on by")`
3. Take note of the color you've chosen for that query
4. Fill in the script with your chosen colors. See script comments for more details.
5. Add script to Tampermonkey and load your board. You should now see something like this...

*Screenshot*
![Screenshot from repo](https://github.com/amandamcox/JIRA-helper-scripts/blob/master/JIRA%20Kanban%20Visibility%20Helper%20-%20Example.png)

*Script supports one or more card colors + a color legend inserted at top of page*
