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
        name: 'Ibatan',
        nameT: 'Ibatan',
        iso3: 'ivb',
        wiki: 'Ivatan_language',
        names: 'Babuyan,Ibataan,Ivatan'
    });
});
//# sourceMappingURL=ivb.js.map