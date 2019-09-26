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
        name: 'Mixtec, Metlatónoc',
        nameT: 'Mixtec, Metlatónoc',
        iso3: 'mxv',
        wiki: 'Silacayoapan_Mixtec',
        names: 'Mixteco de San Rafael',
        hasDetect: true
    });
});
//# sourceMappingURL=mxv.js.map