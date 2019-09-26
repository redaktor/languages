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
        name: 'Maca',
        nameT: 'Maca',
        iso3: 'mca',
        wiki: 'Mak%C3%A1_language',
        names: 'Enimaca,Enimaga,Maca,Macá,Maká,Mak’á,Towolhi'
    });
});
//# sourceMappingURL=mca.js.map