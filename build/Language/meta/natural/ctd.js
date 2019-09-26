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
        name: 'Chin, Tedim',
        nameT: 'Chin, Tedim',
        iso3: 'ctd',
        wiki: 'Tedim_language',
        OT: 'QIN',
        names: 'Tedim,Tiddim,Hai-Dim,Zomi',
        hasDetect: true
    });
});
//# sourceMappingURL=ctd.js.map