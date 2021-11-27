define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget_1, widget_1) {
    "use strict";
    Widget_1 = (0, tslib_1.__importDefault)(Widget_1);
    var CSS = {
        base: "esri-cimis-widget",
        emphasis: "esri-cimis-widget--emphasis"
    };
    var CimisWidget = /** @class */ (function (_super) {
        (0, tslib_1.__extends)(CimisWidget, _super);
        function CimisWidget(params) {
            return _super.call(this, params) || this;
        }
        //----------------------------------
        //  define class properties here
        //----------------------------------
        // Public method
        CimisWidget.prototype.render = function () {
            return ((0, widget_1.tsx)("div", { id: "form" },
                (0, widget_1.tsx)("form", null,
                    (0, widget_1.tsx)("div", { class: "form-group" },
                        (0, widget_1.tsx)("label", { for: "exampleInputEmail1" }, "Email address"),
                        (0, widget_1.tsx)("input", { type: "email", class: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Enter email" }),
                        (0, widget_1.tsx)("small", { id: "emailHelp", class: "form-text text-muted" }, "We'll never share your email with anyone else.")),
                    (0, widget_1.tsx)("div", { class: "form-group" },
                        (0, widget_1.tsx)("label", { for: "exampleInputPassword1" }, "Password"),
                        (0, widget_1.tsx)("input", { type: "password", class: "form-control", id: "exampleInputPassword1", placeholder: "Password" })),
                    (0, widget_1.tsx)("div", { class: "form-check" },
                        (0, widget_1.tsx)("input", { type: "checkbox", class: "form-check-input", id: "exampleCheck1" }),
                        (0, widget_1.tsx)("label", { class: "form-check-label", for: "exampleCheck1" }, "Check me out")),
                    (0, widget_1.tsx)("button", { type: "submit", class: "btn btn-primary" }, "Submit"))));
        };
        CimisWidget = (0, tslib_1.__decorate)([
            (0, decorators_1.subclass)("esri.widgets.CimisWidget")
        ], CimisWidget);
        return CimisWidget;
    }(Widget_1.default));
    return CimisWidget;
});
//# sourceMappingURL=CimisWidget.js.map