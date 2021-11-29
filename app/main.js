define(["require", "exports", "tslib", "esri/Map", "esri/views/MapView", "./CimisWidget"], function (require, exports, tslib_1, Map_1, MapView_1, CimisWidget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = (0, tslib_1.__importDefault)(Map_1);
    MapView_1 = (0, tslib_1.__importDefault)(MapView_1);
    CimisWidget_1 = (0, tslib_1.__importDefault)(CimisWidget_1);
    var date = new Date();
    var weekAgo = new Date();
    weekAgo.setDate(date.getDate() - 6);
    date.setDate(date.getDate() - 1);
    var currentDate = "".concat(String(date.getFullYear()), "-").concat(String(date.getMonth() + 1), "-").concat(String(date.getDate()));
    var aWeekAgo = "".concat(String(weekAgo.getFullYear()), "-").concat(String(weekAgo.getMonth() + 1), "-").concat(String(weekAgo.getDate()));
    var map = new Map_1.default({
        basemap: "streets-vector"
    });
    var view = new MapView_1.default({
        map: map,
        container: "viewDiv",
        center: [-118.244, 34.052],
        zoom: 12
    });
    var cimiswidget = new CimisWidget_1.default({
        container: "widgetDiv"
    });
    function getCimisData(x, y, sd, ed) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var url, res, e_1;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("fetching x: ".concat(x, ", y: ").concat(y, ", sd: ").concat(sd, ", ed: ").concat(ed));
                        url = "http://127.0.0.1:3000/cimis?x=".concat(x, "&y=").concat(y, "&sd=").concat(sd, "&ed=").concat(ed);
                        cimiswidget.Status = "Fetching...";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        res = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 4: return [2 /*return*/, res.json()];
                    case 5: return [2 /*return*/];
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
                        console.log(cimiswidget.sd);
                        x = event.mapPoint.longitude.toFixed(4);
                        y = event.mapPoint.latitude.toFixed(4);
                        return [4 /*yield*/, getCimisData(x, y, aWeekAgo, currentDate)];
                    case 1:
                        records = _a.sent();
                        if (records.length > 0) {
                            console.log(records[0]);
                            cimiswidget.Data = records[0].Records;
                            cimiswidget.Status = "Completed.";
                        }
                        else {
                            cimiswidget.Status = "Error Occured or no data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    });
    view.ui.add(cimiswidget, 'top-left');
    window.cimiswidget = cimiswidget;
});
//# sourceMappingURL=main.js.map