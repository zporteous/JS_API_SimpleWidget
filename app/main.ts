
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
  console.log(`fetching x: ${x}, y: ${y}, sd: ${sd}, ed: ${ed}`)
  let url=`http://127.0.0.1:3000/cimis?x=${x}&y=${y}&sd=${sd}&ed=${ed}`;
  cimiswidget.Status = "Fetching...";
  try {
    var res = await fetch(url)
  } catch(e) {
    console.log(e)
  } finally {
    return res.json();
  }
}

view.on("click", async function (event) {
  console.log(cimiswidget.sd)
  let x = event.mapPoint.longitude.toFixed(4);
  let y = event.mapPoint.latitude.toFixed(4);
  let records = await getCimisData(x,y,aWeekAgo, currentDate);
  if (records.length > 0 ) {
    console.log(records[0])
    cimiswidget.Data = records[0].Records;
    cimiswidget.Status = "Completed.";
  } else {
    cimiswidget.Status = "Error Occured or no data";
  } 
});


view.ui.add(cimiswidget,'top-left');

(window as any).cimiswidget = cimiswidget;
