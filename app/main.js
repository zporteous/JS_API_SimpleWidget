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
    var apiResult1 = document.getElementById("DayAsceEto");
    var apiResult2 = document.getElementById("DaySolRadAvg");
    var cimiswidget = new CimisWidget_1.default({
        container: "widgetDiv"
    });
    function getCimisData(x, y, date) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var info, url, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = "<br> x: ".concat(x, "  y: ").concat(y);
                        url = "http://localhost:3000/cimis?x=".concat(x, "&y=").concat(y, "&date=").concat(date);
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                }
            });
        });
    }
    view.on("click", function (event) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var x, y, records;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = event.mapPoint.longitude.toFixed(4);
                        y = event.mapPoint.latitude.toFixed(4);
                        cimiswidget.Status = "Fetching...";
                        return [4 /*yield*/, getCimisData(x, y, prettyDate)];
                    case 1:
                        records = _a.sent();
                        cimiswidget.Asce = "".concat(records[0].Records[0].DayAsceEto.Value);
                        cimiswidget.Rad = "".concat(records[0].Records[0].DaySolRadAvg.Value);
                        cimiswidget.Status = "Completed.";
                        return [2 /*return*/];
                }
            });
        });
    });
    view.ui.add(cimiswidget, 'top-left');
});
//# sourceMappingURL=main.js.map