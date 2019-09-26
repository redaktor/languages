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
        name: 'Abron',
        nameT: 'Abron',
        iso3: 'abr',
        wiki: 'Abron_dialect',
        names: 'Bron,Brong,Doma,Gyaman'
    });
});
//# sourceMappingURL=abr.js.map