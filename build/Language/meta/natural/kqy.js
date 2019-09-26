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
        name: 'Koorete',
        nameT: 'Koorete',
        iso3: 'kqy',
        wiki: 'Koore_language',
        OT: 'KRT',
        names: 'Amaarro,Amarro,Badittu,Haro,Harro,Koore,Koyra,Kwera,Nuna'
    });
});
//# sourceMappingURL=kqy.js.map