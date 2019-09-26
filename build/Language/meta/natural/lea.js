(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Lega-Shabunda',
        nameT: 'Lega-Shabunda',
        iso3: 'lea',
        wiki: 'Lega_language',
        names: 'Igonzabale,Ileka-Igonzabale,Kilega,Kirega,Lega,Lega-Malinga,Leka-Igonzabale,Rega'
    });
});
//# sourceMappingURL=lea.js.map