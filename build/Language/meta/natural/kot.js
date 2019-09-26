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
        name: 'Lagwan',
        nameT: 'Lagwan',
        iso3: 'kot',
        wiki: 'Lagwan_language',
        names: 'Kotoko-Logone,Lagouane,Lagwane,Logone'
    });
});
//# sourceMappingURL=kot.js.map