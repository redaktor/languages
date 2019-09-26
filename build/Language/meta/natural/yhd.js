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
        name: 'Arabic, Judeo-Iraqi',
        nameT: 'Arabic, Judeo-Iraqi',
        iso3: 'yhd',
        wiki: 'Judeo-Iraqi_Arabic',
        names: 'Arabi,Iraqi Judeo-Arabic,Jewish Iraqi-Baghdadi Arabic,Yahudic'
    });
});
//# sourceMappingURL=yhd.js.map