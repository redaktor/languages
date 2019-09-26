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
        name: 'Bokha',
        nameT: 'Bokha',
        iso3: 'ybk',
        wiki: 'Muji_language',
        names: 'Akapa,Aphu,Black Muji,Bokho,Flowery Phula,Hei Muji,Hua Phula,Lao Phula,Pao Tle'
    });
});
//# sourceMappingURL=ybk.js.map