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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, San Vicente Coatlán',
        nameT: 'Zapotec, San Vicente Coatlán',
        iso3: 'zpt',
        wiki: 'San_Vicente_Zapotec',
        names: 'Coatlán Zapotec,Southern Ejutla Zapotec,Zapoteco de San Vicente Coatlán'
    });
});
//# sourceMappingURL=zpt.js.map