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
        name: 'Kumhali',
        nameT: 'Kumhali',
        iso3: 'kra',
        wiki: 'Kumhali_language',
        names: 'Kumal,Kumali,Kumbale,Kumhale,Kumkale'
    });
});
//# sourceMappingURL=kra.js.map