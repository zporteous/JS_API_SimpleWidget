
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

const apiResult = document.getElementById("apiResult")

const cimiswidget = new CimisWidget({
container: "widgetDiv"
});

var appKey="?appKey=d6eb1025-7d02-47c4-98fb-cdb1512134b2";
var dataItems="&dataItems=day-asce-eto,day-sol-rad-avg"
var reqDates= `&startDate=${prettyDate}&endDate=${prettyDate}`
var uom = "&unitOfMeasure=E"

async function getCimisData(x:String,y:String) {
  var info = `<br> x: ${x}  y: ${y}`;
  var targets=`&targets=lat=${x},lng=${y}`;
  let url=`https://et.water.ca.gov/api/data${appKey}${targets}${reqDates}${uom}${dataItems}`;
  const response = await fetch(url, {
    method:"GET",
    mode:'cors',
    headers: {
      'Content-Type': 'text/plain'
    }
  });
  const string = await response.text();
  return string;
}



// async function getCimisData(x:String,y:String) {
//   var info = `<br> x: ${x}  y: ${y}`;
//   var targets=`&targets=lat=${x},lng=${y}`;
//   const xhr = new XMLHttpRequest();
//   let url=`https://et.water.ca.gov/api/data${appKey}${targets}${reqDates}${uom}${dataItems}`;
//   xhr.open('GET', url);
//   xhr.setRequestHeader('Accept', "*");
//   xhr.send();

//   if (xhr.readyState === xhr.DONE) {
//     let response = JSON.parse(xhr.responseText);
//     return response;
//   }

// }

view.on("click", function (event) {
  let x = event.mapPoint.longitude.toFixed(4);
  let y = event.mapPoint.latitude.toFixed(4);
  let data = getCimisData(x,y);
  console.log(data)

});


view.ui.add(cimiswidget,'bottom-right');
