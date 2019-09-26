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
        name: 'Oroko',
        nameT: 'Oroko',
        iso3: 'bdu',
        wiki: 'Oroko_language',
        names: 'Bakundu,Bakundu-Balue,Oroko-East,Oroko-West'
    });
});
//# sourceMappingURL=bdu.js.map