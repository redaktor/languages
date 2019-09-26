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
        name: 'Tsonga',
        nameT: 'Xitsonga',
        iso1: 'ts',
        iso2: 'tso',
        iso3: 'tso',
        wiki: 'Tsonga_language',
        OT: 'TSG',
        names: 'Gwamba,Shitsonga,Thonga,Tonga,Changana,Xichangana,Shangaan,Shangana,Shangani',
        hasDetect: true
    });
});
//# sourceMappingURL=ts.js.map