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
        name: 'Kanum, Sota',
        nameT: 'Kanum, Sota',
        iso3: 'krz',
        wiki: 'Kanum_language',
        names: 'Enkelembu,Kenume,Knwne'
    });
});
//# sourceMappingURL=krz.js.map