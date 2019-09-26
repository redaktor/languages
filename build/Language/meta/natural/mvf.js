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
        name: 'Mongolian, Peripheral',
        nameT: 'Mongolian, Peripheral',
        iso3: 'mvf',
        wiki: 'Southern_Mongolian',
        names: 'Inner Mongolian,Menggu,Monggol,Mongol,Southern-Eastern Mongolian'
    });
});
//# sourceMappingURL=mvf.js.map