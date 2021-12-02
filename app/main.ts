
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import CimisWidget from "./CimisWidget";


const date = new Date();
const weekAgo = new Date();

weekAgo.setDate(date.getDate() - 6);
date.setDate(date.getDate() - 1)

const currentDate =  `${String(date.getFullYear())}-${String(date.getMonth()+1)}-${String(date.getDate())}`;
const aWeekAgo = `${String(weekAgo.getFullYear())}-${String(weekAgo.getMonth()+1)}-${String(weekAgo.getDate())}`;

const map = new EsriMap({
  basemap: "streets-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

const cimiswidget = new CimisWidget({
container: "widgetDiv"
});

async function getCimisData(x:String,y:String,sd:String,ed:String) {
  // console.log(`fetching x: ${x}, y: ${y}, sd: ${sd}, ed: ${ed}`)
  let url=`http://127.0.0.1:3000/cimis?x=${x}&y=${y}&sd=${sd}&ed=${ed}`;
  cimiswidget.Status = "Fetching...";
  try {
    var res = await fetch(url)
    return res.json();
  } catch(e) {
    console.log(e)
    cimiswidget.Status = "Error Occured or no data";
    return e.message
  } 
}

view.on("click", async function (event) {
  console.log(cimiswidget.sd)
  let x = event.mapPoint.longitude.toFixed(4);
  let y = event.mapPoint.latitude.toFixed(4);
  
  try {
    let records = await getCimisData(x,y,aWeekAgo, currentDate);
    if (typeof records != "string" && records.length > 0) {
      cimiswidget.Data = records[0].Records;
      cimiswidget.Status = "Completed.";
    } 
  } catch(e) {
    console.log(e.message)
    cimiswidget.Status = "Error Occured, point may be out of CA";
  }
});

view.ui.add(cimiswidget,'top-left');

(window as any).cimiswidget = cimiswidget;
