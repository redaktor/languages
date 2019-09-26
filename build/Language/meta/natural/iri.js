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
        name: 'Irigwe',
        nameT: 'Irigwe',
        iso3: 'iri',
        wiki: 'Rigwe_language',
        names: 'Aregwe,Idafan,Iregwe,Kwal,Kwan,Kwoll,Miango,Miyango,Nkarigwe,Nnerigwe,Nyango,Rigwe'
    });
});
//# sourceMappingURL=iri.js.map