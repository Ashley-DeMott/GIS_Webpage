// NOTE: This file is not used, all JS is within index.html's script tags
// Imports not working, may be due to a rename
import MapView from "@esri/views/MapView";
import Map from "@ersi/Map";
import MapFeature from "esri/layers/FeatureLayer";
import Expand from "@esri/widgets/Expand";
import reactiveUtils from "@esri/core/reactiveUtils";

/* Imports replace "require" function, which is used in CommonJS
require([
    "esri/views/MapView",
    "esri/Map",
    "esri/layers/FeatureLayer",
    "esri/widgets/Expand",
    "esri/core/reactiveUtils"
  ], (MapView, Map, FeatureLayer, Expand, reactiveUtils))*/

// TODO: Update example code to States
let floodLayerView;

// flash flood warnings layer
const layer = new FeatureLayer({
    portalItem: {
    id: "f710465868aa419397142467edf098d4"
    },
    outFields: ["STATE"]
});

const map = new Map({
    basemap: "gray-vector",
    layers: [layer]
});

const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [-98, 40],
    zoom: 4
});

const seasonsNodes = document.querySelectorAll(`.season-item`);
const seasonsElement = document.getElementById("seasons-filter");

// click event handler for seasons choices
seasonsElement.addEventListener("click", filterBySeason);

// User clicked on Winter, Spring, Summer or Fall
// set an attribute filter on flood warnings layer view
// to display the warnings issued in that season
function filterBySeason(event) {
    const selectedSeason = event.target.getAttribute("data-season");
    floodLayerView.filter = {
    where: "Season = '" + selectedSeason + "'"
    };
}

view.whenLayerView(layer).then((layerView) => {
    // flash flood warnings layer loaded
    // get a reference to the flood warnings layerview
    floodLayerView = layerView;

    // set up UI items
    seasonsElement.style.visibility = "visible";
    const seasonsExpand = new Expand({
    view: view,
    content: seasonsElement,
    expandIcon: "filter",
    group: "top-left"
    });
    //clear the filters when user closes the expand widget
    reactiveUtils.when(
    () => !seasonsExpand.expanded,
    () => {
        floodLayerView.filter = null;
    }
    );
    view.ui.add(seasonsExpand, "top-left");
    view.ui.add("titleDiv", "top-right");
});