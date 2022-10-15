define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget_1, widget_1) {
    "use strict";
    Widget_1 = (0, tslib_1.__importDefault)(Widget_1);
    widget_1.tsx;
    var CSS = {
        base: "cimis-widget",
    };
    var CimisWidget = /** @class */ (function (_super) {
        (0, tslib_1.__extends)(CimisWidget, _super);
        function CimisWidget(params) {
            var _this = _super.call(this, params) || this;
            //----------------------------------
            //  define class properties here
            //----------------------------------
            _this.Data = [];
            _this.Status = "Tool is idle";
            _this.TodayDT = new Date();
            _this.TodayPretty = _this.TodayDT.getFullYear() + '-' + (_this.TodayDT.getMonth() + 1) + '-' + _this.TodayDT.getDate();
            _this.sd = _this.TodayPretty;
            _this.ed = _this.TodayPretty;
            return _this;
        }
        // private methods
        CimisWidget.prototype._sDateHandler = function (e) {
            var target = e.currentTarget;
            console.log("changed sd to ".concat(target.value));
            this.sd = target.value;
            console.log(this.sd);
        };
        CimisWidget.prototype._eDateHandler = function (e) {
            var target = e.currentTarget;
            console.log("changed ed to ".concat(target.value));
            this.ed = target.value;
        };
        CimisWidget.prototype._renderData = function (arr) {
            if (this.Data.length == 0) {
                return ((0, widget_1.tsx)("h5", null, "No data yet..."));
            }
            else {
                return ((0, widget_1.tsx)("tbody", null, this.Data.map(function (row) {
                    return ((0, widget_1.tsx)("tr", { id: row.Date },
                        (0, widget_1.tsx)("td", null, row.DayAsceEto.Value),
                        (0, widget_1.tsx)("td", null, row.DaySolRadAvg.Value),
                        (0, widget_1.tsx)("td", null, row.Date)));
                })));
            }
        };
        CimisWidget.prototype.render = function () {
            var table = this._renderData(this.Data);
            return ((0, widget_1.tsx)("div", { class: CSS.base },
                (0, widget_1.tsx)("h4", null, " CIMIS Spatial API "),
                (0, widget_1.tsx)("ul", null,
                    (0, widget_1.tsx)("li", null,
                        (0, widget_1.tsx)("p", null,
                            " This simple application retrieves data",
                            (0, widget_1.tsx)("br", null),
                            " for the last week from ",
                            (0, widget_1.tsx)("a", { href: 'https://cimis.water.ca.gov/', target: '_blank' }, "CIMIS"),
                            " ")),
                    (0, widget_1.tsx)("p", null,
                        " Click anywhere on the map",
                        (0, widget_1.tsx)("br", null),
                        "to get readings... ")),
                (0, widget_1.tsx)("table", { class: "table" },
                    (0, widget_1.tsx)("thead", null,
                        (0, widget_1.tsx)("tr", null,
                            (0, widget_1.tsx)("th", { scope: "col" }, "Evapotranspiraton (in) "),
                            (0, widget_1.tsx)("th", { scope: "col" }, "Average Solar Radiation (Ly/day)"),
                            (0, widget_1.tsx)("th", { scope: "col" }, "Date"))),
                    table),
                (0, widget_1.tsx)("h6", null,
                    "Status: ",
                    this.Status)));
        };
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "Data", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "Status", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "TodayDT", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "TodayPretty", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "sd", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "ed", void 0);
        CimisWidget = (0, tslib_1.__decorate)([
            (0, decorators_1.subclass)("esri.widgets.CimisWidget")
        ], CimisWidget);
        return CimisWidget;
    }(Widget_1.default));
    return CimisWidget;
});
//# sourceMappingURL=CimisWidget.js.map