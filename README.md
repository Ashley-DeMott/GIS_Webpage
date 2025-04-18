# National Park Service GIS webpage

## Overview
This website shows a map of National Park locations in the United States using code form an ArcGIS demo. Modifications were made to request and display a different data set. The goal was to learn more about working with GIS data, working with Node JS, and displaing a map within a website.

## Development Environment
* Node JS
* Visual Studio Code
* Dependencies installed from ["Creating a Web App"](https://developers.arcgis.com/javascript/latest/tutorials/create-a-web-app-using-components/) tutorial (Follow instructions for "inital Vite vanilla Javascript project")

## Useful Websites
* [ArcGIS Tutorials Page](https://developers.arcgis.com/javascript/latest/tutorials/)
* [ArcGIS Developer - Creating a Web App](https://developers.arcgis.com/javascript/latest/tutorials/create-a-web-app-using-components/)
* [ArcGIS Developer - Core Concepts](https://developers.arcgis.com/calcite-design-system/tutorials/apply-core-concepts/)
* [ArcGIS - Feature Servers](https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services)

## Future Work
### Coding
* Host on github.io page
* Add more comments and general clean up of code (move styling and script to own files)
* Get keys/sections from data instead of hardcoding, can't see if there is newer data. Also use JS to generate HTML elements for options

### Features
* Add the ability to filter locations based on user's interaction (search, filter)
* Add the ability to search for a park by name or other information (location, etc)
* User can choose a park and get more information about it (update the pop up window to show more general information, not just visitor data)
* Search/select by geographic region (user filters for "California", draw border aroud and filter out other parks)
* Draw outlines around the park's region instead of using a GPS based point
* Add layers that display additional data, differentiated by symbol (natural features (mountains, geysers, etc), park stations)
* Figure out how to get and dislpay data from Feature Servers, Web Maps, and CVS/text files within the same map
