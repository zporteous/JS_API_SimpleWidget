define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/Widget", "esri/widgets/support/widget"], function (require, exports, tslib_1, decorators_1, Widget_1, widget_1) {
    "use strict";
    Widget_1 = (0, tslib_1.__importDefault)(Widget_1);
    var CSS = {
        base: "esri-hello-world",
        emphasis: "esri-hello-world--emphasis"
    };
    var HelloWorld = /** @class */ (function (_super) {
        (0, tslib_1.__extends)(HelloWorld, _super);
        function HelloWorld(params) {
            var _this = _super.call(this, params) || this;
            //----------------------------------
            //  firstName
            //----------------------------------
            _this.firstName = "John";
            //----------------------------------
            //  lastName
            //----------------------------------
            _this.lastName = "Smith";
            //----------------------------------
            //  emphasized
            //----------------------------------
            _this.emphasized = false;
            //----------------------------------
            //  messages
            //----------------------------------
            _this.messages = null;
            return _this;
        }
        // Public method
        HelloWorld.prototype.render = function () {
            var _a;
            var greeting = this._getGreeting();
            var classes = (_a = {},
                _a[CSS.emphasis] = this.emphasized,
                _a);
            return ((0, widget_1.tsx)("div", { class: this.classes(CSS.base, classes) }, greeting));
        };
        // Private method
        HelloWorld.prototype._getGreeting = function () {
            return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, "!");
        };
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], HelloWorld.prototype, "firstName", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], HelloWorld.prototype, "lastName", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)()
        ], HelloWorld.prototype, "emphasized", void 0);
        (0, tslib_1.__decorate)([
            (0, decorators_1.property)(),
            (0, widget_1.messageBundle)("HelloWorld/assets/t9n/widget")
        ], HelloWorld.prototype, "messages", void 0);
        HelloWorld = (0, tslib_1.__decorate)([
            (0, decorators_1.subclass)("esri.widgets.HelloWorld")
        ], HelloWorld);
        return HelloWorld;
    }(Widget_1.default));
    return HelloWorld;
});
//# sourceMappingURL=HelloWorld.js.map