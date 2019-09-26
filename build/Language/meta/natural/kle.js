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
        name: 'Kulung (Nepal)',
        nameT: 'Kulung (Nepal)',
        iso3: 'kle',
        wiki: 'Kulung_language',
        names: 'Kholung,Khulung,Khulunge Rai,Kulu Ring,Kulunge'
    });
});
//# sourceMappingURL=kle.js.map