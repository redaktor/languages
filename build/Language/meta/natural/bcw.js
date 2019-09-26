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
        name: 'Bana',
        nameT: 'Bana',
        iso3: 'bcw',
        wiki: 'Bana_language',
        names: 'Baza,Ka-Bana,Koma,Mizeran,Parole des Bana',
        hasDetect: true
    });
});
//# sourceMappingURL=bcw.js.map