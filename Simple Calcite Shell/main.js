/*
Author: Ashley DeMott
*/

import "./style.css";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";

defineCalciteElements(window, {
    resourcesUrl: "https://js.arcgis.com/calcite-components/2.5.1/assets"
});

defineMapElements(window, {
    resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets"
});

// Displays the groups as a drop down in the upper right
document.querySelector("arcgis-layer-list").addEventListener("arcgisLayerListReady", (event) => {
    const arcgisLayerList = event.target;
    arcgisLayerList.listItemCreatedFunction = (event) => {
        const { item } = event;
        if (item.layer.type !== "group") {
            item.panel = {
                content: "legend"
            };
        }
    };
});

// Adds items to the top of the page (thumbnail, heading)
document.querySelector("arcgis-map").addEventListener("arcgisViewReadyChange", (event) => {
    const { portalItem } = event.target.map;
    const navigationLogo = document.querySelector("calcite-navigation-logo");
    
    // Add heading, description, and thumbnail
    navigationLogo.heading = "National Register of Historic Places";
    navigationLogo.description = ""
    navigationLogo.thumbnail = "HistoricPlacesThumbnail.png"

    /*
    const layer = event.target.map.layers.find((layer) => layer.id === "");
    layer.popupTemplate.title = "Historic Locations";
    */
});


// Adding content to an empty section created by previous scripts
/*const uiBottomRight = document.querySelector("esri-ui-bottom-right esri-ui-corner")
const paragrph = uiBottomRight[0].appendChild(document.createElement("p"));
paragrph.appendChild(document.createTextNode("Bottom right corner is here"))*/