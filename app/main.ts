
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import CimisWidget from "./CimisWidget";

const date = new Date();
const prettyDate =  `${String(date.getFullYear())}-${String(date.getMonth()+1)}-${String(date.getDate())}`;

const map = new EsriMap({
  basemap: "streets-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

const apiResult1 = document.getElementById("DayAsceEto")
const apiResult2 = document.getElementById("DaySolRadAvg")

const cimiswidget = new CimisWidget({
  
container: "widgetDiv"
});

async function getCimisData(x:String,y:String,date:String) {
  var info = `<br> x: ${x}  y: ${y}`;
  let url=`http://localhost:3000/cimis?x=${x}&y=${y}&date=${date}`;
  const res = await fetch(url)
  return res.json();
}


view.on("click", async function (event) {
  let x = event.mapPoint.longitude.toFixed(4);
  let y = event.mapPoint.latitude.toFixed(4);
  cimiswidget.Status = "Fetching...";
  let records = await getCimisData(x,y,prettyDate);
  console.log(records)
  cimiswidget.Asce = `${records[0].Records[0].DayAsceEto.Value}`;
  cimiswidget.Rad = `${records[0].Records[0].DaySolRadAvg.Value}`;
  cimiswidget.Status = "Completed.";
 
});


view.ui.add(cimiswidget,'top-left');
