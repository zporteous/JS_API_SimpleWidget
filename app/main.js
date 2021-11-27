define(["require", "exports", "tslib", "esri/Map", "esri/views/MapView", "./CimisWidget"], function (require, exports, tslib_1, Map_1, MapView_1, CimisWidget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = (0, tslib_1.__importDefault)(Map_1);
    MapView_1 = (0, tslib_1.__importDefault)(MapView_1);
    CimisWidget_1 = (0, tslib_1.__importDefault)(CimisWidget_1);
    var date = new Date();
    var prettyDate = "".concat(String(date.getFullYear()), "-").concat(String(date.getMonth() + 1), "-").concat(String(date.getDate()));
    var map = new Map_1.default({
        basemap: "streets-vector"
    });
    var view = new MapView_1.default({
        map: map,
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
    var apiResult = document.getElementById("apiResult");
    var cimiswidget = new CimisWidget_1.default({
        container: "widgetDiv"
    });
    var appKey = "?appKey=d6eb1025-7d02-47c4-98fb-cdb1512134b2";
    var dataItems = "&dataItems=day-asce-eto,day-sol-rad-avg";
    var reqDates = "&startDate=".concat(prettyDate, "&endDate=").concat(prettyDate);
    var uom = "&unitOfMeasure=E";
    function getCimisData(x, y) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var info, targets, url, response, string;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = "<br> x: ".concat(x, "  y: ").concat(y);
                        targets = "&targets=lat=".concat(x, ",lng=").concat(y);
                        url = "https://cors.io/?https://et.water.ca.gov/api/data".concat(appKey).concat(targets).concat(reqDates).concat(uom).concat(dataItems);
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                mode: 'cors',
                                headers: {
                                    'Content-Type': 'text/plain'
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        string = _a.sent();
                        return [2 /*return*/, string];
                }
            });
        });
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
        var x = event.mapPoint.longitude.toFixed(4);
        var y = event.mapPoint.latitude.toFixed(4);
        var data = getCimisData(x, y);
        console.log(data);
    });
    view.ui.add(cimiswidget, 'bottom-right');
});
//# sourceMappingURL=main.js.map