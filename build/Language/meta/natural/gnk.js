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
        name: 'ǁGana',
        nameT: 'ǁGana',
        iso3: 'gnk',
        wiki: 'G%C7%81ana_language',
        names: 'Dxana,G||ana,G||ana-Khwe,Gxana,Gxanna,Kanakhoe'
    });
});
//# sourceMappingURL=gnk.js.map