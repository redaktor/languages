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
        name: 'Kelo',
        nameT: 'Kelo',
        iso3: 'xel',
        wiki: 'Kelo_language',
        names: 'Kelo-Beni Sheko,Ndu-Faa-Keelo,Tornasi'
    });
});
//# sourceMappingURL=xel.js.map