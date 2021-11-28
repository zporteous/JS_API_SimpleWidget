define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget_1, widget_1) {
    "use strict";
    Widget_1 = (0, tslib_1.__importDefault)(Widget_1);
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
            _this.Asce = "No data...";
            _this.Rad = "No data...";
            _this.Status = "Tool is idle";
            _this.TodayDT = new Date();
            _this.TodayPretty = _this.TodayDT.getFullYear() + '-' + (_this.TodayDT.getMonth() + 1) + '-' + _this.TodayDT.getDate();
            return _this;
        }
        // Public method
        CimisWidget.prototype.render = function () {
            return ((0, widget_1.tsx)("div", null,
                (0, widget_1.tsx)("h4", null, " CIMIS Spatial API "),
                (0, widget_1.tsx)("p", null,
                    " Click anywhere on the map",
                    (0, widget_1.tsx)("br", null),
                    "to get readings "),
                (0, widget_1.tsx)("label", { for: "start" },
                    (0, widget_1.tsx)("strong", null, "Choose a day.."),
                    " "),
                (0, widget_1.tsx)("br", null),
                (0, widget_1.tsx)("input", { type: "date", id: "start", name: "trip-start", value: this.TodayPretty, max: this.TodayPretty }),
                (0, widget_1.tsx)("table", { class: "table" },
                    (0, widget_1.tsx)("thead", null,
                        (0, widget_1.tsx)("tr", null,
                            (0, widget_1.tsx)("th", { scope: "col" }, "Evapotranspiraton (in) "),
                            (0, widget_1.tsx)("th", { scope: "col" }, "Average Solar Radiation (Ly/day)"))),
                    (0, widget_1.tsx)("tbody", null,
                        (0, widget_1.tsx)("tr", null,
                            (0, widget_1.tsx)("td", { scope: "row" }, this.Asce),
                            (0, widget_1.tsx)("td", { scope: "row" }, this.Rad)))),
                (0, widget_1.tsx)("h6", null,
                    "Status: ",
                    this.Status)));
        };
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "Asce", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "Rad", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "Status", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "TodayDT", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], CimisWidget.prototype, "render", null);
        CimisWidget = (0, tslib_1.__decorate)([
            (0, decorators_1.subclass)("esri.widgets.CimisWidget")
        ], CimisWidget);
        return CimisWidget;
    }(Widget_1.default));
    return CimisWidget;
});
//# sourceMappingURL=CimisWidget.js.map